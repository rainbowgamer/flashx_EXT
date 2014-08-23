/**
* Created by zhouhua replace app.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddStage, this);
    }
    
    App.prototype.onAddStage = function () {
        //egret.Profiler.getInstance().run();

    	console.log("flashX Conv onAddStage");
    };
   
    return App;
})(egret.DisplayObjectContainer);
