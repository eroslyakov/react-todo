import React from 'react';
import './todo-list-item.css';

const TodoListItem = (props) => {
    let labelClasses = 'todo-list-item'
    labelClasses += (props.important) ? ' important' : '';
    labelClasses += (props.done) ? ' done' : '';

    return (
        <span className={labelClasses}>
            <span className="todo-list-item-label"
                  onClick={props.onToggleDone} >
                {props.label}
            </span>
            <button className="btn btn-outline-success btn-sm float-right"
                    onClick={props.onToggleImportant}>
                <i className="fa fa-exclamation" />
            </button>
            <button className="btn btn-outline-danger btn-sm float-right"
                    onClick={props.onDeleted}>
                <i className="fa fa-trash-o" />
            </button>
        </span>
    )
}

export default TodoListItem;