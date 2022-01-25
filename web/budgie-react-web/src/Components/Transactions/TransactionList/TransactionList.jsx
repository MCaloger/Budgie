import React, { useContext, useState } from 'react'
import { TransactionContext } from '../../../Contexts/TransactionsManager/TransactionsManager'
import RechartsCategoryBarChart from '../../Charts/RechartsCategoryBarChart';
import MoneyDisplay from '../../MoneyDisplay/MoneyDisplay';
import TransactionItem from '../TransactionItem/TransactionItem'

import RechartsCategoryPieChart from '../../Charts/RechartsCategoryPieChart';

import ChartsJSCategoryPieChart from '../../Charts/ChartsJSCategoryPieChart';

import TransactionSorting, { sortByAmount, sortingController } from '../../../SortingFunctions/TransactionSorting';
import AddBudgetItem from '../AddBudgetItem/AddBudgetItem';
import ChartsJSLineChart from '../../Charts/ChartsJSLineChart';

export default function TransactionList(props) {

    const transactions = useContext(TransactionContext)

    // amount | category | note | transactionDate
    const [sort, setSort] = useState("amount")

    // descending | ascending
    const [ascending, setAscending] = useState(true)

    const [showAddForm, setShowAddForm] = useState(true);

    if(props.filter === "expense") {
        transactions.transactions =  transactions.transactions.filter(transaction => transaction.amount < 0);
    }

    if(props.filter === "income") {
        transactions.transactions =  transactions.transactions.filter(transaction => transaction.amount >= 0);
    }

    const getTotal = () => {
        let value = 0;
        transactions.transactions.forEach(transaction => {
            value += transaction.amount
        })

        return value;
    }

    let changeSortToAmount = () => {
        if(sort !== "amount") {
            setSort("amount")
        } else {
            setAscending(!ascending)
        }   
    }

    let changeSortToCategory = () => {

        if(sort !== "category") {
            setSort("category")
        } else {
            setAscending(!ascending)
        }
    }

    let changeSortToNote = () => {

        if(sort !== "note") {
            setSort("note")
        } else {
            setAscending(!ascending)
        }
            
    }

    let changeSortToDate = () => {
        if(sort !== "transactionDate") {
            setSort("transactionDate")
        } else {
            setAscending(!ascending)
        }
    }

    let sortTransactions = () => {
        try {
            return sortingController({
                sortType:sort, 
                transactions: transactions.transactions, 
                ascending
            })
        } catch(err) {
        }
    }

    const color = () => {
        if(props.filter === "income") {
            return "#00C853"
        }

        if(props.filter === "expense") {
            return "#D50000"
        }

        return "#D437AD"
    }

    const toggleAddForm = () => {
        setShowAddForm(!showAddForm)
    }


    return (
        <div className="transaction-list">
            <div className="sum-line"><MoneyDisplay amount={ getTotal() }></MoneyDisplay></div>

        <div className="chart-block">
            <div className="chart-display">
                        <ChartsJSLineChart filter={props.filter}/>
                        {props.filter === "income" || props.filter === "expense" ? <ChartsJSCategoryPieChart /> : ""}
                    </div>
        </div>
            

            <div className="transaction-list-header">
                <div onClick={changeSortToAmount}>Amount</div>
                <div onClick={changeSortToCategory}>Category</div>
                <div onClick={changeSortToNote}>Note</div>
                <div onClick={changeSortToDate}>Date</div>
                <div>{props.showAdd ? <button onClick={toggleAddForm}>{showAddForm ? "Hide" : "Add New" }</button> : ""}</div>
            </div>

            {showAddForm && props.showAdd ? <AddBudgetItem income={props.filter === "income" ? true : false}/> : ""}
            
            { sortTransactions().map(transaction => <TransactionItem key={transaction.id} id={transaction.id} dollars={transaction.amount} category={ transaction.category ? transaction.category.categoryName : ''} note={transaction.note} transactionDate={transaction.transactionDate}></TransactionItem>) }
            
        </div>
    )
}
