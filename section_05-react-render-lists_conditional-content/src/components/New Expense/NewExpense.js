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

	// changes state to 'Editing' state
	// state used to switch between 'add expense button' and 'expense form'
	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

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
