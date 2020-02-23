package com.xriamer.demo.controller;

import com.xriamer.demo.entity.Menu;
import com.xriamer.demo.service.MenuService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class MenuController {

    @Resource
    private MenuService ms;

    @RequestMapping("/menu")
    public List<Menu> findMenu(int cid){
        return ms.findMenu(cid);
    }

    @RequestMapping("/priceup")
    public List<Menu> findMenuUp(int cid){
        return ms.findMenuUp(cid);
    }@RequestMapping("/pricedown")
    public List<Menu> findMenuDown(int cid){
        return ms.findMenuDown(cid);
    }


}
