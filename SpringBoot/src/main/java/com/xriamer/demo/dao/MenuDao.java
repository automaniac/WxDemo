package com.xriamer.demo.dao;

import com.xriamer.demo.entity.Menu;

import java.util.List;

public interface MenuDao {
    public List<Menu> findMenuList(int cid);
    public List<Menu> findMenuListUp(int cid);
    public List<Menu> findMenuListDown(int cid);

}
