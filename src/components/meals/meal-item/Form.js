import Input from '../../ui/Input';
import classes from './form.module.css';


export default function Form(props) {
  return (
    <form className={classes.form} >
        <Input label="amount" input = {
             {
                id:'amount' + props.id,
                type:'number',
                min:'1',
                max:'100',
                step:'1',
                defaultValue:'10'
    
            }
         } />
        <button>+ Add</button>

    </form>
  )
}
