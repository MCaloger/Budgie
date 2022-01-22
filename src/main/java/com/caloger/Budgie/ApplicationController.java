package com.caloger.Budgie;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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
