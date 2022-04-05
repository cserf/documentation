(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{385:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||a;return r?i.a.createElement(m,o(o({ref:t},u),{},{components:r})):i.a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<a;u++)c[u]=r[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(385)),c=["components"],o={title:"1.27.2",sidebar_label:"1.27.2"},s={unversionedId:"release-notes/1.27.2",id:"release-notes/1.27.2",isDocsHomePage:!1,title:"1.27.2",description:"General",source:"@site/../docs/release-notes/1.27.2.md",sourceDirName:"release-notes",slug:"/release-notes/1.27.2",permalink:"/documentation/release-notes/1.27.2",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.27.2.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1649143291,formattedLastUpdatedAt:"4/5/2022",sidebar_label:"1.27.2",frontMatter:{title:"1.27.2",sidebar_label:"1.27.2"}},u=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Bugs",id:"bugs-2",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(i.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Recovery: Expand automatic recovery of suspicious replicas ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4565"},"#4565"))),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Database: Add NO_INDEX_FFS(CONTENTS CONTENTS_PK) hint to reaper queries ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5097"},"#5097")),Object(a.b)("li",{parentName:"ul"},"Transfers: set reason for cancelled hops in multi-hops ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5086"},"#5086"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Consistency checks: Exception when calling core.replica.list_replicas() with a lengthy list of dids ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2216"},"#2216")),Object(a.b)("li",{parentName:"ul"},"Transfers: requests stay forever in Queued state if source creation fails ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5087"},"#5087"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Option to validate files by file size in Download Client. ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5008"},"#5008"))),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Issue with stat/exists and lan/wan protocols ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4984"},"#4984")),Object(a.b)("li",{parentName:"ul"},'Clients: "rucio upload" CLI fails if user has not WRITE privileges on the file to upload ',Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5073"},"#5073"))),Object(a.b)("h2",{id:"webui"},"WebUI"),Object(a.b)("h3",{id:"bugs-2"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WebUI: Cannot update subscriptions from the Rucio UI due to failing to load scopes ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5091"},"#5091"))))}b.isMDXComponent=!0}}]);