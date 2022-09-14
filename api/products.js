const sizes = ['twin', 'full', 'queen', 'king', 'cali-king']
const colors = ['walnut', 'natural']
export const products = ['bed', 'mattress', 'nightstand']

export const productVariation = {
    bed: ['color', 'size'],
    mattress: ['size'],
    nightstand: ['color'],
}

export const variationChoices = {
    color: colors,
    size: sizes,
}

export const makeNightstand = ({ color }) => {
    return {
        name: 'nightstand',
        variation: {
            color,
        },
    }
}

export const makeBed = ({ color, size }) => {
    return {
        name: 'bed',
        variation: {
            color,
            size,
        },
    }
}

export const makeMattress = ({ size }) => {
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
