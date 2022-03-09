package com.caloger.Budgie.Transactions;

import com.caloger.Budgie.Transactions.Transaction;
import com.caloger.Budgie.Transactions.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("transactions")
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    /**
     * Handle addition of new transaction
     * @param transaction
     * @return ResponseEntity<String>
     */
    @PostMapping(value = "/add", consumes = "application/json")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<String> addTransaction(@RequestBody Transaction transaction) {
        try {
            transactionService.saveTransaction(transaction);
            return ResponseEntity.ok().body("Ok.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error");
        }
    }

    /**
     * Add expense (negative)
     * @param transaction
     * @return
     */
    @PostMapping(value = "/addExpense", consumes = "application/json")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<String> addExpense(@RequestBody Transaction transaction) {
        try {
            transactionService.saveExpense(transaction);
            return ResponseEntity.ok().body("Ok.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error");
        }
    }

    @PostMapping(value = "/addIncome", consumes = "application/json")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<String> addIncome(@RequestBody Transaction transaction) {
        try {
            transactionService.saveIncome(transaction);
            return ResponseEntity.ok().body("Ok.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error");
        }
    }

    /**
     * Delete transaction by id
     * @param id
     * @return
     */
    @DeleteMapping(value="/delete")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<String> deleteTransaction(@Param("id") int id) {
        try {
            transactionService.deleteTransactionById(id);
            return ResponseEntity.ok().body("Ok.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error");
        }
    }

    /**
     * Fetch transaction by id
     * @param id
     * @return
     */
    @GetMapping("/:id")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<Optional<Transaction>> getTransaction(@Param("id") long id) {
        try {
            Optional<Transaction> transaction = transactionService.getTransactionById(id);
            return ResponseEntity.ok().body(transaction);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    /**
     *
     * @return
     */
    @GetMapping("/all")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<List<Transaction>> getAllTransactions() {

        try {
            List<Transaction> transactions = transactionService.getAllTransactions();
            return ResponseEntity.ok().body(transactions);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    /**
     *
     * @return
     */
    @GetMapping("/income/all")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<List<Transaction>> getAllIncomeTransactions() {
        try {
            List<Transaction> transactions = transactionService.getAllIncomeTransactions();
            return ResponseEntity.ok().body(transactions);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    /**
     *
     * @return
     */
    @GetMapping("/expenses/all")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<List<Transaction>> getAllExpenseTransactions() {
        try {
            List<Transaction> transactions = transactionService.getAllExpenseTransactions();
            return ResponseEntity.ok().body(transactions);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
