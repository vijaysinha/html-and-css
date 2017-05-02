window.onload = function getData(){
	var url = ""http://someserver.com/data.json";";
	var request = new XMLHttpRequest();
	request.onload = function(){

		if(request.status==200){
			displayData(request.responseText)
		}
		request.open(GET,url);
		request.send(null);
		
	}
}
function displayData(link){

	var p = document.getElementById("sales");
	p.innerHTML = "Welcome";
}