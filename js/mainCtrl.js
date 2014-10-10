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
		dataService.addData($scope.quote);
		$scope.quotes = dataService.getData();
	    $scope.showAdd = false;
	};

	//  REMOVE QUOTES
	$scope.removeQuote = function() {
		var quote = $filter()(quotes, $scope.quoteText)
		dataService.removeData(quote);
		$scope.quotes = dataService.getData();
	    $scope.showRemove = false;
	};
});













