var API_KEY = 'vEIeDxYQ697eBKQWCSmAOQkAmdJk2c8XhU09aZn/kHE=';

function bing(query, type, callback) {
	var BASE_URL = 'https://api.datamarket.azure.com/Bing/Search/v1/';
	var type = type || 'Web';
	var request = new XMLHttpRequest();
	var request_url = BASE_URL + type + '?$format=json&$top=10&$Skip=0&Query=' + encodeURIComponent("'"+ query + "'");
	request.onreadystatechange = function(){
		if (request.readyState==4 && request.status==200)
	    {
	    	if (callback){
	    		callback(JSON.parse(request.responseText));
	    	}
	    	else {
	    		console.log(request.responseText);
	    	}
	    }
	};
	request.open('GET', request_url, true);
	request.setRequestHeader('Authorization', 'Basic ' + btoa(([API_KEY, API_KEY]).join(':')));
	request.send();
}
module.exports = bing;