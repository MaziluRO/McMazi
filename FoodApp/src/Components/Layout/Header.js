import { Fragment } from 'react';
//import mealsImage from '../../Assets/meals.jpg';
import junkFood from '../../Assets/junkfood.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>McMazi</h1>
				<HeaderCartButton onClickBtn={onShowCart}></HeaderCartButton>
			</header>
			<div className={classes['main-image']}>
				{/* <img
					src={mealsImage}
					alt='Food on table'
					className={classes['main-image']}
				/> */}
				<img src={junkFood} alt='Food on table' />
			</div>
		</Fragment>
	);
};

export default Header;
