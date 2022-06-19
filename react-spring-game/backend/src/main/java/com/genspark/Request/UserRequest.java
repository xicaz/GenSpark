package com.genspark.Request;

public class UserRequest {

    private String username;
    private String newUsername;
    private String email;
    private String confirmEmail;
    private String password;
    private String confirmPassword;
    private String newPassword;

    public UserRequest() {}

    public UserRequest(String username, String newUsername, String email, String confirmEmail, String password, String confirmPassword, String newPassword) {
        this.username = username;
        this.newUsername = newUsername;
        this.email = email;
        this.confirmEmail = confirmEmail;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.newPassword = newPassword;
    }

    public String getUsername() {
        return username;
    }

    public String getNewUsername() { return newUsername;}

    public String getEmail() {
        return email;
    }

    public String getConfirmEmail() { return confirmEmail; }

    public String getPassword() {
        return password;
    }

    public String getConfirmPassword() { return confirmPassword; }

    public String getNewPassword() { return newPassword; }
}
