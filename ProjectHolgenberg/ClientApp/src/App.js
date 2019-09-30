import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/portfolio/' component={Portfolio} />
            </div>
        );
    }
}
