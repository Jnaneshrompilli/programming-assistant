import React from 'react'
import "./navbar.css"

export default function Navbar() {
    return (
        <>
            <div className="frame">
                <div className="navbar">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <div className="search-bar">
                        <input type="text" placeholder="Search.." name="search" />
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </div>
            <div className="navbar-background"></div>
        </>
    )
}
