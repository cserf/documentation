(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{318:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(377)),c=["components"],o={title:"1.27.7",sidebar_label:"1.27.7"},s={unversionedId:"release-notes/1.27.7",id:"release-notes/1.27.7",isDocsHomePage:!1,title:"1.27.7",description:"General",source:"@site/../docs/release-notes/1.27.7.md",sourceDirName:"release-notes",slug:"/release-notes/1.27.7",permalink:"/documentation/release-notes/1.27.7",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.27.7.md",version:"current",lastUpdatedBy:"rcarpa",lastUpdatedAt:1646398073,formattedLastUpdatedAt:"3/4/2022",sidebar_label:"1.27.7",frontMatter:{title:"1.27.7",sidebar_label:"1.27.7"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Remove hard coded value for GCS storage elements ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5222"},"#5222")),Object(i.b)("li",{parentName:"ul"},"Database: Add query hints to three queries ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5271"},"#5271")),Object(i.b)("li",{parentName:"ul"},"REST & API: Add a Rest Api Documentation linter ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5209"},"#5209")),Object(i.b)("li",{parentName:"ul"},"Recovery: Minos/Bad replicas database inefficiency ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5266"},"#5266")),Object(i.b)("li",{parentName:"ul"},"Replicas: Provide the possibility to specify PFNs or DIDs in declare_bad_file_replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5033"},"#5033")),Object(i.b)("li",{parentName:"ul"},"Testing: disable test_conveyor in integration tests ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5243"},"#5243")),Object(i.b)("li",{parentName:"ul"},"Testing: Print the integration test server logs in the actions ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5253"},"#5253")),Object(i.b)("li",{parentName:"ul"},"Testing: Use LTS base containers for integration tests in release branches. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5256"},"#5256")),Object(i.b)("li",{parentName:"ul"},"Traces: bulk updates for trace schemas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5265"},"#5265"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Multi VO: Objectstore uploads are broken in multi VO Rucio ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5235"},"#5235")),Object(i.b)("li",{parentName:"ul"},"Release management: Flask fails after itsdangerous module\u2019s update ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5258"},"#5258"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: #4556 introduced a syntax error ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5278"},"#5278"))))}b.isMDXComponent=!0},377:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(d,o(o({ref:t},u),{},{components:r})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);