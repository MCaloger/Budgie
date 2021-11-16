import React from 'react'
import { TransactionsManager } from '../../../Contexts/TransactionsManager/TransactionsManager'
import AddBudgetItem from '../AddBudgetItem/AddBudgetItem'
import TransactionList from '../TransactionList/TransactionList'

export default function ExpenseViewer() {
    return (
        <div>
            <TransactionsManager>
                <AddBudgetItem income={false}/>
                <div>
                    <TransactionList filter="expense"/>
                </div>
            </TransactionsManager>           
        </div>
    )
}
