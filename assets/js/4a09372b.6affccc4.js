(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(385)),i=["components"],c={title:"1.21.4",sidebar_label:"1.21.4"},l={unversionedId:"release-notes/1.21.4",id:"release-notes/1.21.4",isDocsHomePage:!1,title:"1.21.4",description:"General",source:"@site/../docs/release-notes/1.21.4.md",sourceDirName:"release-notes",slug:"/release-notes/1.21.4",permalink:"/documentation/release-notes/1.21.4",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.21.4.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1649143291,formattedLastUpdatedAt:"4/5/2022",sidebar_label:"1.21.4",frontMatter:{title:"1.21.4",sidebar_label:"1.21.4"}},s=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],u={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"general"},"General"),Object(o.b)("h3",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Testing: Move python3 tests to required ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3187"},"#3187"))),Object(o.b)("h3",{id:"bugs"},"Bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Life time model: Atropos does not set the rule lifetime when --purge-replicas is used ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3196"},"#3196")),Object(o.b)("li",{parentName:"ul"},"Recovery: Minos doesn't handle properly ReplicaNotFound ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3188"},"#3188")),Object(o.b)("li",{parentName:"ul"},"Recovery: Temporary unavailable files in bad_pfns not removed if processed after expiration date  ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3201"},"#3201"))),Object(o.b)("h2",{id:"clients"},"Clients"),Object(o.b)("h3",{id:"bugs-1"},"Bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Clients: gfal stat does checksum calls for all checksums ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3193"},"#3193"))))}p.isMDXComponent=!0},385:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);