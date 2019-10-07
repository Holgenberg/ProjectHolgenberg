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
                <p className="hint">Click outside the menu to close it, or swipe it closed on touch device</p>
            </div>
        )
    }
}

NavigationMenuContent.propTypes = {
    closeCallback: PropTypes.func.isRequired
}

export default NavigationMenuContent
