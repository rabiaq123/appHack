import React from 'react'
import './AddCard.css'

function AddCard() {
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2 style={styles.addCardTitle}>Create New FlashCard</h2>
                <br></br>
                <label for="question" className="front">Front</label>
                <textarea id="question"></textarea>
                <br></br>
                <label for="answer">Back</label>
                <textarea id="answer"></textarea>
                <div>
                    <button className="close-btn">Add</button>
                </div>

            </div>
        </div>
    );
}

const styles = {
    addCardTitle: {
        textAlign: 'center',
        fontSize: 32,
    }
}

export default AddCard