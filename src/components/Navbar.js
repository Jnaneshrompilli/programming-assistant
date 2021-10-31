import React from 'react'
import "../App.css"

export default function Navbar() {
    return (
        <div className="frame">
            <div className="navbar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <div className="search-bar">
                    <input type="text" placeholder="Search.." name="search"/>
                </div>
            </div>
        </div>
    )
}
