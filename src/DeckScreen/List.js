import React from 'react'
import DeckCard from './DeckCard'

export default function List({flashcards}) {
    return (
        <div className="deckCard-layout">
            {flashcards.map(flashcard => {return <DeckCard flashcard={flashcard} key={flashcard.id}/>})}
        </div>
    )
}