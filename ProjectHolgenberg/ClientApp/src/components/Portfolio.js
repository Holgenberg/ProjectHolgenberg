import React, { Component } from 'react'
import './HamburgerMenu.css'
import './Portfolio.css'
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import NavigationMenuContent from './NavigationMenuContent'
import NexploreCaseStudy from './NexploreCaseStudy'
import WardenCaseStudy from './WardenCaseStudy'

export class Portfolio extends Component {
    displayName = Portfolio.name

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
            <div className="Portfolio">
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

                <NexploreCaseStudy />
                <WardenCaseStudy />
            </div>
        )
    }
}
