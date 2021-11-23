package com.caloger.Budgie.Controllers;

import com.caloger.Budgie.Models.Category;
import com.caloger.Budgie.Services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("categories")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @PostMapping(value = "/add", consumes = "application/json")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public void addCategory(@RequestBody Category category) {
        categoryService.saveCategory(category);
    }

    @DeleteMapping(value = "/delete", consumes = "application/json")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public void deleteCategory(@Param("id") long id) {
            categoryService.deleteCategory(id);
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public Category getCategory(@PathVariable("id") long id) {
        return categoryService.getCategoryById(id);
    }

    @GetMapping("/all")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }
}
