import React, { useState } from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
	// Default value for year in 'Filter by year' dropdown
	const [filteredYear, setFilteredYear] = useState("2020");

	// updates new value for 'Filter by year' dropdown
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	// Only show items with a year that matched 'filteredYear'
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	// Default value for content
	let expensesContent = <p>No expenses found.</p>;
	// checks for an expense then displays components for expense items
	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => (
			/* Creates an array of ExpenseItem components, allowing you to add more ExpenseItems*/
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{/* Expense Item or 'No expenses found' */}
				{expensesContent}
			</Card>
		</div>
	);
};

export default Expenses;

// Notes:
// Always add 'key' for components when using 'map'
