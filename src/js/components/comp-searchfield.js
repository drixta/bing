/**
 * @jsx React.DOM
 */

var React = require('react');
var AppStore = require('../store/app-store.js');
var AppAction = require('../actions/app-actions.js');
var TextBox = require('./comp-textbox.js');
var SubmitButton = require('./comp-submitButton.js');
function setData() {
	return {data: AppStore.getSearch(),
			blankMode: AppStore.getContainerBackground()};
}
var SearchField = React.createClass({
	getInitialState: function(){
		return setData();
	},
	componentWillMount: function(){
		AppStore.addChangeListener(this._onChange);
	},
	handleSubmit: function(e){
		e.preventDefault();
		e.target.blur();
	},
	handleLogoClick: function(e){
		if (!this.state.blankMode) {
			location.reload();
		}
	},
	_onChange: function(){
		this.setState(setData());
	},
	render: function() {
		var data = this.state.data;
		var searchFieldClass = '';
		if (this.state.blankMode) {
			searchFieldClass = 'center-screen';
		}
		return (
			<div className={searchFieldClass} id="search-field">
				<img id="bing-logo"src="../img/bing-logo.svg" onerror="this.onerror=null; this.src='../img/bing-logo.png'" onClick={this.handleLogoClick}/>
				<form onSubmit={this.handleSubmit}>
					<TextBox text = {data.text}/>
					<SubmitButton />
				</form>
			</div>
		);
	}
});

module.exports = SearchField;