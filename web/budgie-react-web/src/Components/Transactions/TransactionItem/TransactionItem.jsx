import React from 'react'
import MoneyDisplay from '../../MoneyDisplay/MoneyDisplay'

export default function TransactionItem(props) {
    return (
        <div className="transaction-item">
            <span><MoneyDisplay amount={props.dollars}></MoneyDisplay></span>
            <span>{props.category ? props.category : 'Empty'}</span>
            <span>{props.note}</span>
            <span>{props.transactionDate}</span>
            <span></span>
        </div>
    )
}
