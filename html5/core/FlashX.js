window.trace=function(){
	var str="";
	for(var i=0;i<arguments.length;i++){
		str+=arguments[i];
		if(i<arguments.length-1) str+=" ";
	}
	console.log(str);
}
