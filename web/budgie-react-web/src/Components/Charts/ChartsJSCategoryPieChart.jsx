import React, { useContext } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import {
  CategoryContext,
  CategoryManager,
} from "../../Contexts/CategoryManager/CategoryManager";
import { TransactionContext } from "../../Contexts/TransactionsManager/TransactionsManager";

import { CurrencyFormatter } from "../../Util/CurrencyFormatter";

import { ColorBankExpense, ColorBankIncome } from "../../Util/ColorBank";

export default function ChartsJSCategoryPieChart(props) {
  const transactionContext = useContext(TransactionContext);

  const buildChart = (categories) => {
    let chartData = {
      labels: [],
      datasets: [
        {
          label: "Categories",
          data: [],
          backgroundColor: [],
          color: [],
        },
      ],
    };

    categories.categories.forEach((category, index) => {
      let runningTotal = 0;
      transactionContext.transactions.forEach((transaction) => {
        if (transaction.category.categoryName === category.categoryName) {
          runningTotal += Math.abs(transaction.amount);
        }
      });
      if (runningTotal !== 0) {
        let color = pickColor(index);
        chartData.labels.push(category.categoryName);
        chartData.datasets[0].data.push(runningTotal);
        chartData.datasets[0].backgroundColor.push(color);
        chartData.datasets[0].color.push(color);
      }
    });

    return chartData;
  };

  const pickColor = (index) => {
    if (props.filter === "income") {
      return ColorBankIncome[index % ColorBankIncome.length];
    } else {
      return ColorBankExpense[index % ColorBankExpense.length];
    }
  };

  ChartJS.register(ArcElement, Tooltip, Legend);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "grey",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return CurrencyFormatter.format(context.parsed);
          },
          title: (context) => {
            return context[0].label;
          },
        },
      },
    },
  };

  return (
    <CategoryManager>
      <CategoryContext.Consumer>
        {(categories) => {
          let data = buildChart(categories);
          return (
            <div className="chart-js-container">
              <Doughnut data={data} options={options} />
            </div>
          );
        }}
      </CategoryContext.Consumer>
    </CategoryManager>
  );
}
