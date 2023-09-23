﻿import React, { Component } from 'react'
import './HamburgerMenu.css'
import './Portfolio.css'
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import NavigationMenuContent from './NavigationMenuContent'
import CaseStudy from './CaseStudy'
import NexGenLogo from '../images/nexgen_logo.png'
import WardenLogo from '../images/warden_logo.png'
import StarlitLogo from '../images/starlit_logo.png'
import GPSCAMLogo from '../images/gps_cam_logo.png'

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

				<div class="container">
					<div class="row">
						<div class="col-4">
							<CaseStudy caseStudyImage={GPSCAMLogo} />
						</div>
						<div class="col-4">
							<CaseStudy caseStudyImage={NexGenLogo} />
						</div>
						<div class="col-4">
							<CaseStudy caseStudyImage={WardenLogo} />
						</div>
					</div>
					<div class="col-3">
						<CaseStudy caseStudyImage={StarlitLogo} />
					</div>
				</div>
			</div>
		)
	}
}
