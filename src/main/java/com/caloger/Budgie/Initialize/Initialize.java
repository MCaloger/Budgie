package com.caloger.Budgie.Initialize;

import com.caloger.Budgie.Categories.Category;
import com.caloger.Budgie.Categories.CategoryService;
import com.caloger.Budgie.ScheduledService;
import com.caloger.Budgie.Transactions.Transaction;
import com.caloger.Budgie.Transactions.TransactionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;

import javax.annotation.PostConstruct;
import java.math.BigDecimal;
import java.time.LocalDate;

public class Initialize {

    @Value("${exampledata}")
    public boolean isExampleDataEnabled;

    TransactionService transactionService;
    CategoryService categoryService;

    ScheduledService scheduledService;

    Logger logger = LoggerFactory.getLogger("ScheduledService");

    @Autowired
    public Initialize(TransactionService transactionService, CategoryService categoryService, ScheduledService scheduledService) {
        this.transactionService = transactionService;
        this.categoryService = categoryService;
        this.scheduledService = scheduledService;
    }

    @PostConstruct
    void init() throws Exception {
        try {
            // if enabled, run example data
            if (this.isExampleDataEnabled) {
                LocalDate localDate = LocalDate.now();

                Category none = new Category("None");
                Category entertainment = new Category("Entertainment");
                Category food = new Category("Food");
                Category rent = new Category("Rent");
                Category car = new Category("Car");
                Category gas = new Category("Gas");
                Category heating = new Category("Heating");
                Category salary = new Category("Salary");

                categoryService.saveCategory(none);
                categoryService.saveCategory(entertainment);
                categoryService.saveCategory(food);
                categoryService.saveCategory(rent);
                categoryService.saveCategory(car);
                categoryService.saveCategory(gas);
                categoryService.saveCategory(salary);

                for (int iterations = 0; iterations < 20; iterations++) {
                    scheduledService.CreateExampleTransaction();
                }
            }
        } catch(Exception exception) {
            logger.error(exception.toString());
        }


//            transactionService.saveIncome(new Transaction(new BigDecimal(999.99), salary, "Paycheque",
//                    localDate.minusWeeks(4)));
//
//            transactionService.saveIncome(new Transaction(new BigDecimal(564.55), none, "Refund",
//                    localDate.minusWeeks(2)));
//            transactionService.saveIncome(new Transaction(new BigDecimal(999.99), salary, "Paycheque",
//                    localDate));
//
//            transactionService.saveExpense(new Transaction(new BigDecimal(-750.65), rent, "",
//                    localDate.minusDays(2)));
//
//            transactionService.saveExpense(new Transaction(new BigDecimal(-150.32), food, "Food for week",
//                    localDate.minusDays(4)));
//
//            transactionService.saveExpense(new Transaction(new BigDecimal(-35), food, "Movie Theatre Trip",
//                    localDate.minusDays(4)));
//
//            transactionService.saveExpense(new Transaction(new BigDecimal(-55), food, "Board Game",
//                    localDate.minusWeeks(4)));

    }
}
