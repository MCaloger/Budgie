import React, { useState } from 'react'
import { CategoryManager } from '../../../Contexts/CategoryManager/CategoryManager'
import { CategoryContext } from '../../../Contexts/CategoryManager/CategoryManager'

export default function CategoryPicker(props) {

  return (
    <CategoryManager>

            <label htmlFor="transactionCategory">Set a category for the transaction:</label>
            <div className="input-container">
              <select name="transactionCategory" value={props.selectedCategory} onChange={props.handleCategory}>
            <CategoryContext.Consumer>
                {categories => categories.categories.map(category => (<option key={category.id} value={category.id}>{category.categoryName}</option>))}
            </CategoryContext.Consumer> 
            </select>
            </div>
            

    </CategoryManager>
  )
}
