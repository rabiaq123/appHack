import './App.css';
import { Component } from 'react';
import 'firebase/database';
import DeckPage from './DeckPage';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SingleCard from './SingleCard';


class App extends Component {
  
  render(){

    return (
      <div className="App">
        <Router>
          <Nav/>
          <Switch>
            <Route path="/" exact component={SingleCard}/>
            <Route path="/deck" component={DeckPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
