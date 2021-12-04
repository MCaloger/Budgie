import React, { useState, useEffect, useContext, createContext } from 'react'
import { CategoryContext } from '../CategoryManager/CategoryManager';

export const TransactionContext = React.createContext();

export function TransactionsManager(props) {

    const categories = useContext(CategoryContext);

    let [transactions, setTransactions] = useState([]);

    useEffect(() => {
        updateTransactions()
    }, []); 

    async function addTransaction(amount, category, note, transactionDate) {

        // fetch Catgeory from categoryID
        const categoryObject = await categories.getCategoryById(category)

        // convert payload to json
        let url = "";

        // route url based on income or expense
        if(amount >= 0) {
            url = "http://localhost:8080/transactions/addIncome"
        } else {
            url = "http://localhost:8080/transactions/addExpense"
        }
        const body = JSON.stringify({amount, category:categoryObject, note, transactionDate});

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
                method: 'DELETE', 
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

        <TransactionContext.Provider value={ { transactions, setTransactions, addTransaction, updateTransactions, deleteTransaction } }>
            { props.children }
        </TransactionContext.Provider>
    )
}