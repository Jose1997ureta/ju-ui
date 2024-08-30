import{r as ie}from"./index-DqterGEq.js";var D={exports:{}},T={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae=ie,ce=Symbol.for("react.element"),de=Symbol.for("react.fragment"),pe=Object.prototype.hasOwnProperty,ue=ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,be={key:!0,ref:!0,__self:!0,__source:!0};function ee(e,r,o){var t,l={},n=null,i=null;o!==void 0&&(n=""+o),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(i=r.ref);for(t in r)pe.call(r,t)&&!be.hasOwnProperty(t)&&(l[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)l[t]===void 0&&(l[t]=r[t]);return{$$typeof:ce,type:e,key:n,ref:i,props:l,_owner:ue.current}}T.Fragment=de;T.jsx=ee;T.jsxs=ee;D.exports=T;var Je=D.exports;const B="-",ge=e=>{const r=me(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;return{getClassGroupId:i=>{const s=i.split(B);return s[0]===""&&s.length!==1&&s.shift(),re(s,r)||fe(i)},getConflictingClassGroupIds:(i,s)=>{const u=o[i]||[];return s&&t[i]?[...u,...t[i]]:u}}},re=(e,r)=>{var i;if(e.length===0)return r.classGroupId;const o=e[0],t=r.nextPart.get(o),l=t?re(e.slice(1),t):void 0;if(l)return l;if(r.validators.length===0)return;const n=e.join(B);return(i=r.validators.find(({validator:s})=>s(n)))==null?void 0:i.classGroupId},K=/^\[(.+)\]$/,fe=e=>{if(K.test(e)){const r=K.exec(e)[1],o=r==null?void 0:r.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}},me=e=>{const{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]};return ye(Object.entries(e.classGroups),o).forEach(([n,i])=>{U(i,t,n,r)}),t},U=(e,r,o,t)=>{e.forEach(l=>{if(typeof l=="string"){const n=l===""?r:Q(r,l);n.classGroupId=o;return}if(typeof l=="function"){if(he(l)){U(l(t),r,o,t);return}r.validators.push({validator:l,classGroupId:o});return}Object.entries(l).forEach(([n,i])=>{U(i,Q(r,n),o,t)})})},Q=(e,r)=>{let o=e;return r.split(B).forEach(t=>{o.nextPart.has(t)||o.nextPart.set(t,{nextPart:new Map,validators:[]}),o=o.nextPart.get(t)}),o},he=e=>e.isThemeGetter,ye=(e,r)=>r?e.map(([o,t])=>{const l=t.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,s])=>[r+i,s])):n);return[o,l]}):e,xe=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,o=new Map,t=new Map;const l=(n,i)=>{o.set(n,i),r++,r>e&&(r=0,t=o,o=new Map)};return{get(n){let i=o.get(n);if(i!==void 0)return i;if((i=t.get(n))!==void 0)return l(n,i),i},set(n,i){o.has(n)?o.set(n,i):l(n,i)}}},te="!",we=e=>{const{separator:r,experimentalParseClassName:o}=e,t=r.length===1,l=r[0],n=r.length,i=s=>{const u=[];let g=0,m=0,y;for(let p=0;p<s.length;p++){let f=s[p];if(g===0){if(f===l&&(t||s.slice(p,p+n)===r)){u.push(s.slice(m,p)),m=p+n;continue}if(f==="/"){y=p;continue}}f==="["?g++:f==="]"&&g--}const x=u.length===0?s:s.substring(m),v=x.startsWith(te),w=v?x.substring(1):x,b=y&&y>m?y-m:void 0;return{modifiers:u,hasImportantModifier:v,baseClassName:w,maybePostfixModifierPosition:b}};return o?s=>o({className:s,parseClassName:i}):i},ve=e=>{if(e.length<=1)return e;const r=[];let o=[];return e.forEach(t=>{t[0]==="["?(r.push(...o.sort(),t),o=[]):o.push(t)}),r.push(...o.sort()),r},ke=e=>({cache:xe(e.cacheSize),parseClassName:we(e),...ge(e)}),Ce=/\s+/,ze=(e,r)=>{const{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:l}=r,n=[],i=e.trim().split(Ce);let s="";for(let u=i.length-1;u>=0;u-=1){const g=i[u],{modifiers:m,hasImportantModifier:y,baseClassName:x,maybePostfixModifierPosition:v}=o(g);let w=!!v,b=t(w?x.substring(0,v):x);if(!b){if(!w){s=g+(s.length>0?" "+s:s);continue}if(b=t(x),!b){s=g+(s.length>0?" "+s:s);continue}w=!1}const p=ve(m).join(":"),f=y?p+te:p,h=f+b;if(n.includes(h))continue;n.push(h);const G=l(b,w);for(let A=0;A<G.length;++A){const I=G[A];n.push(f+I)}s=g+(s.length>0?" "+s:s)}return s};function Se(){let e=0,r,o,t="";for(;e<arguments.length;)(r=arguments[e++])&&(o=oe(r))&&(t&&(t+=" "),t+=o);return t}const oe=e=>{if(typeof e=="string")return e;let r,o="";for(let t=0;t<e.length;t++)e[t]&&(r=oe(e[t]))&&(o&&(o+=" "),o+=r);return o};function Ae(e,...r){let o,t,l,n=i;function i(u){const g=r.reduce((m,y)=>y(m),e());return o=ke(g),t=o.cache.get,l=o.cache.set,n=s,s(u)}function s(u){const g=t(u);if(g)return g;const m=ze(u,o);return l(u,m),m}return function(){return n(Se.apply(null,arguments))}}const c=e=>{const r=o=>o[e]||[];return r.isThemeGetter=!0,r},ne=/^\[(?:([a-z-]+):)?(.+)\]$/i,Re=/^\d+\/\d+$/,Me=new Set(["px","full","screen"]),Ge=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Pe=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,_e=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ee=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ie=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,C=e=>R(e)||Me.has(e)||Re.test(e),z=e=>M(e,"length",Ve),R=e=>!!e&&!Number.isNaN(Number(e)),V=e=>M(e,"number",R),_=e=>!!e&&Number.isInteger(Number(e)),je=e=>e.endsWith("%")&&R(e.slice(0,-1)),a=e=>ne.test(e),S=e=>Ge.test(e),Ne=new Set(["length","size","percentage"]),Te=e=>M(e,Ne,se),Le=e=>M(e,"position",se),Oe=new Set(["image","url"]),We=e=>M(e,Oe,Be),$e=e=>M(e,"",Ue),E=()=>!0,M=(e,r,o)=>{const t=ne.exec(e);return t?t[1]?typeof r=="string"?t[1]===r:r.has(t[1]):o(t[2]):!1},Ve=e=>Pe.test(e)&&!_e.test(e),se=()=>!1,Ue=e=>Ee.test(e),Be=e=>Ie.test(e),Fe=()=>{const e=c("colors"),r=c("spacing"),o=c("blur"),t=c("brightness"),l=c("borderColor"),n=c("borderRadius"),i=c("borderSpacing"),s=c("borderWidth"),u=c("contrast"),g=c("grayscale"),m=c("hueRotate"),y=c("invert"),x=c("gap"),v=c("gradientColorStops"),w=c("gradientColorStopPositions"),b=c("inset"),p=c("margin"),f=c("opacity"),h=c("padding"),G=c("saturate"),A=c("scale"),I=c("sepia"),F=c("skew"),q=c("space"),J=c("translate"),L=()=>["auto","contain","none"],O=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto",a,r],d=()=>[a,r],X=()=>["",C,z],j=()=>["auto",R,a],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],N=()=>["solid","dashed","dotted","double","none"],Z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],$=()=>["start","end","center","between","around","evenly","stretch"],P=()=>["","0",a],H=()=>["auto","avoid","all","avoid-page","page","left","right","column"],k=()=>[R,a];return{cacheSize:500,separator:":",theme:{colors:[E],spacing:[C,z],blur:["none","",S,a],brightness:k(),borderColor:[e],borderRadius:["none","","full",S,a],borderSpacing:d(),borderWidth:X(),contrast:k(),grayscale:P(),hueRotate:k(),invert:P(),gap:d(),gradientColorStops:[e],gradientColorStopPositions:[je,z],inset:W(),margin:W(),opacity:k(),padding:d(),saturate:k(),scale:k(),sepia:P(),skew:k(),space:d(),translate:d()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[S]}],"break-after":[{"break-after":H()}],"break-before":[{"break-before":H()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),a]}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",_,a]}],basis:[{basis:W()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:P()}],shrink:[{shrink:P()}],order:[{order:["first","last","none",_,a]}],"grid-cols":[{"grid-cols":[E]}],"col-start-end":[{col:["auto",{span:["full",_,a]},a]}],"col-start":[{"col-start":j()}],"col-end":[{"col-end":j()}],"grid-rows":[{"grid-rows":[E]}],"row-start-end":[{row:["auto",{span:[_,a]},a]}],"row-start":[{"row-start":j()}],"row-end":[{"row-end":j()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[x]}],"gap-x":[{"gap-x":[x]}],"gap-y":[{"gap-y":[x]}],"justify-content":[{justify:["normal",...$()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...$(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...$(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[q]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[q]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",a,r]}],"min-w":[{"min-w":[a,r,"min","max","fit"]}],"max-w":[{"max-w":[a,r,"none","full","min","max","fit","prose",{screen:[S]},S]}],h:[{h:[a,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[a,r,"auto","min","max","fit"]}],"font-size":[{text:["base",S,z]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",V]}],"font-family":[{font:[E]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",R,V]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",C,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...N(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",C,z]}],"underline-offset":[{"underline-offset":["auto",C,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:d()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),Le]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Te]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},We]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...N(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:N()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:["",...N()]}],"outline-offset":[{"outline-offset":[C,a]}],"outline-w":[{outline:[C,z]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[C,z]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",S,$e]}],"shadow-color":[{shadow:[E]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...Z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Z()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",S,a]}],grayscale:[{grayscale:[g]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[y]}],saturate:[{saturate:[G]}],sepia:[{sepia:[I]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[g]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[y]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[G]}],"backdrop-sepia":[{"backdrop-sepia":[I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:k()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:k()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[A]}],"scale-x":[{"scale-x":[A]}],"scale-y":[{"scale-y":[A]}],rotate:[{rotate:[_,a]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[F]}],"skew-y":[{"skew-y":[F]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":d()}],"scroll-mx":[{"scroll-mx":d()}],"scroll-my":[{"scroll-my":d()}],"scroll-ms":[{"scroll-ms":d()}],"scroll-me":[{"scroll-me":d()}],"scroll-mt":[{"scroll-mt":d()}],"scroll-mr":[{"scroll-mr":d()}],"scroll-mb":[{"scroll-mb":d()}],"scroll-ml":[{"scroll-ml":d()}],"scroll-p":[{"scroll-p":d()}],"scroll-px":[{"scroll-px":d()}],"scroll-py":[{"scroll-py":d()}],"scroll-ps":[{"scroll-ps":d()}],"scroll-pe":[{"scroll-pe":d()}],"scroll-pt":[{"scroll-pt":d()}],"scroll-pr":[{"scroll-pr":d()}],"scroll-pb":[{"scroll-pb":d()}],"scroll-pl":[{"scroll-pl":d()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[C,z,V]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Xe=Ae(Fe);function le(e){var r,o,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(r=0;r<l;r++)e[r]&&(o=le(e[r]))&&(t&&(t+=" "),t+=o)}else for(o in e)e[o]&&(t&&(t+=" "),t+=o);return t}function Ye(){for(var e,r,o=0,t="",l=arguments.length;o<l;o++)(e=arguments[o])&&(r=le(e))&&(t&&(t+=" "),t+=r);return t}export{Ye as c,Je as j,Xe as t};
