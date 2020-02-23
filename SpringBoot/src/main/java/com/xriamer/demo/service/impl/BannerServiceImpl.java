package com.xriamer.demo.service.impl;

import com.xriamer.demo.dao.BannerDao;
import com.xriamer.demo.entity.Banner;
import com.xriamer.demo.service.BannerService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
@Service
public class BannerServiceImpl implements BannerService {

    @Resource
    private BannerDao bd;

    @Override
    public List<Banner> findBanner() {
        return bd.findBannerList();
    }


}
