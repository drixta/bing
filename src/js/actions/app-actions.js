var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatcher/app-dispatcher.js');

var AppActions = {
	editText: function (text) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.EDIT_TEXT,
			text: text
		});
	},
	selectScope: function(value){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SELECT_SCOPE,
			value: value
		});
	},
	submitQuery: function(){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SUBMIT_QUERY,
		});
	}
};

module.exports = AppActions;