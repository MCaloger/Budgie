import { render } from '@testing-library/react';
import React, { useState, useContext, useEffect, useRef } from 'react'
import { CategoryContext, CategoryManager } from '../../../Contexts/CategoryManager/CategoryManager';
import { TransactionContext } from '../../../Contexts/TransactionsManager/TransactionsManager';

import {ReactComponent as ClearIcon} from '../../../img/clearicon.svg'
import {ReactComponent as AddIcon} from '../../../img/addicon.svg'
import CategoryPicker from './CategoryPicker';
import Tooltip from '../../Tooltip/Tooltip';

export default function AddBudgetItem(props) {

    const transactions = useContext(TransactionContext);

    const categories = useContext(CategoryContext);

    let today = new Date().toISOString().substr(0, 10)

    const formRef = useRef(null)

    const [display, setDisplay] = useState('0.00');

    const [actual, setActual] = useState();

    const [selectedCategory, setSelectedCategory] = useState(1);

    const [note, setNote] = useState('');

    const [date, setDate] = useState(today);

    const handleMoney = (e) => {
        let value = e.target.value;

        // check if value is blank or NaN
        if(isNaN(value) || value === "") {

            value = "";
        }
        
        // convert to {dollar}.{cents} with a maximum of 2 decimals
        const actualValue = parseFloat(Math.abs(value)).toFixed(2);
        setDisplay(value);

        // set amount that will be
        setActual(actualValue);
    }

    const correctMoney = (e) => {
        if(isNaN(display)){
            setDisplay("0.00");
        } else {
            setDisplay(actual);
        }
        
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const amount = actual;

        if(props.income) {
            transactions.addTransaction(amount, selectedCategory, note, date);
        } else {
            // flip amount to negative
            transactions.addTransaction(amount*-1, selectedCategory, note, date);
        }

        resetForm();
    }

    const handleCategory = (e) => {
        setSelectedCategory(e.target.value)
    }

    const handleNote = (e) => {
        setNote(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const resetForm = () => {
        setDisplay("0.00");
        setActual()
        setNote('');
    }

    return (
        <div className="add-transaction-form-container">

            <form className="add-transaction-form" onSubmit={handleSubmit} onReset={resetForm} ref={formRef}>
                <div>
                    <label htmlFor="transactionDollarAmount">Enter dollar amount of transaction:</label>

                    <div className="input-element">{ props.income ? "" : "-" }$ <input type="number" placeholder="Enter Amount" step={0.01} value={ display } onChange={ handleMoney } onBlur={ correctMoney } min="0"/></div>

                    
                </div>

                <div>
                    <CategoryPicker categories={categories} selectedCategory={selectedCategory} handleCategory={handleCategory}/>
                </div>

                <div>
                    <label htmlFor="transactionNote">Set a note for the transaction:</label>
                    <div className="input-element">
                        <input name="transactionNote" type="text" placeholder="Note" value={note} onChange={handleNote}/>
                    </div>
                    
                </div>
                
                <div>
                    <label htmlFor="transactionDate">Date of transaction:</label>
                    <div className="input-element">
                        <input name="transactionDate" type="date" placeholder="Date" value={date} onChange={handleDate} />
                    </div>
                    
                </div>
                
                <div className="form-button-container ui-icon-toolbar">
                    <Tooltip text="Clear"><button type="reset" className="ui-icon"><ClearIcon /></button></Tooltip>
                    
                    <Tooltip text="Add"><button type="submit" className="ui-icon"><AddIcon /></button></Tooltip>
                </div>
                
            </form>
        </div>
    )
}
