(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,b=s["".concat(c,".").concat(m)]||s[m]||p[m]||o;return n?a.a.createElement(b,i(i({ref:t},l),{},{components:n})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=(n(0),n(113));const o={title:"Create a Document"},c={unversionedId:"create-a-document",id:"create-a-document",isDocsHomePage:!1,title:"Create a Document",description:"Documents are pages with a sidebar, a previous/next navigation and many other useful features.",source:"@site/docs/create-a-document.md",slug:"/create-a-document",permalink:"/geolib/docs/create-a-document",editUrl:"https://github.com/utsmannn/geolib/blob/master/docs/docs/create-a-document.md",version:"current"},i=[{value:"Create a Document",id:"create-a-document",children:[]},{value:"Add your document to the sidebar",id:"add-your-document-to-the-sidebar",children:[]}],u={toc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Documents are pages with a ",Object(a.b)("strong",{parentName:"p"},"sidebar"),", a ",Object(a.b)("strong",{parentName:"p"},"previous/next navigation")," and many other useful features."),Object(a.b)("h2",{id:"create-a-document"},"Create a Document"),Object(a.b)("p",null,"Create a markdown file at ",Object(a.b)("inlineCode",{parentName:"p"},"docs/my-doc.md"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-mdx",metastring:'title="docs/hello.md"',title:'"docs/hello.md"'},"---\ntitle: Hello, World!\n---\n\n## Hello, World!\n\nThis is your first document in **Docusaurus**, Congratulations!\n")),Object(a.b)("p",null,"A new document is now available at ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:3000/docs/hello"),"."),Object(a.b)("h2",{id:"add-your-document-to-the-sidebar"},"Add your document to the sidebar"),Object(a.b)("p",null,"Add ",Object(a.b)("inlineCode",{parentName:"p"},"hello")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"sidebars.js")," file:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Docusaurus Tutorial',\n-     items: ['getting-started', 'create-a-doc', ...],\n+     items: ['getting-started', 'create-a-doc', 'hello', ...],\n    },\n  ],\n};\n")))}l.isMDXComponent=!0}}]);