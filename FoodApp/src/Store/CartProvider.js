import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	//state = {items:[], totalAmount:0}
	//action = {type:"ADD_CART_ITEM", cartItem:{ id: 2, name: sushi, amount: 2, price: 10 }}

	//console.log(action);

	if (action.type === 'ADD_CART_ITEM') {
		const updatedTotalAmount =
			state.totalAmount + action.cartItem.price * action.cartItem.amount;
		//updatedTotalAmount = 0 + 10 * 2

		const existingCartItemIndex = state.items.findIndex(
			item => item.id === action.cartItem.id,
		);
		//existingCartItemIndex = -1

		const existingCartItem = state.items[existingCartItemIndex];
		//existingCartItem = null

		let updatedItems;
		if (existingCartItem) {
			let updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.cartItem.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.cartItem);
		}

		// action = {type:"ADD_CART_ITEM", cartItem:{ id: 2, name: sushi, amount: 2, price: 10 }}
		// cartState = {items:[],totalAmount:0}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	if (action.type === 'REMOVE_CART_ITEM') {
		const existingCartItemIndex = state.items.findIndex(
			item => item.id === action.cartID,
		);
		const existingCartItem = state.items[existingCartItemIndex];
		const updatedTotalAmount = state.totalAmount - existingCartItem.price;
		let updatedItems;
		if (existingCartItem.amount === 1) {
			updatedItems = state.items.filter(item => item.id !== action.cartID);
		} else {
			let updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount - 1,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	return defaultCartState;
};

const CartProvider = ({ children }) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState,
	);

	const addItemToCartHandler = item => {
		dispatchCartAction({ type: 'ADD_CART_ITEM', cartItem: item });
	};
	const removeItemFromCartHandler = id => {
		dispatchCartAction({ type: 'REMOVE_CART_ITEM', cartID: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
	);
};

export default CartProvider;
