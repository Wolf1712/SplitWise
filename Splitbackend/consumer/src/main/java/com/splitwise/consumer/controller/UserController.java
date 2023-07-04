package com.splitwise.consumer.controller;

import com.splitwise.consumer.model.Display;
import com.splitwise.consumer.model.Group;
import com.splitwise.consumer.model.User;
import com.splitwise.consumer.service.DisplayService;
import com.splitwise.consumer.service.GroupService;
import com.splitwise.consumer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")

public class UserController {

    @Autowired
    public UserService userService;
    @Autowired
    public DisplayService displayService;
    @Autowired
    public GroupService groupService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.SaveUser(user);
        return "New User insertion";
    }

    @GetMapping("/getusers")
    public List <User>GetAllUsers(){
        return userService.GetUser();
    }

    @PutMapping("/update")
    public String update(@RequestBody User user){

        userService.SaveUser(user);
        return "User Updated";
    }
    @PostMapping("/display")
    public String addd(@RequestBody Display display){
        displayService.SaveDisplay(display);
        return "Description Added Succesfully";
    }

    @GetMapping("/getdisplay")
   public List<Display> getalldisplay(){
        return displayService.GetDisplay();
    }

    @PostMapping("/addgroups")
    public String groupadd(@RequestBody Group group){
        groupService.SavesGroup(group);
        return "Group Added Succesfully";
    }

    @GetMapping("/getgroups")
    public List<Group>getallgroups(){
        return groupService.GetGroups();
    }
    @GetMapping("/{id}/display")
    public List<Display> getDescByGroupId(@PathVariable("id") Integer id){
        return displayService.getDescByGroupId(id);
    }

//    @GetMapping("/{id}")
//    public Group getuserbyId(@PathVariable int id){
//        return displayService.FindUser(id);
//    }

}
