import React from 'react'
import product_cart from '../data/product_data'


const MainContent = () => {
    console.log(product_cart);
    // map for unique array
    const listItems = product_cart.map((item) =>
        <div className="card" key="{item.id}">
            <div className="card_img">
                <img src={item.thumb} />
            </div>
        
        <div className="card_Header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">{item.price}<span>{item.currency}</span></p>
        <div className="btn">Add to cart</div>
        </div>

        </div>

    );
    return (
        <div className="main-content">
            
            <h3>Festival Offer</h3>
            {listItems}
        </div>
    )

}

export default MainContent;