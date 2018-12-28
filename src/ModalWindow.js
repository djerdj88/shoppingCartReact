import React,{Component} from 'react';
import './modalWindow.css';

class ModalWindow extends Component {
    render(){
        return (
            <div className='modal'>
            <div className='modal-container'>
            <button className="close-button" onClick={this.props.toggleButton}>&times;</button>
            <div className="modal-content">
            <img src={this.props.imageUrl} alt="pic" />
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
            <button className="buy-button">Buy</button>
            </div>
            </div>
            </div>
        );
    }
}

export default ModalWindow;