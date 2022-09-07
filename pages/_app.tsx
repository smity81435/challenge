import React, { useState } from 'react'
import { getCartOfSize } from '../api/cart'
import { CartDrawer } from '../components/CartDrawer'
import { Nav } from '../components/Nav'
import CartContext from '../contexts/CartContext'
import { useSessionStorageCart } from '../hooks/useSessionStorageCart'
import '../styles/index.css'

export default function App({ Component, pageProps }) {
    const [cartItems, setCartItems] = useSessionStorageCart(getCartOfSize(2))
    const [cartVisible, setCartVisible] = useState(false)
    return (
        <div style={{ fontFamily: 'sans-serif' }}>
            <CartContext.Provider value={{ cartItems, setCartItems }}>
                <Nav cartVisible={cartVisible} setCartVisible={setCartVisible} />
                <CartDrawer
                    visible={cartVisible}
                    setCartVisible={setCartVisible}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                />
                <div style={{ padding: '0 18.5em' }}>
                    <Component
                        cartVisible={cartVisible}
                        setCartVisible={setCartVisible}
                        {...pageProps}
                    />
                </div>
            </CartContext.Provider>
        </div>
    )
}
