package com.genspark.SpringBootApp.Service;
import com.genspark.SpringBootApp.Entity.Course;
import java.util.List;


public interface CourseService {
    List<Course> getAllCourse();
    Course getCourseById(int courseID);
}
