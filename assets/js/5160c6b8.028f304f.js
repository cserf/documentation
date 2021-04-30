(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(342)),o={title:"1.21.8",sidebar_label:"1.21.8"},c={unversionedId:"release-notes/1.21.8",id:"release-notes/1.21.8",isDocsHomePage:!1,title:"1.21.8",description:"General",source:"@site/../docs/release-notes/1.21.8.md",sourceDirName:"release-notes",slug:"/release-notes/1.21.8",permalink:"/documentation/release-notes/1.21.8",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1619771730,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"1.21.8",frontMatter:{title:"1.21.8",sidebar_label:"1.21.8"}},l=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Deletion: Reaper should stop operating if there is a judge-evaluator backlog ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1578"},"#1578")),Object(i.b)("li",{parentName:"ul"},"Functional tests: Possibility to specify different dataset convention in Automatix ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/700"},"#700"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Upload with gsiftp fails ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3286"},"#3286")),Object(i.b)("li",{parentName:"ul"},"Recovery: Declaring temporary unavailable replicas also declares the files lost ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3292"},"#3292"))))}u.isMDXComponent=!0},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(o,".").concat(f)]||p[f]||b[f]||i;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);