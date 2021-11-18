import React from 'react'

export default function MoneyDisplay(props) {
    return (
        <div>
            { props.amount >= 0 ? `$${props.amount}` : `-$${props.amount * -1}` }
        </div>
    )
}
