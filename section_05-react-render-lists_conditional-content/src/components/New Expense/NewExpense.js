import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

// Sets up new expenses to be added
const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	const saveExpenseDataHandler = (enteredExpenseData) => {
		// object that holds data from submitHandler in ExpenseForm
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		// from App.js NewExpense prop
		props.onAddExpense(expenseData);
		setIsEditing(false);
	};

	// triggered when Add New Expense button is pressed
	const startEditingHandler = () => {
		setIsEditing(true);
	};
	// used to remove the form from screen
	const stopEditingHandler = () => {
		setIsEditing(false);
	};
	/*
		Change user options between an Add New Expense button and the expense form.
		Only want to show the Add Expense form if user decides to add an expense.
	*/
	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditingHandler}>Add New Expense</button>
			)}
			{/* name of prop can be anything */}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;

/*
Notes
- name of prop can be anything (i.e. onSaveExpenseData in ExpenseForm component)
*/
