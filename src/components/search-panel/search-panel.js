import React, { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        this.props.onSearch(event.target.value);
    }

    render() {
        return  (
            <input type="text" 
                   className="form-control search-input" 
                   placeholder="search"
                   value={this.state.value}
                   onChange={this.handleChange} />
        )
    }
}

export default SearchPanel;