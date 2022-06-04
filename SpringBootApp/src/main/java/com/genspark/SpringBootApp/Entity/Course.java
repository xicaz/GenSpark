package com.genspark.SpringBootApp.Entity;
import javax.persistence.*;


@Entity
@Table(name="tbl_courses")
public class Course {

    @Id
    @Column(name="c_id")
    @GeneratedValue(strategy = GenerationType.AUTO)

    private int course;

    private String title;
    private String instructor;



    public Course() {

    }

    public Course( String title, String instructor) {
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
