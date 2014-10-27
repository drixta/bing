/**
 * @jsx React.DOM
 */

var React = require('react');

var WebResultItem = React.createClass({

	render: function() {
		var res = this.props.result;
		return (
			<div className="web-item">
				<h2>
					<a href={res.Url}>{res.Title}</a>
				</h2>
				<cite>
					{res.DisplayUrl}
				</cite>
				<p>
					{res.Description}
				</p>
			</div>
		);
	}

});

module.exports = WebResultItem;