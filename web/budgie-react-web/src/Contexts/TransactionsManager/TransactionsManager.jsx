import React, { useState, useEffect, useContext, createContext } from 'react'
import { CategoryContext } from '../CategoryManager/CategoryManager';

export const TransactionContext = React.createContext();

export function TransactionsManager(props) {

    const categories = useContext(CategoryContext);

    let [transactions, setTransactions] = useState([]);
    let [incomeTransactions, setIncomeTransactions] = useState([]);
    let [expenseTransactions, setExpenseTransactions] = useState([]);

    useEffect(() => {
        updateTransactions()
        console.log("updated transactions", transactions)
    }, []); 

    async function addTransaction(dollars, category, note, isIncome, transactionDate) {

        // fetch Catgeory from categoryID
        const categoryObject = await categories.getCategoryById(category)

        // convert payload to json
        let url = "";

        if(isIncome === true) {
            url = "http://localhost:8080/transactions/addIncome"
        } else {
            url = "http://localhost:8080/transactions/addExpense"
        }
        const body = JSON.stringify({dollars, category:categoryObject, note, transactionDate, isIncome:isIncome});

        try {

            const response = await fetch(url, {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body
            })
        } catch(error) {
            console.error('error', error)
        }
        
        await updateTransactions();
    }

    async function deleteTransaction(id) {
        try {
            const response = await fetch(`http://localhost:8080/transactions/delete/?id=${id}`, {
                method: 'GET', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })

            await updateTransactions();
        } catch(error) {
            console.error('error', error)
        }
    }

    async function updateTransactions() {
        try {
            const response = await fetch("http://localhost:8080/transactions/all", {
                method: 'GET', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
    
            const data = await response.json()
    
            await setTransactions(data)
        } catch(error) {
            console.error('error', error)
        }
    }

    function getTransactionById(id) {
        // cast to int
        const intId = parseInt(id)

        // check if id matches
        const matchingTransaction = transactions.find(transaction => transaction.id === intId);

        return matchingTransaction
    }

    return (
        <div>
            <TransactionContext.Provider value={ { transactions, setTransactions, addTransaction, updateTransactions } }>
                { props.children }
            </TransactionContext.Provider>
        </div>
    )
}