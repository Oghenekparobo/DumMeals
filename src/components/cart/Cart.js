
import { useContext } from 'react';
import CartContext from '../store/cart-context';
import Modal from '../ui/Modal';
import classes from './cart.module.css';
import CartItem from './CartItem';

export default function Cart(props) {
    const ctx =useContext(CartContext);
    const hasItems = ctx.items.length > 0;

    const addHandler = (item)=>{

    }

    const removeHandler = (id)=>{
        
    }

    const cartItems =(
    <ul className={classes['cart-items']}>
        {ctx.items.map(item => (<CartItem id={item.id} name={item.name} price={item.price} onAdd={addHandler.bind(null , item)} onRemove={removeHandler.bind(null , item.id)}/>))}
    </ul>)
  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>${ctx.totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}
