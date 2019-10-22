import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import React, { Component } from 'react'
import './NexploreCaseStudy.css'
import NexGenLogo from '../images/nexgen_logo.png'

class NexploreCaseStudy extends Component {
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

        const nexploreLink = "https://tinyurl.com/y66b5can";

        const caseStudyDescription = "From November 2016 to October 2019, I oversaw a project to develop a 3D scanning solution for Asbestos Surveyors."

        if (this.state.width > 425) {
            return (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <a href={nexploreLink}>
                                    <Image src={NexGenLogo} rounded />
                                </a>
                            </Col>
                            <Col>
                                <p className="nexplore-case-study-description">{caseStudyDescription}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }

        else {
            return (
                <div className="centre">
                    <a href={nexploreLink}>
                        <Image src={NexGenLogo} rounded />
                    </a>
                    <p className="nexplore-case-study-description">{caseStudyDescription}</p>
                </div>
            )
        }
    }
}

export default NexploreCaseStudy