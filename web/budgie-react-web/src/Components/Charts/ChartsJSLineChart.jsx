import React, { useContext, useState, useEffect, useRef } from 'react'

import {  Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

import { CategoryContext, CategoryManager } from '../../Contexts/CategoryManager/CategoryManager'
import { TransactionContext, TransactionsManager } from '../../Contexts/TransactionsManager/TransactionsManager'

import { ColorBank } from '../../Util/ColorBank'
import { sortByTransactionDate } from '../../SortingFunctions/TransactionSorting';

import { CurrencyFormatter } from '../../Util/CurrencyFormatter';


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

    function createDownGradient(ctx, area, type) {
        let colorStart = ""
        let colorMid = ""
        let colorEnd = ""

        if(type === "income") {
            colorStart = "#4CAF5022"
            colorMid = "#4CAF5022"
            colorEnd = "#00BCD422"
        } else if (type === "expense"){
            colorStart = "#F4433622"
            colorMid = "#E91E6322"
            colorEnd = "#9C27B022"
        } else {
            colorStart = "#8E24AA22"
            colorMid = "#673AB722"
            colorEnd = "#3F51B522"
        }
      
        const gradient = ctx.createLinearGradient(0, area.height, area.right, area.height);
      
        gradient.addColorStop(0, colorStart);
        gradient.addColorStop(1, colorEnd);
      
        return gradient;
    }

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
      
        const gradient = ctx.createLinearGradient(0, area.height/2, area.right, area.height/2);
      
        gradient.addColorStop(0, colorStart);
        gradient.addColorStop(0.5, colorMid);
        gradient.addColorStop(1, colorEnd);
      
        return gradient;
      }

    const buildChart = ({transactions, filter, chart}) => {



        const chartData = { 
            labels: [],
            datasets: [],
        };
        
        const incomeDataset = {
            label: "Income",
            data: [],
            borderColor: chart ? createGradient(chart.ctx, chart.chartArea, "income") :"green",
            backgroundColor: chart ? createGradient(chart.ctx, chart.chartArea, "income") :"green",
            color: [],
            tension: 0.3,
            fill: {
                target: "origin",
                above: chart ? createDownGradient(chart.ctx, chart.chartArea, "income"): "green",

            },
        }

        const expenseDataset = {
            label: "Expenses",
            data: [],
            borderColor: chart ? createGradient(chart.ctx, chart.chartArea, "expense") : "red",
            backgroundColor: chart ? createGradient(chart.ctx, chart.chartArea, "expense") : "red",
            color: [],
            tension: 0.3,
            fill: {
                target: "origin",
                below: chart ? createDownGradient(chart.ctx, chart.chartArea, "expense"): "red",
            },
        }

        const resultDataset = {
            label: "Result",
            data: [],
            borderColor: chart ? createGradient(chart.ctx, chart.chartArea) : "purple",
            backgroundColor: chart ? createGradient(chart.ctx, chart.chartArea) : "purple",
            color: [],
            tension: 0.3,
            fill: {
                target: "origin",
                above: chart ? createDownGradient(chart.ctx, chart.chartArea): "purple",
                below: chart ? createDownGradient(chart.ctx, chart.chartArea): "purple",
            },
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
        Legend, Filler);

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                labels: {
                    border: "none",
                    color: "grey"
                }
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return CurrencyFormatter.format(context.parsed.y);
                    }
                }
            }   
        },
        scales: {
            y: {
                ticks: {
                    callback: (value, index, labels) => {
                        return CurrencyFormatter.format(value.toFixed(2));
                    }
                }
            }
        },
        animations: {
            tension: {
              easing: 'linear',
            }
          },
        
      };

      let data = buildChart({transactions: transactionContext.transactions, filter: props.filter, chart})


    
    return (
        <div className="chart-js-container">
            <Line ref={chartRef} data={data} options={options}/>
        </div>         
    )
}
