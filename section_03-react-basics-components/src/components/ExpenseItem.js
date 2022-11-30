// import styling
import "./ExpenseItem.css";

// adding props in parameter
function ExpenseItem(props) {
	return (
		<div className="expense-item">
			<div>{props.date.toISOString()}</div>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;

// Notes
// components can only have one element
// components in react are functions
// use props by adding parameter
