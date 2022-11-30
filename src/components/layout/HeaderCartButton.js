
import { useContext } from 'react';
import CartIcon from '../cart/CartIcon';
import CartContext from '../store/cart-context';
import classes from './cartButton.module.css';

export default function HeaderCartButton(props) {
   const ctx =  useContext(CartContext)
   const noOfItems = ctx.items.reduce((currNo , item)=> {
    return currNo + item.amount;
   } , 0)
  return (
    <button className={classes.button} onClick={props.onShowCart}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>your cart</span>
        <span className={classes.badge}>{noOfItems }</span>
    </button>
  )
}
