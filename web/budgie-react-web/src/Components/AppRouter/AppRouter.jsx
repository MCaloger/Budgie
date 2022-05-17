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
import Home from "../../Pages/Home";
import { NotificationManager } from "../../Contexts/NotificationManager/NotificationManager";
import NotificationContainer from "../Notifications/NotificationContainer";
import Footer from "../Footer/Footer";

export default function AppRouter() {
  return (
  <div className="content">
    <Router baseName="/">
      <NavigationBar></NavigationBar>
      
        <Switch>
          <NotificationManager>
            <CategoryManager>
              <Route exact path="/">
                <TransactionViewer />
              </Route>
                <Route path="/income">
                  <IncomeViewer />
                </Route>
                <Route path="/expenses">
                  <ExpenseViewer />
                </Route>
                <Route path="/categories">
                  <CategoryViewer />
                </Route>
                <NotificationContainer />
            </CategoryManager>   
          </NotificationManager>
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
      <Footer />
    </Router>
    </div>
  );
}