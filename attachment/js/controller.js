
app.controller('aside', function($scope){
	var host = window.location.hash;
	if (host.length > 2) {
		$scope.activeLink = host.slice(2);	
	}
	else {
		$scope.activeLink = "empty";	
	}	
})




app.controller('itemtest', function($scope){

	var listItem = document.getElementsByClassName('listItem');

	console.log(listItem);
	// var itemListActiveLink = 
	// console.log(itemList);
	// itemList.style.backgroundColor = "red";

	// $scope.activeLink = "empty";
	// var host = window.location.hash;
	// $scope.activeLink = function () {
		// return "dkm";	
	// }
	// if (host.length > 2) {
		// $scope.activeLink = host.slice(2);	
	// }
	// else {
		// $scope.activeLink = "empty";	
	// }
	// $scope.activeLink = host.slice(2);
	// console.log($scope.activeLink);

	$scope.imgUrl = "avatar.svg"
	var objOverview = {};
	var itemArr = Object.keys(objOverview);
	var itemSelect;
	var ctrl = false;		
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
			console.log(listItem);
		}
	}

	$scope.removeItem = function (index) {
		if (itemSelect == itemArr[index]) {
			itemSelect = "";
			$scope.itemCommentsArr = objOverview[itemSelect];
			$scope.numberItem = "";
		}
		itemArr.splice(index, 1);
		delete objOverview[Object.keys(objOverview)[index]];
	}

	var show = 0;
	$scope.commentsItem = function (event, index) {
		itemSelect = event.target.innerHTML; 
		$scope.itemCommentsArr = objOverview[itemSelect];
		$scope.numberItem = "#" + (index + 1);
		listItem[show].style.borderLeft = "";
		listItem[index].style.borderLeft = "solid 2px red";
		show = index;
		console.log(show);
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