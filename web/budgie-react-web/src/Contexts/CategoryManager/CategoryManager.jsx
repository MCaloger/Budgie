import React, { useEffect, useState } from "react";

export const CategoryContext = React.createContext();

export function CategoryManager(props) {
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        updateCategories()
    }, []); 

    function getCategoryById(id) {
        // cast to int
        const intId = parseInt(id)

        // check if id matches
        const matchingCategory = categories.find(category => category.id === intId);

        return matchingCategory
    }

    async function addCategory(categoryName, isIncome) {
        try {
            const response = await fetch("http://127.0.0.1:8080/categories/add", {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
                body: {categoryName, isIncome}
            })
            
            await updateCategories()
        } catch (error) {
            console.error('error', error)
        }
        
    }

    async function updateCategories() { 
        try {
            const response = await fetch("http://127.0.0.1:8080/categories/all", {
                method: 'GET', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })

            const data = await response.json();

            await setCategories(data)
        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <CategoryContext.Provider value={{ categories, setCategories, addCategory, updateCategories, getCategoryById }}>
            { props.children }
        </CategoryContext.Provider>
    )
}
