import React, { useContext, useState, useEffect } from "react";
import { TransactionContext } from "../../../Contexts/TransactionsManager/TransactionsManager";

import MoneyDisplay from "../../MoneyDisplay/MoneyDisplay";
import TransactionItem from "../TransactionItem/TransactionItem";

import ChartBlock from "../../Charts/ChartBlock";

import { sortingController } from "../../../SortingFunctions/TransactionSorting";
import AddBudgetItem from "../AddBudgetItem/AddBudgetItem";

import { ReactComponent as ShowIcon } from "../../../img/show.svg";
import { ReactComponent as HideIcon } from "../../../img/hide.svg";
import PaginationBar from "../../PaginationBar/PaginationBar";

import { ReactComponent as UpSortArrow } from "../../../img/uparrow.svg";
import { ReactComponent as DownSortArrow } from "../../../img/downarrow.svg";

export default function TransactionList(props) {
  const transactionContext = useContext(TransactionContext);

  // amount | category | note | transactionDate
  const [sort, setSort] = useState("transactionDate");

  // descending | ascending
  const [ascending, setAscending] = useState(false);

  const [showAddForm, setShowAddForm] = useState(true);

  const [pageOffset, setPageOffset] = useState(0);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (props.filter === "expense") {
        const transactions = await transactionContext.getExpenseTransactions();
        console.log("EXP", transactions, transactionContext.transactions);
        setTransactions(transactions);
      } else if (props.filter === "income") {
        const transactions = await transactionContext.getIncomeTransactions();
        console.log("INC", transactions, transactionContext.transactions);
        setTransactions(transactions);
      } else {
        const transactions = transactionContext.transactions;
        setTransactions(transactions);
      }
    };

    fetchTransactions();
  }, [transactionContext.transactions]);

  const pageSize = 10;

  // calculate pages
  let calculatePages = Math.ceil(transactions.length / pageSize);

  // if empty, set to at least 1
  if (calculatePages === 0) {
    calculatePages = 1;
  }

  const pageCount = calculatePages;

  // move back a page if hgihest page is removed
  if (pageOffset + 1 > pageCount) {
    setPageOffset(pageCount - 1);
  }

  const nextPage = () => {
    if (pageOffset < pageCount - 1) {
      setPageOffset(pageOffset + 1);
    }
  };

  const lastPage = () => {
    if (pageOffset < pageCount - 1) {
      setPageOffset(pageCount - 1);
    }
  };

  const checkIfNextPage = () => {
    return pageOffset < pageCount - 1;
  };

  const previousPage = () => {
    if (pageOffset > 0) {
      setPageOffset(pageOffset - 1);
    }
  };
  const firstPage = () => {
    if (pageOffset > 0) {
      setPageOffset(0);
    }
  };

  const checkIfPreviousPage = () => {
    return pageOffset > 0;
  };

  const checkIfOnFirstPage = () => {
    return pageOffset === 0;
  };

  const checkIfOnLastPage = () => {
    return pageOffset === pageCount - 1;
  };

  const getTotal = () => {
    console.log(transactions);
    let value = 0;
    transactions.forEach((transaction) => {
      value += transaction.amount;
    });

    return value;
  };

  let changeSortToAmount = () => {
    if (sort !== "amount") {
      setSort("amount");
    } else {
      setAscending(!ascending);
    }
  };

  let changeSortToCategory = () => {
    if (sort !== "category") {
      setSort("category");
    } else {
      setAscending(!ascending);
    }
  };

  let changeSortToNote = () => {
    if (sort !== "note") {
      setSort("note");
    } else {
      setAscending(!ascending);
    }
  };

  let changeSortToDate = () => {
    if (sort !== "transactionDate") {
      setSort("transactionDate");
    } else {
      setAscending(!ascending);
    }
  };

  let sortTransactions = () => {
    try {
      return sortingController({
        sortType: sort,
        transactions: transactions,
        ascending,
      });
    } catch (err) {}
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="transaction-page">
      <div className="sum-line">
        <MoneyDisplay amount={getTotal()}></MoneyDisplay>
      </div>

      <ChartBlock filter={props.filter} />

      <div className="transaction-list-header">
        <div className="column">
          <div className="sortable-column" onClick={changeSortToAmount}>
            <div>Amount</div>
            <div className="sort-ui-container">
              {sort === "amount" ? provideSortingIcon(ascending) : null}
            </div>
          </div>
        </div>
        <div className="column">
          <div className="sortable-column" onClick={changeSortToCategory}>
            <div>Category</div>
            <div className="sort-ui-container">
              {sort === "category" ? provideSortingIcon(ascending) : null}
            </div>
          </div>
        </div>
        <div className="column">
          <div className="sortable-column" onClick={changeSortToNote}>
            <div>Note</div>
            <div className="sort-ui-container">
              {sort === "note" ? provideSortingIcon(ascending) : null}
            </div>
          </div>
        </div>
        <div className="column">
          <div className="sortable-column" onClick={changeSortToDate}>
            <div>Date</div>
            <div className="sort-ui-container">
              {sort === "transactionDate"
                ? provideSortingIcon(ascending)
                : null}
            </div>
          </div>
        </div>
        <div className="form-button-container">
          <div className="tool-tip">
            <div className="tool-tip-text">{showAddForm ? "Hide" : "Show"}</div>
            {props.showAdd ? (
              <button className="ui-icon" onClick={toggleAddForm}>
                {showAddFormIcon(showAddForm)}
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {showAddForm && props.showAdd ? (
        <AddBudgetItem income={determineFilter(props.filter)} />
      ) : (
        ""
      )}

      <div className="transaction-list">
        {sortTransactions()
          .slice(pageOffset * pageSize, pageOffset * pageSize + pageSize)
          .map((transaction) => (
            <TransactionItem
              key={transaction.id}
              id={transaction.id}
              dollars={transaction.amount}
              category={
                transaction.category ? transaction.category.categoryName : ""
              }
              note={transaction.note}
              transactionDate={transaction.transactionDate}
            ></TransactionItem>
          ))}
      </div>

      <PaginationBar
        checkIfNextPage={checkIfNextPage()}
        checkIfOnFirstPage={checkIfOnFirstPage()}
        checkIfPreviousPage={checkIfPreviousPage()}
        checkIfOnLastPage={checkIfOnLastPage()}
        nextPage={nextPage}
        previousPage={previousPage}
        firstPage={firstPage}
        lastPage={lastPage}
        pageOffset={pageOffset + 1}
        pageCount={pageCount}
      />
    </div>
  );
}

function determineFilter(filter) {
  return filter === "income" ? true : false;
}

function showAddFormIcon(showAddForm) {
  return showAddForm ? <ShowIcon /> : <HideIcon />;
}

function provideSortingIcon(ascending) {
  return !ascending ? (
    <UpSortArrow className="sort-ui-button" />
  ) : (
    <DownSortArrow className="sort-ui-button" />
  );
}
