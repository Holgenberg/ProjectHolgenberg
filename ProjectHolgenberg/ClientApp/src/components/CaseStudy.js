import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import React, { Component } from 'react'
import './CaseStudy.css'

class CaseStudy extends Component {
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

        if (this.state.width > 425) {
            return (
                <a href={this.props.referenceUrl}>
                    <Container>
                        <Row>
                            <Col xs={6}>
                                <Image src={this.props.image} rounded />
                            </Col>
                        </Row>
                    </Container>
                </a>
            )
        }

        else {
            return (
                <div className="centre">
                    <a href={this.props.referenceUrl}>
                        <Image src={this.props.image} rounded />
                    </a>
                </div>
            )
        }
    }
}

export default CaseStudy