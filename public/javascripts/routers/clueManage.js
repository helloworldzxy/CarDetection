import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Clue from '../components/container/clue.js';

import { HeaderBanner } from '../components/display/headerBanner.js';
import Navigation from '../components/display/navigation.js';

require('../../stylesheets/common.css');

class ClueManage extends Component {
	render() {
		return <div>
			<HeaderBanner/>
			<div className="container">
				<Navigation/>
				<div className="content">{this.props.children}</div>
			</div>
		</div>;
	}
}

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={ClueManage}>
			<IndexRoute component={Clue} />
		</Route>
	</Router>
), document.getElementById('main'));