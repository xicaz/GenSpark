package com.genspark.SpringBootApp.Controller;

import com.genspark.SpringBootApp.Entity.Course;
import com.genspark.SpringBootApp.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MyController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/")
    public String home(){
            return "<HTML><H1>Welcome SpringBoot App.</H1></HTML>";

    }

    @GetMapping("/courses")
    public List<Course> getCourses()
    {
        return this.courseService.getAllCourse();
    }


}


