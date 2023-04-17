package com.splitwise.consumer.service;

import com.splitwise.consumer.model.Display;

import java.util.List;

public interface DisplayService {


    public Display SaveDisplay(Display display);

    public List<Display> GetDisplay();
}
