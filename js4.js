window.onload= objectTest;
function objectTest(){
	var obj = {name:"vijay sinha", age:26, profession:"programmer", skills:["c","bash", "javascript", "java"] };
	
	var get = callingObject(obj);
	alert(get);
}
function callingObject(obj){
	var tstObjectElement = obj.profession;
	return testObjectElement;
}