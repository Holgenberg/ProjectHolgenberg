import React, { Component } from 'react';
import './Home.css'
import desktopImage from '../images/home-background.jpg';

export class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <div className="Home" style={{ backgroundImage: `url(${desktopImage})` }}></div>
        );
    }
}
