(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{278:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(385)),o=["components"],c={title:"1.21.12",sidebar_label:"1.21.12"},s={unversionedId:"release-notes/1.21.12",id:"release-notes/1.21.12",isDocsHomePage:!1,title:"1.21.12",description:"General",source:"@site/../docs/release-notes/1.21.12.md",sourceDirName:"release-notes",slug:"/release-notes/1.21.12",permalink:"/documentation/release-notes/1.21.12",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.21.12.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1649143291,formattedLastUpdatedAt:"4/5/2022",sidebar_label:"1.21.12",frontMatter:{title:"1.21.12",sidebar_label:"1.21.12"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication & Authorisation: Update XRootD certs ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3361"},"#3361")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Add updated_after filtering for list_replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3134"},"#3134")),Object(i.b)("li",{parentName:"ul"},'Core & Internals: Allow registration of "lan" replicas ',Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3312"},"#3312")),Object(i.b)("li",{parentName:"ul"},"Deletion: Add hint on query to get the number of replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3389"},"#3389")),Object(i.b)("li",{parentName:"ul"},"Documentation: Include Globus Online starter doc ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3334"},"#3334")),Object(i.b)("li",{parentName:"ul"},"Modify RSEs regex for Belleii schema ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3313"},"#3313")),Object(i.b)("li",{parentName:"ul"},"Transfers: Possibility to specify push or pull mode for WebDAV transfers ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3378"},"#3378"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Partitioning algorithm wrong for thread_id=0 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3355"},"#3355")),Object(i.b)("li",{parentName:"ul"},"Deletion: Bug in archive content history ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3364"},"#3364")),Object(i.b)("li",{parentName:"ul"},"Transfers: Remove explicit references to config.yml in globusLibrary.py ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3074"},"#3074")),Object(i.b)("li",{parentName:"ul"},"Transfers: Problems with get_hops ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3381"},"#3381"))))}b.isMDXComponent=!0},385:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,f=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(f,c(c({ref:t},u),{},{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);