import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

ReactDOM.render(<App />, document.getElementById('root'));

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

