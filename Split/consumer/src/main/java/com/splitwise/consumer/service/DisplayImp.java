package com.splitwise.consumer.service;

import com.splitwise.consumer.model.Display;
import com.splitwise.consumer.repository.DisplayRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DisplayImp implements DisplayService{

    @Autowired
    public DisplayRepo displayRepo;

    @Override
    public Display SaveDisplay(Display display) {
        return displayRepo.save(display);
    }

    @Override
    public List<Display> GetDisplay() {
        return displayRepo.findAll();
    }
}
