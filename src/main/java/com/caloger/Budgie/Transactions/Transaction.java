package com.caloger.Budgie.Transactions;

import com.caloger.Budgie.Categories.Category;
import com.caloger.Budgie.Categories.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "Transaction")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    private BigDecimal amount;

    @ManyToOne(targetEntity = Category.class)
    @JoinColumn(name = "categoryId", nullable = true)
    private Category category;

    private String note;

    private LocalDate transactionDate;

    @Autowired
    @Transient
    private CategoryService categoryService;

    public Transaction() {
    }

    public Transaction(BigDecimal amount, Category category, String note, LocalDate transactionDate) {
        this.amount = amount;
        this.category = category;
        this.note = note;
        this.transactionDate = transactionDate;
    }

    public Transaction(long id, BigDecimal amount, Category category, String note, LocalDate transactionDate) {
        this.id = id;
        this.amount = amount;
        this.category = category;
        this.note = note;
        this.transactionDate = transactionDate;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
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

    public LocalDate getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(LocalDate transactionDate) {
        this.transactionDate = transactionDate;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", amount=" + amount +
                ", category=" + category +
                ", note='" + note + '\'' +
                ", transactionDate=" + transactionDate +
                '}';
    }
}
