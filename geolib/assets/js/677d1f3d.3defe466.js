(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.a.createElement(b,i(i({ref:t},u),{},{components:n})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(107)),c={title:"Create a Document"},i={unversionedId:"create-a-document",id:"create-a-document",isDocsHomePage:!1,title:"Create a Document",description:"Documents are pages with a sidebar, a previous/next navigation and many other useful features.",source:"@site/docs/create-a-document.md",slug:"/create-a-document",permalink:"/geolib/docs/create-a-document",editUrl:"https://github.com/utsmannn/geolib/docs/create-a-document.md",version:"current",sidebar:"docs",previous:{title:"Create a Page",permalink:"/geolib/docs/create-a-page"},next:{title:"Installation",permalink:"/geolib/docs/installation"}},l=[{value:"Create a Document",id:"create-a-document",children:[]},{value:"Add your document to the sidebar",id:"add-your-document-to-the-sidebar",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Documents are pages with a ",Object(o.b)("strong",{parentName:"p"},"sidebar"),", a ",Object(o.b)("strong",{parentName:"p"},"previous/next navigation")," and many other useful features."),Object(o.b)("h2",{id:"create-a-document"},"Create a Document"),Object(o.b)("p",null,"Create a markdown file at ",Object(o.b)("inlineCode",{parentName:"p"},"docs/my-doc.md"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-mdx",metastring:'title="docs/hello.md"',title:'"docs/hello.md"'},"---\ntitle: Hello, World!\n---\n\n## Hello, World!\n\nThis is your first document in **Docusaurus**, Congratulations!\n")),Object(o.b)("p",null,"A new document is now available at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/docs/hello"),"."),Object(o.b)("h2",{id:"add-your-document-to-the-sidebar"},"Add your document to the sidebar"),Object(o.b)("p",null,"Add ",Object(o.b)("inlineCode",{parentName:"p"},"hello")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"sidebars.js")," file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Docusaurus Tutorial',\n-     items: ['getting-started', 'create-a-doc', ...],\n+     items: ['getting-started', 'create-a-doc', 'hello', ...],\n    },\n  ],\n};\n")))}s.isMDXComponent=!0}}]);