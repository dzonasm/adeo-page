import React from 'react'

import Welcome from '../../components/welcome/welcome.component'
import UiUxDesign from '../../components/ui-ux-design/ui-ux-design.component'
import Forecast from '../../components/forecast/forecast.component'
import Product from '../../components/product/product.component'
import productData from '../../components/product/product-data'

import './homepage.styles.scss'

const HomePage = () => {
    return (
        <div className='homepage-container'>
            <div className='homepage-content'>
                <div className='homepage-first-two-items'>
                    <Welcome />
                    <UiUxDesign />
                </div>
                <div className='products-headline'>
                    <h1>PRODUCTS</h1>
                    <h3>OFFERS TODAY</h3>
                </div>
                <div className='products-container'>
                    <Forecast />
                    <div className='offers-today'>
                        {
                            productData.map(product =>
                                <Product product={product} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage