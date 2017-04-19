app.controller('aside', function($scope){
	
	var host = window.location.hash;
	if (host.length > 2) {
		$scope.activeLink = host.slice(2);	
	}
	else {
		$scope.activeLink = "empty";	
	}

})


app.controller('overviewItem', function($scope){

	var listItemOpen = document.getElementsByClassName('listItemOpen');
	var objOverview = {};
	var itemArr = Object.keys(objOverview);
	var itemSelect;
	var ctrl = false;
	var show = 0;

	$scope.itemArr = itemArr;
	$scope.objOverview = objOverview;

	$scope.itemContent = function () {
		itemArr = Object.keys(objOverview);		
		$scope.itemArr = itemArr;
	}

	$scope.itemAdd = function (item) {
		if (item && itemArr.indexOf(item) < 0) {
			objOverview[item] = [];
			$scope.item = "";
		}
	}

	$scope.removeItem = function (index) {
		if (itemSelect == itemArr[index]) {
			itemSelect = "";
			$scope.itemCommentsArr = objOverview[itemSelect];
			$scope.numberItem = "";
			listItemOpen[show].style.display = "";
			show = 0;
		}
		itemArr.splice(index, 1);
		delete objOverview[Object.keys(objOverview)[index]];
	}

	$scope.commentsItem = function (event, index) {
		itemSelect = event.target.innerHTML; 
		$scope.itemCommentsArr = objOverview[itemSelect];
		$scope.numberItem = "#" + (index + 1);
		listItemOpen[show].style.display = "";
		listItemOpen[index].style.display = "block";
		show = index;
	}

	$scope.itemCommentsAdd = function (itemComments) {
		if (itemComments && itemSelect != undefined && itemSelect != "") {
			objOverview[itemSelect].push(itemComments);
			$scope.itemComments = "";
		}
	}

	$scope.commentsSubmitKey = function (event) {
		if (event.keyCode == 17) {
			ctrl = true;
		}
		else if (event.keyCode == 13 && ctrl == true) {
			$scope.itemCommentsAdd($scope.itemComments);
		}
	}
	
	$scope.commentsSubmit = function (event) {
		if (event.keyCode == 17) {
			ctrl = false;
		}
	}

	$scope.commentsReset = function () {
		$scope.itemComments = "";
	}

})