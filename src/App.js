import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import { SearchBar } from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  componentDidMount(){
    fetch(
      'https://jsonplaceholder.typicode.com/users'
      ).then(response => response.json()
      ).then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => this.setState({searchField: e.target.value});

  render() {
    //Estructura de deconstruccion de ES6, se obtienen los valores de esas variables del objeto this.state
    const {monsters, searchField} = this.state; 
    //Ahora, para obtener filteredMonsters usamos la funcion array.filter() usando la variable searchField en minusculas para filtrarlo
    //Despues, para renderizar, mandamos el valor de la variable filteredMonsters a la lista de cartas.
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes( searchField.toLowerCase() ) );
    return(
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBar 
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />        
      </div>
    );
  }
}

export default App;
