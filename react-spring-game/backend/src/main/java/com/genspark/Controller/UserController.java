package com.genspark.Controller;

import com.genspark.Entity.User;
import com.genspark.Request.UserRequest;
import com.genspark.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return this.service.getAllUsers();
    }

    @GetMapping("user/{id}")
    public HashMap<String, Object> getUserByid(@RequestBody UserRequest userRequest, @PathVariable(value = "id") int id) {
        User user = this.service.getUserByID(id);
        if (user == null) return new HashMap<>() {{
            put("msg", "Invalid login credentials");
        }};
        return new HashMap<>() {{
            put("id", user.getId());
            put("username", user.getUsername());
        }};
    }

    @PostMapping("new-user")
    public HashMap<String, String> createUser(@RequestBody UserRequest userRequest) {
        String msg = this.service.addUser(userRequest);
        if (msg.startsWith("Success")) {
            return new HashMap<>() {{
                put("successMsg", msg.split(": ")[1]);
            }};
        }
        return new HashMap<>() {{
            put("errorMsg", msg);
        }};

    }

    @PostMapping("login")
    public HashMap<String, Object> loginUser(@RequestBody UserRequest userRequest) {
        User user = this.service.loginUser(userRequest);
        if (user == null) return new HashMap<>() {{
            put("msg", "Invalid login credentials");
        }};
        return new HashMap<>() {{
            put("id", user.getId());
            put("username", user.getUsername());
        }};
    }

    @PutMapping("edit-password/{id}")
    public String editUserPassword(@RequestBody UserRequest userRequest, @PathVariable(value = "id") int id) {
        System.out.println(id);
        return this.service.editUserPassword(userRequest, id);
    }

    @PutMapping("edit-username/{id}")
    public String editUsername(@RequestBody UserRequest userRequest, @PathVariable(value = "id") int id) {
        return this.service.editUsername(userRequest, id);
    }

    @DeleteMapping("/delete-user/{id}")
    public String deleteUser(@RequestBody UserRequest userRequest, @PathVariable(value = "id") int id){
        System.out.println(id);
        return this.service.deleteUser(userRequest, id);
    }
}
