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

	@Value("${exampledata}")
	public boolean isExampleDataEnabled;

	@PostConstruct
	void init() throws Exception {

		// if enabled, run example data
		if(this.isExampleDataEnabled) {
			LocalDate localDate = LocalDate.now();

			Category none = new Category("None");
			Category entertainment = new Category("Entertainment");
			Category food = new Category("Food");
			Category rent = new Category("Rent");

			Category salary = new Category("Salary");

			categoryService.saveCategory(none);
			categoryService.saveCategory(entertainment);
			categoryService.saveCategory(food);
			categoryService.saveCategory(rent);

			categoryService.saveCategory(salary);

			transactionService.saveIncome(new Transaction(new BigDecimal(999.99), salary, "Paycheque",
					localDate.minusWeeks(4)));

			transactionService.saveIncome(new Transaction(new BigDecimal(564.55), none, "Refund",
					localDate.minusWeeks(2)));
			transactionService.saveIncome(new Transaction(new BigDecimal(999.99), salary, "Paycheque",
					localDate));

			transactionService.saveExpense(new Transaction(new BigDecimal(-750.65), rent, "",
					localDate.minusDays(2)));

			transactionService.saveExpense(new Transaction(new BigDecimal(-150.32), food, "Food for week",
					localDate.minusDays(4)));

			transactionService.saveExpense(new Transaction(new BigDecimal(-35), food, "Movie Theatre Trip",
					localDate.minusDays(4)));

			transactionService.saveExpense(new Transaction(new BigDecimal(-55), food, "Board Game",
					localDate.minusWeeks(4)));
		}

	};

}
