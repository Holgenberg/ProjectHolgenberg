import React, { useState, useEffect } from 'react';
import CaseStudy from './CaseStudy'
import NexGenLogo from '../images/nexgen_logo.png'
import WardenLogo from '../images/warden_logo.png'
import StarlitLogo from '../images/starlit_logo.png'
import GPSCAMLogo from '../images/gps_cam_logo.png'
import DIGGSLogo from '../images/DIGGSIcon.png'

const CaseStudyCollection = () => {
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

	const diggsBulletPoints = ["Network Engineering", "Windows Presentation Foundation", "ISO Standards"];
	const gpsCamBulletPoints = ["Multithreading", "Opencascade", "C++/CLI"]
	const nexPloreBulletPoints = ["CD/CI", "Amazon Web Services", "REST API's"]
	const wardenBulletPoints = ["iOS Development", "Microsoft Azure", "SQL"]
	const starlitBulletPoints = ["Android Development", "Deployment on Google Services", "Unity 3D"]

	if (windowWidth > 768) {
		return (
			<div className="container">
				<div className="row">
					<div className="col-4">
						<CaseStudy caseStudyImage={DIGGSLogo}
							title="DIGGS"
							brief="Networked Gear Inspection Solution connected to Renishaw Equator™s"
							bulletPoints={diggsBulletPoints}
						/>
					</div>
					<div className="col-4">
						<CaseStudy caseStudyImage={GPSCAMLogo}
							title="GPS CAM"
							brief="Computer Aided Manufacturing Solution for 5-Axis CNC of Gears"
							bulletPoints={gpsCamBulletPoints} />
					</div>
					<div className="col-4">
						<CaseStudy caseStudyImage={NexGenLogo}
							title="NexPlore"
							brief="3D Asbestos Risk Visualization & Management Web App"
							bulletPoints={nexPloreBulletPoints} />
					</div>
				</div>
				<div className="row d-flex justify-content-center">
					<div className="col-4">
						<CaseStudy caseStudyImage={WardenLogo}
							title="Warden"
							brief="Mobile App for Property Reviews in Belfast"
							bulletPoints={wardenBulletPoints} />
					</div>
					<div className="col-4">
						<CaseStudy caseStudyImage={StarlitLogo}
							title="Starlit"
							brief="Endless Runner Mobile Game for Google Play Store"
							bulletPoints={starlitBulletPoints} />
					</div>
				</div>
			</div>
		)
	}

	else {
		return (
			<div>
				<CaseStudy caseStudyImage={DIGGSLogo}
					title="DIGGS"
					brief="Networked Gear Inspection Solution connected to Renishaw Equator™s"
					bulletPoints={diggsBulletPoints} />
				<CaseStudy caseStudyImage={GPSCAMLogo}
					title="GPS CAM"
					brief="Computer Aided Manufacturing Solution for 5-Axis CNC of Gears"
					bulletPoints={gpsCamBulletPoints} />
				<CaseStudy caseStudyImage={NexGenLogo}
					title="NexPlore"
					brief="3D Asbestos Risk Visualization & Management Web App"
					bulletPoints={nexPloreBulletPoints} />
				<CaseStudy caseStudyImage={WardenLogo}
					title="Warden"
					brief="Mobile App for Property Reviews in Belfast"
					bulletPoints={wardenBulletPoints} />
				<CaseStudy caseStudyImage={StarlitLogo}
					title="Starlit"
					brief="Endless Runner Mobile Game for Google Play Store"
					bulletPoints={starlitBulletPoints} />
			</div>
		)
	}
};

export default CaseStudyCollection;