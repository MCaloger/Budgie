import React from "react";
import { TransactionsManager } from "../../../Contexts/TransactionsManager/TransactionsManager";
import TransactionList from "../TransactionList/TransactionList";

export default function ExpenseViewer() {
  return (
    <div className="content-pane">
      <TransactionsManager>
        <div className="transaction-viewer-container">
          <div className="header-text negative-number">Expenses</div>
          <TransactionList filter="expense" showAdd={true} />
        </div>
      </TransactionsManager>
    </div>
  );
}
