/**
 * @jsx React.DOM
 */

var React = require('react');
var AppStore = require('../store/app-store.js');
var ResultList = require('../components/comp-resultlist.js');
var ResultPagination = require('../components/comp-pagination.js');
var NoResult = require('../components/comp-noResult.js');
var setData = function(){
	return {results: AppStore.getResults(),
			search: AppStore.getSearch()};
};
var SearchResults = React.createClass({
	getInitialState: function () {
		return setData();
	},
	componentWillMount: function(){
		AppStore.addChangeListener(this._onChange);
	},
	handleImageScroll: function(e){
		console.log(e);
	},
	_onChange: function(){
		this.setState(setData());
	},
	render: function() {
		var results = this.state.results;

		var scope = this.state.search.scope;
		if (results === null) {
			return null;
		}
		if (results.length) {
			return (
				<div>
					<ResultList scope= {scope} results = {results}/>
					<ResultPagination/>
				</div>
			);			
		}
		else {
			return (
				<NoResult search= {this.state.search}/>
			);
		}

	}
});

module.exports = SearchResults;