package com.boardingpass;

import java.time.LocalDate;
import java.time.LocalTime;

public class Ticket {
    private String name;
    private String email;
    private String phoneNumber;
    private String destination;
    private Character gender;
    private Byte age;
    private LocalDate date;
    private LocalTime departureTime;


    public Ticket(String name, String email, String phoneNumber, String destination, Character gender, Byte age, LocalDate date, LocalTime departureTime) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.destination = destination;
        this.gender = gender;
        this.age = age;
        this.date = date;
        this.departureTime = departureTime;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public Character getGender() {
        return gender;
    }

    public void setGender(Character gender) {
        this.gender = gender;
    }

    public Byte getAge() {
        return age;
    }

    public void setAge(Byte age) {
        this.age = age;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(LocalTime departureTime) {
        this.departureTime = departureTime;
    }
}
