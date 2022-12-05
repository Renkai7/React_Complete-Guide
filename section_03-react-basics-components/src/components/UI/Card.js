import "./Card.css";

const Card = (props) => {
	// allows use of class in ExpenseItem.js (or component that Card will be used in)
	const classes = "card " + props.className;
	return <div className={classes}>{props.children}</div>;
};

export default Card;

// props.children allows you to place content into component (shown below):
// {
// 	/* <Card className="expense-item">
// 	<ExpenseDate date={props.date} />
// 	<div className="expense-item__description">
// 		<h2>{props.title}</h2>
// 		<div className="expense-item__price">${props.amount}</div>
// 	</div>
// </Card>; */
// }
