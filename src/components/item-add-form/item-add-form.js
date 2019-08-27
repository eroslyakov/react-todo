import React, { Component } from 'react';
import './item-add-form.css';


class ItemAddForm extends Component {

    constructor(props) { 
        super(props);
        this.state = { value: '' };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onAddNew(this.state.value);
        this.setState({ value: '' });
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <form className="bottom-panel d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control search-input"
                       placeholder="what needs to be done"
                       value={this.state.value}
                       onChange={this.handleChange} />
                <button className="btn btn-outline-secondary">add new</button>
            </form>
        )
    }
}

export default ItemAddForm;