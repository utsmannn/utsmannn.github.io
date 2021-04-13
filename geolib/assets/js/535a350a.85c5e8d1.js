(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=d(n),s=a,m=u["".concat(l,".").concat(s)]||u[s]||p[s]||o;return n?r.a.createElement(m,c(c({ref:t},i),{},{components:n})):r.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return i}));var a=n(3),r=(n(0),n(113));const o={title:"Routes Library"},l={unversionedId:"artifacts/routes-lib",id:"artifacts/routes-lib",isDocsHomePage:!1,title:"Routes Library",description:"You able to search route between two location.",source:"@site/docs/artifacts/routes-lib.md",slug:"/artifacts/routes-lib",permalink:"/geolib/docs/artifacts/routes-lib",editUrl:"https://github.com/utsmannn/geolib/blob/master/docs/docs/artifacts/routes-lib.md",version:"current",sidebar:"docs",previous:{title:"Location Library",permalink:"/geolib/docs/artifacts/location-lib"},next:{title:"Polyline Helper",permalink:"/geolib/docs/artifacts/polyline-help"}},c=[{value:"Download",id:"download",children:[]},{value:"Create <code>PlaceRoute</code>",id:"create-placeroute",children:[]},{value:"Search route between locations",id:"search-route-between-locations",children:[{value:"Builder",id:"builder",children:[]},{value:"Route Data",id:"route-data",children:[]}]}],b={toc:c};function i({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You able to search route between two location."),Object(r.b)("h2",{id:"download"},"Download"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://jitpack.io/v/utsmannn/geolib.svg",alt:null})),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"implementation 'com.github.utsmannn.geolib:routes:{last_version}'\n")),Object(r.b)("h2",{id:"create-placeroute"},"Create ",Object(r.b)("inlineCode",{parentName:"h2"},"PlaceRoute")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"val placesRoute = createPlacesRoute(HERE_MAPS_API)\n")),Object(r.b)("h2",{id:"search-route-between-locations"},"Search route between locations"),Object(r.b)("p",null,"For search a route, use ",Object(r.b)("inlineCode",{parentName:"p"},"searchRoute")," DSL builder."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"val route = placesRoute.searchRoute {\n    startLocation = buaran // location start\n    endLocation = rawamangun // location end\n    transportMode = TransportMode.BIKE\n}\n")),Object(r.b)("h3",{id:"builder"},"Builder"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Param"),Object(r.b)("th",{parentName:"tr",align:null},"type"),Object(r.b)("th",{parentName:"tr",align:null},"desc"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"startLocation")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Location")),Object(r.b)("td",{parentName:"tr",align:null},"start destination")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"endLocation")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Location")),Object(r.b)("td",{parentName:"tr",align:null},"end destination")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"transportMode")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"TransportMode")),Object(r.b)("td",{parentName:"tr",align:null},"transport mode, available ",Object(r.b)("inlineCode",{parentName:"td"},"CAR")," and ",Object(r.b)("inlineCode",{parentName:"td"},"BIKE"),", default is ",Object(r.b)("inlineCode",{parentName:"td"},"CAR"))))),Object(r.b)("h3",{id:"route-data"},"Route Data"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Param"),Object(r.b)("th",{parentName:"tr",align:null},"type"),Object(r.b)("th",{parentName:"tr",align:null},"desc"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"encodedPolyline")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"String")),Object(r.b)("td",{parentName:"tr",align:null},"encoded of geometry")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"geometries")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"List<LatLng>")),Object(r.b)("td",{parentName:"tr",align:null},"list LatLng of geometry")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"length")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"Float")),Object(r.b)("td",{parentName:"tr",align:null},"Length of polyline decoded")))))}i.isMDXComponent=!0}}]);