import Products from './components/Products'
import React from 'react'

const products = [
    {
        id: 1,
        name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        image: 'laptop.jpeg',
        price: 5.69,
        rating: {
            number: 3.9,
            outof: 5,
        },

        desc: 'Description: Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    },

    {
        id: 2,
        name: 'Mens Casual Premium Slim Fit T-Shirts',
        image: 'tShirt.jpeg',
        price: 22.3,
        rating: {
            number: 4.1,
            outof: 5,
        },

        desc: 'Description: Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    },

    {
        id: 3,
        name: 'Mens Cotton Jacket',
        image: 'jacket.jpeg',
        price: 55.99,
        rating: {
            number: 4.7,
            outof: 5,
        },

        desc: 'Description: great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    },

    {
        id: 4,
        name: 'Mens Casual Slim Fit',
        image: 'casualSlimFit.jpeg',
        price: 15.99,
        rating: {
            number: 2.1,
            outof: 5,
        },

        desc: 'Description: The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    },

    {
        id: 5,
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        image: 'Bracelet.jpeg',
        price: 695,
        rating: {
            number: 4.6,
            outof: 5,
        },

        desc: "Description: From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    },

    {
        id: 6,
        name: 'Solid Gold Petite Micropave',
        image: 'solidGold.jpeg',
        price: 168,
        rating: {
            number: 3.9,
            outof: 5,
        },

        desc: 'Description: Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    },
]

function App() {
    return (
        <div>
            <div className="bg-dark">
                <h1 className="bg-dark" style={{ textAlign: 'center', fontSize: '3rem', color: 'white' }}>
                    BD Store
                </h1>
                <Products Products={products} />
            </div>
        </div>
    )
}

export default App
