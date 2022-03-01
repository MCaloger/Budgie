package com.caloger.Budgie;

import com.caloger.Budgie.Categories.Category;
import com.caloger.Budgie.Categories.CategoryService;
import com.caloger.Budgie.Transactions.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.time.LocalDate;

@SpringBootApplication
public class BudgieApplication {

	@Autowired
	CategoryService categoryService;

	@Autowired
	TransactionService transactionService;

	public static void main(String[] args) {
		SpringApplication.run(BudgieApplication.class, args);
	}

	@PostConstruct
	void init() throws Exception {
		LocalDate localDate = LocalDate.now();

		categoryService.saveCategory(new Category("None"));
		categoryService.saveCategory(new Category("Entertainment"));
		categoryService.saveCategory(new Category("Food"));
		categoryService.saveCategory(new Category("Fuel"));
		categoryService.saveCategory(new Category("Heat"));
		categoryService.saveCategory(new Category("Rent"));


	};

}
