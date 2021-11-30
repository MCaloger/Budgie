import React, { useContext, useState, useEffect } from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { CategoryContext, CategoryManager } from '../../Contexts/CategoryManager/CategoryManager'
import { TransactionContext } from '../../Contexts/TransactionsManager/TransactionsManager'

import { ColorBank } from '../../Util/ColorBank'

export default function ChartsJSCategoryPieChart() {
    const transactionContext = useContext(TransactionContext)
    const categoryContext = useContext(CategoryContext)

    const buildChart = (categories) => {
        let chartData = { 
            labels: [],
            datasets: [
                {
                    label: "Categories",
                    data: [],
                    backgroundColor: []
                }
            ] 
        };

        categories.categories.forEach((category, index) => {
            let runningTotal = 0;
            transactionContext.transactions.forEach(transaction => {
                if(transaction.category.categoryName === category.categoryName) {
                    runningTotal += Math.abs(transaction.amount);
                }
            })
            if(runningTotal != 0) {
                chartData.labels.push(category.categoryName)
                chartData.datasets[0].data.push(runningTotal)
                chartData.datasets[0].backgroundColor.push(ColorBank[index % ColorBank.length])
            }
            
        });

        return chartData
    }

    const pickColor = () => {
        let color = ColorBank[Math.floor(Math.random()*ColorBank.length)]
        console.log("col", color)
        return color
    }

    ChartJS.register(ArcElement, Tooltip, Legend);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
    
    return (
        <CategoryManager>
            <CategoryContext.Consumer> 
                {categories => {
                    let data = buildChart(categories)
                    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
                    console.log('piedata', data, 'col', ColorBank)
                    return (
                        <div className="chart-js-container">
                            <Doughnut data={data} options={options}/>
                        </div>
                        
                    )
                }}
            </CategoryContext.Consumer>
               
        </CategoryManager>
    )
}
