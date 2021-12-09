package com.caloger.Budgie.Services;

import com.caloger.Budgie.Models.Transaction;
import com.caloger.Budgie.Models.Category;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigDecimal;
import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

class TransactionServiceTest {

    @Autowired
    TransactionService transactionService;

    @Test
    void shouldSaveExpense() {
        transactionService.saveExpense(new Transaction(new BigDecimal(10.00), new Category("Food"), "", LocalDate.now()));
        Assertions.assertFalse(transactionService.getAllExpenseTransactions().isEmpty());
    }

    @Test
    void saveIncome() {
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
    void getAllExpenseTransactions() {
    }
}