
import Modal from '../ui/Modal';
import classes from './cart.module.css';

export default function Cart(props) {
    const cartItems =(
    <ul className={classes['cart-items']}>
        {[{id:'c1', name:'santanna', amount:'50' , price:'300'}].map(item => (<li>{item.name}</li>))}
    </ul>)
  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>73</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}
