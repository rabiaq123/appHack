import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="SingleCard">
            <div className="front">
                <div className="ques">{props.ques}</div>
            </div>
            <div className="back">
                <div className="ans">{props.ans}</div>
            </div>
        </div>
    </div>
)


export default Card;