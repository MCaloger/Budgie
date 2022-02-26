import React, { useState, useContext, useEffect, useRef } from 'react'
import { CategoryContext } from '../../../Contexts/CategoryManager/CategoryManager';
import {ReactComponent as AddIcon} from '../../../img/addicon.svg'

export default function AddCategoryItem(props) {

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
            <form className="add-transaction-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="categoryName">Enter name of category:</label>
                    <div>
                        <input type="text" name="categoryName" id="categoryName" value={name} onChange={handleNameChange}/>
                    </div>
                    
                </div>
            
                <div className='show-hide-button'>
                    <button class="ui-icon"><AddIcon  /></button>
                </div>
            </form>
    )
}
