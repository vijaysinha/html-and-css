function Movie(name,time,people){
	this.name=name;
	this.time =time;
	this.people=people;
}

function testJson(){
	var funMovie = new Movie("harry potter","10:30",5);
	var json= JSON.stringify(funMovie);
	alert(json);
}