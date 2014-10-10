var app = angular.module('quoteBook');
 
app.factory('dataService', function($filter) {

	var factoryReturn = {};

	var quotes = [
	    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
	    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
	    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
	    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
	    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
	    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
	    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
	  ];

	factoryReturn.getData = function() {
	 	return quotes;
	};

	factoryReturn.addData = function(quote) {

		console.log(quote);
		if (quote.text && quote.author) {
			quotes.push(quote);
		}
	};

	factoryReturn.removeData = function(quote){
		// we loop through our quotes array
		for (var i in quotes) {
			// we find the filtered quote in our quotes array
			if (quote.text == quotes[i].text) {
				// we remove the filtered quote from the quotes array
				quotes.splice(i, 1);
				// we return the update quotes array
				return(quotes);
			}
		}
	};

	return factoryReturn;

});
