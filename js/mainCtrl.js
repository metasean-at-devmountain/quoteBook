var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, $filter, dataService){

	// TEST
	$scope.test = "Quotes Page";

	// DEFAULT VALUES
	$scope.showAdd = false;
	$scope.showRemove = false;
	$scope.showFilter = false;

	// TOGGLE ACTION BUTTONS
	$scope.toggleAdd = function() {
	    $scope.showAdd = !$scope.showAdd;
	    $scope.showRemove = false;
	    $scope.showFilter = false;
	};

	$scope.toggleRemove = function() {
	    $scope.showAdd = false;
	    $scope.showRemove = !$scope.showRemove;
	    $scope.showFilter = false;
	};

	$scope.toggleFilter = function() {
	    $scope.showAdd = false;
	    $scope.showRemove = false;
	    $scope.showFilter = !$scope.showFilter;
	};


	// SHOW QUOTES

	$scope.quotes = dataService.getData();


	// ADD QUOTES

	$scope.addQuote = function() {
		dataService.addData(quote);
		$scope.quotes = dataService.getData();
	    $scope.showAdd = false;
	};

	//  REMOVE QUOTES
	$scope.removeQuote = function() {
		// use the quoteText from index.html to filter down to the desired
		// text from the quotes list in the $scope.quotes list
		// and assign the found quotes to the foundQuotes array
		var foundQuotes = $filter('filter')($scope.quotes, $scope.quoteText);
		// first we ensure there is only one quote in the returned array
		if (foundQuotes.length == 1) {
			// we call removeData on the only quote
			// note that we assign the return value to $scope.quotes
			// this will update the quotes array in the view
			$scope.quotes = dataService.removeData(foundQuotes[0]);
			// we reset our quoteText textField
			$scope.quoteText = '';
			// we toggle off the Remove Quote div
		    $scope.showRemove = false;
		}
	};
});













