import React from 'react'
import { CategoryManager } from '../../../Contexts/CategoryManager/CategoryManager'
import CategoryList from '../../Transactions/TransactionList/CategoryList'
import AddCategoryItem from '../AddCategoryItem/AddCategoryItem'


export default function CategoryViewer() {
    return (
        <div>
            <CategoryManager>
                <AddCategoryItem />
                <div>
                    <CategoryList />
                </div>
            </CategoryManager>    
        </div>
    )
}
