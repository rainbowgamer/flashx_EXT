<?php
class Test
{
// init Class (TestCase);

public function  _init() {
	this.count_success=0;
	this.count_fail=0;
}
	public function __construct (){
		trace("TestCase By FlashX_PHP_JS v0.0.1");
		this.count_success=0;
		this.count_fail=0;
		this.start();
		this.finish()
	}
	public function start (){
		this.runTest0_SimpleClass();
	}
	public function runTest0_SimpleClass (){
		var runcase;
		runcase=new TestCase_0_SimpleClass();
		this.testResult(runcase.add(5,6),5+6);
	}
	public function finish (){
		trace("TestCase Run Complete, Total:"+(this.count_fail+this.count_success),"Success:"+this.count_success,"Fail:"+this.count_fail);
	}		
	public function testResult (r$e,resul$t){
		var tR;
		tR;
		if($re==$result){
			this.count_success++
				tR=true;
		}
		else{
			this.count_fail++
				tR=false
		}
		return  tR;
	}
	
}