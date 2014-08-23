Test=createClass(App);

Test.prototype.ctor=function(){
}
Test.prototype.add=function(a,b){
	return  a+b;
}
Test.prototype.del=function(a,b){
	return  a-b;
}

resetClass(Test);