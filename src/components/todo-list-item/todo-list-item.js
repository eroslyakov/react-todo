import React from 'react';
import './todo-list-item.css';

const TodoListItem = (props) => {
    return (
        <span className="todo-list-item">
            <span className="todo-list-item-label">
                {props.label}
            </span>
            <button className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
            </button>
            <button className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
        </span>
    )
}

export default TodoListItem;