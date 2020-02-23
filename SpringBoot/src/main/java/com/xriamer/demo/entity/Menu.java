package com.xriamer.demo.entity;

public class Menu {
    private String m_title;
    private int num;
    private int cid;
    private double price;
    private String img_url;

    public Menu(String m_title, int num, int cid, double price, String img_url) {
        this.m_title = m_title;
        this.num = num;
        this.cid = cid;
        this.price = price;
        this.img_url = img_url;
    }

    public Menu() {
    }

    public String getM_title() {
        return m_title;
    }

    public void setM_title(String m_title) {
        this.m_title = m_title;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }

    @Override
    public String toString() {
        return "Menu{" +
                "m_title='" + m_title + '\'' +
                ", num=" + num +
                ", cid=" + cid +
                ", price=" + price +
                ", img_url='" + img_url + '\'' +
                '}';
    }
}
