import React from 'react'

type Props = {
    onClick: () => void
    style: any
}

export const CloseButton = ({ onClick, style }: Props) => {
    return (
        <button onClick={onClick} style={{ ...style, border: 0, background: 'transparent' }}>
            <span role="img" aria-label={`remove item link`}>
                ❌
            </span>
        </button>
    )
}
