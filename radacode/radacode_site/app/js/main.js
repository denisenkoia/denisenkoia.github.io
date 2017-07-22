var map = L.map('map', {
    crs: L.CRS.Simple,
    zoomControl: false,
    attributionControl: false,
    dragging: false,
    scrollWheelZoom: false,
    doubleClickZoom: false
});

showMap();

function showMap() {

	//------Глобальные переменные-------//
	var devWidth = window.innerWidth;
	var devHeight = window.innerHeight;
	var mapWidth = devWidth;
	var mapHeight = mapWidth * 1.095;
	var viewTop = mapHeight - devHeight / 2;
	var viewleft = devWidth / 2;
	window.testViewTop = viewTop; // Для теста перехода
	window.testViewLeft = viewleft; // Для теста перехода
	//----------------------------------//
	//----------------------------------//

	//------Добовляем картинку карты------//
	var bounds = [[0,0], [mapHeight, mapWidth]];
	var image = L.imageOverlay('img/bg.png', bounds).addTo(map);
	map.fitBounds(bounds);
	map.setView([viewTop, viewleft]);
	//--------------------------------------//
	//--------------------------------------//

	//------Добовляем логотип на карту------//
	var logo = L.icon({
		iconUrl: 'img/logo.png',
		className: 'homepage-logo'
	});
	L.marker([viewTop, viewleft], {icon: logo}).addTo(map);
	//---------------------------------------//
	//---------------------------------------//

	//------Переносим ссылки на карту------//
	var homepageLink = document.querySelectorAll('.homepage-link');
	addLinkHomePage(homepageLink, viewTop, viewleft, map);

	function addLinkHomePage(elements, viewTop, viewleft, map) {
		for (var i = 0; i < elements.length; i++) {
			var linkWrapper = L.divIcon({
				className: 'homepage-link-wrapper',
				iconSize: [140, 140],
				html: homepageLink[i].outerHTML
			});
			L.marker([viewTop, viewleft], {icon: linkWrapper}).addTo(map);
		}		
	}
	//----------------------------------------//
	//----------------------------------------//

	//------Линиии созвездий------//
	var mapElement = document.getElementById('map');
	var stars = mapElement.querySelectorAll('.homepage-link_star');
	drawLineStars(stars, viewTop, viewleft, map);

	function drawLineStars(elements, viewTop, viewleft, map) {
		var lineCoordObj = {};

		for (var i = 0; i < elements.length; i++) {
			var coordElement = getElementCoord(elements[i]);
			var title = elements[i].dataset.title;
			if (lineCoordObj[title]) {
				lineCoordObj[title].push(coordElement);	
			}
			else {
				lineCoordObj[title] = [];
				lineCoordObj[title].push(coordElement);	
			}
		}

		drawLine(lineCoordObj);

		function getElementCoord(element) {
			var parent = element.parentElement;
			var elemStyle = getComputedStyle(element);
			var parentStyle = getComputedStyle(parent);
			var left = parseFloat(parentStyle.left) - parent.offsetWidth/2 + parseFloat(elemStyle.left) + element.offsetWidth/2;
			var top = parseFloat(parentStyle.top) - parent.offsetHeight/2 + parseFloat(elemStyle.top) + element.offsetHeight/2;
			return [viewTop - top, viewleft + left];
		}

		function drawLine(objCoord) {
			for (var key in objCoord) {
				L.polyline(objCoord[key], {
					color: "#585858",
					weight: 1
				}).addTo(map);			
			}		
		}
	}
	//----------------------------//
	//----------------------------//

}



//------------Тестовый код перехода по ссылке--------------//
var mapElement = document.getElementById('map');
var testLinkAnim = mapElement.querySelectorAll('.homepage-link');
for (var i = 0; i < testLinkAnim.length; i++) {
	testLinkAnim[i].onclick = testdown;
}

function testdown () {
	var viewSize = map.getSize();
	var testBlock = document.querySelectorAll('.test-anim-link');
	var testBlockWrapper = L.divIcon({
		className: 'homepage-link-wrapper',
		iconSize: [500, 200],
		html: testBlock[0].outerHTML
	});
	L.marker([viewSize.y/2, viewSize.x/2], {
		icon: testBlockWrapper
	}).addTo(map);

	map.setView([viewSize.y/2, viewSize.x/2], 0, {
		animate: true,
		duration: 1
	});
};

function testUp () {
	var testBlock = mapElement.querySelector('.test-anim-link');
	L.DomUtil.remove(testBlock);
	map.setView([window.testViewTop, window.testViewLeft], 0, {
		animate: true,
		duration: 1
	});
}
//------------Тестовый код перехода по ссылке--------------//








