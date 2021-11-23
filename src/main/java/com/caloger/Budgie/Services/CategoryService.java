package com.caloger.Budgie.Services;

import com.caloger.Budgie.Models.Category;
import com.caloger.Budgie.Repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public void saveCategory(Category category) {
        categoryRepository.save(category);
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
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
