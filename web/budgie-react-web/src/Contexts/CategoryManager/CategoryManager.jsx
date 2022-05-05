import React, { useEffect, useState } from "react";
import { API_ROUTE } from "../../app-settings";

export const CategoryContext = React.createContext();

export function CategoryManager(props) {
    
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        updateCategories()
    }, []); 

    async function getCategoryById(id) {
        try {
            const response = await fetch(`${API_ROUTE}/categories/${id}`, {
            method: 'GET', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }})


            const data = await response.json();
            
            return data

        } catch (error) {
            console.error('error', error)
        }
    }

    async function addCategory(categoryName) {
        try {
            const body = JSON.stringify({categoryName});

            const response = await fetch(`${API_ROUTE}/categories/add`, {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
                body
            })
            
            await updateCategories()
        } catch (error) {
            console.error('error', error)
        }
        
    }

    async function updateCategories() { 
        try {
            const response = await fetch(`${API_ROUTE}/categories/all`, {
                method: 'GET', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })

            const data = await response.json();

            setCategories(data)
        } catch (error) {
            console.error('error', error)
        }
    }

    async function deleteCategory(id) { 
        try {
            const response = await fetch(`${API_ROUTE}/categories/delete?id=${id}`, {
                method: 'DELETE', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })

            updateCategories();
        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <CategoryContext.Provider value={{ categories, setCategories, addCategory, updateCategories, getCategoryById, deleteCategory }}>
            { props.children }
        </CategoryContext.Provider>
    )
}
