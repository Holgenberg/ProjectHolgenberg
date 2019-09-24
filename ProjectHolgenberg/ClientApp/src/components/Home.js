import React, { Component } from 'react';
import './Home.css'
import desktopImage from '../images/background.jpg';

export class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <div className="Home" style={{ backgroundImage: `url(${desktopImage})` }}>
                <link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet"></link>
                <div className="Home-content">
                    <h1>Alexei Holgate</h1>
                    <p>Software Developer</p>
                </div>
            </div>
        );
    }
}
