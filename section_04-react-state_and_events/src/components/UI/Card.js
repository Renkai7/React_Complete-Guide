import "./Card.css";

const Card = (props) => {
	// allows use of class in ExpenseItem.js (or component that Card will be used in)
	const classes = "card " + props.className;
	return <div className={classes}>{props.children}</div>;
};

export default Card;
