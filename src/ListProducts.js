import React from 'react';
import ProductItem from './ProductItem';

const ListProducts = (props) => {
    const list = props.products.map(function (product){
        return <ProductItem
        key = {product.id}
        name = {product.name}
        imageUrl = {product.image}
        price = {product.price}
        description = {product.description}
        />
    })
    return (
        <div className="list-products">
        {list}
    </div>
    );
}

export default ListProducts;