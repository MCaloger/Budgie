import React, { useContext } from 'react'
import { TransactionContext } from '../../../Contexts/TransactionsManager/TransactionsManager'
import MoneyDisplay from '../../MoneyDisplay/MoneyDisplay'
import {ReactComponent as TrashIcon} from '../../../img/trashicon.svg'
import Tooltip from '../../Tooltip/Tooltip'


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
            <span className="form-button-container"><Tooltip text="Delete"><button className="ui-icon" onClick={handleDelete}><TrashIcon  /></button></Tooltip></span>
        </div>
    )
}
