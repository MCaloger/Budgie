package com.caloger.Budgie.Models;

import javax.persistence.*;
import java.util.List;

@Entity

public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(unique=true)
    private String categoryName;
    private boolean isIncome;

    @OneToMany(mappedBy = "category")
    private List<Transaction> transactions;

    public Category() {
    }

    public Category(String categoryName, boolean isIncome) {
        this.categoryName = categoryName;
        this.isIncome = isIncome;
    }

    public Category(Long id, String categoryName, boolean isIncome) {
        this.id = id;
        this.categoryName = categoryName;
        this.isIncome = isIncome;
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
}
