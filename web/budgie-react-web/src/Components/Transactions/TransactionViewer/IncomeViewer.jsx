import React from 'react'
import { TransactionsManager } from '../../../Contexts/TransactionsManager/TransactionsManager'
import AddBudgetItem from '../AddBudgetItem/AddBudgetItem'
import TransactionList from '../TransactionList/TransactionList'

export default function IncomeViewer() {
    return (
        <div className="content-pane">
            <TransactionsManager> 
                <div className="transaction-viewer-container">
                    <h1>Income</h1>
                    <TransactionList filter="income"/>
                    
                </div>  
                <div className="transaction-add-container">
                    <h1>Add Income</h1>
                    <AddBudgetItem income={true} />
                </div>   
            </TransactionsManager>           
        </div>
    )
}
