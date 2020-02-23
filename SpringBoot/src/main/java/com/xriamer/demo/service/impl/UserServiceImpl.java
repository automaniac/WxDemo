package com.xriamer.demo.service.impl;

import com.xriamer.demo.dao.UserDao;
import com.xriamer.demo.entity.User;
import com.xriamer.demo.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserServiceImpl implements UserService {
    @Resource
    private UserDao ud;

    @Override
    public boolean login(User u) {
        User user = ud.findUserByAccount(u.getU_account());
        if (user != null) {
            if (u.getU_password().equals(user.getU_password())) {
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean register(User u) {
        User user = ud.findUserByAccount(u.getU_account());
        if (user == null) {
            int i = ud.insertUser(u);
            if (i > 0) {
                return true;
            }

        }
        return false;
    }
}
