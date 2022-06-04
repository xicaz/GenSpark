package com.genspark.SpringBootApp.Controller;

import com.genspark.SpringBootApp.Entity.Course;
import com.genspark.SpringBootApp.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MyController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/")
    public String home(){
            return "<HTML><H1>Welcome to SpringBoot App.</H1></HTML>";

    }

    @GetMapping("/courses")
    public List<Course> getCourses()
    {
        return this.courseService.getAllCourse();
    }

    @GetMapping("/courses/{courseID}")
    public Course getCourse(@PathVariable String courseID){
        return this.courseService.getCourseById(Integer.parseInt(courseID));
    }

    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course) {
        return this.courseService.addCourse(course);
    }

    @PutMapping("/courses")
    public Course updateCourse(@RequestBody Course course){
        return this.courseService.updateCourse(updateCourse(course));
    }

//    @DeleteMapping("/courses/{courseID}")
//    public String deleteCourse(@PathVariable String courseID){
//        this.courseService.deleteCourse(Integer.parseInt(courseID));
//        return "Deleted Successfully!";
//    }
}


