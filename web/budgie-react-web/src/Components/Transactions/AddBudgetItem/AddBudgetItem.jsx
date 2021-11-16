import React, { useState, useContext, useEffect, useRef } from 'react'
import { CategoryContext } from '../../../Contexts/CategoryManager/CategoryManager';
import { TransactionContext } from '../../../Contexts/TransactionsManager/TransactionsManager';

export default function AddBudgetItem(props) {

    const transactions = useContext(TransactionContext);

    const categories = useContext(CategoryContext);

    let today = new Date().toISOString().substr(0, 10)

    const formRef = useRef(null)

    const [dollars, setDollars] = useState('0');

    const [selectedCategory, setSelectedCategory] = useState(1);

    const [note, setNote] = useState('');

    const [date, setDate] = useState(today);

    useEffect(() => {
        setSelectedCategory(1)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("date:" , date)
        console.log("income", props.income)
        transactions.addTransaction(dollars, selectedCategory, note, props.income, date);
        resetForm();
    }

    const handleDollarChange = (e) => {
        setDollars(e.target.value)
    }

    const handleCategory = (e) => {
        console.log('e.target.value :>> ', e.target.value);
        setSelectedCategory(e.target.value)
    }

    const handleNote = (e) => {
        setNote(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const resetForm = () => {
        setDollars(0);
        setNote('');
    }

    return (
        <div>
            <form className="add-transaction-form" onSubmit={handleSubmit} ref={formRef}>
                <div>
                    <label htmlFor="transactionDollarAmount">Enter dollar amount of transaction:</label>
                    <div>
                        <span>$<input type="number" name="transactionDollarAmount" id="transactionDollarAmount" min="0" max="9999" value={dollars} onChange={handleDollarChange}/></span>
                    </div>
                    
                </div>
                <div>
                    <label htmlFor="transactionCategory">Set a category for the transaction:</label>
                    <div>
                        <select name="transactionCategory" value={selectedCategory} onChange={handleCategory}>
                            {categories.categories.map(category => <option key={category.id} value={category.id}>{category.categoryName}</option>)}
                        </select>
                    </div>
                </div>
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
                

                <button>Submit</button>
            </form>
        </div>
    )
}
