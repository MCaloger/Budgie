package com.caloger.Budgie.Services;

import com.caloger.Budgie.Categories.CategoryService;
import com.caloger.Budgie.Transactions.Transaction;
import com.caloger.Budgie.Categories.Category;
import com.caloger.Budgie.Transactions.TransactionService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class TransactionServiceTest {


    @Autowired
    TransactionService transactionService;

    @Autowired
    static CategoryService categoryService;

    @Test
    void saveIncome() throws Exception {
        final String TESTNAME = "Test";

        final Category NEWCATEGORY = new Category(TESTNAME);

        Category testCategory;

        categoryService.saveCategory(NEWCATEGORY);
        testCategory = categoryService.getCategoryByCategoryName(TESTNAME);

        final BigDecimal AMOUNT = new BigDecimal(10.00);

        Transaction newTransaction = transactionService.saveIncome(new Transaction(AMOUNT, testCategory,"test"));
        Assertions.assertEquals(newTransaction.getAmount(), AMOUNT);
    }

    @Test
    void getAllTransactions() {
    }

    @Test
    void getAllIncomeTransactions() {
    }

    @Test
    void getTransactionById() {
    }

    @Test
    void deleteTransactionById() {
    }

    @Test
    void getAllExpenseTransactions() throws Exception {

        final String TESTNAME = "Test";

        final Category NEWCATEGORY = new Category(TESTNAME);

        Category testCategory;

        categoryService.saveCategory(NEWCATEGORY);
        testCategory = categoryService.getCategoryByCategoryName(TESTNAME);

        final BigDecimal POSITIVEAMOUNT = new BigDecimal(10.00);
        final BigDecimal NEGATIVEAMOUNT = new BigDecimal(-10.00);


        List<Transaction> expenseTransactions = new ArrayList<>();
        expenseTransactions.add(new Transaction(POSITIVEAMOUNT, testCategory, ""));
        expenseTransactions.add(new Transaction(NEGATIVEAMOUNT, testCategory, ""));
        expenseTransactions.add(new Transaction(NEGATIVEAMOUNT, testCategory, ""));

        expenseTransactions.forEach(expense -> {
            transactionService.saveExpense(expense);
        });

        Assertions.assertEquals(transactionService.getAllExpenseTransactions().size(), 2);
    }
}