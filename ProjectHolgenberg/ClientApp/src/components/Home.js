import React, { Component } from 'react';
import { render } from 'react-dom';
import './Home.css'
import desktopImage from '../images/background.jpg';
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import MenuContent from './menuContent'

export class Home extends Component {
    displayName = Home.name

    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false,
        }
    }

    openMenu() {
        this.setState({ menuOpen: true })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }

    render() {
        return (
            <div className="Home" style={{ backgroundImage: `url(${desktopImage})` }}>
                <CheeseburgerMenu
                    isOpen={this.state.menuOpen}
                    closeCallback={this.closeMenu.bind(this)}>
                    <MenuContent closeCallback={this.closeMenu.bind(this)} />
                </CheeseburgerMenu>

                <HamburgerMenu
                    isOpen={this.state.menuOpen}
                    menuClicked={this.openMenu.bind(this)}                    
                    width={32}
                    height={24}
                    strokeWidth={3}
                    rotate={0}
                    color='white'
                    borderRadius={0}
                    animationDuration={0.5}
                />

                <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet"></link>
                <div className="Home-content">
                    <h1>Alexei Holgate</h1>
                    <p>Developer, Traveller, Engineer, Photographer, Guitarist from Newcastle upon Tyne.</p>
                </div>
            </div>
        );
    }
}
