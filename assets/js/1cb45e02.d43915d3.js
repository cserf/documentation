(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var a=r(3),i=r(7),n=(r(0),r(385)),s=["components"],c={title:"1.14.0 'Professor D'",sidebar_label:"1.14.0 'Professor D'"},o={unversionedId:"release-notes/1.14.0",id:"release-notes/1.14.0",isDocsHomePage:!1,title:"1.14.0 'Professor D'",description:"General",source:"@site/../docs/release-notes/1.14.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.14.0",permalink:"/documentation/release-notes/1.14.0",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.14.0.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1649143291,formattedLastUpdatedAt:"4/5/2022",sidebar_label:"1.14.0 'Professor D'",frontMatter:{title:"1.14.0 'Professor D'",sidebar_label:"1.14.0 'Professor D'"}},u=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Features",id:"features-1",children:[]},{value:"Enhancements",id:"enhancements-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Features",id:"features-2",children:[]},{value:"Enhancements",id:"enhancements-2",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(i.a)(e,s);return Object(n.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"general"},"General"),Object(n.b)("h3",{id:"features"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Authentication: Schema changes and upgrade file missing for ssh-identity changes ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/145"},"#145")),Object(n.b)("li",{parentName:"ul"},"Core & Internals: core: Schema change for database to add Partially Available(Imcomplete) to state column ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/104"},"#104")),Object(n.b)("li",{parentName:"ul"},"Core & Internals: core: dependencies update ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/187"},"#187")),Object(n.b)("li",{parentName:"ul"},"Deletion: Setting dataset/container state to PA and send message to AMI when first file gets deleted in Dataset ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/71"},"#71")),Object(n.b)("li",{parentName:"ul"},"Transfer Time To Complete Service ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/79"},"#79")),Object(n.b)("li",{parentName:"ul"},"Release management: Add missing migrate_repo files ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/148"},"#148"))),Object(n.b)("h3",{id:"enhancements"},"Enhancements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Core & Internals: Resurrect method should remove expiration date of dataset if it is not deleted yet ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/116"},"#116")),Object(n.b)("li",{parentName:"ul"},"Core & Internals: schema.sql file should only contain table signatures, not ALTER table statements ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/204"},"#204")),Object(n.b)("li",{parentName:"ul"},'Core & Internals: Declare Datasets and parent Containers "Partially Available" when first replica gets removed from dataset ',Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/69"},"#69")),Object(n.b)("li",{parentName:"ul"},"Documentation: setup.py is needed for readthedocs ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/165"},"#165")),Object(n.b)("li",{parentName:"ul"},"Documentation: More work on documentation (reset) ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/86"},"#86")),Object(n.b)("li",{parentName:"ul"},"Release management: Provide Dockerfiles to create container ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/141"},"#141")),Object(n.b)("li",{parentName:"ul"},"Release management: Minor repository cleanups ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/205"},"#205")),Object(n.b)("li",{parentName:"ul"},'Rules: Option to "move" a rule in CLI ',Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/133"},"#133"))),Object(n.b)("h3",{id:"bugs"},"Bugs"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Core & Internals: requested_at not properly filled in request_history table ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/74"},"#74")),Object(n.b)("li",{parentName:"ul"},"Deletion: Deletion: Reaper check for suspended/waiting for approval rules when it deletes dataset ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/142"},"#142")),Object(n.b)("li",{parentName:"ul"},"Life time model: Fix heartbeat in Atropos ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/122"},"#122")),Object(n.b)("li",{parentName:"ul"},"Life time model: Fix lifetime extension logic ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/196"},"#196")),Object(n.b)("li",{parentName:"ul"},"Fix bug in get_space in check_storage_space ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/168"},"#168")),Object(n.b)("li",{parentName:"ul"},"RSE Manager: rsemanager: _get_possible_protocols call raises exception while it should not ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/137"},"#137")),Object(n.b)("li",{parentName:"ul"},"RSE Manager: rsemanager: Wrong base path extraction ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/171"},"#171")),Object(n.b)("li",{parentName:"ul"},"RSE Manager: parse_pfn hotfix ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/298"},"#298")),Object(n.b)("li",{parentName:"ul"},"Release management: Fix current flake8 errors on master and next ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/155"},"#155")),Object(n.b)("li",{parentName:"ul"},"Release management: Fix flake8 command used in travis builds ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/158"},"#158")),Object(n.b)("li",{parentName:"ul"},"Rules: Injector needs to catch InsufficientAccountLimit ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/76"},"#76")),Object(n.b)("li",{parentName:"ul"},"Testing: configure_git.sh still points to gitlab ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/123"},"#123")),Object(n.b)("li",{parentName:"ul"},"Testing: Change prepare-commit-msg and remove RUCIO- JIRA template ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/174"},"#174"))),Object(n.b)("h2",{id:"clients"},"Clients"),Object(n.b)("h3",{id:"features-1"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Clients: clients: update module dependencies ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/185"},"#185"))),Object(n.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Clients: clients: Add method to get md5 checksum from files ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/136"},"#136"))),Object(n.b)("h2",{id:"webui"},"WebUI"),Object(n.b)("h3",{id:"features-2"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"WebUI: File download from WebUI ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/23"},"#23"))),Object(n.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Accounting & Dumps: Add new updated_at fields to WebUI dumps page ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/192"},"#192"))))}b.isMDXComponent=!0},385:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var a=r(0),i=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=l(r),p=a,h=b["".concat(s,".").concat(p)]||b[p]||m[p]||n;return r?i.a.createElement(h,c(c({ref:t},u),{},{components:r})):i.a.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var u=2;u<n;u++)s[u]=r[u];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);