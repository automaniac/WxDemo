package com.xriamer.demo.entity;

public class User {
    private String u_account;
    private String u_password;
    private String u_name;
    private String u_head;


    public User(String u_account, String u_password, String u_name, String u_head) {
        this.u_account = u_account;
        this.u_password = u_password;
        this.u_name = u_name;
        this.u_head = u_head;
    }

    @Override
    public String toString() {
        return "User{" +
                "u_account='" + u_account + '\'' +
                ", u_password='" + u_password + '\'' +
                ", u_name='" + u_name + '\'' +
                ", u_head='" + u_head + '\'' +
                '}';
    }

    public String getU_account() {
        return u_account;
    }

    public void setU_account(String u_account) {
        this.u_account = u_account;
    }

    public String getU_password() {
        return u_password;
    }

    public void setU_password(String u_password) {
        this.u_password = u_password;
    }

    public String getU_name() {
        return u_name;
    }

    public void setU_name(String u_name) {
        this.u_name = u_name;
    }

    public String getU_head() {
        return u_head;
    }

    public void setU_head(String u_head) {
        this.u_head = u_head;
    }

    public User()
    {

    }

}
