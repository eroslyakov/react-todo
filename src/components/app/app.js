import React, { Component } from 'react';
import TodoList from '../todo-list/todo-list';
import SearchPanel from '..//search-panel/search-panel';
import AppHeader from '..//app-header/app-header';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import './app.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            todos: []
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.createNewItem = this.createNewItem.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.findItemById = this.findItemById.bind(this);
        this.toggleProperty = this.toggleProperty.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleDone = this.onToggleDone.bind(this);
        this.doneUndoneCount = this.doneUndoneCount.bind(this);
    }

    deleteItem(id) {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }))
    }

    createNewItem(label) {
        const todos = this.state.todos;
        const newId = (todos.length) ? todos[todos.length-1].id + 1 : 1;
        return {
            label,
            important: false,
            done: false,
            id: newId
        }
    }

    addNewItem(label) {
        const newTodo = this.createNewItem(label);
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }))
    }

    findItemById(id) {
        return this.state.todos.findIndex(item => item.id === id);
    }

    toggleProperty(id, property) {
        const idx = this.findItemById(id);
        const updtItem = {...this.state.todos[idx]};
        updtItem[property] = !updtItem[property];

        this.setState(state => ({
            todos: [
                ...state.todos.slice(0, idx), 
                updtItem, 
                ...state.todos.slice(idx+1)
            ]
        }))
    }

    onToggleImportant(id) {
        this.toggleProperty(id, 'important');
    }

    onToggleDone(id) {
        this.toggleProperty(id, 'done');
    }
    
    doneUndoneCount() {
        const done = this.state.todos.filter(item => item.done).length;
        const undone = this.state.todos.length - done;
        return [done, undone];
    }

    render() {
        const headerData = this.doneUndoneCount();
        return (
            <div className="todo-app">
                <AppHeader todo={headerData[1]} done={headerData[0]}/>
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList items={this.state.todos} 
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone} /> 
                <ItemAddForm items={this.state.todos}
                             onAddNew={this.addNewItem}/>
            </div>
        )
    }
}

export default App;