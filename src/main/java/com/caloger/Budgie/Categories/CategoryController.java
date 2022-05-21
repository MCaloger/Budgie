package com.caloger.Budgie.Categories;

import com.caloger.Budgie.Response.Response;
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
    public ResponseEntity<Response> addCategory(@RequestBody Category category) {
        try {
            Response validateCategory = categoryService.validateCategory(category);
            if(validateCategory.isSuccess()) {
                categoryService.saveCategory(category);
                logger.info("Category added {}", category.toString());
                return ResponseEntity.ok().body(new Response(true, "Category successfully created"));
            } else {
                logger.info("Category added {}", category.toString());
                return ResponseEntity.badRequest().body(validateCategory);
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(new Response(false, "Error adding category"));
        }
    }

    @DeleteMapping(value = "/delete", consumes = "application/json")
    public ResponseEntity<Response> deleteCategory(@Param("id") long id) {
        try {
            categoryService.deleteCategory(id);
            return ResponseEntity.ok().body(new Response(true, "Successfully deleted category"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(false,"Error deleting category"));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategory(@PathVariable("id") long id) {
        try {
            Category category = categoryService.getCategoryById(id);

            return ResponseEntity.ok().body(category);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/all")
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
