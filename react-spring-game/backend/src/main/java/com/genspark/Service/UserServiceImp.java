package com.genspark.Service;


import com.genspark.Dao.DislikedGamesDao;
import com.genspark.Dao.LikedGamesDao;
import com.genspark.Dao.UserDao;
import com.genspark.Entity.DislikedGame;
import com.genspark.Entity.LikedGame;
import com.genspark.Entity.User;
import com.genspark.Request.UserRequest;
import org.jasypt.util.password.BasicPasswordEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityExistsException;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserDao userDao;
    @Autowired
    private LikedGamesDao likedGamesDao;
    @Autowired
    DislikedGamesDao dislikedGamesDao;

    @Override
    public List<User> getAllUsers() {
        return this.userDao.findAll();
    }

    @Override
    public User getUserByID(int id) {
        User user = this.userDao.findById(id).orElse(null);
        return user;
    }

    @Override
    public String addUser(UserRequest userRequest) {
        if (userRequest.getUsername().trim().isEmpty())
            return "Please enter a username.";
        if (userRequest.getEmail().trim().isEmpty())
            return "Please enter an email.";
        if (userRequest.getConfirmEmail().trim().isEmpty())
            return "Please confirm email.";
        if (userRequest.getPassword().trim().isEmpty())
            return "Please enter a password.";
        if (userRequest.getConfirmPassword().trim().isEmpty())
            return "Please confirm password.";
        if (!userRequest.getPassword().equals(userRequest.getConfirmPassword()))
            return "Passwords do not match.";
        if (!userRequest.getEmail().equals(userRequest.getConfirmEmail()))
            return "Email addresses do not match.";
        if (!userRequest.getEmail().matches("^[\\p{L}0-9!#$%&'*+\\/=?^_`{|}~-][\\p{L}0-9.!#$%&'*+\\/=?^_`{|}~-]{0,63}@[\\p{L}0-9-]+(?:\\.[\\p{L}0-9-]{2,7})*$"))
            return "Email is not valid";
        if (!userRequest.getPassword().matches("^(?=.*?[#?!@$%^&*-])(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$"))
            return "Password must be at least 8 characters long and contain at least one English letter, at least one digit, and at least one of the following special characters: #?!@$%^&*-.";
        for (User u : userDao.findAll()) {
            if (u.getEmail().equals(userRequest.getEmail()))
                return "That email address is not unique.";
            if (u.getUsername().equals(userRequest.getUsername()))
                return "That username is not unique.";
        }
        User newUser = new User();
        newUser.setUsername(userRequest.getUsername());
        newUser.setEmail(userRequest.getEmail());
        BasicPasswordEncryptor passwordEncryptor = new BasicPasswordEncryptor();
        newUser.setPassWord(passwordEncryptor.encryptPassword(userRequest.getPassword())); // need to encrypt the password
        userDao.save(newUser);
        return "Success: New user successfully created.";
    }

    @Override
    public User loginUser(UserRequest userRequest) {
        BasicPasswordEncryptor passwordEncryptor = new BasicPasswordEncryptor();
        for (User u : userDao.findAll()) {
            if (u.getEmail().equals(userRequest.getEmail()) && passwordEncryptor.checkPassword(userRequest.getPassword(), u.getPassWord())) {
                return u;
            }
        }
        return null;
    }

    @Override
    public String editUserPassword(UserRequest userRequest, int id) {
        // to edit a password, the user must provide their current password
        User user = userDao.findById(id).orElse(null);
        if (user == null) return "No user with that id exists.";
        BasicPasswordEncryptor passwordEncryptor = new BasicPasswordEncryptor();
        if (!passwordEncryptor.checkPassword(userRequest.getPassword(), user.getPassWord()))
            return "Incorrect password.";
        if (passwordEncryptor.checkPassword(userRequest.getNewPassword(), user.getPassWord()))
            return "That's already your password.";
        if (!userRequest.getNewPassword().matches("^(?=.*?[#?!@$%^&*-])(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$"))
            return " New password must be at least 8 characters long and contain at least one English letter, at least one digit, and at least one of the following special characters: #?!@$%^&*-.";
        user.setPassWord(passwordEncryptor.encryptPassword(userRequest.getNewPassword()));
        userDao.save(user);
        return "Password changed successfully.";
    }

    @Override
    public String editUsername(UserRequest userRequest, int id) {
        // try to find user whose username is being updated
        User user = userDao.findById(id).orElse(null);
        if (user == null) return "No user with that id exists.";
        if(userRequest.getNewUsername().trim().equals("") || userRequest.getNewUsername().trim() == null)
            return "Please enter a new username.";
        // go through users in db, looking for users who
        for (User u : userDao.findAll()) {
            if (u.getUsername().equals(userRequest.getNewUsername()) && u.getId() == id)
                return "That's already your username.";
            if(u.getUsername().equals(userRequest.getNewUsername()) && u.getId() != id)
                return "That username is already taken.";
        }
        user.setUsername(userRequest.getNewUsername());
        userDao.save(user);
        return "Username changed successfully.";
    }

    @Override
    public String deleteUser(UserRequest userRequest, int id) {
        User user = userDao.findById(id).orElse(null);
        if (user == null) return "No user with that id exists.";
        BasicPasswordEncryptor passwordEncryptor = new BasicPasswordEncryptor();
        if (!passwordEncryptor.checkPassword(userRequest.getPassword(), user.getPassWord()))
            return "Incorrect password.";
        // passwords match, delete user
        for(LikedGame lg: likedGamesDao.findAll()) if(lg.getUserId() == id) likedGamesDao.delete(lg);
        for(DislikedGame dg: dislikedGamesDao.findAll()) if(dg.getUserId() == id) dislikedGamesDao.delete(dg);
        this.userDao.deleteById(id);
        return "User removed from the database.";
    }
}
