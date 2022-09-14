import { productConstructors, variationChoices } from './products'
import { getRandomInt } from '../Utilities/math'

const getRandomItem = () => {
    return productConstructors.bed({
        size: variationChoices.size[getRandomInt(variationChoices.size.length)],
        color: variationChoices.color[getRandomInt(variationChoices.color.length)],
    })
}

export const getCartOfSize = (size) => {
    let cart = []
    for (let i = 0; i < size; i++) {
        cart.push(getRandomItem())
    }
    return cart
}

export const getRandomCart = () => {
    const rand = getRandomInt(4) + 1
    const cartSize = rand % 3 === 0 ? 2 : rand % 2 === 0 ? 1 : 0
    return getCartOfSize(cartSize)
}
