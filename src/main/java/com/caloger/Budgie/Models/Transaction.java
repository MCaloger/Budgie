package com.caloger.Budgie.Models;

import com.caloger.Budgie.Services.CategoryService;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDate;
import java.util.Optional;

@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private int dollars;

    private boolean isIncome;

    @ManyToOne(targetEntity = Category.class)
    @JoinColumn(name = "categoryId")
    private Category category;

    private String note;

    private Date transactionDate;



    public Transaction() {
    }

    @Autowired
    @Transient
    private CategoryService categoryService;

    public Transaction(int dollars, boolean isIncome, Category category, String note, Date transactionDate ) {
        this.dollars = dollars;
        this.isIncome = isIncome;
        this.category = category;
        this.note = note;
        this.transactionDate = transactionDate;
    }

    public Transaction(long id, int dollars, boolean isIncome, Category category, String note, Date transactionDate) {
        this.id = id;
        this.dollars = dollars;
        this.isIncome = isIncome;
        this.category = category;
        this.note = note;
        this.transactionDate = transactionDate;
    }

    public Transaction(long id, int dollars, boolean isIncome, Category category, String note, String transactionDate) {
        LocalDate localDate = LocalDate.parse(transactionDate);

        this.id = id;
        this.dollars = dollars;
        this.isIncome = isIncome;
        this.category = category;
        this.note = note;
        this.transactionDate = Date.valueOf(localDate);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getDollars() {
        return dollars;
    }

    public void setDollars(int dollars) {
        this.dollars = dollars;
    }

    public boolean isIncome() {
        return isIncome;
    }

    public void setIncome(boolean income) {
        isIncome = income;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Date getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(Date transactionDate) {
        this.transactionDate = transactionDate;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", dollars=" + dollars +
                ", isIncome=" + isIncome +
                ", category=" + category +
                ", note='" + note + '\'' +
                ", transactionDate=" + transactionDate +
                ", categoryService=" + categoryService +
                '}';
    }
}
