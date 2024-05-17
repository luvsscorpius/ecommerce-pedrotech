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
        // O (prev) e o estado anterior do carrinho
        // o operador spread {...prev} cria uma copia superficial do estado anterior do carrinho.
        // prev[itemId] verifica se a chave ja existe no objeto prev e acessa o valor atual da chave itemId no objeto prev. Se itemId for prev ele incrementa mais 1.
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
    }

    // Funcao para remover do carrinho
    const removeFromCart = (itemId) => {
        // O (prev) e o estado anterior do carrinho
        // o operador spread {...prev} cria uma copia superficial do estado anterior do carrinho.
        // prev[itemId] verifica se a chave ja existe no objeto prev e acessa o valor atual da chave itemId no objeto prev. Se itemId for prev ele tira 1.
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    // Funcao para conseguir o total do carrinho
    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                // Aqui voce acha um elemento especifico em um array e se o id for igual o item a gente pega o item do carrinho que foi encontrado e multiplica pelo preco
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        
        return totalAmount
    }

    // Nesse objeto voce passara tudo oque voce vai acessar de diferentes paginas
    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}

    return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
