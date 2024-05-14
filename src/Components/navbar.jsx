import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import * as N from './Styles'

export const Navbar = () => {
  return (
    <N.Navbar>
        <N.Links className='links'>
            <Link to="/">Shop</Link>
            <Link to='/cart'><ShoppingCart size={32}/></Link>
        </N.Links>
    </N.Navbar>
  )
}
