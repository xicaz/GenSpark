package com.genspark.SpringBootApp.Service;
import com.genspark.SpringBootApp.Entity.Course;
import java.util.List;


public interface CourseService {
    List<Course> getAllCourse();
    Course getCourseById(int courseID);
    Course addCourse(Course course);
    Course updateCourse(Course course);
//    String deleteCourse(int courseID);
}
