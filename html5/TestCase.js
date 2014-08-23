
						
		var __extends = this.__extends || function (d, b) {
		for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		function __() { this.constructor = d; }
		__.prototype = b.prototype;
		d.prototype = new __();
		};
						
						
			
		var TestCase = (function (_super) {
			
			
			__extends(TestCase, _super);
			
			
			
			
	function TestCase() {
	 _super.call(this);
	trace("TestCase By FlashX_PHP_JS v0.0.1");
	this.count_success=0;
	this.count_fail=0;
	this.start();
	this.finish()
}
TestCase.prototype.start=function(){
	this.runTest0_SimpleClass();
}
TestCase.prototype.runTest0_SimpleClass=function(){
	var runcase;
	runcase=new TestCase_0_SimpleClass();
	this.testResult(runcase.add(5,6),5+6);
}
TestCase.prototype.finish=function(){
	trace("TestCase Run Complete, Total:"+(this.count_fail+this.count_success),"Success:"+this.count_success,"Fail:"+this.count_fail);
}		
TestCase.prototype.testResult=function(re,result){
	var tR;
	tR;
	if(re==result){
		this.count_success++
			tR=true;
	}
	else{
		this.count_fail++
			tR=false
	}
	return  tR;
}
			return TestCase;
		})(App);

		