
app.controller('tableCarCtrl', function ($scope, carFactory, $window) {

	$scope.cars = carFactory.slice($scope.sliderIndex);
	$scope.sliderIndex = 0;
	$scope.optionShow = greateOptionShow(true);
	$scope.columLimit = greateColumLimit();


	$scope.changeIndex = function (direction) {
		var lastSlide = carFactory.length - $scope.columLimit - $scope.sliderIndex;
		if (direction == "next") {
			if (lastSlide) {
				$scope.sliderIndex++;
			}
			else {
				$scope.sliderIndex = 0;
			}
		}
		else {
			if ($scope.sliderIndex != 0) {
				$scope.sliderIndex--;
			}
			else {
				$scope.sliderIndex = carFactory.length - $scope.columLimit;
			}
		}
		$scope.cars = carFactory.slice($scope.sliderIndex);
	};


	$scope.buy = function (name) {
		console.log("Ура у нас новенький " + name);
	}


	function greateOptionShow(bol) {
		var obj = {};
		for (var key in carFactory[$scope.sliderIndex]) {
			obj[key] = bol;
		}
		return obj;
	};

	$scope.hideRow = function () {
		if ($scope.columLimit == 1) {
			return;
		}
		var optionHide = greateOptionShow(false);
		var firstItem = $scope.sliderIndex;
		var lastItem = firstItem + $scope.columLimit - 1;
		for (; firstItem < lastItem; firstItem++) {
			for (var key in  carFactory[firstItem]) {
				if (carFactory[firstItem][key] != carFactory[firstItem + 1][key]) {
					optionHide[key] = true;
				}
			}
		}
		$scope.optionShow = optionHide;
	};

	$scope.visibleRow = function () {
		$scope.optionShow = greateOptionShow(true);
	};


	function greateColumLimit() {
		var columLimit = ($window.innerWidth < 730) ? 1 : ($window.innerWidth < 1160) ? 2 : 4;
		if ($scope.sliderIndex > (carFactory.length - columLimit)) {
			$scope.sliderIndex = carFactory.length - columLimit;
			$scope.cars = carFactory.slice($scope.sliderIndex);
		}
		return columLimit;
	};

	angular.element($window).bind('resize', function(){
    $scope.$apply(function() {
    	$scope.columLimit = greateColumLimit();
    });
  });

});
