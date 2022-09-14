import React, { useMemo, useState, useContext } from 'react'
import { productVariation, products, variationChoices } from '../../api/products'
import CartContext from '../../contexts/CartContext'
import { globals } from '../../styles/globals'
import { capitalizeFirstLetter } from '../../Utilities/typography'

export default function ProductPage({ handle, setCartVisible }) {
    const cart = useContext(CartContext)
    const [error, setError] = useState()

    const attributes = useMemo(() => {
        return productVariation[handle].reduce((acc, variationKey) => {
            acc[variationKey] = variationChoices[variationKey]
            return acc
        }, {})
    }, [handle])

    const [chosenVariant, setChosenVariant] = useState({ name: handle, variation: {} })

    const onValueChange = (attributeKey, attributeValue) => {
        setChosenVariant((oldVariant) => ({
            ...oldVariant,
            variation: {
                ...oldVariant.variation,
                [attributeKey]: attributeValue,
            },
        }))
    }

    const onError = (text) => {
        setError(text)
        setTimeout(() => setError(null), 5000)
    }

    const handleAddToCart = (item) => {
        if (Object.keys(chosenVariant.variation).length === Object.keys(attributes).length) {
            const updatedInventory = cart.cartItems.concat(item)
            cart.setCartItems(updatedInventory)
            setCartVisible(true)
            setTimeout(() => setCartVisible(false), 5000)
        } else {
            onError('Please select a variation.')
        }
    }

    return (
        <>
            <h1 style={globals.pageHeader}>{capitalizeFirstLetter(handle)} product page</h1>
            <div style={globals.centerText}>
                <img src="https://via.placeholder.com/300x200" alt="placeholder" />
            </div>
            <div style={globals.spaceEvenly}>
                {Object.keys(attributes).map((attributeKey) => {
                    const attributeValuePicker = attributes[attributeKey].map((attributeValue) => (
                        <label key={attributeValue} style={{ lineHeight: 2 }}>
                            <input
                                checked={
                                    chosenVariant['variation'][attributeKey] === attributeValue
                                }
                                type="radio"
                                name={attributeKey}
                                value={attributeValue}
                                onChange={(e) => onValueChange(attributeKey, e.target.value)}
                            />
                            {attributeValue}
                        </label>
                    ))
                    return (
                        <div key={attributeKey}>
                            <h2 style={styles.attributeTitle}>{attributeKey}</h2>
                            <div style={styles.attributeValue}>{attributeValuePicker}</div>
                        </div>
                    )
                })}
            </div>

            <div style={styles.addToCartContainer}>
                <button
                    className="clickable"
                    onClick={() => {
                        handleAddToCart(chosenVariant)
                    }}
                    style={globals.primaryButton}
                >
                    Add To Cart
                </button>
                {error && <div style={globals.error}>{error}</div>}
            </div>
        </>
    )
}

export async function getStaticProps({ params }) {
    return { props: { ...params, key: params.handle } }
}

export async function getStaticPaths() {
    return {
        paths: products.map((handle) => ({
            params: { handle },
        })),
        fallback: false,
    }
}

const styles = {
    attributeTitle: {
        textAlign: 'center',
        textTransform: 'capitalize',
        textDecoration: 'underline',
    },
    attributeValue: { display: 'flex', flexDirection: 'column' },
    addToCartContainer: { textAlign: 'center', marginTop: '2em' },
}
