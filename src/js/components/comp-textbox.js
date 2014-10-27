/**
 * @jsx React.DOM
 */

var React = require('react');
var AppActions = require('../actions/app-actions.js');

var TextBox = React.createClass({
	handleChange: function(e) {
		AppActions.editText(e.target.value);
	},
	handleEnter: function(e){
		if (e.keyCode === 13) {
			e.target.blur();
		}
	},

	render: function() {
		return (
			<input onKeyUp={this.handleEnter} id="bing-text" type="text" value={this.props.text} onChange={this.handleChange}/>
		);
	}

});

module.exports = TextBox;