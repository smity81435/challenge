export type Product = {
    name: string
    variation: {
        size?: 'twin' | 'full' | 'queen' | 'king' | 'cali-king'
        color?: 'walnut' | 'natural'
    }
}

const sizes: Product['variation']['size'][] = ['twin', 'full', 'queen', 'king', 'cali-king']
const colors: Product['variation']['color'][] = ['walnut', 'natural']
export const products: string[] = ['bed', 'mattress', 'nightstand']

export const productVariation: { bed: string[]; mattress: string[]; nightstand: string[] } = {
    bed: ['color', 'size'],
    mattress: ['size'],
    nightstand: ['color'],
}

export const variationChoices = {
    color: colors,
    size: sizes,
}

export const makeNightstand: ({ color }: Product['variation']) => Product = ({ color }) => {
    return {
        name: 'nightstand',
        variation: {
            color,
        },
    }
}

export const makeBed: ({ color, size }: Product['variation']) => Product = ({ color, size }) => {
    return {
        name: 'bed',
        variation: {
            color,
            size,
        },
    }
}

export const makeMattress: ({ size }: Product['variation']) => Product = ({ size }) => {
    return {
        name: 'mattress',
        variation: {
            size,
        },
    }
}

export const productConstructors = {
    bed: makeBed,
    mattress: makeMattress,
    nigthstand: makeNightstand,
}
