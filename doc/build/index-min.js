/*!build time : 2014-08-29 9:22:25 AM*/
KISSY.add("kg/xscroll/1.1.1/index",function(a,b,c,d,e,f,g){function h(a,b){return[[(a/3+(a+b)/3-a)/(b-a),(a*a/3+a*b*2/3-a*a)/(b*b-a*a)],[(b/3+(a+b)/3-a)/(b-a),(b*b/3+a*b*2/3-a*a)/(b*b-a*a)]]}for(var i=a.all,j="scrollEnd",k="scroll",l="panEnd",m="panStart",n="pan",o="scrollAnimate",p="scaleAnimate",q="scale",r="afterRender",s="refresh",t=5e-4,u=300,v="ease-in-out",w=.1,x=.36,y=300,z=g.prefixStyle("transform"),A=g.prefixStyle("transition"),B=g.prefixStyle("transitionDuration"),C=g.prefixStyle("transformOrigin"),D=g.vendor?["-",g.vendor,"-transform"].join(""):"transform",E=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)},F=["webkit","moz","ms","o"],G=window.cancelAnimationFrame,H=0;H<F.length;H++)(window[F[H]+"CancelAnimationFrame"]||window[F[H]+"CancelRequestAnimationFrame"])&&(G=window[F[H]+"CancelAnimationFrame"]||window[F[H]+"CancelRequestAnimationFrame"]);G=G||window.clearTimeout;var I=function(a,b){if(!(a.touches.length>1)){var c=a.changedTouches,d=c[0],e=document.createEvent("MouseEvent");e.initMouseEvent(b,!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(e)}},J=d.extend({initializer:function(){var b=this,c=b.userConfig=a.mix({scalable:!1},b.userConfig,void 0,void 0,!0);b.$renderTo=i(c.renderTo);var d=b.clsPrefix=c.clsPrefix||"ks-xscroll-";b.SROLL_ACCELERATION=c.SROLL_ACCELERATION||t,b.containerClsName=d+"container",b.contentClsName=d+"content"},refresh:function(){var a=this;a.render(),a.scrollTo({x:0,y:0}),a.fire(s)},render:function(){var a=this,b=a.userConfig;a._createContainer();var c=b.height||a.$renderTo.height(),d=b.width||a.$renderTo.width();a.set("width",d),a.set("height",c),a.set("scale",b.scale||1);var e=b.containerWidth||a.$content.width(),f=b.containerHeight||a.$content.height();a.set("containerWidth",e<a.get("width")?a.get("width"):e),a.set("containerHeight",f<a.get("height")?a.get("height"):f),a.set("initialContainerWidth",a.get("containerWidth")),a.set("initialContainerHeight",a.get("containerHeight"));var g=a.userConfig.minScale||Math.max(a.get("width")/a.get("containerWidth"),a.get("height")/a.get("containerHeight")),h=a.userConfig.maxScale||1;a.set("minScale",g),a.set("maxScale",h),a.boundry={reset:function(){return this.left=0,this.top=0,this.right=a.get("width"),this.bottom=a.get("height"),this},expandTop:function(a){return this.top+=a||0,this},expandLeft:function(a){return this.left+=a||0,this},expandRight:function(a){return this.right-=a||0,this},expandBottom:function(a){return this.bottom-=a||0,this}},a.boundry.reset(),a.fire(r),a._bindEvt()},_createContainer:function(){var a=this;if(!a.__isContainerCreated){var b=(a.$renderTo,i("."+a.containerClsName,a.$renderTo)[0]),c=i("."+a.contentClsName,a.$renderTo)[0];a.$ctn=i(b),a.$content=i(c),b.style.position="absolute",b.style.height="100%",b.style.width="100%",b.style[C]="0 0",c.style.position="absolute",c.style[C]="0 0",a.translate({x:0,y:0}),a.__isContainerCreated=!0}},translate:function(a){this.translateX(a.x),this.translateY(a.y)},scaleTo:function(a,b,c,d,e){var f=this,g="";if(f.userConfig.scalable&&f.get("scale")!=a&&a){if(f.scale(a,b,c),d){var e=e||"ease-out";g=[D," ",d/1e3,"s ",e," 0s"].join(""),f.fire(p,{scale:f.get("scale"),duration:d,easing:e,offset:{x:f.get("x"),y:f.get("y")}})}f.$ctn[0].style[A]=g,f.$content[0].style[A]=g}},scale:function(a,b,c){var d=this;if(d.userConfig.scalable&&d.get("scale")!=a&&a){b&&d.set("originX",b),c&&d.set("originY",c);var e=d.boundry,f=a*d.get("initialContainerWidth"),g=a*d.get("initialContainerHeight");d.set("containerWidth",f>d.get("width")?f:d.get("width")),d.set("containerHeight",g>d.get("height")?g:d.get("height")),d.set("scale",a);var h=-b*d.get("containerWidth")+d.get("width")/2,i=-c*d.get("containerHeight")+d.get("height")/2;h>e.left&&(h=e.left),i>e.top&&(i=e.top),h<e.right-d.get("containerWidth")&&(h=e.right-d.get("containerWidth")),i<e.bottom-d.get("containerHeight")&&(i=e.bottom-d.get("containerHeight")),d.set("x",h),d.set("y",i),d._transform(),d.fire(q,{scale:a})}},translateX:function(a){this.set("x",a),this._transform()},translateY:function(a){this.set("y",a),this._transform()},stop:function(){var a=this,b=a.getOffset();a.translate(b),g.isAndroid?(a.$content[0].style[B]="0.001s",a.$ctn[0].style[B]="0.001s"):(a.$content[0].style[A]="none",a.$ctn[0].style[A]="none"),a.isScrollingX=!1,a.isScrollingY=!1,a.fire(j,{offset:b,scale:a.get("scale")})},_transform:function(){this.$content[0].style[z]="translate("+(this.get("x")||0)+"px,0px) translateZ(0) scaleX("+this.get("scale")+")",this.$ctn[0].style[z]="translate(0px,"+(this.get("y")||0)+"px) translateZ(0) scaleY("+this.get("scale")+")"},getOffset:function(){var a=this;return{x:a.getOffsetLeft(),y:a.getOffsetTop()}},getOffsetTop:function(){if(this.get("lockY"))return 0;var a=window.getComputedStyle(this.$ctn[0])[z].match(/[-\d\.*\d*]+/g);return a?Math.round(a[5]):0},getOffsetLeft:function(){if(this.get("lockX"))return 0;var a=window.getComputedStyle(this.$content[0])[z].match(/[-\d\.*\d*]+/g);return a?Math.round(a[4]):0},scrollTo:function(a,b,c,d){var e=this,f=e.getOffset(),g=void 0===a.x||isNaN(a.x)?-f.x:a.x,h=void 0===a.y||isNaN(a.y)?-f.y:a.y;e.scrollX(g,b,c,d),e.scrollY(h,b,c,d)},scrollX:function(a,b,c,d){var e=this;if(!e.get("lockX")){var b=b||0,f=e.$content[0];e.translateX(-a);var g=[D," ",b/1e3,"s ",c," 0s"].join("");return f.style[A]=g,e._scrollHandler(a,b,d,c,g,"x"),f.style[A]=g}},scrollY:function(a,b,c,d){var e=this;if(!e.get("lockY")){var b=b||0,f=e.$ctn[0];e.translateY(-a);var g=[D," ",b/1e3,"s ",c," 0s"].join("");return f.style[A]=g,e._scrollHandler(a,b,d,c,g,"y"),f.style[A]=g}},_scrollHandler:function(a,b,c,d,e,f){var g=this;if(!(0>=b)){var h=f.toUpperCase();g["isScrolling"+h]=!0;var i=Date.now();g["destTime"+h]=i+b,G(g["raf"+h]);var j=function(){var a=Date.now();return g["isScrolling"+h]&&E(function(){g.fire(k,{zoomType:f,offset:g.getOffset()})},0),a>i+b&&a>=g["destTime"+h]?(g["isScrolling"+h]=!1,g.fire(k,{offset:g.getOffset(),zoomType:f}),void(c&&c({type:f}))):void(g["raf"+h]=E(j))};j(),g.fire(o,{transition:e,offset:{x:g.get("x"),y:g.get("y")},duration:b/1e3,easing:d,zoomType:f})}},boundryCheckX:function(a){var b=this;if(b.get("boundryCheckEnabled")&&!b.get("lockX")){var c=b.getOffset(),d=(b.get("width"),b.get("containerWidth")),e=b.boundry;c.x>e.left?(c.x=e.left,b.scrollX(-c.x,u,v,a)):c.x+d<e.right&&(c.x=e.right-d,b.scrollX(-c.x,u,v,a))}},boundryCheckY:function(a){var b=this;if(b.get("boundryCheckEnabled")&&!b.get("lockY")){var c=b.getOffset(),d=(b.get("height"),b.get("containerHeight")),e=b.boundry;c.y>e.top?(c.y=e.top,b.scrollY(-c.y,u,v,a)):c.y+d<e.bottom&&(c.y=e.bottom-d,b.scrollY(-c.y,u,v,a))}},boundryCheck:function(a){var b=this;b.boundryCheckX(a),b.boundryCheckY(a)},bounce:function(a,b){var c=this;c.set("boundryCheckEnabled",a),a?c.boundryCheck(b):void 0},_bindEvt:function(){var a=this;if(!a.__isEvtBind){a.__isEvtBind=!0;var b=a.$renderTo,c=(a.$ctn[0],a.$content[0],a.get("containerWidth")),d=a.get("containerHeight"),g={x:0,y:0},h=a.boundry;b.on("touchstart",function(b){b.preventDefault(),a.stop()}).on("tap",function(b){a.boundryCheck(),a.isScrollingX||a.isScrollingY||I(b,"click")}).on(e.PAN_START,function(){g=a.getOffset(),a.translate(g),a.fire(m,{offset:g})}).on(e.PAN,function(b){var e=a.get("lockY")?Number(g.y):Number(g.y)+b.deltaY,f=a.get("lockX")?Number(g.x):Number(g.x)+b.deltaX;h=a.boundry,c=a.get("containerWidth"),d=a.get("containerHeight"),e>h.top&&(e*=x),e<h.bottom-d&&(e+=(h.bottom-d-e)*x),f>h.left&&(f*=x),f<h.right-c&&(f+=(h.right-c-f)*x),a.translate({x:f,y:e}),a.isScrollingX=!1,a.isScrollingY=!1,a.set("directionX",b.directionX),a.set("directionY",b.directionY),a.fire(k,{offset:{x:f,y:e},directionX:a.get("directionX"),directionY:a.get("directionY")}),a.fire(n,{offset:{x:f,y:e},directionX:a.get("directionX"),directionY:a.get("directionY")})}).on(e.PAN_END,function(b){a.panEndHandler(b),a.fire(l,{velocity:b.velocity,velocityX:b.velocityX,velocityY:b.velocityY})});if(a.userConfig.scalable){var i,j;a.$renderTo.on(f.PINCH_START,function(b){scale=a.get("scale"),i=(b.origin.pageX-a.get("x"))/a.get("containerWidth"),j=(b.origin.pageY-a.get("y"))/a.get("containerHeight")}),a.$renderTo.on(f.PINCH,function(b){a.get("scale")<=a.get("minScale")?a.scaleTo(scale*b.scale,i,j):a.scaleTo(scale*b.scale,i,j)}),a.$renderTo.on(f.PINCH_END,function(){a.get("scale")<a.get("minScale")?a.scaleTo(a.get("minScale"),i,j,y):a.get("scale")>a.get("maxScale")&&a.scaleTo(a.get("maxScale"),i,j,y)})}window.addEventListener("resize",function(){a.refresh()})}},panEndHandler:function(a){var b=this,c=(b.userConfig,b.getOffset());if(Math.abs(a.velocity)<.5)return b.fire(j,{offset:c}),void b.boundryCheck();var d,e=b._bounce("x",c.x,a.velocityX,b.get("width"),b.get("containerWidth")),f=b._bounce("y",c.y,a.velocityY,b.get("height"),b.get("containerHeight")),g=e?e.offset:0,h=f?f.offset:0;e&&f&&e.status&&f.status&&e.duration&&f.duration&&(d=Math.max(e.duration,f.duration)),e&&b.scrollX(g,d||e.duration,e.easing,function(){b._scrollEndHandler("x")}),f&&b.scrollY(h,d||f.duration,f.easing,function(){b._scrollEndHandler("y")}),b.set("directionX",a.velocityX<0?"left":"right"),b.set("directionY",a.velocityY<0?"up":"down")},_scrollEndHandler:function(a){var b=this;if(b["_bounce"+a]){b.fire("outOfBoundry");var c=b["_bounce"+a],d=.04*(c/Math.abs(c)),e=c/d,f=b.getOffset()[a],g=f+e*c/2;"x"==a?b.scrollX(-g,e,"cubic-bezier("+h(-e,0)+")",function(){b["_bounce"+a]=0,b.boundryCheckX()}):b.scrollY(-g,e,"cubic-bezier("+h(-e,0)+")",function(){b["_bounce"+a]=0,b.boundryCheckY()})}else"x"==a?b.boundryCheckX():"y"==a&&b.boundryCheckY()},_bounce:function(a,b,c,d,e){var f=this,g=f.boundry,i=(g[a],"x"==a?g.w:g.h,{});if(0===c)return void("x"==a?f.boundryCheckX():f.boundryCheckY());if(!("x"==a&&f.get("lockX")||"y"==a&&f.get("lockY"))){var j=f.userConfig,k=j.maxSpeed>0&&j.maxSpeed<6?j.maxSpeed:3;if(c>k&&(c=k),-k>c&&(c=-k),b>0||d-e>b){var l=w*(c/Math.abs(c)),m=c/l,n=b+m*c/2;return i.offset=-n,i.duration=m,i.easing="cubic-bezier("+h(-m,0)+")",i}var l=f.SROLL_ACCELERATION*(c/Math.abs(c)),m=c/l,n=b/1+m*c/2;if(n>0){var o=0-b,p=(c-Math.sqrt(-2*l*o+c*c))/l;i.offset=0,i.duration=p,i.easing="cubic-bezier("+h(-m,-m+p)+")",f["_bounce"+a]=c-l*p}else if(d-e>n){var o=d-e-b,p=(c+Math.sqrt(-2*l*o+c*c))/l;i.offset=e-d,i.duration=p,i.easing="cubic-bezier("+h(-m,-m+p)+")",f["_bounce"+a]=c-l*p}else i.offset=-n,i.duration=m,i.easing="cubic-bezier("+h(-m,0)+")",i.status="normal";return f["isScrolling"+a.toUpperCase()]=!0,i}}},{ATTRS:{width:{value:0},height:{value:0},lockX:{value:!1},lockY:{value:!1},containerWidth:{value:0},containerHeight:{value:0},boundryCheckEnabled:{value:!0},directionY:{value:""},directionX:{value:""},originX:{value:0},originY:{value:0}}});return J},{requires:["node","event","base","kg/xscroll/1.1.2/pan","kg/xscroll/1.1.2/pinch","kg/xscroll/1.1.2/util"]});