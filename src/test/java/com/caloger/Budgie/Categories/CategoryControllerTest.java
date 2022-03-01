package com.caloger.Budgie.Categories;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@AutoConfigureMockMvc
class CategoryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void addCategory() throws Exception {
        this.mockMvc.perform(get("/add")).andExpect(status().isOk());
    }

    @Test
    void deleteCategory() {
    }

    @Test
    void getCategory() {
    }

    @Test
    void getAllCategories() {
    }
}