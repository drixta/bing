jest.dontMock('../src/js/store/app-store');
jest.dontMock('react/lib/merge');

describe('BingStore', function() {

  var AppConstants = require('../src/js/constants/app-constants');

  // mock actions inside dispatch payloads
  var actionEditTextBox = {
    source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.EDIT_TEXT,
      text: 'foo'
    }
  };

  var actionSubmitSearch = {
  	source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.SUBMIT_QUERY
    }
  };

  var actionSelectScope= {
  	source: 'VIEW_ACTION',
    action: {
      actionType: AppConstants.SELECT_SCOPE,
      value: 'News'
    }
  };  
  var AppDispatcher;
  var AppStore;
  var callback;

  beforeEach(function() {
    AppDispatcher = require('../src/js/dispatcher/app-dispatcher');
    AppStore = require('../src/js/store/app-store');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('initializes with an empty textbox', function() {
    var search = AppStore.getSearch();
    expect(search.text).toEqual('');
  });
  it('initializes with scope of Web', function() {
    var search = AppStore.getSearch();
    expect(search.scope).toEqual('Web');
  });

  it('initialize with null result content', function(){
  	var results = AppStore.getResults();
  	expect(results).toEqual(null);
  });
  it('register textbox input into store', function() {
    callback(actionEditTextBox);
    var search = AppStore.getSearch();
    expect(search.text).toBe('foo');
  });

  it('submit a search with keyword and return a result', function() {
    callback(actionSubmitSearch);
    setTimeout(function(){
    	var results = AppStore.getResults();
    	expect(results.length).toBeGreaterThan(1);
    },1000);
  });
  it('changes scope when selecting a scope', function(){
  	callback(actionSelectScope);
  	var search = AppStore.getSearch();
  	expect(search.scope).toBe('News');
  });
});