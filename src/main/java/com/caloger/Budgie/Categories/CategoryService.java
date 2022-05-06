package com.caloger.Budgie.Categories;

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
