package com.caloger.Budgie.Controllers;

import com.caloger.Budgie.Models.Transaction;
import com.caloger.Budgie.Repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class ApplicationController {

    @RequestMapping("/")
    public String test() {
        return "index.html";
    }

    @RequestMapping(value = {"/income/"})
    public String income() {
        return "/";
    }

    @RequestMapping(value = {"/expenses/"})
    public String expenses() {
        return "/";
    }

    @RequestMapping(value = {"/categories/"})
    public String categories() {
        return "/";
    }
}
