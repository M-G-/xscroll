define('kg/xscroll/2.0.0/pinch',["./util","./event"],function(require, exports, module) {function e(e,t){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)}function t(e,t){return{pageX:e.pageX/2+t.pageX/2,pageY:e.pageY/2+t.pageY/2}}function n(n){if(!(n.touches.length<2||n.changedTouches.length<1)){n.preventDefault();var i=e(n.touches[0],n.touches[1]),a=t(n.touches[0],n.touches[1]);if(n.origin=a,this.isStart){if("pinch"!=this.gestureType)return;n.distance=i,n.scale=i/this.startDistance,n.origin=a,s.dispatchEvent(n.target,h,n)}else this.isStart=1,this.startDistance=i,this.gestureType="pinch",s.dispatchEvent(n.target,r,n)}}function i(e){this.isStart=0,"pinch"==this.gestureType&&0==e.touches.length&&(s.dispatchEvent(e.target,a,e),this.gestureType="")}var s=(require("./util"),require("./event")),r=(window.document,"gesturePinchStart"),a="gesturePinchEnd",h="gesturePinch";document.addEventListener("touchmove",n),document.addEventListener("touchend",i);var u={PINCH_START:r,PINCH:h,PINCH_END:a};module.exports=u;});