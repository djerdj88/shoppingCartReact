import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './FormComponent';
import ListProducts from './ListProducts';
import ShoppingCart from './ShoppingCart';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [
                {id: 1, name: "Sample Watch", price: 300, description: "Sample description..", image: "https://sc02.alicdn.com/kf/HTB1gHRfg6uhSKJjSspmq6AQDpXaI/Accept-Sample-Design-Your-Own-Blank-Wrist.jpg_350x350.jpg"},
                {id: 2, name: "Product #2", price: 199, description: "Sample description..", image: "https://pl.shadestation.com/media/thumbs/350x350/media/product_images/Fossil-Watches-FS5439fw350fh350.jpg"}
            ]
        }
    }
    addProduct = product =>{
        product = {
            ...product, id: this.state.products.length + 1
        }
        this.setState({
            products: [...this.state.products, product]
        })
    }

    render() {
        return(
                <div className="container">
                <Form addProduct={this.addProduct} />
                <ListProducts products={this.state.products}/>
                <ShoppingCart />
                </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
