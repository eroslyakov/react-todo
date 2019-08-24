import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = (props) => {
    return (
        <ul className="todo-list">
            { props.items.map(item => <li><TodoListItem label={item} /></li>) }
        </ul>
    )
}

export default TodoList;