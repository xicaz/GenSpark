package com.genspark.Entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    //Fields / database inputs
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String passWord;

//    private List<VideoGame> favoriteGames;


    //default and field constructors

    public User() {
    }


    public User(String username, String passWord, String email) {
        this.username = username;
        this.passWord = passWord;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", passWord='" + passWord + '\'' +
                '}';
    }
}
