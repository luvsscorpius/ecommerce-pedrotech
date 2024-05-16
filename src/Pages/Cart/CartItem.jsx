import React from 'react'
import * as C from './Styles'

export const CartItem = (props) => {
  const {id, productName, price, productImage} = props.data

  return (
    <C.cartItem>
        <img src={productImage}/>

        <C.description>
            <p><b>{productName}</b></p>
            <p>${price}</p>

            <C.countHandler>
                <button>-</button>
                <input value='' />
                <button>+</button>
            </C.countHandler>
        </C.description>
    </C.cartItem>
  )
}
