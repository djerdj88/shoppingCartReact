import React, {Component} from 'react';
import ProductItem from './ProductItem';

class ListProducts extends Component{
    render(){
    const list = this.props.products.map((product) =>{
        return <ProductItem
        key = {product.id}
        name = {product.name}
        imageUrl = {product.image}
        price = {product.price}
        description = {product.description}
        addProduct ={this.props.addToShoppingCart}
        product = {product}
        />
    })
    return (
        <div className="list-products">
        {list}
    </div>
    );
    }
}

export default ListProducts;