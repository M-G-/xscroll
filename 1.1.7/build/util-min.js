/*!build time : 2014-09-13 12:02:54 PM*/
KISSY.add("kg/xscroll/1.1.7/util",function(){var a={vendor:function(){for(var a,b=document.createElement("div").style,c=["t","webkitT","MozT","msT","OT"],d=0,e=c.length;e>d;d++)if(a=c[d]+"ransform",a in b)return c[d].substr(0,c[d].length-1);return!1}(),prefixStyle:function(a){return this.vendor===!1?!1:""===this.vendor?a:this.vendor+a.charAt(0).toUpperCase()+a.substr(1)},isAndroid:/Android /.test(window.navigator.appVersion),isBadAndroid:/Android /.test(window.navigator.appVersion)&&!/Chrome\/\d/.test(window.navigator.appVersion)};return a});