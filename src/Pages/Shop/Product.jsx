import React, { useContext } from 'react'
import * as P from './Styles'
import {ShopContext} from '../../Context/ShopContext'

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data
    const {addToCart, cartItems} = useContext(ShopContext)

    // Mostra a quantidade de itens no carrinho
    const cartItemAmount = cartItems[id]
    return (
        <P.product>
            <P.img src={productImage}/>

            <P.description>
                <P.p><b>{productName}</b></P.p>
                <P.p>${price}</P.p>
            </P.description>

            <P.button onClick={() => addToCart(id)}>
                {/* Logica para saber se cartItemAmount tem mais de 0 e se tiver ele mostrara a quantidade no botao */}
                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </P.button>
        </P.product>
    )
}
