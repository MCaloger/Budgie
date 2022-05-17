package com.caloger.Budgie.Services;

import com.caloger.Budgie.Categories.CategoryRepository;
import com.caloger.Budgie.Categories.CategoryService;
import com.caloger.Budgie.Transactions.Transaction;
import com.caloger.Budgie.Categories.Category;
import com.caloger.Budgie.Transactions.TransactionRepository;
import com.caloger.Budgie.Transactions.TransactionService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.persistence.Transient;
import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
@Transactional
class TransactionServiceTest {

    TransactionService transactionService;
    TransactionRepository transactionRepository;
    CategoryService categoryService;
    CategoryRepository categoryRepository;

    @Autowired
    public TransactionServiceTest(TransactionService transactionService, TransactionRepository transactionRepository,
                                  CategoryService categoryService, CategoryRepository categoryRepository) {
        this.transactionService = transactionService;
        this.transactionRepository = transactionRepository;
        this.categoryService = categoryService;
        this.categoryRepository = categoryRepository;
    }

    @BeforeEach
    public void transactionTestSetup() {
        transactionService.saveIncome(new Transaction(new BigDecimal(10.00),
                null,"test",
                LocalDate.now()));
        transactionService.saveIncome(new Transaction(new BigDecimal(11.00),
                null,"test",
                LocalDate.now()));
        transactionService.saveIncome(new Transaction(new BigDecimal(12.00),
                null,"test",
                LocalDate.now()));

        transactionService.saveExpense(new Transaction(new BigDecimal(10.00),
                null,"test",
                LocalDate.now()));
        transactionService.saveExpense(new Transaction(new BigDecimal(11.00),
                null,"test",
                LocalDate.now()));

    }

    @Test
    void saveIncome() throws Exception {

        BigDecimal amount = new BigDecimal(10.00);
        Transaction newTransaction = transactionService.saveIncome(new Transaction(new BigDecimal(10.00),
                null,"test",
                LocalDate.now()));
        Assertions.assertEquals(newTransaction.getAmount().intValue(), amount.intValue());
    }

    @Test
    void getAllTransactions() throws Exception {
        List<Transaction> transactions = transactionService.getAllTransactions();
        Assertions.assertEquals(5, transactions.size());
    }

    @Test
    void getAllIncomeTransactions() {
        Assertions.assertEquals(3, transactionService.getAllIncomeTransactions().size());
    }

    @Test
    void getAllExpenseTransactions() throws Exception {

        Assertions.assertEquals(transactionService.getAllExpenseTransactions().size(), 2);
    }
}