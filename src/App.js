import './App.css';
import { Component } from 'react';
import 'firebase/database';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SingleCard from './SingleCard';
import DeckPage from './Deck/DeckPage';
import AddCard from './AddCard';


class App extends Component {
  
  render(){

    return (
      <div className="App">
        <Router>
          <Nav/>
          <Switch>
            <Route path="/" exact component={SingleCard}/>
            <Route path="/Study"component={SingleCard}/>
            <Route path="/Deck" component={DeckPage}/>
            <Route path="/Add" component={AddCard}/>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
