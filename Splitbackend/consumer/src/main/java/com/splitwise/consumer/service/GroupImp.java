package com.splitwise.consumer.service;

import com.splitwise.consumer.model.Group;
import com.splitwise.consumer.repository.GroupRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GroupImp implements GroupService{

    @Autowired
    public GroupRepo groupRepo;

@Override
    public Group SavesGroup(Group group){

        return groupRepo.save(group);
    }

    @Override
public List<Group>GetGroups(){
    return groupRepo.findAll();
    }

    @Override
    public  Group UpdateGroup(Group group){
    return groupRepo.save(group);
    }

   @Override
    public Group FindGroup(int id){

    return groupRepo.findById(id).orElse(null);
    }

    @Override
    public void FindByIdDeleteGroup(Integer id) {
        groupRepo.deleteById(id);
    }

}
