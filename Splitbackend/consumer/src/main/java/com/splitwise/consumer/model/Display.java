package com.splitwise.consumer.model;

import jakarta.persistence.*;

@Table(name = "display")
@Entity(name = "display")
public class Display {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int groupid;
    private String name;

    public int getGroupid() {
        return groupid;
    }

    public void setGroupid(int groupid) {
        this.groupid = groupid;
    }

    private String Description;
public Display(){

}
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }
}
