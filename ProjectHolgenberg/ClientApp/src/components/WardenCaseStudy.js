import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import React, { Component } from 'react'
import './CaseStudy.css'
import WardenLogo from '../images/warden_logo.png'

class WardenCaseStudy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    render() {

        const wardenLink = "https://play.google.com/store/apps/details?id=com.SandwichArtist.ProjectWarden";

        const caseStudyDescription = "In a joint project between Lucion Services and Northumbria University from November 2016 to October 2019, "
            + "I oversaw a solution to develop a 3D scanning solution for Asbestos Surveyors. Data-populated 3D Models were hosted online."
            + " The solution made use of .NET, AWS, Azure DevOps, Javascript, CSS and HTML. The solution also incorporated Machine Learning"
            + ", OpenGL and a host of other libraries.";

        if (this.state.width > 425) {
            return (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <p className="case-study-description">{caseStudyDescription}</p>
                            </Col>
                            <Col>
                                <a href={wardenLink}>
                                    <Image src={WardenLogo} roundedCircle />
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }

        else {
            return (
                <div className="centre">
                    <a href={wardenLink}>
                        <Image src={WardenLogo} roundedCircle />
                    </a>
                    <p className="case-study-description">{caseStudyDescription}</p>
                </div>
            )
        }
    }
}

export default WardenCaseStudy