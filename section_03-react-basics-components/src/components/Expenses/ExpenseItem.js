// import styling
import "./ExpenseItem.css";

// import component
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// adding props in parameter
function ExpenseItem(props) {
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;

// Notes
// components can only have one element
// components in react are functions
// use props by adding parameter
