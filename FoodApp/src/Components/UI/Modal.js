import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({ onHideCart }) => {
	return <div className={classes.backdrop} onClick={onHideCart}></div>;
};

const ModalOverlay = ({ children }) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{children}</div>
		</div>
	);
};

const portalElem = document.getElementById('overlay');

const Modal = ({ children, onHideCart }) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onHideCart={onHideCart}></Backdrop>,
				portalElem,
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				portalElem,
			)}
		</Fragment>
	);
};

export default Modal;

/*
<div class="modal">
<div class="content">
  <ul className={classes['cart-items']}>{cartItems}</ul>
			<div className={classes.total}>
				<span>Total Amount:</span>
				<span>35.62</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']}>Close</button>
				<button className={classes.button}>Order</button>
			</div> 
</div>
</div>      
      */
