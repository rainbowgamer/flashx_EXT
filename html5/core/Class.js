window.Class={};
window.__extends =function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.createClass=function(_super){
	var classObj=function(){
		this.class=classObj;
		this.className=classObj.className;
		if(this.class.eventListener&&this.isElement){
			App.addStageListener(this);
		}
		var funcs=[];
		var _super=classObj;
		while(_super){
			if(_super.super==null||_super.prototype._define!=_super.super.prototype._define) _super.prototype._define.call(this);
			if(_super.super==null||_super.prototype.ctor!=_super.super.prototype.ctor) funcs.unshift(_super.prototype.ctor);
			_super=_super.super;
		}
		for(var i=0;i<funcs.length;i++){
			func=funcs[i];
			func.apply(this,arguments);
		}
	}
	classObj.prototype.ctor=function(){
	}
	classObj.prototype._define=function(){
	}
	classObj.prototype.toString=function(){
		return "[" + this.className + (this.name ? " " + this.name : "") + "]";
	};
	if(_super) __extends(classObj, _super);
	classObj.super=_super;
	return classObj;
};
window.resetClass=function(classObj){
	if(classObj._defineStatic){
		try{
			classObj._defineStatic.call();
		}
		catch(e){}
	}
	var obj={};
	for(var method in classObj.prototype){
		if(method.indexOf("get__")!=0&&method.indexOf("set__")!=0) continue;
		var op=method.slice(0,3);
		var f=method.slice(5);
		if(!obj[f]) obj[f]={};
		obj[f][op]=classObj.prototype[method];
	}
	for(var k in obj){
		Object.defineProperty(classObj.prototype,k,obj[k]);
	}

};


window.trace=function(){
	var str="";
	for(var i=0;i<arguments.length;i++){
		str+=arguments[i];
		if(i<arguments.length-1) str+=" ";
	}
	console.log(str);
}
