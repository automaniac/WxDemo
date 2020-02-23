package com.xriamer.demo.service;

import com.xriamer.demo.entity.Menu;

import java.util.List;

public interface MenuService {
    public List<Menu> findMenu(int cid);
    public List<Menu> findMenuUp(int cid);
    public List<Menu> findMenuDown(int cid);
}
