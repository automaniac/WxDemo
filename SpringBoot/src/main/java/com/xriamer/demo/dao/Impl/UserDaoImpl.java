package com.xriamer.demo.dao.Impl;

import com.xriamer.demo.dao.UserDao;
import com.xriamer.demo.entity.User;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import javax.sql.DataSource;
import java.sql.SQLException;

@Repository
public class UserDaoImpl implements UserDao {

    @Resource
    private DataSource druidDataSource;

    @Override
    public User findUserByAccount(String u_account) {
        QueryRunner qr = new QueryRunner(druidDataSource);
        String sql = "select * from tb_user where u_account=?";
        try {
            User u = qr.query(sql, new BeanHandler<>(User.class), u_account);
            return u;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public int insertUser(User user) {
        QueryRunner qr=new QueryRunner(druidDataSource);
        String sql="insert into tb_user values(?,?,?,?,?)";
        System.out.println(user);
            try {
            Integer i=qr.update(sql,null,user.getU_account(),
            user.getU_password(),user.getU_name(),null);
            return i;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return -1;
    }

}
