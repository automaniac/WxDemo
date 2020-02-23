package com.xriamer.demo.entity;

public class Banner {
    private int ban_id;
    private String ban_url;

    public Banner(int ban_id, String ban_url) {
        this.ban_id = ban_id;
        this.ban_url = ban_url;
    }

    public Banner() {
    }

    @Override
    public String toString() {
        return "Banner{" +
                "ban_id=" + ban_id +
                ", ban_url='" + ban_url + '\'' +
                '}';
    }

    public int getBan_id() {
        return ban_id;
    }

    public void setBan_id(int ban_id) {
        this.ban_id = ban_id;
    }

    public String getBan_url() {
        return ban_url;
    }

    public void setBan_url(String ban_url) {
        this.ban_url = ban_url;
    }
}
