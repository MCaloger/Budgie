import React, { useContext, useState, useEffect } from 'react'
import { ResponsiveContainer, PieChart, Pie, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import { CategoryContext, CategoryManager } from '../../Contexts/CategoryManager/CategoryManager'
import { TransactionContext } from '../../Contexts/TransactionsManager/TransactionsManager'

import { ColorBank } from '../../Util/ColorBank'


export default function RechartsCategoryBarChart(props) {

    const transactionContext = useContext(TransactionContext)
    const categoryContext = useContext(CategoryContext)

    const buildChart = (categories) => {
        let chartData = [];
        categories.categories.forEach(category => {
            let runningTotal = 0;
            transactionContext.transactions.forEach(transaction => {
                if(transaction.category.categoryName === category.categoryName) {
                    runningTotal += transaction.amount;
                }
            })

            chartData.push({name: category.categoryName, amount: runningTotal})
        });

        return chartData
    }

    const pickColor = () => {
        let color = ColorBank[Math.floor(Math.random()*ColorBank.length)]
        console.log("col", color)
        return color
    }
    
    return (
        <CategoryManager>
            <CategoryContext.Consumer> 
                {categories => {
                    let data = buildChart(categories)
                    return (
                        <ResponsiveContainer width="100%" height="100%">
                            
                            <BarChart width={730} height={250} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="amount" fill={pickColor()} />
                            </BarChart>


                        </ResponsiveContainer>   
                    )
                }}
            </CategoryContext.Consumer>
               
        </CategoryManager>
    )
}
