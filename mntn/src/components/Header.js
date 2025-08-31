import React from 'react';
import ig from '../pics/ig.png'
import twitter from '../pics/twitter.png'

export default function Header() {
    return(
        <header className="App-header">
            <div className="social-sidebar">
                <div className="follow-text">
                    <a href="#" style={{textDecoration: 'none', color: 'white'}}>Follow</a>
                </div>
                <a href="#"><img src={ig} className="social-icon" alt="Instagram"></img></a>
                <a href="#"><img src={twitter} className="social-icon" alt="Twitter"></img></a>
            </div>
            <div className="header-content">
                <h4 className="header-subtitle">------A Hiking Guide</h4>
                <h1 className="header-title">Be prepared for the Mountains and beyond!</h1>
                <h5 className="header-scroll">Scroll down ↓</h5>
            </div>
            <div className="nav-numbers">
                <div className="nav-number-start">Start</div>
                <div className="nav-number-item">01</div>
                <div className="nav-number-item">02</div>
                <div className="nav-number-item">03</div>
            </div>
        </header>
    )
}
