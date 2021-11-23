import React, { useContext } from 'react'
import { CategoryContext } from '../../../Contexts/CategoryManager/CategoryManager';
import CategoryItem from './CategoryItem';

export default function CategoryList(props) {

    const categories = useContext(CategoryContext);



    return (
        <div className="transaction-list">
            <div className="transaction-list-header">
                <div>Name</div>
            </div>
            { categories.categories.map(category => <CategoryItem key={category.id} id={category.id} categoryName={category.categoryName}></CategoryItem>) }
        </div>
    )
}
