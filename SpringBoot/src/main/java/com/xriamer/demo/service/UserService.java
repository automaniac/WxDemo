package com.xriamer.demo.service;

import com.xriamer.demo.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    boolean login(User u);
    boolean register(User u);
}


