import React, { useContext, useState } from 'react'
import { CategoryContext } from '../../../Contexts/CategoryManager/CategoryManager';
import CategoryItem from './CategoryItem';
import AddCategoryItem from '../AddCategoryItem/AddCategoryItem';

import {ReactComponent as ShowIcon} from '../../../img/show.svg'
import {ReactComponent as HideIcon} from '../../../img/hide.svg'

export default function CategoryList(props) {

    const categories = useContext(CategoryContext);

    const [showAdd, setShowAdd] = useState(true)

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

    const toggleShowAdd = () => {
        setShowAdd(!showAdd)
    }


    return (
        <div className="transaction-list">
            <div className="transaction-list-header">
                <div>Name</div>
                <div className="show-hide-button" onClick={toggleShowAdd}>{showAdd ? <ShowIcon class="ui-icon" /> : <HideIcon class="ui-icon"/>}</div>
            </div>

            {showAdd ? <AddCategoryItem /> : ""}

            { sortedCategories.map(category => <CategoryItem key={category.id} id={category.id} categoryName={category.categoryName}></CategoryItem>) }
        </div>
    )
}
