define('kg/xscroll/2.0.0/event',["./util"],function(require, exports, module) {var t=require("./util"),e={on:function(t,e,n){return t.addEventListener(e,n),this.target=t,this},detach:function(t,e,n){return this.target=null,t.removeEventListener(e,n),this},dispatchEvent:function(e,n,i){var r=document.createEvent("Event");r.initEvent(n,!0,!0),t.mix(r,i),e.dispatchEvent(r)}};module.exports=e;});