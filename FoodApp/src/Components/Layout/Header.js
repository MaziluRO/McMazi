import { Fragment } from 'react';
import mealsImage from '../../Assets/meals.jpg';
import classes from './Header.module.css';

const Header = () => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>McMazi</h1>
				<button>Cart</button>
			</header>
			<div>
				<img
					src={mealsImage}
					alt='Food on table'
					className={classes['main-image']}
				/>
			</div>
		</Fragment>
	);
};

export default Header;
