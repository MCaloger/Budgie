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
            <div className='limited-text'><MoneyDisplay amount={props.dollars}></MoneyDisplay></div>
            <div className='limited-text'>{props.category ? props.category : 'Empty'}</div>
            <div className='limited-text'>{props.note}</div>
            <div className='limited-text'>{props.transactionDate}</div>
            <div className="form-button-container"><Tooltip text="Delete"><button className="ui-icon" onClick={handleDelete}><TrashIcon  /></button></Tooltip></div>
        </div>
    )
}
