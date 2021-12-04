import React, { useContext, useState, useEffect } from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, LabelList } from 'recharts'
import { CategoryContext, CategoryManager } from '../../Contexts/CategoryManager/CategoryManager'
import { TransactionContext } from '../../Contexts/TransactionsManager/TransactionsManager'

import { ColorBank } from '../../Util/ColorBank'

export default function RechartsCategoryPieChart() {
    const transactionContext = useContext(TransactionContext)
    const categoryContext = useContext(CategoryContext)

    const buildChart = (categories) => {
        let chartData = [];
        categories.categories.forEach(category => {
            let runningTotal = 0;
            transactionContext.transactions.forEach(transaction => {
                if(transaction.category.categoryName === category.categoryName) {
                    runningTotal += Math.abs(transaction.amount);
                }
            })
            if(runningTotal != 0) {
                chartData.push({name: category.categoryName, amount: runningTotal})
            }
            
        });

        return chartData
    }

    const pickColor = () => {
        let color = ColorBank[Math.floor(Math.random()*ColorBank.length)]
        return color
    }
    
    return (
        <CategoryManager>
            <CategoryContext.Consumer> 
                {categories => {
                    let data = buildChart(categories)
                    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
                    return (
                        <ResponsiveContainer>
                            
                            <PieChart>
                                
                                <Pie data={data} dataKey="amount" nameKey="name" cx="50%" cy="50%" fill="#8884d8" startAngle={180}
            endAngle={0}>
                                <LabelList dataKey="name" position="inside"/>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={ColorBank[index % ColorBank.length]} />
                                ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    )
                }}
            </CategoryContext.Consumer>
               
        </CategoryManager>
    )
}
