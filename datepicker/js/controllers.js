var app = angular.module('app',[]);
app.controller('calendar', function($scope){

	//Исходные данные в настоящем
	var day = new Date(); // определяем текущую дату
	var year = day.getFullYear(); // вычисляем текущий год
	var month = day.getUTCMonth(); // вычисляем текущий месяц
	var today = day.getDate(); // вычисляем текущее число
	var calendarMonth = new Date(year, month, 1); //месяц календаря

	//Управление датой календаря user
	$scope.dateuser = function () {
		var dateformat = $scope.list.replace(/[.,;-\s]/g, "/");
		var date_user_arrow = dateformat.split('/',3);
		if (date_user_arrow.length > 2 && date_user_arrow[2].length == 4) {
			$scope.day_user = +date_user_arrow[0];
			year = date_user_arrow[2];
			if (date_user_arrow[1] > 0) {
				month = date_user_arrow[1] - 1;
			}
			else {
				switch (date_user_arrow[1]) {
				case 'январь'  :  month = 0; break;
				case 'января'  :  month = 0; break;
				case 'Январь'  :  month = 0; break;
				case 'Января'  :  month = 0; break;
				case 'февраль' :  month = 1; break;
				case 'февраля' :  month = 1; break;
				case 'Февраль' :  month = 1; break;
				case 'Февраля' :  month = 1; break;
				case 'март'    :  month = 2; break;
				case 'марта'   :  month = 2; break;
				case 'Март'    :  month = 2; break;
				case 'Марта'   :  month = 2; break;
				case 'апрель'  :  month = 3; break;
				case 'апреля'  :  month = 3; break;
				case 'Апрель'  :  month = 3; break;
				case 'Апреля'  :  month = 3; break;
				case 'май'     :  month = 4; break;
				case 'майа'    :  month = 4; break;
				case 'Май'     :  month = 4; break;
				case 'Майа'    :  month = 4; break;
				case 'июнь'    :  month = 5; break;
				case 'июня'    :  month = 5; break;
				case 'Июнь'    :  month = 5; break;
				case 'Июня'    :  month = 5; break;
				case 'июль'    :  month = 6; break;
				case 'июля'    :  month = 6; break;
				case 'Июль'    :  month = 6; break;
				case 'Июля'    :  month = 6; break;
				case 'август'  :  month = 7; break;
				case 'августа' :  month = 7; break;
				case 'Август'  :  month = 7; break;
				case 'Августа' :  month = 7; break;
				case 'сентябрь':  month = 8; break;
				case 'сентября':  month = 8; break;
				case 'Сентябрь':  month = 8; break;
				case 'Сентября':  month = 8; break;
				case 'октябрь' :  month = 9; break;
				case 'октября' :  month = 9; break;
				case 'Октябрь' :  month = 9; break;
				case 'Октября' :  month = 9; break;
				case 'ноябрь'  :  month = 10; break;
				case 'ноября'  :  month = 10; break;
				case 'Ноябрь'  :  month = 10; break;
				case 'Ноября'  :  month = 10; break;
				case 'декабрь' :  month = 11; break;
				case 'декабря' :  month = 11; break;
				case 'Декабрь' :  month = 11; break;
				case 'Декабря' :  month = 11; break;
      	}
    	}
			calendarMonth = new Date(year, month, 1);
			month_case = month;
			year_case = year;
			selected = $scope.day_user;
			
			//Заполнение инпут
			var listdatetimeassembly = function () {
				if (date_user_arrow[0] > 0 && month > 0) {
					switch (month) {
						case 0 :  month_input = 'Январь'; break;
						case 1 :  month_input = 'Февраль'; break;
						case 2 :  month_input = 'Март'; break;
						case 3 :  month_input = 'Апрель'; break;
						case 4 :  month_input = 'Май'; break;
						case 5 :  month_input = 'Июнь'; break;
						case 6 :  month_input = 'Июль'; break;
						case 7 :  month_input = 'Август'; break;
						case 8 :  month_input = 'Сентябрь'; break;
						case 9 :  month_input = 'Октябрь'; break;
						case 10 :  month_input = 'Ноябрь'; break;
						case 11 :  month_input = 'Декабрь'; break;
    			}
    			$scope.listdatetime = $scope.day_user + " " + month_input + " " + year_case + "," + " " + $scope.time;
				}
				else {
					$scope.listdatetime = "";
				}
			}
			listdatetimeassembly();
			$scope.calendarContent();
		}
	}

	//Управление месяцем календаря
	$scope.monthNext = function () {
		month++;
		calendarMonth = new Date(year, month, 1);
    if (calendarMonth.getFullYear() == year_case && calendarMonth.getUTCMonth() + 1 == month_case) {
			$scope.day_user = +selected;
		 }
		 else {
			$scope.day_user = false;
		 }
	}
	
	$scope.monthBack = function () {
		month--;
		calendarMonth = new Date(year, month, 1);
		if (calendarMonth.getFullYear() == year_case && calendarMonth.getUTCMonth() + 1 == month_case) {
			$scope.day_user = +selected;
		 }
		 else {
			$scope.day_user = false;
		 }
	}

	//Заполнение 
	$scope.calendarContent = function () {
		var first_day = calendarMonth; // первый день месяца
		var first_wday = first_day.getDay(); // день недели первого числа текущего месяца
		var last_day = new Date(year,month + 1,0); //последний день месяца
		var last_day_date = last_day.getDate(); // дата последнего дня месяца
		var last_wday = last_day.getDay(); // день недели последнего дня

		// Последний день первой недели
		var last_day_first_week = first_wday;
		var last_date_first_week = 1;
		for (var i = 1; last_day_first_week != 0; i++) {
			last_day_first_week = new Date(year,month,i).getDay();
			last_date_first_week = i;
		} 

		//Количество недель в месяце
		var week_month = Math.ceil(((last_day_date - last_date_first_week) / 7) + 1);

		//Даты по неделям
		var day_week_arrow = [];
		if (first_wday == 0) {
			day_week_arrow.push("", "", "", "", "", "", 1);
			for (var i = 8, a =2;  i <= (week_month * 7); i++) {
				if (i >= first_wday && a <= last_day_date){
	  			day_week_arrow.push(a);
	  			a++;
	  		}
	  		else if (a > last_day_date){
	  			day_week_arrow.push("");
	  		}
			}
		}
		else {
			for (var i = 1, a = 1; i <= (week_month * 7); i++) {
	  		if (i < first_wday) {
	  			day_week_arrow.push("");
	  		}
	  		else if (i >= first_wday && a <= last_day_date){
	  			day_week_arrow.push(a);
	  			a++;
	  		}
	  		else if (a > last_day_date){
	  			day_week_arrow.push("");
	  		}
	  	}
	  }

		//Контент заполнения
		var day_mount_arrow = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
		$scope.daymounts = day_mount_arrow;

		var mount_content_number = calendarMonth.getMonth();
		var mount_content_arrow = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
		$scope.calendarmountcontent = mount_content_arrow[mount_content_number];
		$scope.calendaryearcontent = calendarMonth.getFullYear();

		var content_month_arrow = [];
		var contentMonth = function () {
			for (var i = 0, a = 0, b = 7; i < week_month; i++) {
				content_month_arrow.push(new Object());
				content_month_arrow[i].week = day_week_arrow.slice(a, b);
				a = a + 7;
				b = b + 7;
			}
		}
		contentMonth();
		$scope.weeks = content_month_arrow;

		//Подсветка текущей даты
		if (calendarMonth.getUTCMonth() + 1 == new Date().getUTCMonth() && calendarMonth.getFullYear() == new Date().getFullYear()) {
			$scope.today_class = today;
		}
		else {
			$scope.today_class = false;
		}

	}
	$scope.calendarContent();

	//Выбранная дата
	var selected;
	var month_case;
	var year_case;
	$scope.selectItem = function (evt) {
		selected = evt.target.innerHTML;
		$scope.list = selected + " " + $scope.calendarmountcontent + " " + $scope.calendaryearcontent;
		$scope.day_user = +selected;
		switch ($scope.calendarmountcontent) {
			case 'Январь'  :  month_case = 0; break;
			case 'Февраль' :  month_case = 1; break;
			case 'Март'    :  month_case = 2; break;
			case 'Апрель'  :  month_case = 3; break;
			case 'Май'     :  month_case = 4; break;
			case 'Июнь'    :  month_case = 5; break;
			case 'Июль'    :  month_case = 6; break;
			case 'Август'  :  month_case = 7; break;
			case 'Сентябрь':  month_case = 8; break;
			case 'Октябрь' :  month_case = 9; break;
			case 'Ноябрь'  :  month_case = 10; break;
			case 'Декабрь' :  month_case = 11; break;
    }
    year_case = $scope.calendaryearcontent;
    $scope.imgok = "img-ok";
		$scope.calendarContent();
		$scope.listdatetime = $scope.list + "," + " " + $scope.time;
	}

	//Выбор времени
	$scope.time = "";
	console.log($scope.time);
	$scope.timeuser = function () {
		var timeformat = $scope.time.replace(/[.,;:-\s]/g, "/");
		var time_user_arrow = timeformat.split('/',2);
		if (time_user_arrow.length > 1 && time_user_arrow[0].length > 1 && time_user_arrow[0].length < 3 && time_user_arrow[1].length > 1 && time_user_arrow[1].length < 3) {
			$scope.time = time_user_arrow[0] + ":" + time_user_arrow[1];
			$scope.listdatetime = $scope.list + "," + " " + $scope.time;
		}
		else {
			$scope.listdatetime = $scope.list + "," + " ";
		}
	}

	//Очистка
	$scope.clear = function () {
		$scope.imgok = "";
		$scope.day_user = false;
		$scope.list = "";
		year_case = "";
		$scope.listdatetime = "";
		$scope.time = "";
	}

	$scope.togle = "open";
	$scope.open = function () {
		($scope.togle == "") ? $scope.togle = "open" : $scope.togle = ""
	}

});