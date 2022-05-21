import React from "react";
import { CurrencyFormatter } from "../../Util/CurrencyFormatter";

export default function MoneyDisplay(props) {
  let positive = CurrencyFormatter.format(props.amount.toFixed(2));
  let negative = CurrencyFormatter.format((props.amount * -1).toFixed(2));

  return (
    <div className={props.amount >= 0 ? "positive-number" : "negative-number"}>
      {props.amount >= 0 ? `${positive}` : `-${negative}`}
    </div>
  );
}
