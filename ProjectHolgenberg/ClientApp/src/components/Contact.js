import React, { Component } from 'react'
import './HamburgerMenu.css'
import './Contact.css'
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import NavigationMenuContent from './NavigationMenuContent'
import SocialFollow from './SocialFollow'

export class Contact extends Component {
    displayName = Contact.name

    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false,
        };
    }

    openMenu() {
        this.setState({ menuOpen: true })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }

    render() {
        return (
            <div className="Contact">
                <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet"></link>
                <CheeseburgerMenu
                    isOpen={this.state.menuOpen}
                    closeCallback={this.closeMenu.bind(this)}>
                    <NavigationMenuContent closeCallback={this.closeMenu.bind(this)} />
                </CheeseburgerMenu>

                <div className="Hamburger-menu-button-placement">
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
                </div>

                <div className="Contact-content">
                    <h3>alexeiholgate1@gmail.com</h3>
                    <p>mob: +447506586992</p>
                    <h3>Special thanks to:</h3>
                    <p>Emma's View Photography</p>
                    <p>middlerun</p>
                </div>

                <SocialFollow />
            </div>
        )
    }
}