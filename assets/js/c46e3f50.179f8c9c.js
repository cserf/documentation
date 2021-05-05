(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{276:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(344)),c={title:"1.23.8",sidebar_label:"1.23.8"},o={unversionedId:"release-notes/1.23.8",id:"release-notes/1.23.8",isDocsHomePage:!1,title:"1.23.8",description:"General",source:"@site/../docs/release-notes/1.23.8.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.8",permalink:"/documentation/release-notes/1.23.8",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1620226110,formattedLastUpdatedAt:"5/5/2021",sidebar_label:"1.23.8",frontMatter:{title:"1.23.8",sidebar_label:"1.23.8"}},s=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],u={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Rules: Add query hint to judge-evaluator query ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4040"},"#4040")),Object(i.b)("li",{parentName:"ul"},"Subscriptions: Possibility to overide the subscription comment ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4057"},"#4057")),Object(i.b)("li",{parentName:"ul"},"Testing: add tests with flask rest backend on travis ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1026"},"#1026"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: RSE's add_protocol is leaking database exceptions on the API ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3921"},"#3921")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: adding a replica with non-existent scope should raise ScopeNotFound ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3980"},"#3980")),Object(i.b)("li",{parentName:"ul"},"Recovery: Internal server error when declaring bad replicas on non-existent RSEs ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3409"},"#3409")),Object(i.b)("li",{parentName:"ul"},"Replicas: Abacus blocked by large deletion query ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4062"},"#4062"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: rucio get --no-subdir does not check if file already exists ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3737"},"#3737")),Object(i.b)("li",{parentName:"ul"},"Clients: Scope check in upload client crashes in certain conditions ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4039"},"#4039"))))}l.isMDXComponent=!0},344:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return r?a.a.createElement(m,o(o({ref:t},u),{},{components:r})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);