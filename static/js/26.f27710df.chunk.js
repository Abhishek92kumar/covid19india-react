(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[26],{198:function(e,t,a){"use strict";a.r(t);var i=a(103),n=a(24),c=a(78),r=a(23),l=a(0),o=a.n(l),s=a(90),d=function(e){var t=e.width,a=e.statistic,i=window.innerWidth;t||(t=i>769?480:i);var n=(i>769?.9:1)*t/.885,c=42+r.g+n;return o.a.createElement(s.a,{viewBox:"0 0 ".concat(t," ").concat(c),height:c,width:t,speed:2,backgroundColor:r.b[a]},o.a.createElement("circle",{cx:.4*t,cy:c/2,r:"5"}),o.a.createElement("circle",{cx:.5*t,cy:c/2,r:"5"}),o.a.createElement("circle",{cx:.6*t,cy:c/2,r:"5"}))},m=a(31),u=a(88),p=a(79),h=a.n(p),f=a(82),b=a.n(f),O=a(89),E=a(251),g=a(5),v=a(81),y=a(242),C=Object(l.lazy)((function(){return Promise.all([a.e(1),a.e(8),a.e(27)]).then(a.bind(null,253))}));t.default=o.a.memo((function(e){var t,a=this,s=e.stateCode,p=void 0===s?"TT":s,f=e.data,b=e.regionHighlighted,j=e.setRegionHighlighted,T=e.anchor,k=(e.setAnchor,e.mapStatistic),w=e.setMapStatistic,x=Object(E.a)().t,S=Object(l.useRef)(),N=Object(y.a)().width,B=Object(l.useState)(r.j.DISTRICTS),R=Object(c.a)(B,2),U=R[0],I=R[1],H=Object(l.useState)(r.h[p].mapType===r.i.COUNTRY?r.k.BUBBLES:r.k.CHOROPLETH),L=Object(c.a)(H,2),P=L[0],M=L[1],D=r.h[p],q=D.mapType===r.i.COUNTRY?f:Object(n.a)({},p,f[p]),A=Object(l.useMemo)((function(){var e,t,a=(b.districtName?null===(e=f[b.stateCode])||void 0===e||null===(t=e.districts)||void 0===t?void 0:t[b.districtName]:f[b.stateCode])||{};return Object(O.a)(a,(function(e){e.name=b.districtName||r.q[b.stateCode]}))}),[f,b.stateCode,b.districtName]),V=function(e){switch(e){case r.k.CHOROPLETH:return void M(r.k.CHOROPLETH);case r.k.BUBBLES:return void M(r.k.BUBBLES);default:return}},W=Object(l.useCallback)((function(){var e=U===r.j.DISTRICTS?r.j.STATES:r.j.DISTRICTS;e===r.j.STATES&&j({stateCode:b.stateCode,districtName:null}),I(e)}),[U,j,b.stateCode]),Y=Object(l.useMemo)((function(){return o.a.createElement("svg",{width:"314",height:"314",viewBox:"0 0 314 314",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M78.2861 145.778C80.6671 155.387 84.6108 164.28 92.421 170.488C94.5409 174.766 93.7381 180.115 96.2412 184.535C99.7619 190.751 102.898 195.156 110.758 195.156C119.259 195.156 127.582 192.241 132.576 184.963C136.539 179.187 143.562 174.194 150.658 178.968C156.039 182.587 157.864 191.253 161.949 196.312C168.044 203.859 175.962 212.131 184.107 217.339C190.795 221.615 199.602 221.297 207.368 220.551C214.111 219.903 220.088 212.137 223.71 207.189C227.102 202.555 230.602 198.075 233.006 192.843C238.463 180.961 236.721 162.008 225.62 153.958C213.23 144.974 196.881 145.725 183.343 139.654C175.796 136.27 175.843 122.587 174.174 115.758C172.492 108.876 170.655 99.867 164.581 95.3733C155.36 88.5509 146.436 93.7458 137.075 96.444C133.325 97.525 131.816 100.817 129.095 103.424L129.093 103.426C126.105 106.29 121.531 110.674 117.974 112.632C113.709 114.979 111.262 119.456 105.834 119.612C104.487 119.651 98.6801 120.375 97.7693 119.227C94.2704 114.814 92.1979 113.445 86.6906 113.445C83.0636 113.445 77.14 118.241 77.14 122.31C77.14 130.086 76.4094 138.205 78.2861 145.778Z",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"}))}),[]),z=Object(l.useMemo)((function(){return o.a.createElement("svg",{width:"22",height:"27",viewBox:"-1 -5 22 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("circle",{cx:"5.5",cy:"5.5",r:"5.5",fillOpacity:"0.4"}),o.a.createElement("circle",{cx:"5.5",cy:"5.5",r:"5",strokeOpacity:"0.5"}),o.a.createElement("circle",{cx:"6.5",cy:"11.5",r:"3.5",fillOpacity:"0.4"}),o.a.createElement("circle",{cx:"6.5",cy:"11.5",r:"3",strokeOpacity:"0.5"}),o.a.createElement("circle",{cx:"13.5",cy:"9.5",r:"6.5",fillOpacity:"0.4"}),o.a.createElement("circle",{cx:"13.5",cy:"9.5",r:"6",strokeOpacity:"0.5"}))}),[]),J=Object(g.g)(),K=Object(l.useRef)();Object(l.useEffect)((function(){"#MapExplorer"===J.location.hash&&K.current.scrollIntoView()}),[J]);var _=Object(l.useMemo)((function(){var e=[];return[0,0,0,0,0,0,0].map((function(t,a){return e.push({animationDelay:"".concat(250*a,"ms")}),null})),e}),[]),F=Object(v.c)({total:Object(m.j)(A,"total",k),config:Object(i.a)({tension:250},r.n)});return o.a.createElement("div",{className:h()("MapExplorer",{stickied:"mapexplorer"===T},{hidden:T&&"mapexplorer"!==T})},o.a.createElement("div",{className:"panel",ref:K},o.a.createElement("div",{className:"panel-left fadeInUp",style:_[0]},o.a.createElement("h2",{className:h()(k)},x(A.name),A.name===r.w&&" [".concat(x(r.q[b.stateCode]),"]")),b.stateCode&&o.a.createElement("h1",{className:h()("district",k)},o.a.createElement(v.a.div,null,F.total.interpolate((function(e){return Object(m.f)(Math.floor(e))}))),o.a.createElement("span",null,x(Object(m.a)(k))))),o.a.createElement("div",{className:h()("panel-right","is-".concat(k))},o.a.createElement("div",{className:"switch-type"},o.a.createElement("div",{className:h()("choropleth fadeInUp",{"is-highlighted":P===r.k.CHOROPLETH}),onClick:V.bind(this,r.k.CHOROPLETH),style:_[1]},Y),o.a.createElement("div",{className:h()("bubble fadeInUp",{"is-highlighted":P===r.k.BUBBLES}),onClick:V.bind(this,r.k.BUBBLES),style:_[2]},z),D.mapType===r.i.COUNTRY&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"divider"}),o.a.createElement("div",{className:h()("boundary fadeInUp",{"is-highlighted":U===r.j.DISTRICTS}),onClick:W.bind(this),style:_[3]},o.a.createElement(u.j,null))),D.mapType===r.i.STATE&&o.a.createElement("div",{className:"back fadeInUp",onClick:function(){J.push("/#MapExplorer")},style:_[4]},o.a.createElement(u.b,null))),N<769&&o.a.createElement("div",{className:"switch-statistic fadeInUp",style:_[5]},r.m.map((function(e){return o.a.createElement("div",{key:e,className:h()("statistic-option","is-".concat(e),{"is-highlighted":k===e}),onClick:w.bind(a,e)},o.a.createElement(u.d,null))}))))),o.a.createElement("div",{ref:S,className:"fadeInUp",style:_[3]},k&&o.a.createElement(l.Suspense,{fallback:o.a.createElement(d,Object.assign({className:"map-loader"},{width:null===(t=S.current)||void 0===t?void 0:t.clientWidth,statistic:k}))},o.a.createElement(C,Object.assign({mapCode:p,mapView:U,mapViz:P},{data:q},{regionHighlighted:b,setRegionHighlighted:j},{statistic:k})))))}),(function(e,t){var a,i,n,c,r,l,o,s,d,m;return!!b()(e.stateCode,t.stateCode)&&(!!b()(e.regionHighlighted,t.regionHighlighted)&&(!!b()(e.mapStatistic,t.mapStatistic)&&(!!b()(e.anchor,t.anchor)&&(!!b()(null===(a=e.data)||void 0===a||null===(i=a.TT)||void 0===i||null===(n=i.meta)||void 0===n?void 0:n.last_updated,null===(c=t.data)||void 0===c||null===(r=c.TT)||void 0===r||null===(l=r.meta)||void 0===l?void 0:l.last_updated)&&!!b()(null===(o=e.data)||void 0===o||null===(s=o.TT)||void 0===s?void 0:s.total,null===(d=t.data)||void 0===d||null===(m=d.TT)||void 0===m?void 0:m.total)))))}))},90:function(e,t,a){"use strict";var i=a(0),n=function(){return(n=Object.assign||function(e){for(var t,a=1,i=arguments.length;a<i;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var c=function(e){var t=e.animate,a=e.backgroundColor,c=e.backgroundOpacity,r=e.baseUrl,l=e.children,o=e.foregroundColor,s=e.foregroundOpacity,d=e.gradientRatio,m=e.uniqueKey,u=e.interval,p=e.rtl,h=e.speed,f=e.style,b=e.title,O=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(a[i[n]]=e[i[n]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),E=m||Math.random().toString(36).substring(6),g=E+"-diff",v=E+"-animated-diff",y=E+"-aria",C=p?{transform:"scaleX(-1)"}:null,j="0; "+u+"; 1",T=h+"s";return Object(i.createElement)("svg",n({"aria-labelledby":y,role:"img",style:n(n({},f),C)},O),b?Object(i.createElement)("title",{id:y},b):null,Object(i.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+r+"#"+g+")",style:{fill:"url("+r+"#"+v+")"}}),Object(i.createElement)("defs",{role:"presentation"},Object(i.createElement)("clipPath",{id:g},l),Object(i.createElement)("linearGradient",{id:v},Object(i.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:c},t&&Object(i.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:j,dur:T,repeatCount:"indefinite"})),Object(i.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:s},t&&Object(i.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:j,dur:T,repeatCount:"indefinite"})),Object(i.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:c},t&&Object(i.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:j,dur:T,repeatCount:"indefinite"})))))};c.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var r=function(e){return e.children?Object(i.createElement)(c,n({},e)):Object(i.createElement)(l,n({},e))},l=function(e){return Object(i.createElement)(r,n({viewBox:"0 0 476 124"},e),Object(i.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(i.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(i.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(i.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(i.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(i.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=r}}]);
//# sourceMappingURL=26.f27710df.chunk.js.map