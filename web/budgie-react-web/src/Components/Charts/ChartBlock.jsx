import React from "react";
import ChartsJSCategoryPieChart from "./ChartsJSCategoryPieChart";
import ChartsJSLineChart from "./ChartsJSLineChart";

export default function ChartBlock(props) {
  return (
    <div className="chart-block">
      <div className="chart-display">
        <ChartsJSLineChart filter={props.filter} />
        {props.filter === "income" || props.filter === "expense" ? (
          <ChartsJSCategoryPieChart filter={props.filter} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
