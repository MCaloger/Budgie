import React, { useContext } from 'react'
import { CategoryContext } from '../../../Contexts/CategoryManager/CategoryManager';

export default function CategoryList(props) {

    const categories = useContext(CategoryContext);

    return (
        <div className="transaction-list">
            <div className="transaction-list-header">
                <div>Name</div>
            </div>
            { categories.categories.map(category => <div key={category.id} data-id={category.id}>{category.categoryName}</div>) }
        </div>
    )
}
