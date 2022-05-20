package com.caloger.Budgie.Initialize;

import com.caloger.Budgie.Categories.Category;
import com.caloger.Budgie.Categories.CategoryService;
import com.caloger.Budgie.ScheduledService.ScheduledService;
import com.caloger.Budgie.Transactions.Transaction;
import com.caloger.Budgie.Transactions.TransactionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
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
    void init() {

        try {

            // if enabled, run example data
            if (this.isExampleDataEnabled) {

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
                categoryService.saveCategory(heating);
                categoryService.saveCategory(salary);

                for (int iterations = 0; iterations < 20; iterations++) {

                    Transaction transaction = scheduledService.CreateExampleTransaction();

                }
            }
        } catch(Exception exception) {
            logger.error(exception.toString());
        }


    }
}
