import React, { useState, useContext} from 'react'
import { CategoryContext } from '../../../Contexts/CategoryManager/CategoryManager';
import {ReactComponent as AddIcon} from '../../../img/addicon.svg'
import Tooltip from '../../Tooltip/Tooltip';

export default function AddCategoryItem() {

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
                <div className="input-container">
                    <input type="text" name="categoryName" id="categoryName" placeholder="Category Name" value={name} onChange={handleNameChange}/>
                </div>
                
            </div>
            
            <div className='show-hide-button'>
                <Tooltip text="Add">
                    <button className="ui-icon"><AddIcon  /></button>
                </Tooltip>
            </div>
        </form>
    )
}
