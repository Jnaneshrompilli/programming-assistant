import React from 'react'
import "./card.css"

export default function Card() {
    return (
        <div className="card">
            <div className="card-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Ubuntu_and_Ubuntu_Server_Icon.png" alt="Avatar" />
            </div>
            <div className="card-container">
                <h2>How to install WSL on windows 11</h2>
            </div>
        </div>
    )
}
