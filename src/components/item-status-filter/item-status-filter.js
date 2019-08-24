import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-info">all</button>
            <button className="btn btn-outline-secondary">active</button>
            <button className="btn btn-outline-secondary">done</button>
        </div>
    )
}

export default ItemStatusFilter;