package com.splitwise.consumer.service;

import com.splitwise.consumer.model.Display;
import com.splitwise.consumer.model.User;

import java.util.List;

public interface DisplayService {


    public Display SaveDisplay(Display display);

    public List<Display> GetDisplay();

    public List<Display>getDescByGroupId(Integer id);

    public void FindByIdDeleteDisplay(Integer id);


}
