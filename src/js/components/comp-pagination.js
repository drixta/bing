/**
 * @jsx React.DOM
 */

var React = require('react');
var AppActions = require('../actions/app-actions.js');
var ResultPagination = React.createClass({

	handleClick: function(e){
		AppActions.paginate(e.target.parentNode.value);
	},
	render: function() {
		return (
			<div className="pagination">
				<button value='prev' onClick = {this.handleClick}><img src='./img/left.svg'/></button>
				<button value='next' onClick = {this.handleClick}><img src='./img/right.svg'/></button>
			</div>
		);
	}

});

module.exports = ResultPagination;