var clickButton = document.getElementById("search");
clickButton.onclick = getName;
window.onload = getName;
function getName(){
	var take = document.getElementById("name");
	var input = take.value;
	var result = guess(input);
	alert("getName function");
	alert(result);

}

function guess(name){
	var nameList = { 'vijay', 'kumar', 'sinha'};
	var index = Math.floor(Math.random() * nameList.length);
	if(name == nameList[index]){
	return name;
	}
	else{
		alert('search again');
	}
}
