package com.caloger.Budgie.Categories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("categories")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @PostMapping(value = "/add", consumes = "application/json")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<String> addCategory(@RequestBody Category category) {
        try {
            System.out.println(category.toString());
            if(category.validate()) {
                categoryService.saveCategory(category);
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
            return new ResponseEntity(getAllCategories(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
        }
    }
}
