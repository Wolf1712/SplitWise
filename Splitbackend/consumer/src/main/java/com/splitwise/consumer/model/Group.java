package com.splitwise.consumer.model;

import jakarta.persistence.*;

import java.util.List;

@Entity(name = "groups")
@Table(name = "groups")
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    private String name;

//    @OneToMany(mappedBy = "group")
//    private List<User>users;


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
    public Group(){

    }

//    public Group(int id, String name, List<User> users) {
//        this.id = id;
//        this.name = name;
//        this.users = users;
//    }

//    public List<User> getUsers() {
//        return users;
//    }
//
//    public void setUsers(List<User> users) {
//        this.users = users;
//    }
}
