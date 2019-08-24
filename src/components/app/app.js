import React from 'react';
import TodoList from '../todo-list/todo-list';
import SearchPanel from '..//search-panel/search-panel';
import AppHeader from '..//app-header/app-header';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import './app.css';

const todos = ['learn', 'build', 'debug'];

const App = () => {
    return (
        <div className="todo-app">
            <AppHeader todo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList items={ todos } /> 
        </div>
    )
}

export default App;