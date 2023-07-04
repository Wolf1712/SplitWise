package com.splitwise.consumer.service;


import com.splitwise.consumer.model.User;

import com.splitwise.consumer.repository.UserRepostory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImp implements UserService{
@Autowired
    public UserRepostory userRepostory;



    @Override
    public List<User> GetUser() {
        return (List<User>) userRepostory.findAll();
    }

    @Override
    public User SaveUser(User user) {
        return userRepostory.save(user);
    }

    @Override
    public User UpdateUser(User user) {
         return userRepostory.save(user);
    }
@Override
    public List<User>getUserByGroupId(Integer id){
        return userRepostory.getUserByGroupId(id);
    }


    public User FindUser(int id){
        return userRepostory.findById(id).orElse(null);
    }

    @Override
    public void FindByIdDeleteUser(Integer id){
        userRepostory.FindByIdDeleteUser(id);
    }
}
