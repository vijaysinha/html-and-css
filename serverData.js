window.onload = serverData;
function serverData(){
	var url = "http://wickedlysmart.com/ifeelluckytoday";
	var request  = new XMLHttpRequest();
	
	request.onload = function(){
		if(request.status == 200){
			display(request.responseText);
		}

	};
	request.open("GET",url);
	request.send(null);
}

function display(luck){
	var p = document.getElementById("content");
	p.innerHTML= luck ;
}
