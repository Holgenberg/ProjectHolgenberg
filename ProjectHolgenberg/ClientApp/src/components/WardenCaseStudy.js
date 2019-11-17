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

        const caseStudyDescription = "Warden is an application that allows users to review property landlording in the Belfast Area. "
            + "It is cross platform on Android and iOS devices, developed using C# Xamarin."
            + " The solution made use of Xamarin, XAML, Azure, MS SQL, MVVM Patterns, Entity Frameworks and WebAPI. The solution also incorporated Lottie"
            + ", an animation library used by AirBnB.";

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