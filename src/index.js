import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import AppHeader from './components/app-header';

const todos = ['learn', 'build', 'debug'];

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList items={ todos } />
        </div>
    )
}

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             monsters: []
//         };
//     }

//     componentDidMount() {
//         fetch("https://pokeapi.co/api/v2/pokemon")
//         .then(response => response.json())
//         .then(json => this.setState({ monsters: json.results }));
//     }

//     render() {
//         return (
//             <div className='app'>
//                 <h1>Welcome</h1>
//             {
//                 this.state.monsters.map(monster => <h2 key={monster.url}>{monster.name}</h2>)
//             }
//             </div>
//         )
//     }
// }

ReactDOM.render(<App />, document.getElementById('root'));