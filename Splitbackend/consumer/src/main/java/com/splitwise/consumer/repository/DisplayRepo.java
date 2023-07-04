package com.splitwise.consumer.repository;

import com.splitwise.consumer.model.Display;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DisplayRepo extends JpaRepository<Display,Integer> {

    @Query("SELECT d FROM display d where d.groupid= :id")
    public List<Display> getDispByGroupId(@Param("id") Integer id);

    @Modifying
    @Transactional
    @Query("DELETE FROM display WHERE groupid = :id")
   public void FindByIdDeleteDisplay(@Param("id") Integer id);
}
