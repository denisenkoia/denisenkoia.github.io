var app = angular.module('app',['ngRoute']);

app.config( ['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/overview', {
		templateUrl: 'pages/overview.html'
	})
	.otherwise({
		redirectTo: '/'
	});
	
}]);