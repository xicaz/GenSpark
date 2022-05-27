package com.spring.demo;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class AppConfig {


    @Bean
    public Student student(){
        return new Student(student().getId(), student().getName(), student().getPh(), student().getAdd());
    }

    @Bean
    public Phone phone(){
        return new Phone(phone().getMob());
    }

    @Bean
    public Address address(){
        return new Address(address().getCity(), address().getState(), address().getCountry(), address().getZipcode());
    }

}

