/**
 * @jsx React.DOM
 */

var React = require('react');
var AppStore = require('../store/app-store.js');
var ResultList = require('../components/comp-resultlist.js');
var NoResult = require('../components/comp-noResult.js');
var setData = function(){
	return {results: AppStore.getResults(),
			scope: AppStore.getSearch().scope};
};
var SearchResults = React.createClass({
	getInitialState: function () {
		return setData();
	},
	componentWillMount: function(){
		AppStore.addChangeListener(this._onChange);
	},
	_onChange: function(){
		this.setState(setData());
	},
	render: function() {
		var results = this.state.results;
		var scope = this.state.scope;
		if (results === null) {
			return null;
		}
		if (result.length) {
			return (
				<ResultList scope= {scope} results = {results}/>
			);			
		}
		else {
			return (
				<NoResult/>
			);
		}

	}
});

module.exports = SearchResults;