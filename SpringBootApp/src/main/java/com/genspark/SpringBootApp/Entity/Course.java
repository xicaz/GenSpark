package com.genspark.SpringBootApp.Entity;

public class Course {

    private int course;
    private String title;
    private String instructor;





    public Course() {

    }

    public Course(int course, String title, String instructor) {
        this.course = course;
        this.title = title;
        this.instructor = instructor;
    }

    public int getCourse() {
        return course;
    }

    public void setCourse(int course) {
        this.course = course;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getInstructor() {
        return instructor;
    }

    public void setInstructor(String instructor) {
        this.instructor = instructor;
    }



}
