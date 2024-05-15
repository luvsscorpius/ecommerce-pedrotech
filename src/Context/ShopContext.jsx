import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'

// Isso ira rastrear os rastros de todas as funçoes e states da nossa aplicacao
// Exemplo: eu quero criar um state que eu possa acessar da pagina cart e shop
export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i =1; i <PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems]= useState(getDefaultCart())

    // Funcao para adicionar ao carrinho
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
    }

    return (
    <ShopContext.Provider>{props.children}</ShopContext.Provider>
  )
}
