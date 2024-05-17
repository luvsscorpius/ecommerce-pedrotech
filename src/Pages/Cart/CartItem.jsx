import React, { useContext } from 'react'
import * as C from './Styles'
import { ShopContext } from '../../Context/ShopContext'

export const CartItem = (props) => {
  const {id, productName, price, productImage} = props.data
  const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)

  return (
    <C.cartItem>
        <img src={productImage}/>

        <C.description>
            <p><b>{productName}</b></p>
            <p>${price}</p>

            <C.countHandler>
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} />
                <button onClick={() => addToCart(id)}>+</button>
            </C.countHandler>
        </C.description>
    </C.cartItem>
  )
}
