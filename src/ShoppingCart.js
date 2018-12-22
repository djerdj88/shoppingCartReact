import React, {Component} from 'react';
import ShoppingCartItem from './ShoppingCartItem';

class ShoppingCart extends Component {
  render() {
    const Item = Object.values(this.props.shoppingProducts);
    const ShopItem = Item.map((product) => {
      console.log(product);
      return <ShoppingCartItem 
      product ={product}
      addToShoppingCart = {this.props.addToShoppingCart}
      removeFromShoppingCart = {this.props.removeFromShoppingCart}
      />
    })

    return(
        <div className="shopping-cart">
      <div className="shopping-cart-products">
        {ShopItem}
      </div>
      <div className="shopping-cart-summary">
        <div>Total: <b>${this.props.total}</b></div>
        <div><button>Purchase</button></div>
      </div>
    </div>
    );
  }
}

export default ShoppingCart;