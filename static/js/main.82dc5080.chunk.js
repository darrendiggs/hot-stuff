(this["webpackJsonphot-stuff"]=this["webpackJsonphot-stuff"]||[]).push([[0],{24:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(4),r=n.n(a),i=(n(24),n(12)),o=n.n(i),l=n(17),j=n(9),d=n(1);var u=function(){return Object(d.jsxs)("div",{className:"container-fluid text-center loader",children:[Object(d.jsx)("iframe",{src:"https://giphy.com/embed/dVnzGW7UehcEpwLxBm",frameBorder:"0",class:"giphy-embed"}),Object(d.jsx)("h2",{className:"fw-bold",children:"Loading!"})]})},b=n(19),h=function(e){e.lat,e.lng;var t=e.onClick;return Object(d.jsx)("div",{className:"location-marker",onClick:t,children:Object(d.jsx)("h4",{className:"location-marker",children:"\ud83d\udd25"})})},f=function(e){e.lat,e.lng;var t=e.onClick;return Object(d.jsx)("div",{className:"location-marker",onClick:t,children:Object(d.jsx)("h4",{className:"location-marker",children:"\ud83c\udf0b"})})},m=n(39),x=n(38);var O=function(e){return Object(d.jsx)("div",{className:"eventInfo",children:Object(d.jsx)(m.a,{onClick:function(){return e.setlocationInfo(null)},children:Object(d.jsxs)(x.a,{children:[Object(d.jsx)("p",{children:e.info.title}),Object(d.jsxs)("p",{children:["Id: ",e.info.id]})]})})})},v=function(e){var t=e.eventData,n=e.center,s=e.zoom,a=Object(c.useState)(null),r=Object(j.a)(a,2),i=r[0],o=r[1],l=t.map((function(e){return 8===e.categories[0].id?Object(d.jsx)(h,{lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],onClick:function(){return o({id:e.id,title:e.title})}}):12===e.categories[0].id&&2===e.geometries[0].coordinates.length?Object(d.jsx)(f,{lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],onClick:function(){return o({id:e.id,title:e.title})}}):void 0}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("h1",{className:"title text-center fw-bold ",children:["H",Object(d.jsx)("span",{className:"emoji",children:"\ud83e\udd75"}),"T STUFF"]})})}),Object(d.jsxs)("div",{className:"map conatiner-fluid ",children:[Object(d.jsx)(b.a,{bootstrapURLKeys:{key:"AIzaSyBYgDmN2G0xMhz4od_rTx99x2BFi7L1hic"},defaultCenter:n,defaultZoom:s,children:l}),i&&Object(d.jsx)(O,{info:i,className:"eventInfo mx-auto",setlocationInfo:o})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("h3",{className:"text-center nasaBanner",children:"Powered By NASA"})})})]})};v.defaultProps={center:{lat:40.3428,lng:-98.6836},zoom:3};var g=v;var p=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),r=Object(j.a)(a,2),i=r[0],b=r[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c=n.events,s(c),b(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsx)("div",{className:"container",children:i?Object(d.jsx)(u,{}):Object(d.jsx)(g,{eventData:n})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),N()}},[[36,1,2]]]);
//# sourceMappingURL=main.82dc5080.chunk.js.map