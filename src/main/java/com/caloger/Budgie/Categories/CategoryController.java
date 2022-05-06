package com.caloger.Budgie.Categories;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/categories")
public class CategoryController {

    Logger logger = LoggerFactory.getLogger("CategoryController");
    CategoryService categoryService;
    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @PostMapping(value = "/add", consumes = "application/json")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<String> addCategory(@RequestBody Category category) {
        try {
            if(category.validate()) {
                categoryService.saveCategory(category);
                logger.info("Category added {}", category.toString());
                return ResponseEntity.ok().body("Category created.");
            } else {
                return ResponseEntity.badRequest().body("Error");
            }

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error");
        }
    }

    @DeleteMapping(value = "/delete", consumes = "application/json")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<String> deleteCategory(@Param("id") long id) {
        try {
            categoryService.deleteCategory(id);
            return ResponseEntity.ok().body("Category created.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error");
        }
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<Category> getCategory(@PathVariable("id") long id) {
        try {
            Category category = categoryService.getCategoryById(id);

            return ResponseEntity.ok().body(category);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/all")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<List<Category>> getAllCategories() {
        try {
            List<Category> categories = categoryService.getAllCategories();
            return new ResponseEntity<List<Category>>(categories, HttpStatus.OK);
        } catch (Exception e) {
            List<Category> categories = new ArrayList<>();
            return new ResponseEntity<List<Category>>(categories, HttpStatus.BAD_REQUEST);
        }
    }
}
