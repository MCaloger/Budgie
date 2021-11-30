import React from 'react'
import { TransactionsManager } from '../../../Contexts/TransactionsManager/TransactionsManager'
import AddBudgetItem from '../AddBudgetItem/AddBudgetItem'
import TransactionList from '../TransactionList/TransactionList'

export default function TransactionViewer() {
    return (
        <div className="content-pane">
            <TransactionsManager>
                <div className="transaction-viewer-container">
                    <h1>Transactions</h1>
                    <TransactionList/>

                </div> 
            </TransactionsManager>           
        </div>
    )
}
