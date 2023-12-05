import React from 'react'

function Product(props) {
    const { product } = props

    // Destructure product properties
    const { name, price, image, rating, desc } = product

    return (
        <div>
            <div className="card" style={{ width: '19rem', height: '52rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body bg-dark">
                    <h5 className="card-title text-white">{name}</h5>
                    <p className="text-warning">Price: ${price}</p>
                    <p className="text-warning">
                        Rating: {rating.number}/{rating.outof}
                    </p>
                    <p className="card-text text-muted">{desc}</p>
                    <a type="button" className="btn btn-outline-warning rounded-left rounder-right">
                        Add Cart
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Product
