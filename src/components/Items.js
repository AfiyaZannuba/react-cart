import React from 'react'
import { CartContext } from './Cart'
import { useContext } from 'react';

const Items = ({ id, title, description, img, price, quantity}) => {

    const {removeItem, increment, decrement} = useContext(CartContext);
    return (
        <>
            <div className='items-info'>

                <div className='product-img'>
                    <img src= {img} alt="book" />
                </div>

                <div className='title'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className='add-minus-quantity'>
                    <i className="fa-solid fa-minus minus fa-2x" onClick={()=> decrement(id)}></i>
                    <input type="text" placeholder={quantity} />
                    <i className="fa-solid fa-plus add fa-2x" onClick={()=> increment(id)}></i>

                </div>

                <div className='price'>
                    <h3>{price}</h3>
                </div>

                <div className='remove-item'>
                    <i class="fa-solid fa-trash-can fa-2x" onClick={()=>removeItem(id)}></i>
                </div>
            </div>

            <hr />
        </>
    )
}

export default Items