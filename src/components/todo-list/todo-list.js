import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = (props) => {
    return (
        <ul className="list-group todo-list">
            { props.items.map((item, idx) => 
                <li key={idx.toString()+'item'} className="list-group-item">
                    <TodoListItem label={item} />
                </li>) 
            }
        </ul>
    )
}

export default TodoList;