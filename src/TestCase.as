package {
	import core.*;
	
	import flash.display.Sprite;
	[SWF(width="64",height="96",frameRate="60",backgroundColor="0x000000")]
	public class TestCase extends App{
		public function TestCase(){
			super();
			trace("TestCase By FlashX_PHP_JS v0.0.1");
			count_success=0;
			count_fail=0;
			
			start();
			
			finish()
		}
		
		private function start():void
		{
			// TODO Auto Generated method stub
			runTest0_SimpleClass();
			
			
		}
		
		private function runTest0_SimpleClass():void
		{
			// TODO Auto Generated method stub
			var runcase:TestCase_0_SimpleClass=new TestCase_0_SimpleClass();
			
			testResult(runcase.add(5,6),5+6);
			
			
		}
		
		private function finish():void
		{
			// TODO Auto Generated method stub
			trace("TestCase Run Complete, Total:"+(count_fail+count_success),"Success:"+count_success,"Fail:"+count_fail);
		}		
		
		private function testResult(re:*,result:*):Boolean{
		
			var tR:Boolean;
			if(re==result){
				count_success++
					tR=true;
			}
			else{
				count_fail++
					tR=false
			}
			return tR;
		}
		
		
		private var count_success:int;
		private var count_fail:int;
		
		
	}
}