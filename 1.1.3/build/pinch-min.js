/*!build time : 2014-08-29 4:48:58 PM*/
KISSY.add("kg/xscroll/1.1.3/pinch",function(a){function b(a,b){var c=a.pageX-b.pageX,d=a.pageY-b.pageY;return Math.sqrt(c*c+d*d)}function c(a,b){return{pageX:a.pageX/2+b.pageX/2,pageY:a.pageY/2+b.pageY/2}}function d(a){if(!(a.touches.length<2||a.changedTouches.length<1)){a.preventDefault();var d=b(a.touches[0],a.touches[1]),e=c(a.touches[0],a.touches[1]);if(a.origin=e,this.isStart){if("pinch"!=this.gestureType)return;a.distance=d,a.scale=d/this.startDistance,i(this).fire(h,a,{origin:e})}else this.isStart=1,this.startDistance=d,this.gestureType="pinch",i(this).fire(f,a)}}function e(a){this.isStart=0,"pinch"==this.gestureType&&0==a.touches.length&&(i(this).fire(g,a),this.gestureType="")}var f=(window.document,"gesturePinchStart"),g="gesturePinchEnd",h="gesturePinch",i=a.all;return a.Event.Special[h]={setup:function(){i(this).on("touchmove",d),i(this).on("touchend",e)},teardown:function(){i(this).detach("touchmove",d),i(this).detach("touchend",e)}},{PINCH_START:f,PINCH:h,PINCH_END:g}},{requires:["node","event"]});