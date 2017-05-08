
app.controller('Account', function($scope, $location, $translate){
	$scope.userAccount = {
	login: "",
	password: ""
	}
		
	$location.path("/loginpage");

	$scope.logIn = function (accountLogin, accounPassword) {
		$location.path("/homepage");
		$scope.userAccount.login = accountLogin;
		$scope.userAccount.password = accounPassword;
	}
	$scope.logOut = function () {
		$location.path("/loginpage");
		$scope.userAccount.login = "";
		$scope.userAccount.password = "";	
	}

  $scope.changeLng = function(lang) {
    $translate.use(lang);
  }
  $scope.currentLng = function(lang) {
    return $translate.use() == lang;
  }

});