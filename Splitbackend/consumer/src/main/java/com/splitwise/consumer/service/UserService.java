package com.splitwise.consumer.service;



import com.splitwise.consumer.model.User;

import java.util.List;


public interface UserService {
    public User SaveUser(User user);
    public List<User> GetUser();

    public User UpdateUser(User user);

    public List<User>getUserByGroupId(Integer id);

    public User FindUser(int id);

    public void FindByIdDeleteUser(Integer id);

}
