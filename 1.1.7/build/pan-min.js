/*!build time : 2014-09-13 12:02:54 PM*/
KISSY.add("kg/xscroll/1.1.7/pan",function(a){function b(a){if(!(a.touches.length>1||this.gestureType&&"pan"!=this.gestureType))if(""==this.gestureType&&(l=[]),l.length){if("pan"!=this.gestureType)return;k.deltaX=a.touches[0].clientX-k.startX,k.deltaY=a.touches[0].clientY-k.startY,k.directionX=a.touches[0].clientX-k.prevX>0?"right":"left",k.directionY=a.touches[0].clientY-k.prevY>0?"bottom":"top",k.prevX=a.touches[0].clientX,k.prevY=a.touches[0].clientY,a.touch=k,l.push({deltaX:k.deltaX,deltaY:k.deltaY,timeStamp:a.timeStamp}),a.deltaX=k.deltaX,a.deltaY=k.deltaY,a.velocityX=0,a.velocityY=0,a.directionX=k.directionX,a.directionY=k.directionY,a.isPropagationStopped()||j(a.target).fire(h,a)}else k={},k.startX=a.touches[0].clientX,k.startY=a.touches[0].clientY,k.deltaX=0,k.deltaY=0,a.touch=k,k.prevX=k.startX,k.prevY=k.startY,l.push({deltaX:k.deltaX,deltaY:k.deltaY,timeStamp:a.timeStamp}),a.deltaX=k.deltaX,a.deltaY=k.deltaY,this.gestureType="pan",j(a.target).fire(f,a)}function c(a){var b=0,c=0,f=0;if(!(a.touches.length>1)){k.deltaX=a.changedTouches[0].clientX-k.startX,k.deltaY=a.changedTouches[0].clientY-k.startY,a.deltaX=k.deltaX,a.deltaY=k.deltaY,a.touch=k,a.touch.record=l;var h=(a.touch.startX,a.touch.startY,l.length),m=l[0]&&l[0].timeStamp;if(!(2>h)&&m){{l[h-1].timeStamp-l[0].timeStamp}for(var n in l)n>0?(l[n].velocity=d(l[n].deltaX,l[n].deltaY,l[n-1].deltaX,l[n-1].deltaY)/(l[n].timeStamp-l[n-1].timeStamp),l[n].velocityX=(l[n].deltaX-l[n-1].deltaX)/(l[n].timeStamp-l[n-1].timeStamp),l[n].velocityY=(l[n].deltaY-l[n-1].deltaY)/(l[n].timeStamp-l[n-1].timeStamp)):(l[n].velocity=0,l[n].velocityX=0,l[n].velocityY=0);var o=l[0].velocityX/Math.abs(l[0].velocityX);for(var n in l)l[n].velocityX/Math.abs(l[n].velocityX)!=o&&(o=l[n].velocityX/Math.abs(l[n].velocityX),f=n);var p=l[0].velocityY/Math.abs(l[0].velocityY);for(var n in l)l[n].velocityY/Math.abs(l[n].velocityY)!=p&&(p=l[n].velocityY/Math.abs(l[n].velocityY),c=n);b=Math.max(f,c);{l[b]}a.touch.record=a.touch.record.splice(b-1);for(var n=0,q=a.touch.record.length;q>n;n++)isNaN(a.touch.record[n].velocity)&&a.touch.record.splice(n,1);var r="";for(var n in a.touch.record)r+=a.touch.record[n].velocityY.toFixed(2)+" ";var s=e(a.touch.record);a.velocityX=Math.abs(s.velocityX)>i?s.velocityX/Math.abs(s.velocityX)*i:s.velocityX,a.velocityY=Math.abs(s.velocityY)>i?s.velocityY/Math.abs(s.velocityY)*i:s.velocityY,a.velocity=Math.sqrt(Math.pow(a.velocityX,2)+Math.pow(a.velocityY,2)),k={},l=[],"pan"==this.gestureType&&(j(a.target).fire(g,a),this.gestureType="")}}}function d(a,b,c,d){return Math.sqrt(Math.pow(c-a,2)+Math.pow(d-b,2))}function e(a){for(var b=0,c=0,d=a.length,e=0;d>e;e++)b+=a[e].velocityY,c+=a[e].velocityX;return b/=d,c/=d,{velocityY:b,velocityX:c}}var f=(window.document,"gesturePanStart"),g="gesturePanEnd",h="gesturePan",i=8,j=a.all,k={},l=[];return a.each([h],function(d){a.Event.Special[d]={setup:function(){j(this).on("touchmove",b),j(this).on("touchend",c)},teardown:function(){j(this).detach("touchmove",b),j(this).detach("touchend",c)}}}),{PAN_START:f,PAN:h,PAN_END:g}},{requires:["node","event"]});