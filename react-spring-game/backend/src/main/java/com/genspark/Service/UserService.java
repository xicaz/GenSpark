package com.genspark.Service;

import com.genspark.Entity.User;
import com.genspark.Request.UserRequest;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();

    User getUserByID(int id);

    String addUser(UserRequest userRequest);

    User loginUser(UserRequest userRequest);

    String editUserPassword(UserRequest userRequest, int id);

    String editUsername(UserRequest userRequest, int id);

    String deleteUser(UserRequest userRequest, int id);



}
