package com.genspark.SpringBootApp.Dao;

import com.genspark.SpringBootApp.Entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseDao extends JpaRepository<Course, Integer> {
//    Integer deleteById(Integer valueOf);

}
