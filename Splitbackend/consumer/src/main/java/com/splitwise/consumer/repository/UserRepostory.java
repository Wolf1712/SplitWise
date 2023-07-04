package com.splitwise.consumer.repository;

import com.splitwise.consumer.model.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepostory extends JpaRepository<User,Integer> {
    @Query("SELECT u FROM user u where u.groupid=?1")
    public List<User> getUserByGroupId(Integer id);


    @Modifying
    @Transactional
    @Query("DELETE FROM user WHERE groupid = :id")
    public void FindByIdDeleteUser(Integer id);
}
