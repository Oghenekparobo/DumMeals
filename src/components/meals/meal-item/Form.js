import { useRef, useState } from "react";
import Input from "../../ui/Input";
import classes from "./form.module.css";

const Form = (props) => {
  const [valid, setValid] = useState(true);
  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    // value gotten from a ref is always a string, convert it to a number using this shortcut
    const amount = +enteredAmount;
    if (enteredAmount.trim().length === 0 || amount < 1 || amount > 5) {
      setValid(false);
      return;
    } 

    props.addToCart(amount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "100",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!valid && <p>please put in a valid amount from 1-5</p>}
    </form>
  );
};
export default Form;
