package com.caloger.Budgie.Categories;

import com.caloger.Budgie.Response.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    Logger logger = LoggerFactory.getLogger("CategoryService");
    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public Response validateCategory(Category category) {
        // check if category name is empty or null

        if(category.getCategoryName() == null || category.getCategoryName().equals("")) {
            return new Response(false, "Category name is empty");
        }

        if(this.getCategoryByCategoryName(category.getCategoryName()) != null) {
            return new Response(false, "Category already exists");
        }

        return new Response(true, "");

    }

    public Category saveCategory(Category category) throws Exception {
        try {
            Category savedCategory = categoryRepository.save(category);
            logger.info("Saved from {} to {}", category.toString(), savedCategory.toString());
            return savedCategory;
        } catch(Exception exception) {
            exception.printStackTrace();
            throw new Exception();
        }

    }

    public List<Category> getAllCategories() throws Exception {
        try {
            List<Category> categories = categoryRepository.findAll();
            logger.info("List {}", categories);
            return categories;
        } catch(Exception exception) {
            throw new Exception();
        }

    }

    public Category getCategoryById(Long id) {
        Category fetchedCategory = categoryRepository.findById(id).get();
        logger.info("Got from id {} : {}", id, fetchedCategory.toString());
        return fetchedCategory;
    }

    public Category getCategoryByCategoryName(String categoryName) {
        return categoryRepository.findByCategoryName(categoryName);
    }

    public void deleteCategory(long id) {
        Optional<Category> category = categoryRepository.findById(id);
        if(category.get().getCategoryName() != "None") {
            categoryRepository.deleteById(id);
        }

    }
}
