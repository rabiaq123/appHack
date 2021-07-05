import React, {useState} from 'react'
import "../DeckPage.css"

export default function DeckCard( {flashcard} ) {
    const [flip, setFlip] = useState(false)

    return (
        <div className={`deckCard ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className = "front">
                {flashcard.question}
            </div>
            <div className = "back">
                {flashcard.answer}
            </div>
        </div>
    )
}