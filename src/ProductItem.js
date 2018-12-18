import React from 'react';

const ProductItem = (props) => {
    return(
        <div className="product">
        <img src={props.imageUrl} />
        <p>{props.name}</p>
        <p>{props.price}$</p>
        <button className="details-button">Details</button>
        <button className="buy-button">Buy</button>
      </div>
    );
}

export default ProductItem;