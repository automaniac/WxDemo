package com.xriamer.demo.dao.Impl;

import com.xriamer.demo.dao.MenuDao;
import com.xriamer.demo.entity.Menu;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import javax.sql.DataSource;
import java.sql.SQLException;
import java.util.List;
@Repository
public class MenuDaoImpl implements MenuDao {
    @Resource
    private DataSource druidDatasource;
    @Override
    public List<Menu> findMenuList(int cid) {
        QueryRunner qr=new QueryRunner(druidDatasource);
        String sql="select * from menu where cid=?";
        try {
            List<Menu> list=qr.query(sql,new BeanListHandler<Menu>(Menu.class),cid);
            return list;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Menu> findMenuListUp(int cid) {
        QueryRunner qr=new QueryRunner(druidDatasource);
        String sql="select * from menu where cid=? order by price asc";
        try {
            List<Menu> list=qr.query(sql,new BeanListHandler<Menu>(Menu.class),cid);
            return list;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Menu> findMenuListDown(int cid) {
        QueryRunner qr=new QueryRunner(druidDatasource);
        String sql="select * from menu where cid=? order by price desc";
        try {
            List<Menu> list=qr.query(sql,new BeanListHandler<Menu>(Menu.class),cid);
            return list;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
}
