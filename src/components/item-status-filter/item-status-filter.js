import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = (props) => {

    return (
        <div className='btn-group'>
            <button className={`btn ${(
                                    (props.btnClasses === 'all' ||
                                     props.btnClasses === '') ?
                                    'btn-info' :
                                    'btn-outline-secondary'
                                )}`}
                    onClick={() => props.onFilter('all')}>all</button>
            <button className={`btn ${(
                                    (props.btnClasses === 'active') ?
                                    'btn-info' :
                                    'btn-outline-secondary'
                                )}`}
                    onClick={() => props.onFilter('active')}>active</button>
            <button className={`btn ${(
                                    (props.btnClasses === 'done') ?
                                    'btn-info' :
                                    'btn-outline-secondary'
                                )}`}
                    onClick={() => props.onFilter('done')}>done</button>
        </div>
    )
}

export default ItemStatusFilter;