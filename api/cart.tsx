import { productConstructors, variationChoices, Product } from './products'
export type Cart = Product[]

const getRandomInt = (max: number) => Math.floor(Math.random() * max)

const getRandomItem: () => Product = () => {
    return productConstructors.bed({
        size: variationChoices.size[getRandomInt(variationChoices.size.length)],
        color: variationChoices.color[getRandomInt(variationChoices.color.length)],
    })
}

export const getCartOfSize: (size: number) => Cart = (size) => {
    let cart: Product[] = []
    for (let i = 0; i < size; i++) {
        cart.push(getRandomItem())
    }
    return cart
}

export const getRandomCart: () => Cart = () => {
    const rand = getRandomInt(4) + 1
    const cartSize = rand % 3 === 0 ? 2 : rand % 2 === 0 ? 1 : 0
    return getCartOfSize(cartSize)
}
