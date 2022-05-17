package com.caloger.Budgie.Categories;

import com.caloger.Budgie.Transactions.Transaction;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(unique=true)
    @NotBlank(message = "Category must have a name.")
    private String categoryName;

    private boolean isIncome;

    @OneToMany(mappedBy = "category", cascade = CascadeType.PERSIST, orphanRemoval = true)
    private List<Transaction> transactions;

    public Category() {
    }

    public Category(String categoryName) {
        this.categoryName = categoryName;
        this.isIncome = true;
    }

    public Category(Long id, String categoryName) {
        this.id = id;
        this.categoryName = categoryName;
        this.isIncome = true;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public boolean isIncome() {
        return isIncome;
    }

    public void setIncome(boolean income) {
        isIncome = income;
    }

    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", categoryName='" + categoryName + '\'' +
                ", isIncome=" + isIncome +
                '}';
    }
}
