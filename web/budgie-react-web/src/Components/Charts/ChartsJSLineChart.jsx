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
    const [chart, setChart] = useState(null)


    const chartRef = useRef(null);

    useEffect(() => {
        let chart = chartRef.current


        if(!chart) {
            return
        }

        setChart(chart)
    }, [])

    function createGradient(ctx, area, type) {
        let colorStart = ""
        let colorMid = ""
        let colorEnd = ""
        

        if(type === "income") {
            colorStart = "#4CAF50"
            colorMid = "#4CAF50"
            colorEnd = "#00BCD4"
        } else if (type === "expense"){
            colorStart = "#F44336"
            colorMid = "#E91E63"
            colorEnd = "#9C27B0"
        } else {
            colorStart = "#8E24AA"
            colorMid = "#673AB7"
            colorEnd = "#3F51B5"
        }
      
        const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
      
        gradient.addColorStop(0, colorStart);
        gradient.addColorStop(0.5, colorMid);
        gradient.addColorStop(1, colorEnd);

        console.log("grad", gradient)
      
        return gradient;
      }

    const buildChart = ({transactions, filter, chart}) => {
        const chartData = { 
            labels: [],
            datasets: []
        };

        const incomeDataset = {
            label: "Income",
            data: [],
            borderColor: chart ? createGradient(chart.ctx, chart.chartArea, "income") :"green",
            color: []
        }

        const expenseDataset = {
            label: "Expenses",
            data: [],
            borderColor: chart ? createGradient(chart.ctx, chart.chartArea, "expense") : "red",
            color: []
        }

        const resultDataset = {
            label: "Result",
            data: [],
            borderColor: chart ? createGradient(chart.ctx, chart.chartArea) : "purple",
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

      if(chart) {
          console.log("yes", chart)
      }

      let data = buildChart({transactions: transactionContext.transactions, filter: props.filter, chart})
    
    return (

            <div className="chart-js-container">
                <Line ref={chartRef} data={data} options={options}/>
            </div>         

    )
}
