import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavigationBar from "../NavigationBar/NavigationBar";
import TransactionViewer from "../Transactions/TransactionViewer/TransactionViewer";
import ExpenseViewer from "../Transactions/TransactionViewer/ExpenseViewer";
import IncomeViewer from "../Transactions/TransactionViewer/IncomeViewer"; 

export default function AppRouter() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <div className="content">
        <Switch>
          <Route path="/transactions">
            <TransactionViewer />
          </Route>
          <Route path="/income">
            <IncomeViewer />
          </Route>
          <Route path="/expenses">
            <ExpenseViewer />
          </Route>
          <Route path="/categories">
            <div>Categories</div>
          </Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}