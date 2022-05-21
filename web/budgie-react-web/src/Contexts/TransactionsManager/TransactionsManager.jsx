import React, { useState, useEffect, useContext } from "react";
import { API_ROUTE } from "../../app-settings";
import { CategoryContext } from "../CategoryManager/CategoryManager";
import { NotificationContext } from "../NotificationManager/NotificationManager";

export const TransactionContext = React.createContext();

export const TransactionsManager = (props) => {
  const categories = useContext(CategoryContext);
  const notifications = useContext(NotificationContext);

  let [transactions, setTransactions] = useState([]);

  useEffect(() => {
    updateTransactions();
  }, []);

  async function addTransaction(amount, category, note, transactionDate) {
    // fetch Catgeory from categoryID
    const categoryObject = await categories.getCategoryById(category);

    // convert payload to json
    let url = "";

    // route url based on income or expense
    if (amount >= 0) {
      url = `${API_ROUTE}/transactions/addIncome`;
    } else {
      url = `${API_ROUTE}/transactions/addExpense`;
    }
    const body = JSON.stringify({
      amount,
      category: categoryObject,
      note,
      transactionDate,
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
      });

      const data = await response.json();

      await notifications.addNotification({
        success: data.success,
        message: data.message,
      });
    } catch (error) {
      console.error("error", error);
    }

    await updateTransactions();
  }

  async function deleteTransaction(id) {
    try {
      const response = await fetch(
        `${API_ROUTE}/transactions/delete/?id=${id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      await notifications.addNotification({
        success: data.success,
        message: data.message,
      });

      await updateTransactions();
    } catch (error) {
      console.error("error", error);
    }
  }

  async function updateTransactions() {
    try {
      const response = await fetch(`${API_ROUTE}/transactions/all`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      await setTransactions(data);
    } catch (error) {
      console.error("error", error);
    }
  }

  async function getTransactionById(id) {
    // check if id matches
    return transactions.find((transaction) => transaction.id === parseInt(id));
  }

  async function getIncomeTransactions() {
    return transactions.filter((transaction) => transaction.amount >= 0);
  }

  async function getExpenseTransactions() {
    return transactions.filter((transaction) => transaction.amount < 0);
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        addTransaction,
        updateTransactions,
        deleteTransaction,
        getIncomeTransactions,
        getExpenseTransactions,
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};
