import React from 'react'
import { TransactionsManager } from '../../../Contexts/TransactionsManager/TransactionsManager'
import ChartsJSLineChart from '../../Charts/ChartsJSLineChart'
import AddBudgetItem from '../AddBudgetItem/AddBudgetItem'
import TransactionList from '../TransactionList/TransactionList'

export default function IncomeViewer() {
    return (
        <div className="content-pane">
            <TransactionsManager> 
                <div className="transaction-viewer-container">
                    <div className="header-text positive-number">Income</div>
                    <TransactionList filter="income" showAdd={true}/>
                </div>  
            </TransactionsManager>           
        </div>
    )
}
