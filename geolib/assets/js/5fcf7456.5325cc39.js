(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return v})),n.d(t,"metadata",(function(){return g})),n.d(t,"toc",(function(){return y})),n.d(t,"default",(function(){return j}));var r=n(3),o=n(7),a=n(0),i=n.n(a),l=n(114),c=n(128),s=n(116),u=n(89),p=n.n(u);const m=37,b=39;var d=function(e){const{lazy:t,block:n,defaultValue:r,values:o,groupId:l,className:u}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(c.a)(),[v,g]=Object(a.useState)(r),y=a.Children.toArray(e.children),O=[];if(null!=l){const e=d[l];null!=e&&e!==v&&o.some((t=>t.value===e))&&g(e)}const j=e=>{const t=e.target,n=O.indexOf(t),r=y[n].props.value;g(r),null!=l&&(f(l,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:o}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:i}=window;return t>=0&&o<=i&&r<=a&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p.a.tabItemActive),setTimeout((()=>t.classList.remove(p.a.tabItemActive)),2e3))}),150))},h=e=>{var t;let n;switch(e.keyCode){case b:{const t=O.indexOf(e.target)+1;n=O[t]||O[0];break}case m:{const t=O.indexOf(e.target)-1;n=O[t]||O[O.length-1];break}}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},u)},o.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:Object(s.a)("tabs__item",p.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>O.push(e),onKeyDown:h,onFocus:j,onClick:j},t)))),t?Object(a.cloneElement)(y.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))};var f=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)},v={title:"Installation"},g={unversionedId:"overview/installation",id:"overview/installation",isDocsHomePage:!1,title:"Installation",description:"This repository deploy with Jitpack. Required Google Play Services, Here Maps REST Api and Kotlin Coroutine.",source:"@site/docs/overview/installation.mdx",slug:"/overview/installation",permalink:"/geolib/docs/overview/installation",editUrl:"https://github.com/utsmannn/geolib/blob/master/docs/docs/overview/installation.mdx",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/geolib/docs/"},next:{title:"Location",permalink:"/geolib/docs/artifacts/location-lib"}},y=[{value:"Prequisite",id:"prequisite",children:[{value:"Dependencies",id:"dependencies",children:[]},{value:"JFrog Repository",id:"jfrog-repository",children:[]},{value:"Here maps API Key",id:"here-maps-api-key",children:[]}]},{value:"Download",id:"download",children:[]}],O={toc:y};function j(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This repository deploy with Jitpack. Required Google Play Services, Here Maps REST Api and Kotlin Coroutine."),Object(l.b)("h2",{id:"prequisite"},"Prequisite"),Object(l.b)("h3",{id:"dependencies"},"Dependencies"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"// Kotlin coroutine\nimplementation 'org.jetbrains.kotlinx:kotlinx-coroutines-android:1.4.2-native-mt'\n\n// Google maps if needed\nimplementation 'com.google.android.gms:play-services-maps:17.0.0'\nimplementation 'com.google.maps.android:android-maps-utils:0.5'\nimplementation 'com.google.maps.android:maps-ktx:2.1.1'\n\n// Google play location\nimplementation 'com.google.android.gms:play-services-location:17.1.0'\n")),Object(l.b)("h3",{id:"jfrog-repository"},"JFrog Repository"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"allprojects {\n    repositories {\n\n        // add this url\n        maven { url 'https://utsmannn.jfrog.io/artifactory/android' }\n    }\n}\n")),Object(l.b)("h3",{id:"here-maps-api-key"},"Here maps API Key"),Object(l.b)("p",null,"You need HERE Api, open ",Object(l.b)("a",{parentName:"p",href:"https://developer.here.com/"},"https://developer.here.com/"),". Create new account or login and create REST api key."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"download"},"Download"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://artifactory-badge.herokuapp.com/artifactory?url=https://utsmannn.jfrog.io/artifactory/android/com/utsman/geolib/location/",alt:null})),Object(l.b)(d,{defaultValue:"location",values:[{label:"Location",value:"location"},{label:"Routes",value:"routes"},{label:"Polyline",value:"polyline"},{label:"Marker",value:"marker"}],mdxType:"Tabs"},Object(l.b)(f,{value:"location",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-groovy"},"implementation 'com.utsman.geolib:location:{last_version}'\n"))),Object(l.b)(f,{value:"routes",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-groovy"},"implementation 'com.utsman.geolib:routes:{last_version}'\n"))),Object(l.b)(f,{value:"polyline",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-groovy"},"implementation 'com.utsman.geolib:polyline:{last_version}'\n"))),Object(l.b)(f,{value:"marker",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-groovy"},"implementation 'com.utsman.geolib:marker:{last_version}'\n")))),Object(l.b)("hr",null))}j.isMDXComponent=!0},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||a;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},116:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},128:function(e,t,n){"use strict";var r=n(0),o=n(129);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},129:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)(void 0);t.a=o}}]);