import React, { useContext } from 'react'
import * as C from './Styles'
import { ShopContext } from '../../Context/ShopContext'

export const CartItem = (props) => {
  const {id, productName, price, productImage} = props.data
  const {cartItems} = useContext(ShopContext)

  return (
    <C.cartItem>
        <img src={productImage}/>

        <C.description>
            <p><b>{productName}</b></p>
            <p>${price}</p>

            <C.countHandler>
                <button>-</button>
                <input value={cartItems[id]} />
                <button>+</button>
            </C.countHandler>
        </C.description>
    </C.cartItem>
  )
}
