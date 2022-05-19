package com.caloger.Budgie.Categories;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import javax.transaction.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
class CategoryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private CategoryService categoryService;

    @Test
    void addCategory() throws Exception {
        Category category = new Category("TestCategory");
        this.mockMvc.perform(get("/add")
            .content(objectMapper.writeValueAsString(category)))
            .andExpect(status().isOk());
    }

    @Test
    void deleteCategory() throws Exception {
        Category category = new Category("TestCategory");
        categoryService.saveCategory(category);
        Category foundCategory = categoryService.getCategoryByCategoryName(category.getCategoryName());

        this.mockMvc.perform(delete("/delete?="+foundCategory.getId()))
                .andExpect(status().isOk());
    }

    @Test
    void getCategory() {
    }

    @Test
    void getAllCategories() {
    }
}