package com.caloger.Budgie.Transactions;

import com.caloger.Budgie.Response.Response;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/transactions")
public class TransactionController {

    Logger logger = LoggerFactory.getLogger("TransactionController");
    TransactionService transactionService;
    @Autowired
    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    /**
     * Handle addition of new transaction
     * @param transaction
     * @return ResponseEntity<String>
     */
    @PostMapping(value = "/add", consumes = "application/json")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<Response> addTransaction(@RequestBody Transaction transaction) {

        try {

            Response validateTransaction = transactionService.validateTransaction(transaction);
            if(validateTransaction.isSuccess()) {
                transactionService.saveTransaction(transaction);
                logger.info(transaction.toString());
                return ResponseEntity.ok().body(new Response(true,
                        String.format("Successfully added $%s transaction", transaction.getAmount().toString())));
            } else {

                logger.warn(transaction.toString());
                return ResponseEntity.badRequest().body(validateTransaction);
            }
        } catch (Exception e) {

            logger.error(transaction.toString());
            return ResponseEntity.internalServerError().body(new Response(false,
                    "Error adding transaction"));
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

            Response validateTransaction = transactionService.validateTransaction(transaction);
            if(validateTransaction.isSuccess()) {
                transactionService.saveExpense(transaction);
                logger.info(transaction.toString());
                return ResponseEntity.ok().body(new Response(true,
                        String.format("Successfully added $%s expense", transaction.getAmount().toString())));
            } else {

                logger.warn(transaction.toString());
                return ResponseEntity.badRequest().body(validateTransaction);
            }
        } catch (Exception e) {

            logger.error(transaction.toString());
            return ResponseEntity.internalServerError().body(new Response(false,
                    "Error adding expense"));
        }
    }

    @PostMapping(value = "/addIncome", consumes = "application/json")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
    public ResponseEntity<Response> addIncome(@RequestBody Transaction transaction) {

        try {

            Response validateTransaction = transactionService.validateTransaction(transaction);
            if(validateTransaction.isSuccess()) {
                transactionService.saveIncome(transaction);
                logger.info(transaction.toString());
                return ResponseEntity.ok().body(new Response(true,
                        String.format("Successfully added $%s income", transaction.getAmount().toString())));
            } else {

                logger.warn(transaction.toString());
                return ResponseEntity.badRequest().body(validateTransaction);
            }
        } catch (Exception e) {

            logger.error(transaction.toString());
            return ResponseEntity.internalServerError().body(new Response(false,
                    "Error adding income"));
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
            logger.info(String.valueOf(id));
            return ResponseEntity.ok().body(new Response(true, "Transaction successfully removed"));
        } catch (Exception e) {

            logger.error(String.valueOf(id));
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
            logger.info(String.valueOf(id));
            return ResponseEntity.ok().body(transaction);
        } catch (Exception e) {

            logger.error(String.valueOf(id));
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
            logger.info(transactions.toString());
            return ResponseEntity.ok().body(transactions);
        } catch (Exception e) {

            logger.error("getAllTransactions");
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
            logger.info(transactions.toString());
            return ResponseEntity.ok().body(transactions);
        } catch (Exception e) {

            logger.error("getAllIncomeTransactions");
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
            logger.info(transactions.toString());
            return ResponseEntity.ok().body(transactions);
        } catch (Exception e) {

            logger.error("getAllExpenseTransactions");
            return ResponseEntity.badRequest().body(null);
        }
    }
}
