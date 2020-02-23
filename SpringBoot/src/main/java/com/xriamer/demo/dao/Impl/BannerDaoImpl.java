package com.xriamer.demo.dao.Impl;

import com.xriamer.demo.dao.BannerDao;
import com.xriamer.demo.entity.Banner;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import javax.sql.DataSource;
import java.sql.SQLException;
import java.util.List;

@Repository
public class BannerDaoImpl implements BannerDao {
    @Resource
    private DataSource druidDataSource;

    @Override
    public List<Banner> findBannerList() {
        QueryRunner qr = new QueryRunner(druidDataSource);
        String sql = "select * from tb_banner";
        try {
            List<Banner> list = qr.query(sql, new BeanListHandler<Banner>(Banner.class));
            return list;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }
}
