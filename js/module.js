var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/overview.html'
	})
	.otherwise({
		redirectTo: '/'
	});
	$locationProvider.html5Mode(true);
	
});