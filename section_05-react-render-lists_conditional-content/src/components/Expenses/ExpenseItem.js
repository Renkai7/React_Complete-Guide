import React from "react";

import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
				{/* <button onClick={clickHandler}>Change Title</button> */}
			</div>
		</Card>
	);
};

export default ExpenseItem;

// Notes:
// Give button a function using 'onClick' property
// '{}' when importing useState is for importing names
// useState is a React hook (hooks start with 'use')
// useState takes in the initial value (props.title)
