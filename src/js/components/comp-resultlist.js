/**
 * @jsx React.DOM
 */

var React = require('react');

var WebResultItem = require('../components/comp-webResultItem.js');
var ImageResultItem = require('../components/comp-imageResultItem.js');
var NewsResultItem = require('../components/comp-newsResultItem.js');

var ResultList = React.createClass({
	render: function() {
		var results = this.props.results;
		var scope = this.props.scope;
		var list;
		switch (scope) {
			case 'Web':
				list = results.map(function(result){
					return (<WebResultItem key={result.ID} result= {result}/>);
				});
				break;
			case 'Image':
				list = results.map(function(result){
					return (<ImageResultItem key={result.ID} result= {result}/>);
				});
				break;
			case 'News':
				list = results.map(function(result){
					return (<NewsResultItem key={result.ID} result= {result}/>);
				});
				break;
		}
		return (
			<div id='result-list'>
				{list}
			</div>
		);
	}
});
module.exports = ResultList;