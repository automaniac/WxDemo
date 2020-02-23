package com.xriamer.demo.service.impl;

import com.xriamer.demo.dao.MenuDao;
import com.xriamer.demo.entity.Menu;
import com.xriamer.demo.service.MenuService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
@Service
public class MenuServiceImpl implements MenuService {
    @Resource
    private MenuDao md;

    @Override
    public List<Menu> findMenu(int cid) {
        return md.findMenuList(cid);
    }

    @Override
    public List<Menu> findMenuUp(int cid) {
        return md.findMenuListUp(cid);
    }

    @Override
    public List<Menu> findMenuDown(int cid) {
        return md.findMenuListDown(cid);
    }

}
