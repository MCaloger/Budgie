import React, { useState, useContext, useEffect, useRef } from 'react'
import { CategoryContext } from '../../../Contexts/CategoryManager/CategoryManager';

export default function AddBudgetItem(props) {

    const categories = useContext(CategoryContext);

    const [name, setName] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        categories.addCategory(name);
        resetForm();
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const resetForm = () => {
        setName("")
    }

    return (
        <div>
            <form className="add-transaction-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="categoryName">Enter name of category:</label>
                    <div>
                        <input type="text" name="categoryName" id="categoryName" value={name} onChange={handleNameChange}/>
                    </div>
                    
                </div>
            
                <button>Submit</button>
            </form>
        </div>
    )
}
