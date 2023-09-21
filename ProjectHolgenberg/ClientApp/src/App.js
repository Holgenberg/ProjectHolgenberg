import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default class App extends Component {
	static displayName = App.name;

	render() {
		return (
			<div>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/portfolio/' element={<Portfolio />} />
					<Route exact path='/skills/' element={<Skills />} />
					<Route exact path='/contact/' element={<Contact />} />
				</Routes>
				<link
					rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap"
					rel="stylesheet"
				></link>
			</div>
		);
	}
}