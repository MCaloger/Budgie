import React from 'react'
import { TransactionsManager } from '../../../Contexts/TransactionsManager/TransactionsManager'
import AddBudgetItem from '../AddBudgetItem/AddBudgetItem'
import TransactionList from '../TransactionList/TransactionList'

export default function TransactionViewer() {
    return (
        <div className="content-pane">
            <TransactionsManager>
                <div className="transaction-viewer-container">
                <div className="header-text neutral-number">Transactions</div>
                    <TransactionList showAdd={false}/>

                </div> 
            </TransactionsManager>           
        </div>
    )
}
