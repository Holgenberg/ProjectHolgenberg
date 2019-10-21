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
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                />
                <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet"></link>
            </div>
        );
    }
}
