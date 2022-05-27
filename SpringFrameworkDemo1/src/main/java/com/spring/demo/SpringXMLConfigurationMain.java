package com.spring.demo;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

public class SpringXMLConfigurationMain {

//    private int id;
//    private String name;
//    private List<Phone> ph;
//    private Address add;

    public static void main( String[] args )
    {
        ClassPathXmlApplicationContext ac = new ClassPathXmlApplicationContext("ApplicationContext.xml");

        Student studentBean = (Student) ac.getBean("student");

        String name = studentBean.getName();
        System.out.println("Student name: "+name);

        int id = studentBean.getId();
        System.out.println("Student id: "+id);

        List <Phone> phone = studentBean.getPh();
        System.out.println("Student phone: "+phone);

        Address address = studentBean.getAdd();
        System.out.println("Student address: "+address);


        ac.close();
    }

}
