import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import React, { Component } from 'react'
import './CaseStudy.css'
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
                                <p className="case-study-description">Overseeing a project in which surveyors would capture 3D data which would then be hosted in a scale-accurate 3D model online</p>
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
                </div>
            )
        }
    }
}

export default NexploreCaseStudy