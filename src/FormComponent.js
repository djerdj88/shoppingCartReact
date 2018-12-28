import React, {Component} from 'react';

class Form extends Component {
    state = {
        name: "",
        price: 0,
        description: "",
        image: ""
    }

    handleChange = event => {
        console.log(event.target.value);
        this.setState(
            {[event.target.name]: event.target.value}
        );
    }

    resetForm() {
        this.setState({
        name: "",
        price: 0,
        description: "",
        image: ""
        });
    }

    handeSubmit = (event) => {
        event.preventDefault();
        this.props.addProduct(this.state);

        this.resetForm();
    }


    render(){
    return (
        <div className="add-product">
                <form>
                    <div>
                        <label>Product Name:</label>
                         <input name="name" onChange={this.handleChange} type="text" placeholder="Casio Watch" value={this.state.name}/>
                    </div>

                    <div>
                     <label>Product description:</label>
                    <textarea name="description" onChange={this.handleChange} placeholder="Sample description..." value={this.state.description}></textarea>
                    </div>
        
                    <div>
                    <label>Product image:</label>
                    <input name="image" onChange={this.handleChange} type="text" placeholder="http://...jpg" value={this.state.image}/>
                    </div>
        
                    <div>
                    <label>Product price:</label>
                    <input name="price" onChange={this.handleChange} type="number" min="0" placeholder="33.50" value={this.state.price}/>
                    </div>
        
                    <button onClick={this.handeSubmit}>Add</button>
                    </form>
                    </div>
    );
    }
}

export default Form;