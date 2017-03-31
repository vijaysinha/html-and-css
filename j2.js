window.onload = init;
function init(){
var button = document.getElementById('addButton');
button.onclick = displayMessage;
}

function displayMessage(){
	var addsong = document.getElementById('inputText');
	var displaySong = addsong.value;
}