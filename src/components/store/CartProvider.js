
import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items:[],
    totalAmount: 0
}

const cartReducer = (state , action) => {
    if(action.type === 'ADD'){
        const updatedAmount = state.totalAmount + (  action.item.price * action.item.amount);
        const updatedItems = state.items.concat(action.item);
      

        return {
            items:updatedItems ,
            totalAmount:updatedAmount
        }
    }
    return defaultCartState;
}



export default function CartProvider(props) {
    const [cartState , dispatchCartAction] = useReducer(cartReducer , defaultCartState);

    const addItemHandler = (item)=>{
        dispatchCartAction({type:'ADD' , item:item});

    }

    const removeItemHandler = (id)=>{
        dispatchCartAction({type:'REM' , id:id});
    }


    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    

  return (
   <CartContext.Provider value={cartContext}>
    {props.children}
   </CartContext.Provider>
  )
}
