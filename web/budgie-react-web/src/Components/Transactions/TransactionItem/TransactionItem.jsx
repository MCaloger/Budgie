import React from 'react'

export default function TransactionItem(props) {
    console.log(props)
    return (
        <div className="transaction-item">
            <span>${props.dollars}</span>
            <span>{props.category ? props.category : 'Empty'}</span>
            <span>{props.note}</span>
            <span>{props.transactionDate}</span>
            <span></span>
        </div>
    )
}
