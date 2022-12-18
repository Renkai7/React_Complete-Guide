import React, { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				{/* Expense Item or 'No expenses found' */}
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;

// Notes:
// Always add 'key' for components when using 'map'
