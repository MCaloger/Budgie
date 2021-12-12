import React, { useContext, useState, useEffect, useRef } from 'react'

import {  Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';

import { CategoryContext, CategoryManager } from '../../Contexts/CategoryManager/CategoryManager'
import { TransactionContext, TransactionsManager } from '../../Contexts/TransactionsManager/TransactionsManager'

import { ColorBank } from '../../Util/ColorBank'
import { sortByTransactionDate } from '../../SortingFunctions/TransactionSorting';

export default function ChartsJSLineChart(props) {
    const transactionContext = useContext(TransactionContext)
    const categoryContext = useContext(CategoryContext)

    const chartRef = useRef(null);

    const buildChart = ({transactions, filter}) => {
        const chartData = { 
            labels: [],
            datasets: []
        };

        const incomeDataset = {
            label: "Income",
            data: [],
            borderColor: "green",
            backgroundColor: "green",
            color: []
        }

        const expenseDataset = {
            label: "Expenses",
            data: [],
            borderColor: "red",
            backgroundColor: "red",
            color: []
        }

        const resultDataset = {
            label: "Result",
            data: [],
            borderColor: "purple",
            backgroundColor: "purple",
            color: []
        }


        let sortedTransactions = sortByTransactionDate({transactions: transactions, ascending: true})

        let dates = []

        sortedTransactions.forEach(transaction => {
            if(!dates.includes(transaction.transactionDate)) {
                dates.push(transaction.transactionDate)
            }
        })

            let runningTotal = 0;
            let positiveTotal = 0;
            let negativeTotal = 0;

        dates.forEach(date => {
            
            let resultTotal = 0;

            sortedTransactions.forEach(transaction => {
                if(transaction.transactionDate === date) {
                    const amount = transaction.amount;
                    if(amount >= 0) {
                        positiveTotal += amount
                    } else {
                        negativeTotal += amount
                    }
                    
                }
            })

            resultTotal = positiveTotal - Math.abs(negativeTotal)

            chartData.labels.push(date)
            incomeDataset.data.push(positiveTotal)
            expenseDataset.data.push(negativeTotal)
            resultDataset.data.push(resultTotal)
 
        })

        if(filter === "income") {
            chartData.datasets.push(incomeDataset)
        } else if(filter === "expense") {
            chartData.datasets.push(expenseDataset)
        } else {
            chartData.datasets.push(incomeDataset)
            chartData.datasets.push(expenseDataset)
            chartData.datasets.push(resultDataset)
        }

        return chartData
    }

    ChartJS.register(CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
          legend: {
            labels: {
                color: "white"
            }
        },
        },
      };
    
    return (

            <TransactionContext.Consumer> 
                {transactions => {
                    let data = buildChart({transactions: transactions.transactions, filter: props.filter})
                    return (
                        <div className="chart-js-container">
                            <Line data={data} options={options}/>
                        </div>
                    )
                }}
            </TransactionContext.Consumer>
    )
}
