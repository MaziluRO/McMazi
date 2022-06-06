import { useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';
// import { UserContext, UserProvider } from './TestComponents/UserContext';
// import ParaComponent from './TestComponents/ParaComponent';

function App() {
	const [cartVisible, setCartVisible] = useState(false);

	const showCartHandler = () => {
		setCartVisible(true);
	};

	const hideCartHandler = () => {
		setCartVisible(false);
	};

	// return (
	// 	<UserProvider>
	// 		<h1>Hello</h1>
	// 		<ParaComponent></ParaComponent>
	// 	</UserProvider>
	// );

	return (
		<CartProvider>
			{cartVisible && <Cart onHideCart={hideCartHandler}></Cart>}
			<Header onShowCart={showCartHandler}></Header>
			<main>
				<Meals></Meals>
			</main>
		</CartProvider>
	);
}

export default App;
