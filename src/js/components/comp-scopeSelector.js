/**
 * @jsx React.DOM
 */

var React = require('react');

var AppActions = require('../actions/app-actions.js');
var AppStore = require('../store/app-store.js');

var setData = function(){
	return {
		scope: AppStore.getSearch().scope
	};
};

var ScopeSelector = React.createClass({
	getInitialState: function(){
		return setData();
	},
	componentWillMount: function(){
		AppStore.addChangeListener(this._onChange);
	},
	_onChange: function(){
		this.setState(setData());
	},
	handleClick: function(event) {
		AppActions.selectScope(event.target.value);
	},
	render: function() {
		var scope = this.state.scope;
		var webClassName;
		var imageClassName;
		var newsClassName;
		
		scope === 'Web' ? webClassName = 'active' : webClassName = ''
		scope === 'Image' ? imageClassName = 'active' : imageClassName = ''
		scope === 'News' ? newsClassName = 'active' : newsClassName = ''

		return (
			<div id="scope-list">
				<label className={webClassName}>
					<input defaultChecked type="radio" name="scope" onClick={this.handleClick} value="Web"/>
					Web
				</label>
				<label className={imageClassName}>
					<input type="radio" name="scope" onClick={this.handleClick} value="Image"/>
					Images
				</label>
				<label className={newsClassName}>
					<input type="radio" name="scope" onClick={this.handleClick} value="News"/>
					News
				</label>
			</div>
		);
	}
});

module.exports = ScopeSelector;