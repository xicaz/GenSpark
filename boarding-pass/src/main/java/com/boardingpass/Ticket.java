package com.boardingpass;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class Ticket {
    private LocalTime arrivalTime;
    private String name;
    private String email;
    private String phoneNumber;
    private String totalMiles;
    private String origin;
    private String destination;
    private String gender;
    private String age;
    private LocalDate date;
    private LocalTime departureTime;
    private String boardingPass;
    private String estimatedTimeArrival;




//    public Ticket(String text, String text1, String text2, String text3, String text4, String text5) {
//    }

    public Ticket(String name, String email, String phoneNumber, String origin, String destination, String totalMiles, String gender, String age, LocalDate date, LocalTime departureTime) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.destination = destination;
        this.gender = gender;
        this.age = age;
        this.date = date;
        this.origin = origin;
        this.departureTime = departureTime;
        this.totalMiles = totalMiles;

    }


    public Ticket(String name, String email, String phoneNumber, String origin, String destination, String totalMiles, String gender, String age, String date, String departureTime ) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.destination = destination;
        this.gender = gender;
        this.age = age;
        this.origin = origin;
        this.totalMiles = totalMiles;
        this.setDate(date);
        this.setDepartureTime(departureTime);
    }



    public String getBoardingPass() {
        return boardingPass;
    }

    public void setBoardingPass(String boardingPass) {
        this.boardingPass = boardingPass;
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

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getTotalMiles() {
        return totalMiles;
    }

    public void setTotalMiles(String totalMiles) {
        this.totalMiles = totalMiles;
    }

    public LocalTime getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(LocalTime arrivalTime) {
        this.arrivalTime = arrivalTime;
    }




    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setDate(String date){
        this.date = LocalDate.parse(date, DateTimeFormatter.ofPattern("MM/dd/yyyy"));
    }

    public LocalTime getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(LocalTime departureTime) {
        this.departureTime = departureTime;
    }
    public void setDepartureTime(String departureTime) {
        this.departureTime = LocalTime.parse(departureTime, DateTimeFormatter.ISO_LOCAL_TIME);
    }



}
