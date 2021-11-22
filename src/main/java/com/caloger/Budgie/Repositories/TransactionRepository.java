package com.caloger.Budgie.Repositories;

import com.caloger.Budgie.Models.Transaction;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TransactionRepository extends CrudRepository<Transaction, Long> {
    List<Transaction> findAll();

    @Query(value = "SELECT transaction FROM Transaction transaction WHERE transaction.amount >= 0")
    List<Transaction> findAllIncomeTransactions();

    @Query(value = "SELECT transaction FROM Transaction transaction WHERE transaction.amount < 0")
    List<Transaction> findAllExpenseTransactions();
}
