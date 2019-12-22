import React, { Component } from 'react';
import './NavigationMenuContent.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NavigationMenuContent extends Component {
    constructor(props) {
        super(props)

        this.items = [
            {
                "to": "/",
                "name": "Home"
            },
            {
                "to": "/portfolio/",
                "name": "Portfolio"
            },
            {
                "to": "/skills/",
                "name": "Skills"
            },
            {
                "to": "/contact/",
                "name": "Contact"
            }
        ];
    }

    render() {
        return (
            <div className="menu">
                {this.items.map((link) =>
                    <div className="menu-item">
                        <Link to={link.to} onClick={this.props.closeCallback}>{link.name}</Link>
                    </div>
                )}
                <p className="hint">Let's get to know eachother &#128516;</p>
            </div>
        )
    }
}

NavigationMenuContent.propTypes = {
    closeCallback: PropTypes.func.isRequired
}

export default NavigationMenuContent
