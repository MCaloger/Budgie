import React, { useContext } from 'react'
import { TransactionContext } from '../../../Contexts/TransactionsManager/TransactionsManager'
import MoneyDisplay from '../../MoneyDisplay/MoneyDisplay';
import TransactionItem from '../TransactionItem/TransactionItem'

export default function TransactionList(props) {

    const transactions = useContext(TransactionContext)

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


    return (
        <div className="transaction-list">
            <div className="sum-line"><MoneyDisplay amount={ getTotal() }></MoneyDisplay></div>
            <div className="transaction-list-header">
                <div>Dollar Amount</div>
                <div>Category</div>
                <div>Note</div>
                <div>Date</div>
                <div></div>
            </div>
            
            { transactions.transactions.map(transaction => <TransactionItem key={transaction.id} id={transaction.id} dollars={transaction.amount} category={ transaction.category ? transaction.category.categoryName : ''} note={transaction.note} transactionDate={transaction.transactionDate}></TransactionItem>) }
            
        </div>
    )
}
