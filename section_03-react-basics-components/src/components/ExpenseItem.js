// import styling
import "./ExpenseItem.css";

function ExpenseItem() {
	const expenseDate = new Date(2021, 2, 28);

	return (
		<div className="expense-item">
			<div>March 28th 2021</div>
			<div className="expense-item__description">
				<h2>Car Insurance</h2>
				<div className="expense-item__price">$294.67</div>
			</div>
		</div>
	);
}

export default ExpenseItem;

// Notes
// components can only have one element
// components in react are functions
