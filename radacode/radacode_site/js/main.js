
var map = L.map('map', {
    crs: L.CRS.Simple,
    zoomControl: false,
    attributionControl: false,
    dragging: false,
    scrollWheelZoom: false
});



var bounds = [[0,0], [768,1366]];
var image = L.imageOverlay('img/bg.png', bounds).addTo(map);
map.fitBounds(bounds);



var logo = L.icon({
	iconUrl: 'img/logo.png',
	iconSize: [120, 120],
	iconAnchor: [59.7, 60]
});
L.marker([384, 683], {icon: logo, opacity: 0.8}).addTo(map);



var polylineObj = {
	polyline_01: [
		[430, 683],
		[510, 683]
	],
	polyline_02: [
		[560, 683],
		[640, 683],
		[640, 550]
	],
	polyline_03: [
		[640, 683],
		[640, 850]
	],
	polyline_04: [
		[384, 637],
		[384, 400]
	],
	polyline_05: [
		[360, 350],
		[300, 350]
	],
	polyline_06: [
		[384, 729],
		[384, 930]
	],
	polyline_07: [
		[405, 980],
		[460, 980]
	],
	polyline_08: [
		[338, 683],
		[300, 683]
	],
	polyline_09: [
		[270, 650],
		[230, 530]
	],
	polyline_10: [
		[200, 490],
		[150, 490]
	],
	polyline_11: [
		[270, 716],
		[230, 836]
	],
	polyline_12: [
		[200, 876],
		[120, 876]
	],
	polyline_13: [
		[180, 876],
		[140, 800]
	],
	polyline_14: [
		[180, 876],
		[140, 952]
	]
}

for (var key in polylineObj) {
	L.polyline(polylineObj[key], {
		color: '#fff',
		weight: 1,
		interactive: false
	}).addTo(map);
}



var linksObj = {
	link_01: {
		text: ".Net",
		href: '#',
		coord: [640, 520]
	},
	link_02: {
		text: "AngularJS",
		href: '#',
		coord: [640, 900]
	},
	link_03: {
		text: "Technologies",
		href: '#',
		coord: [535, 683]
	},
	link_04: {
		text: "Products",
		href: '#',
		coord: [384, 350]
	},
	link_05: {
		text: "SKBX",
		href: '#',
		coord: [275, 350]
	},
	link_06: {
		text: "Services",
		href: '#',
		coord: [384, 980]
	},
	link_07: {
		text: "Outsourcing",
		href: '#',
		coord: [480, 980]
	},
	link_08: {
		text: "Works",
		href: '#',
		coord: [280, 683]
	},
	link_09: {
		text: "Fintech",
		href: '#',
		coord: [220, 490]
	},
	link_10: {
		text: "payapong.ua",
		href: '#',
		coord: [130, 490]
	},
	link_11: {
		text: "Digital",
		href: '#',
		coord: [220, 876]
	},
	link_12: {
		text: "pina.com.ua",
		href: '#',
		coord: [130, 745]
	},
	link_13: {
		text: "misechko.com.ua",
		href: '#',
		coord: [100, 876]
	},
	link_14: {
		text: "zrobymorazom.com.ua",
		href: '#',
		coord: [130, 1050]
	}
};

for (var key in linksObj) {
	var link = L.divIcon({
		className: "link",
		html: "<span><a href='" + linksObj[key].href + "'>" + linksObj[key].text + "</a></span>"
	});
	L.marker(linksObj[key].coord, {icon: link}).addTo(map);
};
