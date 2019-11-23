import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import React, { Component } from 'react'
import './CaseStudy.css'
import StarlitLogo from '../images/starlit_logo.png'

class StarlitCaseStudy extends Component {
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

        const caseStudyDescription = "Starlit was my first self-taught project that led me to become a software developer. "
            + "It was an endless runner game developed in Unity 3D with C# for scripting. I also designed all the sprites for the game using"
            + " GIMP. The serialized APK was listed on the Google Play Store for multiple years until it was discontinued due to renumeration"
            + " legislation involving ad's.";

        if (this.state.width > 425) {
            return (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <Image src={StarlitLogo} roundedCircle />
                            </Col>
                            <Col>
                                <p className="case-study-description">{caseStudyDescription}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }

        else {
            return (
                <div className="centre">
                    <Image src={StarlitLogo} roundedCircle />
                    <p className="case-study-description">{caseStudyDescription}</p>
                </div>
            )
        }
    }
}

export default StarlitCaseStudy