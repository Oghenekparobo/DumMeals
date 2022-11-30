import Form from './Form';
import classes from './item.module.css';         

export default function MealItem(props) {
    const price  = `$${props.price.toFixed(2)}`;
  return ( 
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <p className={classes.description}>{props.description}</p>
            <p className={classes.price}>{price}</p>
        </div>
        <div>
            <Form id={props}/>
        </div>
    </li>
  )
}
