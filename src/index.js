import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './FormComponent';
import ListProducts from './ListProducts';
import ShoppingCart from './ShoppingCart';

//{id: 1, name: "Sample Watch", price: 300, description: "Sample description..", image: "https://sc02.alicdn.com/kf/HTB1gHRfg6uhSKJjSspmq6AQDpXaI/Accept-Sample-Design-Your-Own-Blank-Wrist.jpg_350x350.jpg"},
//{id: 2, name: "Product #2", price: 199, description: "Sample description..", image: "https://pl.shadestation.com/media/thumbs/350x350/media/product_images/Fossil-Watches-FS5439fw350fh350.jpg"}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            shoppingProducts: {},
            total: 0
        }
    }

    componentDidMount() {
        const temp = localStorage.getItem("products");
       setTimeout(() => {
        this.setState({
            products: JSON.parse(temp || "[]")
        })    
       }, 1000);
        

    }

    addProduct = product =>{
        product = {
            ...product, id: this.state.products.length + 1
        }
        this.setState({
            products: [...this.state.products, product]
        }, () => {
            localStorage.setItem("products", JSON.stringify(this.state.products));
        })
        
    }

    addToShoppingCart = (obj) => {
        return () => {
           const temporary = {...this.state.shoppingProducts,
                 [obj.id]: this.state.shoppingProducts[obj.id] || obj}

            if (!temporary[obj.id].quantity){
                temporary[obj.id].quantity = 0
            }

            temporary[obj.id].quantity++;

            this.setState({
                shoppingProducts: temporary
            }, this.total )
        }
    }

    removeFromShoppingCart = (obj) => {
        return () => {
            const temporary = {...this.state.shoppingProducts,
                [obj.id]: this.state.shoppingProducts[obj.id] || obj}

                
                temporary[obj.id].quantity--;
                if (temporary[obj.id].quantity === 0){
                    delete temporary[obj.id]
                }
            
                this.setState({
                shoppingProducts: temporary
            }, this.total);
        }
    }

    total = () => {
        const total = Object.values(this.state.shoppingProducts).reduce((sum, product) => {
            sum = sum + (product.price * product.quantity);
            return sum;
        }, 0);
        console.log(total);
        this.setState({
            total: total
        })
    }

    render() {
        return(
                <div className="container">
                <Form addProduct={this.addProduct} />
                <ListProducts 
                products={this.state.products}
                addToShoppingCart={this.addToShoppingCart}
                />
                <ShoppingCart 
                shoppingProducts={this.state.shoppingProducts}
                addToShoppingCart={this.addToShoppingCart}
                removeFromShoppingCart={this.removeFromShoppingCart}
                total = {this.state.total}
                />
                </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
