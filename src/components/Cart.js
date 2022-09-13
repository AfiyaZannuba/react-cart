import React, { createContext, useEffect, useReducer } from 'react';
import './Cart.css';
import { products } from './Products';
import ContextCart from './ContextCart';
import { reducer } from './reducer';


export const CartContext = createContext();

//initial state of useReducer is defined:-
const initialState = {

    item: products,
    totalAmount: 0,
    totalItem: 0,

};

const Cart = () => {
    //const [item, setItem] = useState(products);

    //useReducer hook for incrementing and decrementing :-
    const [state, dispatch] = useReducer(reducer, initialState);


    //defining removeItem at Items.js with dispatch
    const removeItem = (id) => {

        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });

    };

    // clearing all products
    const clearCart = () => {
        return dispatch ({
            type: "CLEAR_CART"
            
        });
    };

    //    defining the increment action
    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        });

    };

    //   defining the decrement function
    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        });
    };

    // using useEffect for updating the data and total items correctly
    //Array Reduce method is used
    useEffect( () => {
        dispatch ({ type: "GET_TOTAL" });
       
    }, [state.item]);


    return (
        //passing state using spread operator :-
        <CartContext.Provider value={{ ...state, removeItem, increment, decrement, clearCart }}>

            <ContextCart />

        </CartContext.Provider>



    )
}

export default Cart;