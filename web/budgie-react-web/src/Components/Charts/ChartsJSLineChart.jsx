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

import { TransactionContext } from '../../Contexts/TransactionsManager/TransactionsManager'


import { sortByTransactionDate } from '../../SortingFunctions/TransactionSorting';

import { CurrencyFormatter } from '../../Util/CurrencyFormatter';


export default function ChartsJSLineChart(props) {
    const transactionContext = useContext(TransactionContext)

    const [chart, setChart] = useState(null)

    const chartRef = useRef(null);

    // register ChartJS plugins
    ChartJS.register(CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend, Filler);

    useEffect(() => {
        let chartElement = chartRef.current

        if(!chartElement) {
            return
        }

        setChart(chartElement)
        
    }, [])

    function createDownGradient(ctx, area, type) {
        let colorStart = ""
        let colorEnd = ""

        if(type === "income") {
            colorStart = "#4CAF5022"
            colorEnd = "#00BCD422"
        } else if (type === "expense"){
            colorStart = "#F4433622"
            colorEnd = "#9C27B022"
        } else {
            colorStart = "#8E24AA22"
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

    function provideGradient(filter) {
        return chart ? createGradient(chart.ctx, chart.chartArea, filter) : null;
    }

    function provideDownGradient(filter) {
        return chart ? createDownGradient(chart.ctx, chart.chartArea, filter) : null;
    }

    const buildChart = ({transactions, filter}) => {

        const chartData = { 
            labels: [],
            datasets: [],
        };
        
        const incomeDataset = {
            label: "Income",
            data: [],
            borderColor: provideGradient("income"),
            backgroundColor: provideGradient("income"),
            color: [],
            tension: 0.3,
            fill: {
                target: "origin",
                above: provideDownGradient("income"),

            },
        }

        const expenseDataset = {
            label: "Expenses",
            data: [],
            borderColor: provideGradient("expense"),
            backgroundColor: provideGradient("expense"),
            color: [],
            tension: 0.3,
            fill: {
                target: "origin",
                below: provideDownGradient("expense")
            },
        }

        const resultDataset = {
            label: "Result",
            data: [],
            borderColor: provideGradient(),
            backgroundColor: provideGradient(),
            color: [],
            tension: 0.3,
            fill: {
                target: "origin",
                above: provideDownGradient(),
                below: provideDownGradient(),
            },
        }


        let sortedTransactions = sortByTransactionDate({transactions: transactions, ascending: true})

        let dates = []

        sortedTransactions.forEach(transaction => {
            if(!dates.includes(transaction.transactionDate)) {
                dates.push(transaction.transactionDate)
            }
        })

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
                    callback: (value) => {
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

      let data = buildChart({transactions: transactionContext.transactions, filter: props.filter})


    
    return (
        <div className="chart-js-container">
            <Line ref={chartRef} data={data} options={options}/>
        </div>         
    )
}
