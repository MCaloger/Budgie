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
import CategoryViewer from "../Categories/CategoryViewer/CategoryViewer";
import { CategoryManager } from "../../Contexts/CategoryManager/CategoryManager";

export default function AppRouter() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <div className="content">
        <Switch>
          <Route path="/transactions">
            <TransactionViewer />
          </Route>
          <CategoryManager>
            <Route path="/income">
              <IncomeViewer />
            </Route>
            <Route path="/expenses">
              <ExpenseViewer />
            </Route>
            <Route path="/categories">
              <CategoryViewer />
            </Route>
          </CategoryManager>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}