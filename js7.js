window.onload= getLocation;
var map;
function getLocation(){

	if(navigator.geolocation)
	{
		
		navigator.geolocation.getCurrentPosition(displayLocation);
	}
	else
	{
		alert("Location seervice not supported by browser!");
	}
}

function displayLocation(position){
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var div = document.getElementById("Location");

	div.innerHTML = "Longitude:"+longitude+"<br>"+"Latitude:"+latitude;
	showMap(position.coords);
}

function showMap(coords){

	var googleLatAndLan = new google.maps.LatLng(coords.latitude,coords.longitude);
	var mapOption = {
		zoom: 10,
		center: googleLatAndLong,
		mapTypeId: google.maps.MapTypeId.ROADMAP

	};
	var divMap= document.getElementById("mapPage");
	map = new google.maps.Map(divMap,mapOption);
	
	var title = "Your Location";
	var content="You are"+ coords.latitude+ coords.longitude+"here !"; 
	infoWindow.open(map);
}
function addMarker(map,latlong,title,content){
	markerOption = {
		position: latlong,
		title: title,
		map: map,
		clickable: true
	};
	var marker = new google.maps.Marker(mapOption);

	var infoWindowOption = {
		content: content,
		position: latlong
	};
	var infoWindow =  new google.maps.InfoWindow(infoWindowOption);
	google.maps.event.addListener(marker,"click", function(){
	infoWindow.open(map);
});
}
