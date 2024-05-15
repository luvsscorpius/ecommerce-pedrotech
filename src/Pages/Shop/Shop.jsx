import React from 'react'
import * as S from './Styles'
import {PRODUCTS} from '../../products'
import { Product } from './Product'

export const Shop = () => {
  return (
    <S.Shop>
        <S.shopTitle>
            <S.H1>PedroTech Shop</S.H1>
        </S.shopTitle>

        <S.Products>
            {PRODUCTS.map((product) => 
              <Product data={product}/>
            )}
        </S.Products>
    </S.Shop>
  )
}
