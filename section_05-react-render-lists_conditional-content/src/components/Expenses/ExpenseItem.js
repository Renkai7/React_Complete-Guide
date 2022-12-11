import React from "react";

import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
	// Hook - useState
	// Array Destructuring = const [title, setTitle]
	// const [title, setTitle] = useState(props.title);

	// const clickHandler = () => {
	// 	// Call setTitle to change element
	// 	setTitle("Updated!");
	// 	console.log("Clicked!");
	// };

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
