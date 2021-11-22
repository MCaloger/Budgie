package com.caloger.Budgie.Controllers;

import com.caloger.Budgie.Models.Transaction;
import com.caloger.Budgie.Repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class ApplicationController {

    @GetMapping("/app/**")
    public ModelAndView getApplicationUI() {
        ModelAndView applicationView = new ModelAndView("index.html");
        return applicationView;
    }
}
