


export default function Input(props) {
  return (
    <div>
           <label htmlFor={props.input.id}>{props.label}</label>
           <input id={props.input.id} {...props.input}  />
    </div>
 
  )
}
