(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,n){},38:function(e,n,t){e.exports=t(63)},54:function(e,n){},60:function(e,n){},62:function(e,n,t){},63:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(20),r=t.n(c),i=t(37),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=t(13),v=t(31),m=t(32),p=t.n(m),d=Object(u.c)({people:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}),f=Object(u.a)(v.a,p.a),h=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),b=Object(u.e)(d,Object(u.d)(f,h)),g=t(18),E=t(14),O=t(26),w=t(27),j=t(34),k=t.n(j),y=t(35),C=t.n(y);Object(w.b)([].concat(Object(O.a)(k.a),Object(O.a)(C.a)));var N={"en-US":{nav:{doors:"Doors",events:"Events",home:"Home",people:"People"}},nl:{nav:{doors:"deuren",events:"Evenementen",home:"Huis",people:"Mensen"}}},_=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage||"en-US",S=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object.keys(n).reduce(function(a,o){var c=n[o],r=t?"".concat(t,".").concat(o):o;return"string"===typeof c?a[r]=c:Object.assign(a,e(c,r)),a},{})}(N[_]||N["en-US"]),U=new w.a({locale:_,messages:S}).getChildContext().intl,W=function(e){return U.formatMessage({id:e})},A=t(8),D=t(9),T=t(11),x=t(10),L=t(12),R=function(e){function n(){return Object(A.a)(this,n),Object(T.a)(this,Object(x.a)(n).apply(this,arguments))}return Object(L.a)(n,e),Object(D.a)(n,[{key:"render",value:function(){return o.a.createElement("h1",null,"Home")}}]),n}(a.Component),P=function(e){function n(){return Object(A.a)(this,n),Object(T.a)(this,Object(x.a)(n).apply(this,arguments))}return Object(L.a)(n,e),Object(D.a)(n,[{key:"render",value:function(){return o.a.createElement("h1",null,"People")}}]),n}(a.Component),X=function(e){function n(){return Object(A.a)(this,n),Object(T.a)(this,Object(x.a)(n).apply(this,arguments))}return Object(L.a)(n,e),Object(D.a)(n,[{key:"render",value:function(){return o.a.createElement("h1",null,"Doors")}}]),n}(a.Component),H=function(e){function n(){return Object(A.a)(this,n),Object(T.a)(this,Object(x.a)(n).apply(this,arguments))}return Object(L.a)(n,e),Object(D.a)(n,[{key:"render",value:function(){return o.a.createElement("h1",null,"Events")}}]),n}(a.Component),I=function(){return o.a.createElement("h1",null,"Not found")},B=o.a.createElement(g.a,null,o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(g.b,{exact:!0,activeClassName:"active",to:"/"},W("nav.home"))),o.a.createElement("li",null,o.a.createElement(g.b,{activeClassName:"active",to:"/people"},W("nav.people"))),o.a.createElement("li",null,o.a.createElement(g.b,{activeClassName:"active",to:"/doors"},W("nav.doors"))),o.a.createElement("li",null,o.a.createElement(g.b,{activeClassName:"active",to:"/events"},W("nav.events")))),o.a.createElement("hr",null),o.a.createElement(E.c,null,o.a.createElement(E.a,{exact:!0,path:"/",component:R}),o.a.createElement(E.a,{path:"/people",component:P}),o.a.createElement(E.a,{path:"/doors",component:X}),o.a.createElement(E.a,{path:"/events",component:H}),o.a.createElement(E.a,{component:I})))),J=function(){return o.a.createElement("div",{className:"App"},B)};t(62);r.a.render(o.a.createElement(i.a,{store:b},o.a.createElement(J,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/lock",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/lock","/service-worker.js");l?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):s(n,e)})}}()}},[[38,1,2]]]);
//# sourceMappingURL=main.3712fb4d.chunk.js.map