var app = angular.module('app',['ngRoute', 'pascalprecht.translate']);

app.config(function($routeProvider, $translateProvider) {
	
	$routeProvider
	.when('/homepage', {
		templateUrl: 'pages/homepage.html'
	})
	.when('/loginpage', {
		templateUrl: 'pages/loginpage.html'
	})
	.otherwise({
		redirectTo: '/loginpage'
	});

	$translateProvider.translations('en', {
    LOGIN : 'Username',
    PASSWORD : 'Password',
    SIGNIN: 'Log In',
    LOGOUT: 'Log Out',
  });
  $translateProvider.translations('ru', {
    LOGIN : 'Имя пользователя',
    PASSWORD : 'Пароль',
    SIGNIN: 'Войти',
    LOGOUT: 'Выйти',
  });
  $translateProvider.preferredLanguage('en');

});
