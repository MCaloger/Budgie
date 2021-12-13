import { render } from '@testing-library/react';
import React, { useState, useContext, useEffect, useRef } from 'react'
import { CategoryContext, CategoryManager } from '../../../Contexts/CategoryManager/CategoryManager';
import { TransactionContext } from '../../../Contexts/TransactionsManager/TransactionsManager';
import CategorySelector from '../../Categories/CategorySelector/CategorySelector';
import {ReactComponent as ClearIcon} from '../../../img/clearicon.svg'
import {ReactComponent as AddIcon} from '../../../img/addicon.svg'

export default function AddBudgetItem(props) {

    const transactions = useContext(TransactionContext);

    const categories = useContext(CategoryContext);

    let today = new Date().toISOString().substr(0, 10)

    const formRef = useRef(null)

    const [dollars, setDollars] = useState(0);

    const [cents, setCents] = useState(0.00);

    const [selectedCategory, setSelectedCategory] = useState(1);

    const [note, setNote] = useState('');

    const [date, setDate] = useState(today);



    const handleSubmit = async (event) => {
        event.preventDefault();

        const centFloat = cents/100;
        const amount = parseFloat(dollars+centFloat)

        if(props.income) {
            transactions.addTransaction(amount, selectedCategory, note, date);
        } else {
            // flip amount to negative
            transactions.addTransaction(amount*-1, selectedCategory, note, date);
        }

        resetForm();
    }

    const handleDollarChange = (e) => {
        setDollars(parseInt(e.target.value))
    }

    const handleCentsChange = (e) => {
        if(parseInt(e.target.value) < 100) {
            setCents(parseInt(e.target.value))
        }
        
    }

    const handleCategory = (e) => {
        setSelectedCategory(e.target.value)
    }

    const handleNote = (e) => {
        setNote(e.target.value)
    }

    const handleDate = (e) => {
        console.log("date", e.target.value)
        setDate(e.target.value)
    }


    const resetForm = () => {
        setDollars(0);
        setCents(0);
        setNote('');
    }

    return (
        <div className="add-transaction-form-container">

            <form className="add-transaction-form" onSubmit={handleSubmit} onReset={resetForm} ref={formRef}>
                <div>
                    <label htmlFor="transactionDollarAmount">Enter dollar amount of transaction:</label>
                    <div>
                        <span>{ props.income ? "" : "-" }$<input type="number" name="transactionDollarAmount" id="transactionDollarAmount" min="0" max="99999" value={dollars} onChange={handleDollarChange}/>.<input type="text" min="0" max="99" size="2" value={cents} onChange={handleCentsChange}/></span>
                    </div>
                    
                </div>
                
                <CategoryManager>
                    <div>
                        <label htmlFor="transactionCategory">Set a category for the transaction:</label>
                        <select name="transactionCategory" value={selectedCategory} onChange={handleCategory}>
                        <CategoryContext.Consumer>
                            {categories => categories.categories.map(category => (<option key={category.id} value={category.id}>{category.categoryName}</option>))}
                        </CategoryContext.Consumer> 
                        </select>
                    </div>
                </CategoryManager>

                <div>
                    <label htmlFor="transactionNote">Set a note for the transaction:</label>
                    <div>
                        <input name="transactionNote" type="text" placeholder="Note" value={note} onChange={handleNote}/>
                    </div>
                    
                </div>
                
                <div>
                    <label htmlFor="transactionDate">Date of transaction:</label>
                    <div>
                        <input name="transactionDate" type="date" placeholder="Date" value={date} onChange={handleDate} />
                    </div>
                    
                </div>
                
                <div className="form-button-container ui-icon-toolbar">

                        <button type="reset" className="ui-icon"><ClearIcon /></button>
                        <button type="submit" className="ui-icon"><AddIcon /></button>

                    
                </div>
                
            </form>
        </div>
    )
}
