import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NavigationMenuContent.css'

class NavigationMenuContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="menu">
        <div className="menu-item">
          <a
            href="/"
            onClick={this.props.closeCallback}>
            Home
          </a>
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
