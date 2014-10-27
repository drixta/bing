/**
 * @jsx React.DOM
 */

var React = require('react');

var NoResult = React.createClass({
	render: function() {
		return (
			<div id='no-result'>
				<p>
					No match found.
				</p>
			</div>
		);
	}
});
module.exports = NoResult;