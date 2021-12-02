package com.caloger.Budgie;

import com.caloger.Budgie.Models.Category;
import com.caloger.Budgie.Models.Transaction;
import com.caloger.Budgie.Services.CategoryService;
import com.caloger.Budgie.Services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.math.BigDecimal;
import java.sql.Date;
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
	void init() {
		LocalDate localDate = LocalDate.now();

		categoryService.saveCategory(new Category("None"));
		categoryService.saveCategory(new Category("Entertainment"));
		categoryService.saveCategory(new Category("Food"));
		categoryService.saveCategory(new Category("Fuel"));
		categoryService.saveCategory(new Category("Heat"));
		categoryService.saveCategory(new Category("Rent"));


	};

}
