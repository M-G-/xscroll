/*!build time : 2014-10-14 11:38:22 AM*/
KISSY.add("kg/xscroll/1.1.10/plugin/fastscroll",function(a,b){var c=(a.all,1),d=500,e=1,f=6,g=b.extend({pluginId:"xscroll/plugin/fastscroll",pluginInitializer:function(a){var b=this;b.records=[],b.times=0,a.on("panEnd",function(d){Math.abs(d.velocityY)>c?(b.records.push({velocityY:d.velocityY,timeStamp:d.timeStamp}),b.times++):b.reset(),b.times>=e&&a.panEndHandler({velocityY:Math.abs(d.velocityY)/d.velocityY*f},!0)}),a.on("scrollEnd",function(){}),a.on("dragStart",function(c){if(a.isScrolling){if(b.dragRecords.length){var e=b.dragRecords.pop().timeStamp;c.timeStamp-e>d&&b.reset()}}else b.dragRecords=[]}),a.on("afterDirectionYChange",function(){b.reset()})},reset:function(){var a=this;a.dragRecords=[],a.times=0}},{ATTRS:{}});return g},{requires:["base","node","event"]});