/**
 * @jsx React.DOM
 */

var React = require('react');
var SearchField = require('./comp-searchField');
var SearchResults = require('./comp-results');
var ScopeSelector = require('./comp-scopeSelector');
var AppStore = require('../store/app-store');

var getBackground = function(){
	return {
		animated: AppStore.getContainerBackground()
	};
};
var APP = React.createClass({
	getInitialState: function(){
		return getBackground();
	},
	componentWillMount: function(){
		AppStore.addChangeListener(this._onChange);
	},
	_onChange: function(){
		this.setState(getBackground());
	},
	render: function() {
		var className = 'container';
		if (this.state.animated) {
			className += ' animated';
		}
		return (
			<div className={className}>
				<ScopeSelector />
				<SearchField />
				<SearchResults />
			</div>
		);
	}
});
module.exports = APP;