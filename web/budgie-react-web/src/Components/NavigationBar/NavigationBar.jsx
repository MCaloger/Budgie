import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function NavigationBar() {
    return (
        <div className="navbar" >
            <nav>
                <ul className="nav-ul">
                    <li className="nav-li">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/transactions">Transactions</Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/income">Income</Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/expenses">Expenses</Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/categories">Categories</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
