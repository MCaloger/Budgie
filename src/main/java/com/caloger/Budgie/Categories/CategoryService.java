package com.caloger.Budgie.Categories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public void saveCategory(Category category) throws Exception {
        try {
            categoryRepository.save(category);
        } catch(Exception exception) {
            exception.printStackTrace();
            throw new Exception();
        }

    }

    public List<Category> getAllCategories() throws Exception {
        try {
            return categoryRepository.findAll();
        } catch(Exception exception) {
            throw new Exception();
        }

    }

    public Category getCategoryById(Long id) {
        return categoryRepository.findById(id).get();
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
