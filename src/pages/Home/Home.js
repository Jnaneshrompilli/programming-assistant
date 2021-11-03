import React from 'react'
import "./home.css"

import Card from '../../components/Card/Card'

export default function Home() {
    return (
        <div className="home-block">
            <div className="image-card">
            </div>
            <div className="home-empty-block"></div>
            <p className="card-list-title">Popular Blog Posts</p>
            <div className="card-list">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
