import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as TransactionLogo } from "../../img/transactionarrows.svg";
import { ReactComponent as IncomeLogo } from "../../img/incomeicon.svg";
import { ReactComponent as ExpenseLogo } from "../../img/expenseicon.svg";

import { ReactComponent as CategoryLogo } from "../../img/categoryicon.svg";

export default function NavigationBar() {
  return (
    <nav className="navbar">
      <ul className="nav-ul">
        <li className="nav-li">
          <Link className="link neutral-number" to="/">
            <TransactionLogo className="nav-icon" />
            Transactions
          </Link>
        </li>
        <li className="nav-li">
          <Link className="link positive-number" to="/income">
            <IncomeLogo className="nav-icon" />
            Income
          </Link>
        </li>
        <li className="nav-li">
          <Link className="link negative-number" to="/expenses">
            <ExpenseLogo className="nav-icon" />
            Expenses
          </Link>
        </li>
        <li className="nav-li">
          <Link className="link category-display" to="/categories">
            <CategoryLogo className="nav-icon" />
            Categories
          </Link>
        </li>
      </ul>
    </nav>
  );
}
