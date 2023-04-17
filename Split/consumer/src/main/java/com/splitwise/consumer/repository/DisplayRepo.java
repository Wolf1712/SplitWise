package com.splitwise.consumer.repository;

import com.splitwise.consumer.model.Display;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DisplayRepo extends JpaRepository<Display,Integer> {

}
