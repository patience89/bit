function bit(value){
	return document.getElementById(value);
}
var $ = bit;
/*
bit.toYYYYMMDD= functiZzn(date){
	return date.getFullYear()+'-'+	
	(date.getMonth()+1)+'-'+
	date.getDate();	
}*/

function toYYYYMMDD(date){
	return date.getFullYear()+'-'+	
	(date.getMonth()+1)+'-'+
	date.getDate();	
}

