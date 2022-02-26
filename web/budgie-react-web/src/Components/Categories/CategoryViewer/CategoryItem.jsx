import React, { useContext } from 'react'
import { CategoryContext } from '../../../Contexts/CategoryManager/CategoryManager'
import {ReactComponent as TrashIcon} from '../../../img/trashicon.svg'

export default function CategoryItem(props) {

    const categories = useContext(CategoryContext)

    const handleDelete = () => {
        categories.deleteCategory(props.id)
    }

    return (
        <div className="category-list-item">
            <span>{props.categoryName}</span>
            {props.categoryName != "None" ? <span><button className="ui-icon" onClick={handleDelete}><TrashIcon  /></button></span> : null}
        </div>
    )
}
