package com.caloger.Budgie.Services;

import com.caloger.Budgie.Models.Transaction;
import com.caloger.Budgie.Repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Currency;
import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    public void saveTransaction(Transaction transaction) {

        if(transaction.isIncome()) {
            saveIncome(transaction);
        } else {
            saveExpense(transaction);
        }
    }

    public void saveExpense(Transaction transaction) {
        transaction.setDollars(transaction.getDollars() * -1);

        transactionRepository.save(transaction);
    }

    public void saveIncome(Transaction transaction) {
        transactionRepository.save(transaction);
    }

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    public List<Transaction> getAllIncomeTransactions() {
        return transactionRepository.findByIsIncome(true);
    }

    public Optional<Transaction> getTransactionById(Long id) {
        return transactionRepository.findById(id);
    }

    public void deleteTransactionById(long id) {
        transactionRepository.deleteById(id);
    }

    public List<Transaction> getAllExpenseTransactions() {
        return transactionRepository.findByIsIncome(false);
    }
}
