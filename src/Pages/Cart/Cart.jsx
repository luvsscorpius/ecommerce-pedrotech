import React, { useContext } from 'react'
import * as C from './Styles'
import {PRODUCTS} from '../../products'
import {ShopContext} from '../../Context/ShopContext'
import { CartItem } from './CartItem'

export const Cart = () => {
  const {cartItems} = useContext(ShopContext)

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
    </C.cart>
  )
}