package com.caloger.Budgie.Transactions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    public void saveTransaction(Transaction transaction) {
        transactionRepository.save(transaction);
    }

    public void saveExpense(Transaction transaction) {

        // confirm that amount is negative, if not, negate
        if(transaction.getAmount().compareTo(BigDecimal.ZERO) > 0) {
            transaction.setAmount(transaction.getAmount().negate());
        }

        transactionRepository.save(transaction);
    }

    public void saveIncome(Transaction transaction) {
        transactionRepository.save(transaction);
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
