import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
function Nav(){
    return (
        <ReactBootStrap.Navbar bg="dark" variant="dark">
          <ReactBootStrap.Navbar.Brand href="Home">Study Buddy</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Nav className="NavParts">
            <ReactBootStrap.Nav.Link href="Home">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="Study" className="Study">Study</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="Add" className="Add">Add</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="Deck" className="Deck">Deck</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar>
    );
}

export default Nav;