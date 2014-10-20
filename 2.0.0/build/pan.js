define('kg/xscroll/2.0.0/pan',["./util","./event"],function(require, exports, module) {function t(t){if(!(t.touches.length>1||this.gestureType&&"pan"!=this.gestureType))if(""==this.gestureType&&(d=[]),d.length){if("pan"!=this.gestureType)return;s.deltaX=t.touches[0].clientX-s.startX,s.deltaY=t.touches[0].clientY-s.startY,s.directionX=t.touches[0].clientX-s.prevX>0?"right":"left",s.directionY=t.touches[0].clientY-s.prevY>0?"bottom":"top",s.prevX=t.touches[0].clientX,s.prevY=t.touches[0].clientY,t.touch=s,d.push({deltaX:s.deltaX,deltaY:s.deltaY,timeStamp:t.timeStamp}),t.deltaX=s.deltaX,t.deltaY=s.deltaY,t.velocityX=0,t.velocityY=0,t.directionX=s.directionX,t.directionY=s.directionY,c.dispatchEvent(t.target,r,t)}else s={},s.startX=t.touches[0].clientX,s.startY=t.touches[0].clientY,s.deltaX=0,s.deltaY=0,t.touch=s,s.prevX=s.startX,s.prevY=s.startY,d.push({deltaX:s.deltaX,deltaY:s.deltaY,timeStamp:t.timeStamp}),t.deltaX=s.deltaX,t.deltaY=s.deltaY,this.gestureType="pan",c.dispatchEvent(t.target,o,t)}function e(t){var e=0,o=0,r=0;if(!(t.touches.length>1)){s.deltaX=t.changedTouches[0].clientX-s.startX,s.deltaY=t.changedTouches[0].clientY-s.startY,t.deltaX=s.deltaX,t.deltaY=s.deltaY,t.touch=s,t.touch.record=d;var v=(t.touch.startX,t.touch.startY,d.length),n=d[0]&&d[0].timeStamp;if(!(2>v)&&n){{d[v-1].timeStamp-d[0].timeStamp}for(var X in d)X>0?(d[X].velocity=a(d[X].deltaX,d[X].deltaY,d[X-1].deltaX,d[X-1].deltaY)/(d[X].timeStamp-d[X-1].timeStamp),d[X].velocityX=(d[X].deltaX-d[X-1].deltaX)/(d[X].timeStamp-d[X-1].timeStamp),d[X].velocityY=(d[X].deltaY-d[X-1].deltaY)/(d[X].timeStamp-d[X-1].timeStamp)):(d[X].velocity=0,d[X].velocityX=0,d[X].velocityY=0);var Y=d[0].velocityX/Math.abs(d[0].velocityX);for(var X in d)d[X].velocityX/Math.abs(d[X].velocityX)!=Y&&(Y=d[X].velocityX/Math.abs(d[X].velocityX),r=X);var u=d[0].velocityY/Math.abs(d[0].velocityY);for(var X in d)d[X].velocityY/Math.abs(d[X].velocityY)!=u&&(u=d[X].velocityY/Math.abs(d[X].velocityY),o=X);e=Math.max(r,o);{d[e]}t.touch.record=t.touch.record.splice(e-1);var y=i(t.touch.record);t.velocityX=Math.abs(y.velocityX)>h?y.velocityX/Math.abs(y.velocityX)*h:y.velocityX,t.velocityY=Math.abs(y.velocityY)>h?y.velocityY/Math.abs(y.velocityY)*h:y.velocityY,t.velocity=Math.sqrt(Math.pow(t.velocityX,2)+Math.pow(t.velocityY,2)),s={},d=[],"pan"==this.gestureType&&(c.dispatchEvent(t.target,l,t),this.gestureType="")}}}function a(t,e,a,i){return Math.sqrt(Math.pow(a-t,2)+Math.pow(i-e,2))}function i(t){for(var e=0,a=0,i=t.length,c=0;i>c;c++)e+=t[c].velocityY,a+=t[c].velocityX;return e/=i,a/=i,{velocityY:Math.abs(t[i-1].velocityY)>v?e:0,velocityX:Math.abs(t[i-1].velocityX)>v?a:0}}var c=(require("./util"),require("./event")),o=(window.document,"panstart"),l="panend",r="pan",v=.35,h=8,s={},d=[];document.addEventListener("touchmove",t),document.addEventListener("touchend",e);var n={PAN_START:o,PAN_END:l,PAN:r};module.exports=n;});