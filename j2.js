window.onload = init;
function init(){
var button = document.getElementById('addButton');
button.onclick = displayMessage;
}

function displayMessage(){
	var addsong = document.getElementById('inputText');
	var songlist = addsong.value;
	if(songlist!==""){
	var li = document.createElement('li');
	li.innerHTML = songlist;
	var ul = document.getElementById('playlist');
	ul.appendChild(li);
}
else
{
	alert("Please type song name first. !");
}
}