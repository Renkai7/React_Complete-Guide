import React from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

// Sets up new expenses to be added
const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		// object that holds data from submitHandler in ExpenseForm
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		// console.log(expenseData);
		// from App.js NewExpense prop
		props.onAddExpense(expenseData);
	};
	return (
		<div className="new-expense">
			{/* name of prop can be anything */}
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
