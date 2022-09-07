import React from 'react'
import { getRandomCart, Cart } from '../api/cart'
import { CloseButton } from './CloseButton'
import { globals } from '../styles/globals'

type Props = {
    visible: boolean
    setCartVisible: (boolean) => void
    cartItems: Cart
    setCartItems: (Cart) => void
}

export const CartDrawer = ({ visible, setCartVisible, cartItems, setCartItems }: Props) => {
    const removeItem: (cart: Cart, index: number) => Cart = (cart, index) => {
        return cart.filter((value, arrIndex) => index !== arrIndex)
    }

    return (
        <div style={{ ...styles.cartContainer, right: visible ? 0 : '-25em' }}>
            <CloseButton style={styles.closeButton} onClick={() => setCartVisible(false)} />
            <p style={styles.cartHeader}>Your Cart</p>
            <ul suppressHydrationWarning style={styles.cartItems}>
                {cartItems.length === 0 ? (
                    <li suppressHydrationWarning>The Cart is Empty</li>
                ) : (
                    cartItems.map((cartItem, index) => (
                        <li key={index} style={styles.cartItem} suppressHydrationWarning>
                            {`${cartItem.name} -- ${Object.keys(cartItem.variation)
                                .map((key) => cartItem.variation[key])
                                .join(' + ')} `}
                            <div
                                className="clickable"
                                aria-label="remove item"
                                style={styles.removeButton}
                                onClick={() => setCartItems(removeItem(cartItems, index))}
                            >
                                Remove
                            </div>
                        </li>
                    ))
                )}
            </ul>
            <br />
            <br />
            <div style={globals.centerText}>
                <button
                    className="clickable"
                    style={globals.primaryButton}
                    onClick={() => setCartItems(getRandomCart())}
                >
                    Random Cart
                    <span role="img" aria-label="randomize cart">
                        ♻️
                    </span>
                </button>
            </div>
        </div>
    )
}

const styles = {
    cartContainer: {
        position: 'absolute',
        background: 'white',
        top: 0,
        boxShadow: '0px 3px 3px 0px rgb(200,200,200)',
        borderRight: 0,
        padding: '1em',
        minWidth: '17em',
        height: '100vh',
        zIndex: 2,
        transition: 'all 1s',
    },
    closeButton: {
        position: 'absolute',
        top: '1em',
        left: '1em',
    },
    cartItems: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '1em 2em',
        margin: 0,
        backgroundColor: 'linear',
    },
    cartItem: {
        display: 'flex',
        backgroundColor: 'rgba(250,250,250)',
        justifyContent: 'space-between',
        width: '100%',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        boxShadow: '0px 3px 3px 0px rgb(200,200,200)',
    },
    removeButton: {
        fontSize: '14px',
        color: 'rgb(150,150,150)',
    },
    cartHeader: {
        textAlign: 'center',
        fontSize: '18px',
    },
    generateCartButton: {
        background: 'transparent',
        padding: '1em 2em',
        border: '1px solid gray',
    },
}
