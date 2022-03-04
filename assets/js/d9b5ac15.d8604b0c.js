(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{326:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(377)),c=["components"],o={title:"1.17.1",sidebar_label:"1.17.1"},s={unversionedId:"release-notes/1.17.1",id:"release-notes/1.17.1",isDocsHomePage:!1,title:"1.17.1",description:"General",source:"@site/../docs/release-notes/1.17.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.17.1",permalink:"/documentation/release-notes/1.17.1",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.17.1.md",version:"current",lastUpdatedBy:"rcarpa",lastUpdatedAt:1646398073,formattedLastUpdatedAt:"3/4/2022",sidebar_label:"1.17.1",frontMatter:{title:"1.17.1",sidebar_label:"1.17.1"}},u=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Transparent list-replicas support of zip contents ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1138"},"#1138"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Consistency checks: Auditor is looking for site dumps in invalid locations ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1268"},"#1268")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: closeness_sorter module seems to be dead code ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/320"},"#320")),Object(i.b)("li",{parentName:"ul"},"Infrastructure: add kubernetes config to repo ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1226"},"#1226")),Object(i.b)("li",{parentName:"ul"},"Infrastructure: docker builds fail with pip install error (pycurl/m2crypto) ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1269"},"#1269")),Object(i.b)("li",{parentName:"ul"},"Rebalancing: Uniformize the rebalancing scripts for Nuclei and T2 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1283"},"#1283")),Object(i.b)("li",{parentName:"ul"},"Release management: Relax the dependency versions the pip-requires ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1215"},"#1215"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: REST/Client : set-metadata should raise DataIdentifierNotFound when the DID doesn't exist ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1272"},"#1272")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Resurrect method doesn't remove expired_at for deleted_dids ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1276"},"#1276")),Object(i.b)("li",{parentName:"ul"},"Life time model: End of life badly set for non-pledged endpoints ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1240"},"#1240"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: rucio download --archive_did should be renamed to --archive-did ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1282"},"#1282"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: findall with 2 arguments failing on SL6 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1288"},"#1288"))))}b.isMDXComponent=!0},377:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return r?a.a.createElement(m,o(o({ref:t},u),{},{components:r})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);