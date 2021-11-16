package com.caloger.Budgie;

import com.caloger.Budgie.Models.Category;
import com.caloger.Budgie.Models.Transaction;
import com.caloger.Budgie.Services.CategoryService;
import com.caloger.Budgie.Services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
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

		Category foodCategory = new Category("Food", true);
		Category vehicleCategory = new Category("Vehicle", false);
		categoryService.saveCategory(foodCategory);
		categoryService.saveCategory(vehicleCategory);
		transactionService.saveTransaction(new Transaction(10, true, foodCategory, "example", Date.valueOf(localDate)));
		transactionService.saveTransaction(new Transaction(20, true, vehicleCategory, "example2", Date.valueOf(localDate)));
		transactionService.saveTransaction(new Transaction(35, false, vehicleCategory, "example3", Date.valueOf(localDate)));
		transactionService.getAllIncomeTransactions();

	};

}
