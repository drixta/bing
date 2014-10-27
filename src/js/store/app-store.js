var AppDispatcher = require('../dispatcher/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/app-constants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _search = {
	text: '',
	scope: 'Web',
};

var _results = null;

var _containerBackground = true;

var _setText = function(text){
	_search.text = text;
};

var _setScope = function(scope,callback){
	_search.scope = scope;
	_results = null; //Add loading effect to this;
	_submitQuery(callback);
};

var _submitQuery = function(callback){
	var API_KEY = 'vEIeDxYQ697eBKQWCSmAOQkAmdJk2c8XhU09aZn/kHE=';
	var query = constructQuery();
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if (request.readyState==4 && request.status==200)
		{
			_results = processApi(request.responseText);
			callback(request.response);
		}
	};
	request.open('GET', query, true);
	//Please don't mess with my account key :D, I know this is a very unsecure way of doing it but I can't set up a proxy server out of the box
	request.setRequestHeader('Authorization', 'Basic ' + btoa(([API_KEY, API_KEY]).join(':')));
	request.send();
	_containerBackground = false;
};

var processApi = function(res) {
	res = JSON.parse(res);
	result = res.d.results;
	return result;
};

var constructQuery = function(){
	var BASE_URL = 'https://api.datamarket.azure.com/Bing/Search/v1/';
	var scope = _search.scope || 'Web';
	var request = new XMLHttpRequest();
	var request_url = BASE_URL + scope + '?$format=json&$top=10&$Skip=0&Query=' + encodeURIComponent("'"+ _search.text + "'");
	return request_url;
};

var AppStore = merge(EventEmitter.prototype, {
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	},
	getSearch: function(){
		return _search;
	},
	getResults: function(){
		return _results;
	},

	getContainerBackground: function(){
		return _containerBackground;
	},

	dispatcherIndex: AppDispatcher.register(function(payload){
	    var action = payload.action;
	    switch(action.actionType){
	      	case AppConstants.EDIT_TEXT:
	      		_setText(payload.action.text);
	        	break;

	      	case AppConstants.SELECT_SCOPE:
	      		_setScope(payload.action.value, function(){
	      			AppStore.emitChange();
	      		});
	        	break;

	      	case AppConstants.SUBMIT_QUERY:
	      		_submitQuery(function(){
	      			AppStore.emitChange();
	      		});
	        	break;
	    	}
	    AppStore.emitChange();
	    return true;
  	})
});

module.exports = AppStore;