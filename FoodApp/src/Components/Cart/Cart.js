import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';

const Cart = ({ onHideCart }) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = id => {
		console.log(id);
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = item => {
		//console.log(item);
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItems = cartCtx.items.map(item => (
		<CartItem
			key={item.id}
			itemPrice={item.price}
			name={item.name}
			amount={item.amount}
			onRemove={cartItemRemoveHandler.bind(null, item.id)}
			onAdd={cartItemAddHandler.bind(null, item)}
		></CartItem>
	));

	return (
		<Modal onHideCart={onHideCart}>
			<ul className={classes['cart-items']}>{cartItems}</ul>
			<div className={classes.total}>
				<span>Total Amount:</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={onHideCart}>
					Close
				</button>
				{hasItems && (
					<button className={classes.button} onClick={onHideCart}>
						Order
					</button>
				)}
			</div>
		</Modal>
	);
};

export default Cart;
