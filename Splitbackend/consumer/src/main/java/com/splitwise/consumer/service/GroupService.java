package com.splitwise.consumer.service;

import com.splitwise.consumer.model.Group;

import java.util.List;
import java.util.Optional;

public interface GroupService {
    public Group SavesGroup(Group group);

    public List<Group>GetGroups();

    public Group UpdateGroup(Group group);

    public Group FindGroup(int id);

    public void FindByIdDeleteGroup(Integer id);
}
