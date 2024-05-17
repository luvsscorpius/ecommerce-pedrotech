import React, { useContext } from 'react'
import * as C from './Styles'
import {PRODUCTS} from '../../products'
import {ShopContext} from '../../Context/ShopContext'
import { CartItem } from './CartItem'

import {useNavigate} from 'react-router-dom'

export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()

  return (
    <C.cart>
      <div>
        <C.h1>Your Cart Items</C.h1>
      </div>

      <C.cartItems>
        {PRODUCTS.map((product)=> {
          // Se o elemento product.id nao for igual a 0, significa que esse produto esta no carrinho
          if (cartItems[product.id] !== 0) {
              return <CartItem data={product}/>
          } 
        })}
      </C.cartItems>

      <C.checkout>
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </C.checkout>
    </C.cart>
  )
}
