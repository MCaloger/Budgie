package com.caloger.Budgie.Repositories;

import com.caloger.Budgie.Models.Transaction;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TransactionRepository extends CrudRepository<Transaction, Long> {
    List<Transaction> findAll();
    List<Transaction> findByIsIncome(boolean isIncome);
}
