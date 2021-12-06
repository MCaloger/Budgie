import React, { useContext } from 'react'
import { TransactionContext } from '../../../Contexts/TransactionsManager/TransactionsManager'
import MoneyDisplay from '../../MoneyDisplay/MoneyDisplay'


export default function TransactionItem(props) {

    const transactions = useContext(TransactionContext);

    const handleDelete = () => {
        transactions.deleteTransaction(props.id)

    }

    return (
        <div className="transaction-item">
            <span><MoneyDisplay amount={props.dollars}></MoneyDisplay></span>
            <span>{props.category ? props.category : 'Empty'}</span>
            <span>{props.note}</span>
            <span>{props.transactionDate}</span>
            <span><button onClick={handleDelete}>Delete</button></span>
        </div>
    )
}
