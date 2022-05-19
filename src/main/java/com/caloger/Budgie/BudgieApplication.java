package com.caloger.Budgie;

import com.caloger.Budgie.Categories.Category;
import com.caloger.Budgie.Categories.CategoryService;
import com.caloger.Budgie.Transactions.Transaction;
import com.caloger.Budgie.Transactions.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.math.BigDecimal;
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

}
