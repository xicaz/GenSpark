package com.genspark.SpringBootApp.Service;

import com.genspark.SpringBootApp.Entity.Course;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    List<Course> list;

    public CourseServiceImpl() {
        list = new ArrayList<>();
        list.add(new Course(101, "Philosophy", "Singh"));
        list.add(new Course(102, "Physics", "Vivanco"));
        list.add(new Course(103, "Parametric Design", "Marcus"));
    }

    @Override
    public List<Course> getAllCourse() {
        return list;
    }

    @Override
    public Course getCourseById(int courseID) {

        Course c = null;

        for (Course course:list)
        {
            if(course.getCourse() == courseID){
                c = course;
                break;
            }
        }

        return null;
    }
}
