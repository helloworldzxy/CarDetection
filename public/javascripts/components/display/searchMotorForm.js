import React, { Component, PropTypes } from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { thunk } from 'redux-thunk';

import { Field, reduxForm } from 'redux-form';

import { DateField, DatePicker } from 'react-date-picker';
import 'react-date-picker/index.css';

import { submit } from '../../models/search.js';

class SearchForm extends Component {
	render() {

		console.log('SearchForm render this.props ', this.props);
		const { getDispatch, onSubmit } = this.props;
		const dispatch = getDispatch();

		return (
			<div className="searchContainer">
				<div className="searchTitle">基本信息</div>
				<div className="searchForm">
					<div className="searchItem">
						<label>时间</label>
						<DateField
							dateFormat="YYYY-MM-DD HH:mm:ss"
							updateOnDateClick={true}
						>
							<DatePicker
								navigation={true}
								locale="zh-cn"
								highlightWeekends={true}
	                            highlightToday={true}
	                            weekNumbers={false}
	                            weekStartDay={1}
	                            todayButton={false}
	                            clearButton={false}
	                            cancelButton={false}
							/>
						</DateField>
						<span>至</span>
						<DateField
							dateFormat="YYYY-MM-DD HH:mm:ss"
							updateOnDateClick={true}
						>
							<DatePicker
								navigation={true}
								locale="zh-cn"
								highlightWeekends={true}
	                            highlightToday={true}
	                            weekNumbers={false}
	                            weekStartDay={1}
	                            todayButton={false}
	                            clearButton={false}
	                            cancelButton={false}
							/>
						</DateField>
					</div>
					<form>
						<div className="searchItem">
							<label>监控点</label>
							<Field name="pllocationate" component="input" type="text" placeholder="请输入监控点"/>
						</div>
						<div className="searchItem">
                            <label>车牌号码</label>
                            <Field name="plate" component="input" type="text" placeholder="请输入车牌号码"/>
                        </div>
                        <div className="searchItem">
                            <label>号牌种类</label>
                            <Field name="plateType" component="select">
                                <option className="optionDault">请输入号牌种类</option>
                                <option value="O1">大型汽车号牌（黄底黑字）</option>
                                <option value="02">小型汽车号牌（蓝底白字）</option>
                                <option value="03">使馆汽车号牌（黑底白字红“使”字）</option>
                                <option value="04">领馆汽车号牌 (黑底白字红“领”字)</option>
                                <option value="05">境外汽车号牌 (黑底白/红字)</option>
                                <option value="06">外籍汽车号牌 (黑底白字)</option>
                                <option value="13">农用运输车号牌 (黄底黑字黑框线)</option>
                                <option value="14">拖拉机号牌 (黄底黑字)</option>
                                <option value="15">挂车号牌 (黄底黑字黑框线)</option>
                                <option value="16">教练汽车号牌 (黄底黑字黑框线)</option>
                                <option value="18">试验汽车号牌</option>
                                <option value="20">临时入境汽车号牌 (白底红字黑“临时入境”)</option>
                                <option value="22">临时行驶车号牌 (白底黑字黑框线)</option>
                                <option value="23">警用汽车号牌</option>
                            </Field>
                        </div>
                        <div className="searchItem">
                            <label>车辆颜色</label>
                            <Field name="color" component="select">
                                <option className="optionDault">请输入车辆颜色</option>
                                <option value="a">白</option>
                                <option value="b">灰</option>
                                <option value="c">黄</option>
                                <option value="d">粉</option>
                                <option value="e">红</option>
                                <option value="f">紫</option>
                                <option value="g">绿</option>
                                <option value="h">蓝</option>
                                <option value="i">棕</option>
                                <option value="j">黑</option>
                                <option value="z">其 他</option>
                            </Field>
                        </div>
                        <div className="searchItem">
                            <label>车辆类型</label>
                            <Field name="model" component="select">
                                <option className="optionDault">请输入车辆类型</option>
                                <option value="k">客车</option>
                                <option value="h">货车</option>
                                <option value="q">牵引车</option>
                                <option value="z">专项作业车</option>
                                <option value="d">电车</option>
                                <option value="m">摩托车</option>
                                <option value="n">三轮汽车</option>
                                <option value="t">拖拉机</option>
                                <option value="l">轮式机械</option>
                                <option value="g">全挂车</option>
                                <option value="b">半挂车</option>
                                <option value="x">其他</option>
                            </Field>
                        </div>
                        <div className="searchItem">
                            <label>车辆品牌</label>
                            <Field name="brand" component="input" type="text" placeholder="请输入车辆品牌"/>
                        </div>
                        <div className="searchItem">
                            <label>有副驾驶</label>
                            <Field name="copilot" component="input" type="checkbox"/>
                        </div>
					</form>
				</div>

				<div className="searchTitle">目标图片</div>

				<div className="searchButton" onClick={onSubmit}>
                    <button type="submit">查询</button>
                </div>
			</div>
		); //end of return
	} //end of render()
} //end of SearchForm

const SearchReduxForm = reduxForm({
	form: 'motor',
})(SearchForm);

const SearchMotorForm = connect(
	state => {
		// Map Redux state to component props
	},
	dispatch => {
		// Map Redux actions to component props	
		return {
			onSubmit: (event) => {
				console.log('SearchMotorForm onSubmit');
				event.preventDefault();
				dispatch(submit(TYPE.MOTOR));
			},
			getDispatch: () => {
				console.log('SearchMotorForm getDispatch');
				return dispatch;
			},
		};
	}
)(SearchReduxForm);


export default SearchMotorForm;