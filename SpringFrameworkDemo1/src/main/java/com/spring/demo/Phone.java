package com.spring.demo;

import org.springframework.beans.factory.annotation.Autowired;

public class Phone {
    @Autowired
    private String mob;


    public Phone(String mob) {
        this.mob = this.mob;
    }


    public String getMob() {
        return mob;
    }

    public void setMob(String mob) {
        this.mob = mob;
    }




}
