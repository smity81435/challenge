import Link from 'next/link'
import React, { useContext } from 'react'
import { products } from '../api/products'
import CartContext from '../contexts/CartContext'
import { capitalizeFirstLetter } from '../Utilities/typography'

type Props = {
    cartVisible: boolean
    setCartVisible: (boolean) => void
}

export const Nav = ({ cartVisible, setCartVisible }: Props) => {
    const cart = useContext(CartContext)
    return (
        <>
            <div style={styles.navContainer}>
                <div>
                    <nav style={styles.navList}>
                        <Link href="/">
                            <div className="clickable" style={styles.navLink}>
                                Home
                            </div>
                        </Link>
                        {products.map((product) => (
                            <Link key={product} href={`/products/${product}`} passHref>
                                <div className="clickable" style={styles.navLink}>
                                    {capitalizeFirstLetter(product)}
                                </div>
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="clickable" onClick={() => setCartVisible(!cartVisible)}>
                    Cart {`${cart.cartItems.length > 0 ? `(${cart.cartItems.length})` : ''}`}
                </div>
            </div>
            <hr />
        </>
    )
}

const styles = {
    navContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        padding: '1rem',
    },
    navList: { display: 'flex', justifyContent: 'space-around' },
    navLink: { marginRight: '1em' },
}
