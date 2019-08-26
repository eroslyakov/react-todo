import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = (props) => {
    return (
        <ul className="list-group todo-list">
            { props.items.map(item => 
                <li key={item.id} 
                    className="list-group-item">
                    <TodoListItem label={item.label}
                                  important={item.important}
                                  done={item.done}
                                  onDeleted={() => props.onDeleted(item.id)}
                                  onToggleImportant={() => props.onToggleImportant(item.id)}
                                  onToggleDone={() => props.onToggleDone(item.id)} />
                </li>) 
            }
        </ul>
    )
}

export default TodoList;