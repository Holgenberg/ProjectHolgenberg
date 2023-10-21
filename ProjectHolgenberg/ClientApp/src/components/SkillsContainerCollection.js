import React, { useState, useEffect } from 'react';
import SkillsContainer from './SkillsContainer'

const SkillsContainerCollection = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		// Function to update window width state when the window is resized
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Add an event listener for window resize
		window.addEventListener('resize', handleWindowResize);

		// Remove the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	const programmingLanguageSkills = ["C#", "Python", "C++", "Javascript", "C", "PHP"];
	const microsoftTechnologySkills = [".NET", "ASP.NET", "Xamarin", "WPF", "Microsoft SQL"]
	const cloudSkills = ["Azure DevOps", "Resource Groups", "AWS EC2", "Elastic Beanstalk", "S3", "CodeDeploy"]
	const webSkills = ["RESTful APIs", "HTML", "CSS", "React.js", "WebGL"]
	const organisationalPractices = ["Scrum", "Unit Testing", "TDD/BDD", "Documentation Writing"]
	const otherSkills = ["Git/GitHub", "OpenCascade", "Unity 3D"]

	if (windowWidth > 768) {
		return (
			<div className="container">
				<div className="row">
					<div className="col-4">
						<SkillsContainer title="Programming Languages"
							skills={programmingLanguageSkills} />
					</div>
					<div className="col-4">
						<SkillsContainer title="Microsoft Technologies"
							skills={microsoftTechnologySkills} />
					</div>
					<div className="col-4">
						<SkillsContainer title="Cloud"
							skills={cloudSkills} />
					</div>
				</div>
				<div className="row">
					<div className="col-4">
						<SkillsContainer title="Web"
							skills={webSkills} />
					</div>
					<div className="col-4">
						<SkillsContainer title="Organisational Skills"
							skills={organisationalPractices} />
					</div>
					<div className="col-4">
						<SkillsContainer title="Other Skills"
							skills={otherSkills} />
					</div>
				</div>
			</div>
		)
	}

	else {
		return (
			<div>
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
};

export default SkillsContainerCollection;