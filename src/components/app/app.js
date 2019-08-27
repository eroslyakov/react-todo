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
            todos: this.getTodos(),
            query: 'all'
        };

        this.getTodos = this.getTodos.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.createNewItem = this.createNewItem.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.toggleProperty = this.toggleProperty.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleDone = this.onToggleDone.bind(this);
        this.doneUndoneCount = this.doneUndoneCount.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleFiltering = this.handleFiltering.bind(this);
        this.filter = this.filter.bind(this);
    }

    getTodos() {
        return (!localStorage.getItem('allTodos')) ?
                                                [] :
                JSON.parse(localStorage.getItem('allTodos'));

    }

    deleteItem(id) {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }));
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
        }));
    }

    toggleProperty(id, property) {
        const idx = this.state.todos.findIndex(item => item.id === id);
        const updtItem = this.state.todos[idx];
        updtItem[property] = !updtItem[property];

        this.setState(state => ({
            todos: [
                ...state.todos.slice(0, idx), 
                updtItem, 
                ...state.todos.slice(idx+1)
            ]
        }));
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

    handleSearch(substr) {
        this.setState({ query: substr })
    }

    handleFiltering(query) {
        if (query === 'active' || query === 'done') {
            this.setState({ query: query })
        } else {
            this.setState({ query: 'all' })
        }
    }

    filter(todos, query) { 
        if(query === 'all') {
            return todos;
        }
        return (this.state.query === 'active') ? todos.filter(item => !item.done) :
                 (this.state.query === 'done') ? todos.filter(item => item.done) :
                                                 todos.filter(item => item.label.indexOf(query) !== -1);
    }

    render() {
        const headerData = this.doneUndoneCount();
        const filteredTodos = this.filter(this.state.todos, this.state.query);
        localStorage.setItem('allTodos', JSON.stringify(this.state.todos));

        return (
            <div className="todo-app">
                <AppHeader todo={headerData[1]} done={headerData[0]}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearch={this.handleSearch} />
                    <ItemStatusFilter onFilter={this.handleFiltering}
                                      btnClasses={this.state.query} />
                </div>
                <TodoList items={filteredTodos} 
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