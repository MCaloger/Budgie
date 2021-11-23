import React from 'react'
import { CategoryManager } from '../../../Contexts/CategoryManager/CategoryManager'
import CategoryList from './CategoryList'
import AddCategoryItem from '../AddCategoryItem/AddCategoryItem'


export default function CategoryViewer() {
    return (
        <div className="content-pane">
            
            <CategoryManager>
                
                <div className="transaction-viewer-container">
                    <h1>Categories</h1>
                    <CategoryList />
                    
                </div>
                <div className="transaction-add-container">
                    <h1>Add Category</h1>
                    <AddCategoryItem />
                </div>

            </CategoryManager>    
        </div>
    )
}
