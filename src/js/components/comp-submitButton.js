/**
 * @jsx React.DOM
 */

var React = require('react');

var AppActions = require('../actions/app-actions.js');
var SubmitButton = React.createClass({
	handleClick: function(event) {
		event.target.blur();
		AppActions.submitQuery(event.target.value);
	},
	render: function() {
		return (
			<button id="bing-search-button" onClick={this.handleClick}><img src="../img/search-icon.svg" onerror="this.onerror=null; this.src='../img/search-icon.png'"></img></button>
		);
	}

});

module.exports = SubmitButton;