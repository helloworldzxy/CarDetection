import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { HeaderBanner } from '../components/display/headerBanner.js';
import Navigation from '../components/display/navigation.js'; //注意二者引入方式，一个带大括号一个不带

require('../../stylesheets/common.css');

class TargetSearch extends Component { //该class继承自Component, 用于下面的Route中
	render() { //这里用的是大括号 包裹着函数体 与display/headerBanner.js对比
		return <div>
			<HeaderBanner/>
			<div className="container">
				<Navigation/>
				<div className="content">{this.props.children}</div>
			</div>
		</div>;
	}
}

// for test~~~
// ReactDOM.render(
// 	<h1>Hello world~</h1>
// , document.getElementById('main'));

//不需要路由时可以这么写
// ReactDOM.render(
// 	<div>
// 		<HeaderBanner/> 
// 		<div className="container">
// 			<Navigation/>
// 			<div className="content">targetSearch content targetSearch content targetSearch content</div>
// 		</div>
// 	</div>
 
// , document.getElementById("main"));

const Motor = () => { return <div><div>MotorMotorMotorMotorMotorMotor</div></div>; };
const NonMotor = () => { return <div><div>NonMotorNonMotorNonMotorNonMotorNonMotorNonMotor</div></div>; };
const Staff = () => { return <div><div>StaffStaffStaffStaffStaff</div></div>; };


/*
- Router组件有一个参数history，它的值hashHistory表示，路由的切换由URL的hash变化决定，即URL的#部分发生变化。
以下，用户访问localhost:3002/targetSearch，实际会看到的是localhost:3002/targetSearchs/#/；
访问localhost:3002/targetSearch/motor, 实际会看到的是localhost:3002/targetSearchs/#/motor.

- 用户访问根路由localhost:3002/targetSearch，组件TargetSearch就会加载到`document.getElementById('main')`.

- Route组件可以嵌套。如下，用户访问/motor, 会先加载TargetSearch组件，然后在它内部加载Motor组件。

- 如果不写IndexRoute，则用户访问根路由时，不会加载任何子组件，也即TargetSearch组件的`this.props.children`为`undefined`.
*/
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={TargetSearch}>
			<IndexRoute component={Motor}/>
			<Route path="/motor" component={Motor}/>
			<Route path="/nonMotor" component={NonMotor}/>
			<Route path="/staff" component={Staff}/>
		</Route>
	</Router>
, `document.getElementById('main')`);






