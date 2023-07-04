package com.splitwise.consumer.model;

import jakarta.persistence.*;

@Table(name = "user")
@Entity(name = "user")
public class User {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    private String name;
//     @ManyToOne
    private int groupid;

    public int getGroupid() {
        return groupid;
    }

    public void setGroupid(int groupid) {
        this.groupid = groupid;
    }

//    public Group getGroup() {
//        return group;
//    }
//
//    public void setGroup(Group group) {
//        this.group = group;
//    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSpent() {
        return spent;
    }

    public void setSpent(int spent) {
        this.spent = spent;
    }

    private int spent;
    public User() {
    }




    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


}
