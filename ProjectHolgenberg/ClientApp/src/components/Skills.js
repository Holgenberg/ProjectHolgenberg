import React, { Component } from 'react'
import './HamburgerMenu.css'
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import NavigationMenuContent from './NavigationMenuContent'
import './Skills.css'
import './SkillsContainer'
import SkillsContainer from './SkillsContainer'

export class Skills extends Component {
	displayName = Skills.name

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

		const programmingLanguageSkills = ["C#", "Python", "C++", "Javascript", "C", "PHP"];
		const microsoftTechnologySkills = [".NET", "ASP.NET", "Xamarin", "WPF", "Microsoft SQL"]
		const cloudSkills = ["Azure DevOps", "Resource Groups", "AWS EC2", "Elastic Beanstalk", "S3", "CodeDeploy"]
		const webSkills = ["RESTful APIs", "HTML", "CSS", "React.js", "WebGL"]
		const organisationalPractices = ["Scrum", "Unit Testing", "TDD/BDD", "Documentation Writing"]
		const otherSkills = ["Git/GitHub", "OpenCascade", "Unity 3D"]

		return (
			<div className="Skills">
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

				<SkillsContainer title="Programming Languages"
					skills={programmingLanguageSkills} />
				<SkillsContainer title="Microsoft Technologies"
					skills={microsoftTechnologySkills} />
				<SkillsContainer title="Cloud"
					skills={cloudSkills} />
				<SkillsContainer title="Web"
					skills={webSkills} />
				<SkillsContainer title="Organisational Skills"
					skills={organisationalPractices} />
				<SkillsContainer title="Other Skills"
					skills={otherSkills} />
			</div>
		)
	}
}