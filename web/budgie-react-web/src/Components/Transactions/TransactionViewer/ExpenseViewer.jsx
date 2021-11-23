import React from 'react'
import { TransactionsManager } from '../../../Contexts/TransactionsManager/TransactionsManager'
import AddBudgetItem from '../AddBudgetItem/AddBudgetItem'
import TransactionList from '../TransactionList/TransactionList'

export default function ExpenseViewer() {
    return (
        <div className="content-pane">
            
            <TransactionsManager>
                <div className="transaction-viewer-container">
                    <h1>Expenses</h1>
                    <TransactionList filter="expense"/>
                </div>
                <div className="transaction-add-container">
                    <h1>Add Expense</h1>
                    <AddBudgetItem income={false} />
                </div>
            </TransactionsManager>           
        </div>
    )
}
