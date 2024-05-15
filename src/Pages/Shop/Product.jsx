import React from 'react'
import * as P from './Styles'

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data

    return (
        <P.product>
            <P.img src={productImage}/>

            <P.description>
                <P.p><b>{productName}</b></P.p>
                <P.p>${price}</P.p>
            </P.description>

            <P.button>Add To Cart</P.button>
        </P.product>
    )
}
