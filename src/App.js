import './App.css';
import Card from './Card/Card';
import DrawButton from './Draw/DrawButton';
import { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import {DB_CONFIG} from './Config/Firebase/db_config';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';

class App extends Component {
  
  constructor(props){
    super(props);

    // firebase
    //this.app = firebase.initializeApp(DB_CONFIG);

    if (!firebase.apps.length) {
      this.app = firebase.initializeApp(DB_CONFIG);
    }else {
      this.app = firebase.app(); // if already initialized, use that one
    }
   
    this.database = this.app.database().ref().child('cards');
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],
      currentCard: {}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;

    this.database.on('child_added', snap => {
      currentCards.push({
        id: snap.key,
        ques: snap.val().ques,
        ans: snap.val().ans,
      })

      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })

    })

  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return(card);
  }

  updateCard() {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }
  
  render(){

    return (
      <div className="App">
        <ReactBootStrap.Navbar bg="dark" variant="dark">
          <ReactBootStrap.Navbar.Brand href="#home">Study Buddy</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#Deck">Deck</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#Add">Add</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#Edit">Edit</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#Delete">Delete</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar>

        <div className="cardRow">
          {/* Display Card */}
          <Card ques={this.state.currentCard.ques} 
                ans={this.state.currentCard.ans}
          />
        </div>
        <br></br>
        <div className="btnLocation">
          <div className="btnRow">
            {/*  Draw Button */}
            <DrawButton drawCard={this.updateCard}/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
