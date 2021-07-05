import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DeckPage from './DeckPage';

function Home(){
    return (
        <div>
            <ReactBootStrap.Card>
                <ReactBootStrap.Card.Body>
                    <ReactBootStrap.Card.Title>Deck One</ReactBootStrap.Card.Title>
                    <ReactBootStrap.Card.Text>
                        <ReactBootStrap.Nav.Link href="Deck"></ReactBootStrap.Nav.Link>
                        Description For Deck One
                    </ReactBootStrap.Card.Text>
                </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>

            <ReactBootStrap.Card>
                <ReactBootStrap.Card.Body>
                    <ReactBootStrap.Card.Title>Add Deck</ReactBootStrap.Card.Title>
                </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>
        </div>
    );
}

export default Home;