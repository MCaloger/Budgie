package com.caloger.Budgie.Controllers;

import com.caloger.Budgie.Models.Transaction;
import com.caloger.Budgie.Services.CategoryService;
import com.caloger.Budgie.Services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("transactions")
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    @PostMapping(value = "/add", consumes = "application/json")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public void addTransaction(@RequestBody Transaction transaction) {
        System.out.println(transaction.toString());
        transactionService.saveTransaction(transaction);
    }

    @PostMapping(value = "/addExpense", consumes = "application/json")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public void addExpense(@RequestBody Transaction transaction) {

        System.out.println(transaction.toString());
        System.out.println(transaction.getTransactionDate().toString());
        transactionService.saveExpense(transaction);
    }

    @PostMapping(value = "/addIncome", consumes = "application/json")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public void addIncome(@RequestBody Transaction transaction) {

        System.out.println(transaction.toString());
        System.out.println(LocalDate.now().toString());
        System.out.println(transaction.getTransactionDate().toString());
        transactionService.saveIncome(transaction);
    }

    @DeleteMapping(value="/delete")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public void deleteTransaction(@Param("id") int id) {
        transactionService.deleteTransactionById(id);
    }

    @GetMapping("/:id")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public Optional<Transaction> getTransaction(@Param("id") long id) {
        return transactionService.getTransactionById(id);
    }

    @GetMapping("/all")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public List<Transaction> getAllTransactions() {
        return transactionService.getAllTransactions();
    }

    @GetMapping("/income/all")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public List<Transaction> getAllIncomeTransactions() {
        return transactionService.getAllIncomeTransactions();
    }

    @GetMapping("/expenses/all")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public List<Transaction> getAllExpenseTransactions() {
        return transactionService.getAllExpenseTransactions();
    }
}
