package com.caloger.Budgie.Transactions;

import com.caloger.Budgie.Response.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {


    Logger logger = LoggerFactory.getLogger("TransactionService");
    private TransactionRepository transactionRepository;

    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public Response validateTransaction(Transaction transaction) {
        if(transaction.getAmount().equals(BigDecimal.ZERO)) {
            return new Response(false, "Amount must not be $0.00");
        } else {
            return new Response(true, "");
        }
    }

    public Transaction saveTransaction(Transaction transaction) {
        if(transaction.getAmount().compareTo(BigDecimal.ZERO) > 0) {
            return saveIncome(transaction);
        } else {
            return saveExpense(transaction);
        }
    }

    public Transaction saveExpense(Transaction transaction) {
        // confirm that amount is negative, if not, negate
        if(transaction.getAmount().compareTo(BigDecimal.ZERO) > 0) {
            transaction.setAmount(transaction.getAmount().negate());
        }
        Transaction transactionSaved = transactionRepository.save(transaction);
        return transactionSaved;
    }

    public Transaction saveIncome(Transaction transaction) {
        try {
            transaction = transactionRepository.save(transaction);
        } catch(Exception exception) {
            exception.printStackTrace();
        }
        return transaction;
    }

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    public List<Transaction> getAllIncomeTransactions() {
        return transactionRepository.findAllIncomeTransactions();
    }

    public Optional<Transaction> getTransactionById(Long id) {
        return transactionRepository.findById(id);
    }

    public void deleteTransactionById(long id) {
        transactionRepository.deleteById(id);
    }

    public List<Transaction> getAllExpenseTransactions() {
        return transactionRepository.findAllExpenseTransactions();
    }
}
