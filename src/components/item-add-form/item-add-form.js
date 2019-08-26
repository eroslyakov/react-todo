import React, { Component } from 'react';
import './item-add-form.css';


class ItemAddForm extends Component {

    constructor(props) { 
        super(props);
        this.state = { value: '' };

        this.createNewItem = this.createNewItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    createNewItem() {
        let label = this.state.value;
        this.setState({ value: '' });
        this.props.onAddNew(label);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div className="bottom-panel d-flex">
                <input type="text"
                       className="form-control search-input"
                       placeholder="add some text"
                       value={this.state.value}
                       onChange={this.handleChange} />
                <button className="btn btn-outline-secondary"
                        onClick={this.createNewItem}>add new</button>
            </div>
        )
    }
}

export default ItemAddForm;