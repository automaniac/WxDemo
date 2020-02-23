package com.xriamer.demo.dao;

import com.xriamer.demo.entity.User;


public interface UserDao {
    public User findUserByAccount(String u_account);
    public int insertUser(User user);
}
