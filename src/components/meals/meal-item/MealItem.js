import CartContext from '../../store/cart-context';
import { useContext } from 'react';
import Form from './Form';
import classes from './item.module.css';     
    

export default function MealItem(props) {
    const price  = `$${props.price.toFixed(2)}`;

    const ctx = useContext(CartContext);

    const addToCartHandler = (amount)=>{
      ctx.addItem({
        id:props.id,
        name:props.name,
        description:props.description,
        price:props.price,
        amount:amount
      });
     
    }

  return ( 
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <p className={classes.description}>{props.description}</p>
            <p className={classes.price}>{price}</p>
        </div>
        <div>
            <Form id={props} addToCart={addToCartHandler}/>
        </div>
    </li>
  )
}
