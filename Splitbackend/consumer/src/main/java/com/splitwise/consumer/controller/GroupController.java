package com.splitwise.consumer.controller;

import com.splitwise.consumer.model.Group;
import com.splitwise.consumer.model.User;
import com.splitwise.consumer.repository.GroupRepo;
import com.splitwise.consumer.repository.UserRepostory;
import com.splitwise.consumer.service.DisplayService;
import com.splitwise.consumer.service.GroupService;
import com.splitwise.consumer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/group")
@CrossOrigin(origins = "*")
public class GroupController {
    @Autowired
    public UserService userService;


    @Autowired
    public GroupService groupService;

    @Autowired
    public DisplayService displayService;
    @GetMapping("/{id}/users")
    public List<User> getUserByGroupId(@PathVariable("id") Integer id){
        return userService.getUserByGroupId(id);
    }

    @PutMapping("/update")
    public String groupupdate(@RequestBody Group group){

        groupService.UpdateGroup(group);

return "updated successfully";
    }

    @GetMapping("/{id}")
    public Group getgroupbyId(@PathVariable int id){
        return groupService.FindGroup(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deletegroupbyId(@PathVariable int id){
        groupService.FindByIdDeleteGroup(id);
        userService.FindByIdDeleteUser(id);
        displayService.FindByIdDeleteDisplay(id);
return "Group Deleted Succesfully";
    }


}
