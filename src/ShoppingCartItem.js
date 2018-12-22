import React from 'react';

const ShoppingCartItem = (props) => {
    return (
        <div className="shopping-cart-product">
        <div className="product-info">
          <div>
            <h3>{props.product.name}</h3>
            <p>${props.product.price} &times; {props.product.quantity}</p>
          </div>
          <img src={props.product.image} alt="product" />
        </div>
        <div className="product-count">
          <button onClick={props.removeFromShoppingCart(props.product)}>-</button>
          <span>{props.product.quantity}</span>
          <button onClick={props.addToShoppingCart(props.product)}>+</button>
        </div>
        </div>
    );
}

export default ShoppingCartItem;