import { Component } from 'react';
import 'firebase/database';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import DeckPage from './DeckPage';
import SingleCard from './SingleCard';
import AddCard from './DeckScreen/AddCard';
import Home from './Home';


class App extends Component {
  
  render(){

    return (
      <div className="App">
        <Router>
          <Nav/>
          <Switch>
            <Route path="/" exact component={SingleCard}/>
            <Route path="/Deck" component={DeckPage}/>
            <Route path="/Add" component={AddCard}/>
            <Route path="/Study" component={SingleCard}/>
            <Route path="/Home" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
