package com.xriamer.demo.controller;

import com.xriamer.demo.entity.User;
import com.xriamer.demo.service.UserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController("/user")
public class UserController {
    @Resource
    private UserService us;

    @RequestMapping("/login")
    public boolean login(User user) {
        boolean b=us.login(user);
        return b;
    }
    @RequestMapping("/register")
    public boolean register(User user)
    {
        boolean r=us.register(user);
        return r;
    }

}
