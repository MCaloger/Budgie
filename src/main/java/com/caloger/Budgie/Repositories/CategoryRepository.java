package com.caloger.Budgie.Repositories;

import com.caloger.Budgie.Models.Category;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CategoryRepository extends CrudRepository<Category, Long> {
    List<Category> findAll();

    Category findByCategoryName(String categoryName);
}
