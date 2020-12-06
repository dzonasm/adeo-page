import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import './product.styles.scss'

const Product = ({ product }) => {
    return (
        <div
            key={uuidv4()}
            className='product-container'
            style={{ backgroundImage: `url(${product.image})` }}>
            <h2 className='product-text'>{product.text.toUpperCase()}</h2>
        </div>
    )
}

export default Product