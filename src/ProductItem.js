import React, {Component} from 'react';
import ModalWindow from './ModalWindow';

function If (props) {
    return props.condition ? props.children : null;
}

class ProductItem extends Component {
    state = {
        displayModal: false
    }

    toggleModal = event => {
        this.setState(function (prevState) {
            return {
                displayModal: !prevState.displayModal
            }
        });
    }

    render(){
    return(
        <div className="product">
        <img src={this.props.imageUrl} alt="product"/>
        <p>{this.props.name}</p>
        <p>{this.props.price}$</p>
        <button className="details-button" onClick={this.toggleModal}>Details</button>
        <button className="buy-button" onClick={this.props.addProduct(this.props.product)}>Buy</button>
        <If condition = {this.state.displayModal}>
        <ModalWindow
        {...this.props}
        toggleButton = {this.toggleModal}
        />
        </If>
    </div>
    );
    }
}

export default ProductItem;