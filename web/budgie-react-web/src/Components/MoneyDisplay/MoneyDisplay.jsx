import React from 'react'

export default function MoneyDisplay(props) {

    let positive = props.amount.toFixed(2);
    let negative = (props.amount * -1).toFixed(2)

    return (
        <div className={props.amount >= 0 ? "positive-number" : "negative-number"}>
            { props.amount >= 0 ? `$${positive}` : `-$${negative}` }
        </div>
    )
}
