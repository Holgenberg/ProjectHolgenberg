import React, { Component } from 'react'
import './Home.css'
import './HamburgerMenu.css'
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import NavigationMenuContent from './NavigationMenuContent'
import SocialFollow from './SocialFollow'

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
            <div className="Home">
                <CheeseburgerMenu
                    isOpen={this.state.menuOpen}
                    closeCallback={this.closeMenu.bind(this)}>
                    <NavigationMenuContent closeCallback={this.closeMenu.bind(this)} />
                </CheeseburgerMenu>

                <div className="Hamburger-menu-button-placement ">
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

                <div className="Home-content">
                    <h1>Alexei Holgate</h1>
                    <p>IT and Software Development Services Based in Newcastle upon Tyne</p>
                </div>

                <SocialFollow />
            </div>
        );
    }
}
