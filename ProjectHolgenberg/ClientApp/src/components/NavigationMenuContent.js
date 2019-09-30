import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './NavigationMenuContent.css'

class NavigationMenuContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="menu">
                <div className="menu-item">
                    <Link to="/" onClick={this.props.closeCallback}>Home</Link>
                    <Link to="/portfolio/" onClick={this.props.closeCallback}>Portfolio</Link>
                </div>

                <p className="hint">Click outside the menu to close it, or swipe it closed on touch device</p>
            </div>
        )
    }
}

NavigationMenuContent.propTypes = {
    closeCallback: PropTypes.func.isRequired
}

export default NavigationMenuContent
