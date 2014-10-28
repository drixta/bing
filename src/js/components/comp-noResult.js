/**
 * @jsx React.DOM
 */

var React = require('react');
var AppStore = require('../store/app-store');

var NoResult = React.createClass({

	render: function() {
		var text;
		if (this.props.search.text) {
			text = <p>No results found for <strong>{this.props.search.text}</strong></p>;
		}
		else {
			text = <p>Please enter a search term</p>;
		}
		return (
			<div id='no-result'>
				{text}
			</div>
		);
	}
});
module.exports = NoResult;