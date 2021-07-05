import React, {useState} from 'react';
import 'firebase/database';
import './DeckPage.css';
import List from './DeckScreen/List';
import AddCard from './DeckScreen/AddCard';

function DeckPage() {
  
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS)
  const [buttonAddCard, setButtonAddCard] = useState(false);

  return (
    <div>
      <br></br>    
      <div className="home">
        <div style={styles.titleBar}>
          <h2 style={styles.titleText}>Deck Screen</h2>
        </div>
        <List flashcards={flashcards}/>
      </div>
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "Question 1",
    answer: "Answer 1"
  },
  {
    id: 2,
    question: "Question 2",
    answer: "Answer 2"
  },
  {
    id: 3,
    question: "Question 3",
    answer: "Answer 3"
  },
  {
    id: 4,
    question: "Question 4",
    answer: "Answer 4"
  },
]

const styles = {
  titleBar: {
    backgroundColor:'white',
    borderRadius: 100,
    width:'90%',
    height:100,
    fontSize:12,
    marginBottom:20,
    padding:'1em',
  },
  titleText: {
    textAlign:'center',
    fontSize: 50,
  },
}


export default DeckPage;