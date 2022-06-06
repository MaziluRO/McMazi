import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/cart-context';

const HeaderCartButton = ({ onClickBtn }) => {
	const [btnHighlight, setBtnHightlight] = useState(false);
	const cartCtx = useContext(CartContext);
	const { items } = cartCtx;
	const numberOfCartItems = items.reduce((currNr, item) => {
		return currNr + item.amount;
	}, 0);

	const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ''}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnHightlight(true);

		const timer = setTimeout(() => {
			setBtnHightlight(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button className={btnClasses} onClick={onClickBtn}>
			<span className={classes.icon}>
				<CartIcon></CartIcon>
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
