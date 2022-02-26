import React, { useState } from 'react'

export default function MoneyInput(props) {

    const [display, setDisplay] = useState("0.00");

    const handleMoney = (e) => {
        let original = e.target.value;
        let split = original.split(".")
        console.log(split, original)
        let dollars = 0;
        let cents = "00";

        // check if cents are added
        if(original === split[0]) {
            dollars = original;

            // no cents added
            setDisplay(`${dollars}.00`)

            props.setDollars(dollars)
        } else {
            // cents added

            // check if dollar amount is added
            dollars = parseInt(split[0])
            if(isNaN(dollars)) {
                dollars = "0"
            }
            
            cents = split[1];

            if(cents.length > 1) {
                cents = cents.substring(0, 2);
            } else {
                cents += "0"
            }

            setDisplay(`${dollars}.${cents}`)
            props.setDollars(dollars)
            props.setCents(cents)
        }

    }

    const handleInputChange = (e) => {
        let value = e.target.value

        let allowedChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

        let checkedValue = ""

        let valueSplit = value.split('')

        let decimalAdded = false

        valueSplit.forEach(val => {
            if(allowedChars.includes(val)) {
                if(val === '.' && !decimalAdded) {
                    checkedValue += val
                    decimalAdded = true
                } else {
                    checkedValue += val
                }     
            }
        })

        
        setDisplay(checkedValue);
    }

  return (
    <input type="text" name="transactionDollarAmount" id="transactionDollarAmount" onChange={handleInputChange} value={display} onBlur={handleMoney}/>
  )
}
