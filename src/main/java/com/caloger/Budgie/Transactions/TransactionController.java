package com.caloger.Budgie.Transactions;

import com.caloger.Budgie.Response.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/transactions")
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
    public ResponseEntity<Response> addTransaction(@RequestBody Transaction transaction) {
        try {
            transactionService.saveTransaction(transaction);
            return ResponseEntity.ok().body(new Response(true,
                    "Successfully added transaction"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(false,
                    "Error added transaction"));
        }
    }

    /**
     * Add expense (negative)
     * @param transaction
     * @return
     */
    @PostMapping(value = "/addExpense", consumes = "application/json")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<Response> addExpense(@RequestBody Transaction transaction) {
        try {
            transactionService.saveExpense(transaction);
            return ResponseEntity.ok().body(new Response(true, "Expense successfully added"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(false, "Error adding expense"));
        }
    }

    @PostMapping(value = "/addIncome", consumes = "application/json")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<Response> addIncome(@RequestBody Transaction transaction) {
        try {
            transactionService.saveIncome(transaction);
            return ResponseEntity.ok().body(new Response(true, "Income successfully added"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(false, "Error adding income"));
        }
    }

    /**
     * Delete transaction by id
     * @param id
     * @return
     */
    @DeleteMapping(value="/delete")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<Response> deleteTransaction(@Param("id") int id) {
        try {
            transactionService.deleteTransactionById(id);
            return ResponseEntity.ok().body(new Response(true, "Transaction successfully removed"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(false,
                    "Error removing transaction"));
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
