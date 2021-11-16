import React from 'react'
import { TransactionsManager } from '../../../Contexts/TransactionsManager/TransactionsManager'
import AddBudgetItem from '../AddBudgetItem/AddBudgetItem'
import TransactionList from '../TransactionList/TransactionList'

export default function IncomeViewer() {
    return (
        <div>
            <TransactionsManager>
                <AddBudgetItem income={true} />
                <div>
                    <TransactionList filter="income"/>
                </div>
            </TransactionsManager>           
        </div>
    )
}
