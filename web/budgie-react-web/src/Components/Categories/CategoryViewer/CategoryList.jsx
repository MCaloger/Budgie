import React, { useContext } from 'react'
import { CategoryContext } from '../../../Contexts/CategoryManager/CategoryManager';
import CategoryItem from './CategoryItem';

export default function CategoryList(props) {

    const categories = useContext(CategoryContext);

    const sortedCategories = categories.categories.sort((a, b) => {
        let categoryNameA = a.categoryName.toUpperCase();
        let categoryNameB = b.categoryName.toUpperCase();

        //sort "None" to bottom
        if(categoryNameA === "NONE") {
            return 1
        }
        if(categoryNameB === "NONE") {
            return -1
        }

        if(categoryNameA > categoryNameB) {
            return 1;
        }

        if(categoryNameA < categoryNameB) {
            return -1;
        }
        
        return 0;
    })


    return (
        <div className="transaction-list">
            <div className="transaction-list-header">
                <div>Name</div>
            </div>
            { sortedCategories.map(category => <CategoryItem key={category.id} id={category.id} categoryName={category.categoryName}></CategoryItem>) }
        </div>
    )
}
