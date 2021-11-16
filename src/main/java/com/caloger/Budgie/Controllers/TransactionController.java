package com.caloger.Budgie.Controllers;

import com.caloger.Budgie.Models.Transaction;
import com.caloger.Budgie.Services.CategoryService;
import com.caloger.Budgie.Services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("transactions")
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    @Autowired
    CategoryService categoryService;

    @PostMapping(value = "/add", consumes = "application/json")
    @CrossOrigin(origins = "http://localhost:3000")
    public void addTransaction(@RequestBody Transaction transaction) {
        System.out.println(transaction.toString());
        transactionService.saveTransaction(transaction);
    }

    @DeleteMapping(value="/delete")
    @CrossOrigin(origins = "http://localhost:3000")
    public void deleteTransaction(@Param("id") int id) {
        transactionService.deleteTransactionById(id);
    }

    @GetMapping("/:id")
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<Transaction> getTransaction(@Param("id") long id) {
        return transactionService.getTransactionById(id);
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Transaction> getAllTransactions() {
        return transactionService.getAllTransactions();
    }

    @GetMapping("/income/all")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Transaction> getAllIncomeTransactions() {
        return transactionService.getAllIncomeTransactions();
    }

    @GetMapping("/expenses/all")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Transaction> getAllExpenseTransactions() {
        return transactionService.getAllExpenseTransactions();
    }
}
