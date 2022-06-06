import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/cart-context';

const MealItem = ({ name, description, price, mealID }) => {
	const cartCtx = useContext(CartContext);
	const formatPrice = `$${price.toFixed(2)}`;

	const addToCartHandler = amount => {
		cartCtx.addItem({ id: mealID, name: name, amount: amount, price: price });
	};

	return (
		<li className={classes.meal}>
			<div>
				<h3>{name}</h3>
				<div className={classes.description}>{description}</div>
				<div className={classes.price}>{formatPrice}</div>
			</div>
			<div>
				<MealItemForm id={mealID} onAddToCart={addToCartHandler}></MealItemForm>
			</div>
		</li>
	);
};

export default MealItem;
