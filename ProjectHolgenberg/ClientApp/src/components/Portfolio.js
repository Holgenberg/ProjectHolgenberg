import React, { Component } from 'react'
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
import DIGGSLogo from '../images/DIGGSIcon.png'

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

		const diggsBulletPoints = ["Network Engineering", "Windows Presentation Foundation", "ISO Standards"];
		const gpsCamBulletPoints = ["Multithreading", "Opencascade", "C++/CLI"]
		const nexPloreBulletPoints = ["CD/CI", "Amazon Web Services", "REST API's"]
		const wardenBulletPoints = ["iOS Development", "Microsoft Azure", "SQL"]
		const starlitBulletPoints = ["Android Development", "Deployment on Google Services", "Unity 3D"]

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
							<CaseStudy caseStudyImage={DIGGSLogo}
								title="DIGGS"
								brief="Networked Gear Inspection Solution connected to Renishaw Equator™s"
								bulletPoints={diggsBulletPoints}
							/>
						</div>
						<div class="col-4">
							<CaseStudy caseStudyImage={GPSCAMLogo}
								title="GPS CAM"
								brief="Computer Aided Manufacturing Solution for 5-Axis CNC of Gears"
								bulletPoints={gpsCamBulletPoints}/>
						</div>
						<div class="col-4">
							<CaseStudy caseStudyImage={NexGenLogo}
								title="NexPlore"
								brief="3D Asbestos Risk Visualization & Management Web App"
								bulletPoints={nexPloreBulletPoints}/>
						</div>						
					</div>
					<div class="row d-flex justify-content-center">
						<div class="col-4">
							<CaseStudy caseStudyImage={WardenLogo}
								title="Warden"
								brief="Mobile App for Property Reviews in Belfast"
								bulletPoints={wardenBulletPoints}/>
						</div>
						<div class="col-4">
							<CaseStudy caseStudyImage={StarlitLogo}
								title="Starlit"
								brief="Endless Runner Mobile Game for Google Play Store"
								bulletPoints={starlitBulletPoints}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
