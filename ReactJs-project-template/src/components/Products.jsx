import React from 'react'
import Product from './Product'

function Products(props) {
    const { Products } = props

    return (
        <div>
            <div className="container">
                <div className="row">
                    {Products.map((product) => (
                        <div key={product.id} className="col-md-4 col-lg-4 col-sm-12 mb-4">
                            <Product product={product} />
                            {/*akhane amader Product component ta call hoyeche tai amader product component ta kar moddhe rakhbo oi digine ta akhane kore dite hobe ..*/}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
