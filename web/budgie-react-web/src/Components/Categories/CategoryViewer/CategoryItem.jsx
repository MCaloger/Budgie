import React, { useContext } from 'react'
import { CategoryContext } from '../../../Contexts/CategoryManager/CategoryManager'

export default function CategoryItem(props) {

    const categories = useContext(CategoryContext)

    const handleDelete = () => {
        categories.deleteCategory(props.id)
    }

    return (
        <div className="category-list-item">
            <span>{props.categoryName}</span>
            {props.categoryName != "None" ? <span><button onClick={handleDelete}>Delete</button></span> : null}
        </div>
    )
}
