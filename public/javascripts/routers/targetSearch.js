import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { HeaderBanner } from '../components/display/headerBanner.js';

require('../../stylesheets/common.css');

class TargetSearch extends Component {
	render() { //这里用的是大括号 包裹着函数体 与display/headerBanner.js对比
		return <div>
			<HeaderBanner/>
		</div>;
	}
}

// for test~~~
// ReactDOM.render(
// 	<h1>Hello world~</h1>
// , document.getElementById('main'));

ReactDOM.render(
	<HeaderBanner/>
, document.getElementById("main"));