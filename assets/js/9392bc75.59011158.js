"use strict";(self.webpackChunksketchybar_site=self.webpackChunksketchybar_site||[]).push([[878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,s=c["".concat(p,".").concat(u)]||c[u]||k[u]||l;return n?a.createElement(s,i(i({ref:t},m),{},{components:n})):a.createElement(s,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={id:"types",title:"Type Nomenclature",sidebar_position:1},i=void 0,o={unversionedId:"config/types",id:"config/types",title:"Type Nomenclature",description:"Type nomenclature",source:"@site/docs/config/Types.md",sourceDirName:"config",slug:"/config/types",permalink:"/SketchyBar/config/types",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"types",title:"Type Nomenclature",sidebar_position:1},sidebar:"docs",previous:{title:"Animations",permalink:"/SketchyBar/config/animations"},next:{title:"Reloading the configuration",permalink:"/SketchyBar/config/reloading"}},p={},d=[{value:"Type nomenclature",id:"type-nomenclature",level:2},{value:"Further <code>&lt;boolean&gt;</code> operations",id:"further-boolean-operations",level:3},{value:"Further <code>&lt;argb_hex&gt;</code> operations",id:"further-argb_hex-operations",level:3}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"type-nomenclature"},"Type nomenclature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"values")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<boolean>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"on"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"off"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"yes"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"no"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"toggle"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<argb_hex>")),(0,r.kt)("td",{parentName:"tr",align:null},"Color as an 8 digit hex with alpha, red, green and blue channels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<path>")),(0,r.kt)("td",{parentName:"tr",align:null},"An absolute file path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<string>")),(0,r.kt)("td",{parentName:"tr",align:null},"Any UTF-8 string or symbol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<float>")),(0,r.kt)("td",{parentName:"tr",align:null},"A floating point number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<integer>")),(0,r.kt)("td",{parentName:"tr",align:null},"An integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<positive_integer>")),(0,r.kt)("td",{parentName:"tr",align:null},"A positive integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<positive_integer list>")),(0,r.kt)("td",{parentName:"tr",align:null},"A comma separated list of positive integers")))),(0,r.kt)("h3",{id:"further-boolean-operations"},"Further ",(0,r.kt)("inlineCode",{parentName:"h3"},"<boolean>")," operations"),(0,r.kt)("p",null,"All ",(0,r.kt)("inlineCode",{parentName:"p"},"<boolean>")," properties can be negated with an exclamation mark, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"!on"),"."),(0,r.kt)("h3",{id:"further-argb_hex-operations"},"Further ",(0,r.kt)("inlineCode",{parentName:"h3"},"<argb_hex>")," operations"),(0,r.kt)("p",null,"All colors (i.e. all fields where the value type is ",(0,r.kt)("inlineCode",{parentName:"p"},"<argb_hex>"),") can\nadditionally be accessed to change specific channels like this:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"<color_property",">"),(0,r.kt)("th",{parentName:"tr",align:"center"},"<value",">"),(0,r.kt)("th",{parentName:"tr",align:"center"},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"alpha")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<float>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:null},"The alpha channel of the color (0 to 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"red")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<float>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:null},"The red channel of the color (0 to 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"green")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<float>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:null},"The green channel of the color (0 to 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"blue")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<float>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:null},"The blue channel of the color (0 to 1)")))),(0,r.kt)("p",null,"So for example, if I want to only change the alpha channel of the bars color I would use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --bar color.alpha=0.5\n")))}c.isMDXComponent=!0}}]);