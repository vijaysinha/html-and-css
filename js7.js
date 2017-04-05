var map;
window.onload= getLocation;

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

	div.innerHTML = "Longitude:"+longitude+"<br>"+"Latitude:"+latitude+"<hr>";
	showMap(position.coords);
}

function showMap(position){
	var googleLatAndLan = new google.maps.LatLng(position.latitude,position.longitude);
	var mapOption = {
		zoom:10;
		center:googleLatAndLong;
		mapTypeId:google.maps.mapTypeId.ROADMAP;

	};
	var divMap= document.getElementById("mapPage");
	map = new google.maps.Map(divMap,mapOption);
	//divMap.innerHTML=map;
}

