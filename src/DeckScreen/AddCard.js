import React from 'react'
import './AddCard.css'

function AddCard(props) {
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2 className="addCardTitle">Create New FlashCard</h2>   
                <br></br>
                <label for="question" className="label">Front</label>
                <textarea id="question"></textarea>
                <br></br>
                <label for="answer" className="label">Back</label>
                <textarea id="answer"></textarea>
                <div>
                    <button className="close-btn">Add</button>
                    { props.children }
                </div>
                
            </div>
        </div>
    );
}


export default AddCard