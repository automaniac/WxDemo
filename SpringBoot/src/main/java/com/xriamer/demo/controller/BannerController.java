package com.xriamer.demo.controller;

import com.xriamer.demo.entity.Banner;
import com.xriamer.demo.service.BannerService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class BannerController {

    @Resource
    private BannerService bs;

    @RequestMapping("/banner")
    public List<Banner> findBanner(){
       return bs.findBanner();
    }
}
