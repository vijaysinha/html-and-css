window.onload=init;
function init(){
	var button = document.getElementById("submitButton");
	button.onclick = trigger;
}
function trigger(){
	var getData = document.getElementById("inputName");
	var take =  getData.value;
	var li = document.createElement("li");
	li.innerHTML = take;
	var ul = document.getElementById("list");
	ul.appendChild(li);

}