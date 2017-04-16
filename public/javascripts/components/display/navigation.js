import React, { Component } from 'react';
import $ from 'jquery';

export default class Navigation extends Component{ //模块只有一个输出值时用export default

	componentDidMount(){
		let id = 'targetSearch';

		$(".navigation").delegate(".nav-item", "click", function(event){
			$(".nav-active").removeClass("nav-active");
			$(event.currentTarget).addClass("nav-active");
		});

		$('.nav-active').removeClass('nav-active');
		$('#' + id).addClass('nav-active'); //默认停在li#targetSearch
	}

	render() {
		return (
			<div className="navigation">
				<ul>
					<li id="clueManage" className="nav-key"><a href="/clueManage">线索管理</a></li>
					<li id="taskManage" className="nav-key"><a href="/">任务管理</a></li>
					<li id="targetSearch" className="nav-key"><a href="/targetSearch">目标检索</a></li>
					<li id="motor" className="nav-item"><a href="/targetSearch#/motor">机动车查询</a></li>
					<li id="nonmotor" className="nav-item"><a href="/targetSearch#/nonMotor">非机动车查询</a></li>
					<li id="staff" className="nav-item"><a href="/targetSearch#/staff">人员查询</a></li>
				</ul>
			</div>
		);
	}
}