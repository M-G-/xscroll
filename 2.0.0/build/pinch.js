define('kg/xscroll/2.0.0/pinch',["./util","./event"],function(require, exports, module) {define(function(t){function e(t,e){var n=t.pageX-e.pageX,i=t.pageY-e.pageY;return Math.sqrt(n*n+i*i)}function n(t,e){return{pageX:t.pageX/2+e.pageX/2,pageY:t.pageY/2+e.pageY/2}}function i(t){if(!(t.touches.length<2||t.changedTouches.length<1)){t.preventDefault();var i=e(t.touches[0],t.touches[1]),s=n(t.touches[0],t.touches[1]);if(t.origin=s,this.isStart){if("pinch"!=this.gestureType)return;t.distance=i,t.scale=i/this.startDistance,t.origin=s,a.dispatchEvent(t.target,h,t)}else this.isStart=1,this.startDistance=i,this.gestureType="pinch",a.dispatchEvent(t.target,r,t)}}function s(t){this.isStart=0,"pinch"==this.gestureType&&0==t.touches.length&&(a.dispatchEvent(t.target,c,t),this.gestureType="")}var a=(t("./util"),t("./event")),r=(window.document,"gesturePinchStart"),c="gesturePinchEnd",h="gesturePinch";return document.addEventListener("touchmove",i),document.addEventListener("touchend",s),{PINCH_START:r,PINCH:h,PINCH_END:c}});});