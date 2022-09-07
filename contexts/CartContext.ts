import { createContext } from 'react'
import { Cart } from '../api/cart'

export default createContext({
    cartItems: [],
    setCartItems: (cart: Cart) => {},
})
