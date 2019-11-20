import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Route from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Shelves from './Shelves';
import Shoes from './Shoes';

class App extends Component {
  state = {
    shoes: ['shoe1', 'shoe2', 'shoe3', 'shoe4'],
    shelves: ['shelf1', 'shelf2']
  }

  <Route
    path='/shelves'
    component={(props) => Shelves()}

  render () {
    return (
      <main className='App'>
        <Header />
        <Nav />
        <Shelves shelves={this.state.shelves} />
        <Shoes shoes={this.state.shoes} />
      </main>
    );
  }
}

export default App;