/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";class t{constructor(t=null,n={}){if(this.apiKey=t,this.options=n,"undefined"==typeof window)throw new Error("google-maps is supported only in browser environment")}load(){return void 0!==this.api?Promise.resolve(this.api):void 0!==this.loader?this.loader:(window[t.CALLBACK_NAME]=()=>{if(this.api=window.google,void 0===this.resolve)throw new Error("Should not happen");this.resolve(this.api)},window.gm_authFailure=()=>{if(void 0===this.reject)throw new Error("Should not happen");this.reject(new Error("google-maps: authentication error"))},this.loader=new Promise(((t,n)=>{this.resolve=t,this.reject=n;const e=document.createElement("script");e.src=this.createUrl(),e.async=!0,e.onerror=t=>n(t),document.head.appendChild(e)})))}createUrl(){const n=[`callback=${t.CALLBACK_NAME}`];this.apiKey&&n.push(`key=${this.apiKey}`);for(let t in this.options)if(this.options.hasOwnProperty(t)){let e=this.options[t];"version"===t&&(t="v"),"libraries"===t&&(e=e.join(",")),n.push(`${t}=${e}`)}return`https://maps.googleapis.com/maps/api/js?${n.join("&")}`}}t.CALLBACK_NAME="_dk_google_maps_loader_cb";const n="splide";function e(t){t.length=0}function o(t){return!c(t)&&"object"==typeof t}function i(t){return Array.isArray(t)}function r(t){return"string"==typeof t}function s(t){return void 0===t}function c(t){return null===t}function u(t){return t instanceof HTMLElement}function l(t){return i(t)?t:[t]}function a(t,n){l(t).forEach(n)}function d(t,n){return t.indexOf(n)>-1}function f(t,n){return t.push(...l(n)),t}const p=Array.prototype;function h(t,n,e){return p.slice.call(t,n,e)}function g(t,n,e){t&&a(n,(n=>{n&&t.classList[e?"add":"remove"](n)}))}function m(t,n){g(t,r(n)?n.split(" "):n,!0)}function y(t,n){a(n,t.appendChild.bind(t))}function v(t,n){a(t,(t=>{const e=n.parentNode;e&&e.insertBefore(t,n)}))}function _(t,n){return u(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function w(t,n){return t?h(t.children).filter((t=>_(t,n))):[]}function b(t,n){return n?w(t,n)[0]:t.firstElementChild}function E(t,n,e){if(t){let o=Object.keys(t);o=e?o.reverse():o;for(let e=0;e<o.length;e++){const i=o[e];if("__proto__"!==i&&!1===n(t[i],i))break}}return t}function S(t){return h(arguments,1).forEach((n=>{E(n,((e,o)=>{t[o]=n[o]}))})),t}function x(t,n){return E(n,((n,e)=>{i(n)?t[e]=n.slice():o(n)?t[e]=x(o(t[e])?t[e]:{},n):t[e]=n})),t}function L(t,n){t&&a(n,(n=>{t.removeAttribute(n)}))}function k(t,n,e){o(n)?E(n,((n,e)=>{k(t,e,n)})):c(e)?L(t,n):t.setAttribute(n,String(e))}function $(t,n,e){const o=document.createElement(t);return n&&(r(n)?m(o,n):k(o,n)),e&&y(e,o),o}function A(t,n,e){if(s(e))return getComputedStyle(t)[n];if(!c(e)){const{style:o}=t;e=`${e}`,o[n]!==e&&(o[n]=e)}}function C(t,n){A(t,"display",n)}function P(t,n){return t.getAttribute(n)}function z(t,n){return t&&t.classList.contains(n)}function I(t){return t.getBoundingClientRect()}function q(t){a(t,(t=>{t&&t.parentNode&&t.parentNode.removeChild(t)}))}function M(t){return b((new DOMParser).parseFromString(t,"text/html").body)}function D(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function N(t,n){return t&&t.querySelector(n)}function O(t,n){return h(t.querySelectorAll(n))}function T(t,n){g(t,n,!1)}function j(t){return r(t)?t:t?`${t}px`:""}function F(t,n=""){if(!t)throw new Error(`[splide] ${n}`)}function R(t){setTimeout(t)}const B=()=>{};function W(t){return requestAnimationFrame(t)}const{min:X,max:K,floor:H,ceil:Y,abs:G}=Math;function U(t,n,e,o){const i=X(n,e),r=K(n,e);return o?i<t&&t<r:i<=t&&t<=r}function J(t,n,e){const o=X(n,e),i=K(n,e);return X(K(o,t),i)}function V(t){return+(t>0)-+(t<0)}function Q(t,n){return a(n,(n=>{t=t.replace("%s",`${n}`)})),t}function Z(t){return t<10?`0${t}`:`${t}`}const tt={};const nt="mounted",et="ready",ot="move",it="moved",rt="shifted",st="click",ct="slide:keydown",ut="refresh",lt="updated",at="resize",dt="resized",ft="repositioned",pt="scroll",ht="scrolled",gt="destroy",mt="navigation:mounted",yt="lazyload:loaded";function vt(t){const{event:n}=t,e={};let o=[];function i(t,n,e){r(t,n,((t,n)=>{o=o.filter((o=>!!(o[0]!==t||o[1]!==n||e&&o[2]!==e)||(t.removeEventListener(n,o[2],o[3]),!1)))}))}function r(t,n,e){a(t,(t=>{t&&n.split(" ").forEach(e.bind(null,t))}))}function s(){o=o.filter((t=>i(t[0],t[1]))),n.offBy(e)}return n.on(gt,s,e),{on:function(t,o,i){n.on(t,o,e,i)},off:function(t){n.off(t,e)},emit:n.emit,bind:function(t,n,e,i){r(t,n,((t,n)=>{o.push([t,n,e,i]),t.addEventListener(n,e,i)}))},unbind:i,destroy:s}}function _t(t,n,e,o){const{now:i}=Date;let r,s,c=0,u=!0,l=0;function a(){if(!u){const s=i()-r;if(s>=t?(c=1,r=i()):c=s/t,e&&e(c),1===c&&(n(),o&&++l>=o))return d();W(a)}}function d(){u=!0}function f(){cancelAnimationFrame(s),c=0,s=0,u=!0}return{start:function(n){!n&&f(),r=i()-(n?c*t:0),u=!1,W(a)},rewind:function(){r=i(),c=0,e&&e(c)},pause:d,cancel:f,set:function(n){t=n},isPaused:function(){return u}}}function wt(t,n){let e;return function(){e||(e=_t(n||0,(()=>{t.apply(this,arguments),e=null}),null,1),e.start())}}const bt="ttb",Et={marginRight:["marginBottom","marginLeft"],autoWidth:["autoHeight"],fixedWidth:["fixedHeight"],paddingLeft:["paddingTop","paddingRight"],paddingRight:["paddingBottom","paddingLeft"],width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:["ArrowUp","ArrowRight"],ArrowRight:["ArrowDown","ArrowLeft"]};const St="splide__slide--clone",xt="is-active",Lt="is-prev",kt="is-next",$t="is-visible",At="is-loading",Ct=[xt,$t,Lt,kt,At],Pt={slide:"splide__slide",clone:St,arrows:"splide__arrows",arrow:"splide__arrow",prev:"splide__arrow--prev",next:"splide__arrow--next",pagination:"splide__pagination",page:"splide__pagination__page",spinner:"splide__spinner"},zt="role",It="aria-controls",qt="aria-current",Mt="aria-label",Dt="aria-hidden",Nt="tabindex",Ot="aria-orientation",Tt=[zt,It,qt,Mt,Dt,Ot,Nt,"disabled"],jt="slide",Ft="loop",Rt="fade";const Bt={passive:!1,capture:!0},Wt="touchmove mousemove",Xt="touchend touchcancel mouseup",Kt=["Left","Right","Up","Down"],Ht="keydown",Yt="data-splide-lazy",Gt="data-splide-lazy-srcset",Ut=[" ","Enter","Spacebar"];var Jt=Object.freeze({__proto__:null,Options:function(t,n,e){const o=wt(u);let i,r,s;function c(t){t&&removeEventListener("resize",o)}function u(){const n=(o=t=>t[1].matches,h(r).filter(o)[0]||[]);var o;n[0]!==s&&function(n){const o=e.breakpoints[n]||i;o.destroy?(t.options=i,t.destroy("completely"===o.destroy)):(t.state.is(5)&&(c(!0),t.mount()),t.options=o)}(s=n[0])}return{setup:function(){try{x(e,JSON.parse(P(t.root,"data-splide")))}catch(t){F(!1,t.message)}i=x({},e);const{breakpoints:n}=e;if(n){const t="min"===e.mediaQuery;r=Object.keys(n).sort(((n,e)=>t?+e-+n:+n-+e)).map((n=>[n,matchMedia(`(${t?"min":"max"}-width:${n}px)`)])),u()}},mount:function(){r&&addEventListener("resize",o)},destroy:c}},Direction:function(t,n,e){return{resolve:function(t,n){const{direction:o}=e;return Et[t]["rtl"!==o||n?o===bt?0:-1:1]||t},orient:function(t){return t*("rtl"===e.direction?1:-1)}}},Elements:function(t,o,i){const{on:r}=vt(t),{root:s}=t,c={},u=[];let l,a,d,p;function h(){!function(){a=b(s,".splide__slider"),d=N(s,".splide__track"),p=b(d,".splide__list"),F(d&&p,"A track/list element is missing."),f(u,w(p,`.splide__slide:not(.${St})`));const t=_(".splide__autoplay"),n=_(".splide__arrows");S(c,{root:s,slider:a,track:d,list:p,slides:u,arrows:n,autoplay:t,prev:N(n,".splide__arrow--prev"),next:N(n,".splide__arrow--next"),bar:N(_(".splide__progress"),".splide__progress__bar"),play:N(t,".splide__play"),pause:N(t,".splide__pause")})}(),function(){const t=s.id||`${e=n}${Z(tt[e]=(tt[e]||0)+1)}`;var e;s.id=t,d.id=d.id||`${t}-track`,p.id=p.id||`${t}-list`}(),m(s,l=E())}function g(){[s,d,p].forEach((t=>{L(t,"style")})),e(u),T(s,l)}function y(){g(),h()}function v(){T(s,l),m(s,l=E())}function _(t){return b(s,t)||b(a,t)}function E(){return[`splide--${i.type}`,`splide--${i.direction}`,i.drag&&"splide--draggable",i.isNavigation&&"splide--nav",xt]}return S(c,{setup:h,mount:function(){r(ut,y,8),r(lt,v)},destroy:g})},Slides:function(t,n,o){const{on:i,emit:s,bind:c}=vt(t),{slides:f,list:p}=n.Elements,h=[];function w(){f.forEach(((t,n)=>{x(t,n,-1)}))}function E(){C((t=>{t.destroy()})),e(h)}function S(){E(),w()}function x(n,e,o){const i=function(t,n,e,o){const{on:i,emit:r,bind:s,destroy:c}=vt(t),{Components:u,root:l,options:a}=t,{isNavigation:d,updateOnMove:f}=a,{resolve:p}=u.Direction,h=P(o,"style"),m=e>-1,y=b(o,".splide__slide__container"),v=a.focusableNodes&&O(o,a.focusableNodes);let _;function w(){const i=m?e:n,r=Q(a.i18n.slideX,i+1),s=t.splides.map((t=>t.splide.root.id)).join(" ");k(o,Mt,r),k(o,It,s),k(o,zt,"menuitem"),x($())}function E(){_||S()}function S(){if(!_){const{index:e}=t;x($()),function(t){const n=!t&&(!$()||m);k(o,Dt,n||null),k(o,Nt,!n&&a.slideFocus?0:null),v&&v.forEach((t=>{k(t,Nt,n?-1:null)})),t!==z(o,$t)&&(g(o,$t,t),r(t?"visible":"hidden",C))}(function(){if(t.is(Rt))return $();const n=I(u.Elements.track),e=I(o),i=p("left"),r=p("right");return H(n[i])<=Y(e[i])&&H(e[r])<=Y(n[r])}()),g(o,Lt,n===e-1),g(o,kt,n===e+1)}}function x(t){t!==z(o,xt)&&(g(o,xt,t),d&&k(o,qt,t||null),r(t?"active":"inactive",C))}function $(){const{index:o}=t;return o===n||a.cloneStatus&&o===e}const C={index:n,slideIndex:e,slide:o,container:y,isClone:m,mount:function(){m||(o.id=`${l.id}-slide${Z(n+1)}`),s(o,"click keydown",(t=>{r("click"===t.type?st:ct,C,t)})),i([ut,ft,rt,it,ht],S),i(mt,w),f&&i(ot,E)},destroy:function(){_=!0,c(),T(o,Ct),L(o,Tt),k(o,"style",h)},update:S,style:function(t,n,e){A(e&&y||o,t,n)},isWithin:function(e,o){let i=G(e-n);return m||!a.rewind&&!t.is(Ft)||(i=X(i,t.length-i)),i<=o}};return C}(t,e,o,n);i.mount(),h.push(i)}function $(t){return t?D((t=>!t.isClone)):h}function C(t,n){$(n).forEach(t)}function D(t){return h.filter("function"==typeof t?t:n=>r(t)?_(n.slide,t):d(l(t),n.index))}return{mount:function(){w(),i(ut,S),i([nt,ut],(()=>{h.sort(((t,n)=>t.index-n.index))}))},destroy:E,update:function(){C((t=>{t.update()}))},register:x,get:$,getIn:function(t){const{Controller:e}=n,i=e.toIndex(t),r=e.hasFocus()?1:o.perPage;return D((t=>U(t.index,i,i+r-1)))},getAt:function(t){return D(t)[0]},add:function(t,n){a(t,(t=>{if(r(t)&&(t=M(t)),u(t)){const e=f[n];e?v(t,e):y(p,t),m(t,o.classes.slide),function(t,n){const e=O(t,"img");let{length:o}=e;o?e.forEach((t=>{c(t,"load error",(()=>{--o||n()}))})):n()}(t,s.bind(null,at))}})),s(ut)},remove:function(t){q(D(t).map((t=>t.slide))),s(ut)},forEach:C,filter:D,style:function(t,n,e){C((o=>{o.style(t,n,e)}))},getLength:function(t){return t?f.length:h.length},isEnough:function(){return h.length>o.perPage}}},Layout:function(t,n,e){const{on:i,bind:r,emit:s}=vt(t),{Slides:c}=n,{resolve:u}=n.Direction,{root:l,track:a,list:d}=n.Elements,{getAt:f}=c;let p,h;function g(){h=null,p=e.direction===bt,A(l,"maxWidth",j(e.width)),A(a,u("paddingLeft"),y(!1)),A(a,u("paddingRight"),y(!0)),m()}function m(){const t=I(l);h&&h.width===t.width&&h.height===t.height||(A(a,"height",function(){let t="";return p&&(t=v(),F(t,"height or heightRatio is missing."),t=`calc(${t} - ${y(!1)} - ${y(!0)})`),t}()),c.style(u("marginRight"),j(e.gap)),c.style("width",(e.autoWidth?"":j(e.fixedWidth)||(p?"":_()))||null),c.style("height",j(e.fixedHeight)||(p?e.autoHeight?"":_():v())||null,!0),h=t,s(dt))}function y(t){const{padding:n}=e,i=u(t?"right":"left");return n&&j(n[i]||(o(n)?0:n))||"0px"}function v(){return j(e.height||I(d).width*e.heightRatio)}function _(){const t=j(e.gap);return`calc((100%${t&&` + ${t}`})/${e.perPage||1}${t&&` - ${t}`})`}function w(t,n){const e=f(t);if(e){const t=I(e.slide)[u("right")],o=I(d)[u("left")];return G(t-o)+(n?0:b())}return 0}function b(){const t=f(0);return t&&parseFloat(A(t.slide,u("marginRight")))||0}return{mount:function(){g(),r(window,"resize load",wt(s.bind(this,at))),i([lt,ut],g),i(at,m)},listSize:function(){return I(d)[u("width")]},slideSize:function(t,n){const e=f(t||0);return e?I(e.slide)[u("width")]+(n?0:b()):0},sliderSize:function(){return w(t.length-1,!0)-w(-1,!0)},totalSize:w,getPadding:function(t){return parseFloat(A(a,u("padding"+(t?"Right":"Left"))))||0}}},Clones:function(t,n,o){const{on:i,emit:s}=vt(t),{Elements:c,Slides:u}=n,{resolve:l}=n.Direction,a=[];let d;function p(){(d=w())&&(function(n){const e=u.get().slice(),{length:i}=e;if(i){for(;e.length<n;)f(e,e);f(e.slice(-n),e.slice(0,n)).forEach(((r,s)=>{const l=s<n,d=function(n,e){const i=n.cloneNode(!0);return m(i,o.classes.clone),i.id=`${t.root.id}-clone${Z(e+1)}`,i}(r.slide,s);l?v(d,e[0].slide):y(c.list,d),f(a,d),u.register(d,s-n+(l?0:i),r.index)}))}}(d),s(at))}function h(){q(a),e(a)}function g(){h(),p()}function _(){d<w()&&s(ut)}function w(){let{clones:n}=o;if(t.is(Ft)){if(!n){const e=function(t,n){if(r(n)){const e=$("div",{style:`width: ${n}; position: absolute;`},t);n=I(e).width,q(e)}return n}(c.list,o[l("fixedWidth")]);n=(e&&Y(I(c.track)[l("width")]/e)||o[l("autoWidth")]&&t.length||o.perPage)*(o.drag?(o.flickMaxPages||1)+1:2)}}else n=0;return n}return{mount:function(){p(),i(ut,g),i([lt,at],_)},destroy:h}},Move:function(t,n,e){const{on:o,emit:i}=vt(t),{slideSize:r,getPadding:c,totalSize:u,listSize:l,sliderSize:a}=n.Layout,{resolve:d,orient:f}=n.Direction,{list:p,track:h}=n.Elements;let g;function m(){S()||(n.Scroll.cancel(),y(t.index),i(ft))}function y(t){v(w(t,!0))}function v(n,e){if(!t.is(Rt)){const o=e?n:function(n){if(t.is(Ft)){const t=f(n-b()),e=x(!1,n)&&t<0,o=x(!0,n)&&t>0;(e||o)&&(n=_(n,o))}return n}(n);p.style.transform=`translate${d("X")}(${o}px)`,n!==o&&i(rt)}}function _(t,n){const e=t-E(n),o=a();return t-f(o*(Y(G(e)/o)||1))*(n?1:-1)}function w(n,o){const i=f(u(n-1)-function(t){const{focus:n}=e;return"center"===n?(l()-r(t,!0))/2:+n*r(t)||0}(n));return o?function(n){return e.trimSpace&&t.is(jt)&&(n=J(n,0,f(a()-l()))),n}(i):i}function b(){const t=d("left");return I(p)[t]-I(h)[t]+f(c(!1))}function E(t){return w(t?n.Controller.getEnd():0,!!e.trimSpace)}function S(){return t.state.is(4)&&e.waitForTransition}function x(t,n){n=s(n)?b():n;const e=!0!==t&&f(n)<f(E(!1)),o=!1!==t&&f(n)>f(E(!0));return e||o}return{mount:function(){g=n.Transition,o([nt,dt,lt,ut],m)},destroy:function(){L(p,"style")},move:function(o,r,s,c){if(!S()){const{set:u}=t.state,l=b();o!==r&&(g.cancel(),v(_(l,o>r),!0)),u(4),i(ot,r,s,o),g.start(r,(()=>{u(3),i(it,r,s,o),"move"===e.trimSpace&&o!==s&&l===b()?n.Controller.go(o>s?">":"<",!1,c):c&&c()}))}},jump:y,translate:v,shift:_,cancel:function(){v(b()),g.cancel()},toIndex:function(t){const e=n.Slides.get();let o=0,i=1/0;for(let n=0;n<e.length;n++){const r=e[n].index,s=G(w(r,!0)-t);if(!(s<=i))break;i=s,o=r}return o},toPosition:w,getPosition:b,getLimit:E,isBusy:S,exceededLimit:x}},Controller:function(t,n,e){const{on:o}=vt(t),{Move:i}=n,{getPosition:c,getLimit:u}=i,{isEnough:l,getLength:a}=n.Slides,d=t.is(Ft),f=t.is(jt);let p,h,g,m=e.start||0,y=m;function v(){p=a(!0),h=e.perMove,g=e.perPage,m=J(m,0,p-1)}function _(t,e,o,r,s){const c=e?t:A(t);n.Scroll.scroll(e||o?i.toPosition(c,!0):t,r,(()=>{C(i.toIndex(i.getPosition())),s&&s()}))}function w(t){return E(!1,t)}function b(t){return E(!0,t)}function E(t,n){const e=h||(P()?1:g),o=S(m+e*(t?-1:1),m);return-1!==o||!f||(i=c(),r=u(!t),1,G(i-r)<1)?n?o:L(o):t?0:x();var i,r}function S(t,n,o){if(l()){const i=x();t<0||t>i?t=U(0,t,n,!0)||U(i,n,t,!0)?k($(t)):d?h||P()?t:t<0?-(p%g||g):p:e.rewind?t<0?i:0:-1:o||t===n||(t=h?t:k($(n)+(t<n?-1:1)))}else t=-1;return t}function x(){let t=p-g;return(P()||d&&h)&&(t=p-1),K(t,0)}function L(t){return d?l()?t%p+(t<0?p:0):-1:t}function k(t){return J(P()?t:g*t,0,x())}function $(t){return P()||(t=U(t,p-g,p-1)?p-1:t,t=H(t/g)),t}function A(t){const n=i.toIndex(t);return f?J(n,0,x()):n}function C(t){t!==m&&(y=m,m=t)}function P(){return!s(e.focus)||e.isNavigation}return{mount:function(){v(),o([lt,ut],v,9)},go:function(t,n,o){const s=function(t){let n=m;if(r(t)){const[,e,o]=t.match(/([+\-<>])(\d+)?/)||[];"+"===e||"-"===e?n=S(m+ +`${e}${+o||1}`,m,!0):">"===e?n=o?k(+o):w(!0):"<"===e&&(n=b(!0))}else n=d?t:J(t,0,x());return n}(t);if(e.useScroll)_(s,!0,!0,e.speed,o);else{const t=L(s);t>-1&&!i.isBusy()&&(n||t!==m)&&(C(t),i.move(s,t,y,o))}},scroll:_,getNext:w,getPrev:b,getAdjacent:E,getEnd:x,setIndex:C,getIndex:function(t){return t?y:m},toIndex:k,toPage:$,toDest:A,hasFocus:P}},Arrows:function(t,n,e){const{on:o,bind:i,emit:r}=vt(t),{classes:s,i18n:c}=e,{Elements:u,Controller:l}=n;let a,d=u.arrows,f=u.prev,p=u.next;const h={};function g(){if(e.arrows&&(f&&p||(d=$("div",s.arrows),f=m(!0),p=m(!1),a=!0,y(d,[f,p]),v(d,b("slider"===e.arrows&&u.slider||t.root)))),f&&p)if(h.prev)C(d,!1===e.arrows?"none":"");else{const{id:t}=u.track;k(f,It,t),k(p,It,t),h.prev=f,h.next=p,function(){const{go:t}=l;o([nt,it,lt,ut,ht],_),i(p,"click",(()=>{t(">",!0)})),i(f,"click",(()=>{t("<",!0)}))}(),r("arrows:mounted",f,p)}}function m(t){return M(`<button class="${s.arrow} ${t?s.prev:s.next}" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="${e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"}" />`)}function _(){const n=t.index,e=l.getPrev(),o=l.getNext(),i=e>-1&&n<e?c.last:c.prev,s=o>-1&&n>o?c.first:c.next;f.disabled=e<0,p.disabled=o<0,k(f,Mt,i),k(p,Mt,s),r("arrows:updated",f,p,e,o)}return{arrows:h,mount:function(){g(),o(lt,g)},destroy:function(){a?q(d):(L(f,Tt),L(p,Tt))}}},Autoplay:function(t,n,e){const{on:o,bind:i,emit:r}=vt(t),s=_t(e.interval,t.go.bind(t,">"),(function(t){const{bar:n}=u;n&&A(n,"width",100*t+"%"),r("autoplay:playing",t)})),{isPaused:c}=s,{Elements:u}=n;let l,a,d;function f(t){const n=t?"pause":"play",o=u[n];o&&(k(o,It,u.track.id),k(o,Mt,e.i18n[n]),i(o,"click",t?h:p))}function p(){c()&&n.Slides.isEnough()&&(s.start(!e.resetProgress),a=l=d=!1,r("autoplay:play"))}function h(t=!0){c()||(s.pause(),r("autoplay:pause")),d=t}function g(){d||(l||a?h(!1):p())}function m(){const o=n.Slides.getAt(t.index);s.set(o&&+P(o.slide,"data-splide-interval")||e.interval)}return{mount:function(){const{autoplay:t}=e;t&&(f(!0),f(!1),function(){const{root:t}=u;e.pauseOnHover&&i(t,"mouseenter mouseleave",(t=>{l="mouseenter"===t.type,g()})),e.pauseOnFocus&&i(t,"focusin focusout",(t=>{a="focusin"===t.type,g()})),o([ot,pt,ut],s.rewind),o(ot,m)}(),"pause"!==t&&p())},destroy:s.cancel,play:p,pause:h,isPaused:c}},Cover:function(t,n,e){const{on:o}=vt(t);function i(t){n.Slides.forEach((n=>{const e=b(n.container||n.slide,"img");e&&e.src&&r(t,e,n)}))}function r(t,n,e){e.style("background",t?`center/cover no-repeat url("${n.src}")`:"",!0),C(n,t?"none":"")}return{mount:function(){e.cover&&(o(yt,((t,n)=>{r(!0,t,n)})),o([nt,lt,ut],i.bind(null,!0)))},destroy:function(){i(!1)}}},Scroll:function(t,n,e){const{on:o,emit:i}=vt(t),{Move:r}=n,{getPosition:s,getLimit:c,exceededLimit:u}=r;let l,a;function d(){const n=s(),e=r.toIndex(n);U(e,0,t.length-1)||r.translate(r.shift(n,e>0),!0),a&&a(),i(ht)}function f(){l&&l.cancel()}function p(){l&&!l.isPaused()&&(f(),d())}return{mount:function(){o(ot,f),o([lt,ut],p)},destroy:f,scroll:function n(o,p,h,g){const m=s();let y=1;var v;p=p||(v=G(o-m),K(v/1.5,800)),a=h,f(),l=_t(p,d,(i=>{const l=s(),a=(m+(o-m)*function(t){const{easingFunc:n}=e;return n?n(t):1-Math.pow(1-t,4)}(i)-s())*y;var d;r.translate(l+a),t.is(jt)&&!g&&u()&&(y*=.6,G(a)<10&&(d=u(!1),n(c(!d),600,null,!0)))}),1),i(pt),l.start()},cancel:p}},Drag:function(t,n,e){const{on:i,emit:r,bind:s,unbind:c}=vt(t),{Move:u,Scroll:l,Controller:a}=n,{track:d}=n.Elements,{resolve:f,orient:p}=n.Direction,{getPosition:h,exceededLimit:g}=u;let m,y,v,w,b,E,S,x,L,k=!1;function $(){const{drag:t}=e;T(!t),b="free"===t}function A(t){if(!x){const{noDrag:n}=e,o=O(t);n&&_(t.target,n)||!o&&t.button||(u.isBusy()?D(t,!0):(L=o?d:window,v=null,w=null,S=!1,s(L,Wt,C,Bt),s(L,Xt,P,Bt),u.cancel(),l.cancel(),z(t)))}}function C(n){if(w||r("drag"),w=n,n.cancelable){const i=M(n)-M(y);if(E){u.translate(m+function(n){return n/(k&&t.is(jt)?5:1)}(i));const e=N(n)-N(y)>200,o=k!==(k=g());(e||o)&&z(n),r("dragging"),S=!0,D(n)}else{let{dragMinThreshold:t}=e;t=o(t)?t:{mouse:0,touch:+t||10},E=G(i)>(O(n)?t.touch:t.mouse),q()&&D(n)}}}function P(o){c(L,Wt,C),c(L,Xt,P);const{index:i}=t;if(w){if(E||o.cancelable&&q()){const r=function(n){if(t.is(Ft)||!k){const t=y===w&&v||y,e=M(w)-M(t),o=N(n)-N(t),i=N(n)-N(w)<200;if(o&&i)return e/o}return 0}(o),s=function(t){return h()+V(t)*X(G(t)*(e.flickPower||600),b?1/0:n.Layout.listSize()*(e.flickMaxPages||1))}(r);b?a.scroll(s):t.is(Rt)?a.go(i+p(V(r))):a.go(a.toDest(s),!0),D(o)}r("dragged")}else b||h()===u.toPosition(i)||a.go(i,!0);E=!1}function z(t){v=y,y=t,m=h()}function I(t){!x&&S&&D(t,!0)}function q(){return G(M(w)-M(y))>G(M(w,!0)-M(y,!0))}function M(t,n){return(O(t)?t.touches[0]:t)[`page${f(n?"Y":"X")}`]}function N(t){return t.timeStamp}function O(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function T(t){x=t}return{mount:function(){s(d,Wt,B,Bt),s(d,Xt,B,Bt),s(d,"touchstart mousedown",A,Bt),s(d,"click",I,{capture:!0}),s(d,"dragstart",D),i([nt,lt],$)},disable:T,isDragging:function(){return E}}},Keyboard:function(t,n,e){const{on:o,bind:i,unbind:r}=vt(t),{root:s}=t,{resolve:c}=n.Direction;let l,a;function f(){const{keyboard:t}=e;t&&("focused"===t?(l=s,k(s,Nt,0)):l=window,i(l,Ht,m))}function p(){r(l,Ht),u(l)&&L(l,Nt)}function h(){const t=a;a=!0,R((()=>{a=t}))}function g(){p(),f()}function m(n){if(!a){const{key:e}=n,o=d(Kt,e)?`Arrow${e}`:e;o===c("ArrowLeft")?t.go("<"):o===c("ArrowRight")&&t.go(">")}}return{mount:function(){f(),o(lt,g),o(ot,h)},destroy:p,disable:function(t){a=t}}},LazyLoad:function(t,n,e){const{on:o,off:i,bind:r,emit:s}=vt(t),c="sequential"===e.lazyLoad;let u=[],l=0;function a(){f(),d()}function d(){n.Slides.forEach((t=>{O(t.slide,"[data-splide-lazy], [data-splide-lazy-srcset]").forEach((n=>{const o=P(n,Yt),i=P(n,Gt);if(o!==n.src||i!==n.srcset){const r=e.classes.spinner,s=n.parentElement,c=b(s,`.${r}`)||$("span",r,s);k(c,zt,"presentation"),u.push({_img:n,_Slide:t,src:o,srcset:i,_spinner:c}),!n.src&&C(n,"none")}}))})),c&&g()}function f(){l=0,u=[]}function p(){u=u.filter((n=>{const o=e.perPage*((e.preloadPages||1)+1)-1;return!n._Slide.isWithin(t.index,o)||h(n)})),u.length||i(it)}function h(t){const{_img:n}=t;m(t._Slide.slide,At),r(n,"load error",(n=>{!function(t,n){const{_Slide:e}=t;T(e.slide,At),n||(q(t._spinner),C(t._img,""),s(yt,t._img,e),s(at)),c&&g()}(t,"error"===n.type)})),["src","srcset"].forEach((e=>{t[e]&&(k(n,e,t[e]),L(n,"src"===e?Yt:Gt))}))}function g(){l<u.length&&h(u[l++])}return{mount:function(){e.lazyLoad&&(d(),o(ut,a),c||o([nt,ut,it,ht],p))},destroy:f}},Pagination:function(t,n,o){const{on:i,emit:r,bind:s,unbind:c}=vt(t),{Slides:u,Elements:l,Controller:a}=n,{hasFocus:d,getIndex:f}=a,p=[];let h;function g(){y(),o.pagination&&u.isEnough()&&(function(){const{length:n}=t,{classes:e,i18n:i,perPage:r}=o,c="slider"===o.pagination&&l.slider||l.root,a=d()?n:Y(n/r);h=$("ul",e.pagination,c);for(let t=0;t<a;t++){const n=$("li",null,h),o=$("button",{class:e.page,type:"button"},n),c=u.getIn(t).map((t=>t.slide.id)),l=!d()&&r>1?i.pageX:i.slideX;s(o,"click",v.bind(null,t)),k(o,It,c.join(" ")),k(o,Mt,Q(l,t+1)),p.push({li:n,button:o,page:t})}}(),r("pagination:mounted",{list:h,items:p},_(t.index)),w())}function y(){h&&(q(h),p.forEach((t=>{c(t.button,"click")})),e(p),h=null)}function v(t){a.go(`>${t}`,!0,(()=>{const n=u.getAt(a.toIndex(t));var e;n&&((e=n.slide).setActive&&e.setActive()||e.focus({preventScroll:!0}))}))}function _(t){return p[a.toPage(t)]}function w(){const t=_(f(!0)),n=_(f());t&&(T(t.button,xt),L(t.button,qt)),n&&(m(n.button,xt),k(n.button,qt,!0)),r("pagination:updated",{list:h,items:p},t,n)}return{items:p,mount:function(){g(),i([lt,ut],g),i([ot,ht],w)},destroy:y,getAt:_,update:w}},Sync:function(t,n,o){const{list:i}=n.Elements,r=[];function s(){t.splides.forEach((n=>{!n.isParent&&function(n){[t,n].forEach((e=>{const o=vt(e),i=e===t?n:t;o.on(ot,((t,n,e)=>{i.go(i.is(Ft)?e:t)})),r.push(o)}))}(n.splide)})),o.isNavigation&&function(){const n=vt(t),{on:e}=n;e(st,l),e(ct,a),e([nt,lt],u),k(i,zt,"menu"),r.push(n),n.emit(mt,t.splides)}()}function c(){L(i,Tt),r.forEach((t=>{t.destroy()})),e(r)}function u(){k(i,Ot,o.direction!==bt?"horizontal":null)}function l(n){t.go(n.index)}function a(t,n){d(Ut,n.key)&&(l(t),D(n))}return{mount:s,destroy:c,remount:function(){c(),s()}}},Wheel:function(t,n,e){const{bind:o}=vt(t);function i(o){if(o.cancelable){const{deltaY:i}=o;if(i){const r=i<0;t.go(r?"<":">"),function(o){return!e.releaseWheel||t.state.is(4)||-1!==n.Controller.getAdjacent(o)}(r)&&D(o)}}}return{mount:function(){e.wheel&&o(n.Elements.track,"wheel",i,Bt)}}}});const Vt={type:"slide",speed:400,waitForTransition:!0,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,keyboard:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",slideFocus:!0,trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",classes:Pt,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay"}};function Qt(t,n,e){const{on:o}=vt(t);return{mount:function(){o([nt,ut],(()=>{R((()=>{n.Slides.style("transition",`opacity ${e.speed}ms ${e.easing}`)}))}))},start:function(t,e){const{track:o}=n.Elements;A(o,"height",j(I(o).height)),R((()=>{e(),A(o,"height","")}))},cancel:B}}function Zt(t,n,e){const{bind:o}=vt(t),{Move:i,Controller:r}=n,{list:s}=n.Elements;let c;function u(){l("")}function l(t){A(s,"transition",t)}return{mount:function(){o(s,"transitionend",(t=>{t.target===s&&c&&(u(),c())}))},start:function(n,o){const s=i.toPosition(n,!0),u=i.getPosition(),a=function(n){const{rewindSpeed:o}=e;if(t.is(jt)&&o){const t=r.getIndex(!0),e=r.getEnd();if(0===t&&n>=e||t>=e&&0===n)return o}return e.speed}(n);G(s-u)>=1&&a>=1?(l(`transform ${a}ms ${e.easing}`),i.translate(s,!0),c=o):(i.jump(n),o())},cancel:u}}const tn=class{constructor(t,n){this.event=function(){let t={};function n(n,o){e(n,((n,e)=>{const i=t[n];t[n]=i&&i.filter((t=>t._key?t._key!==o:o||t._namespace!==e))}))}function e(t,n){l(t).join(" ").split(" ").forEach((t=>{const e=t.split(".");n(e[0],e[1])}))}return{on:function(n,o,i,r=10){e(n,((n,e)=>{t[n]=t[n]||[],f(t[n],{_event:n,_callback:o,_namespace:e,_priority:r,_key:i}).sort(((t,n)=>t._priority-n._priority))}))},off:n,offBy:function(e){E(t,((t,o)=>{n(o,e)}))},emit:function(n){(t[n]||[]).forEach((t=>{t._callback.apply(t,h(arguments,1))}))},destroy:function(){t={}}}}(),this.Components={},this.state=function(t){let n=1;return{set:function(t){n=t},is:function(t){return d(l(t),n)}}}(),this.splides=[],this._options={},this._Extensions={};const e=r(t)?N(document,t):t;F(e,`${e} is invalid.`),this.root=e,x(Vt,tn.defaults),x(x(this._options,Vt),n||{})}mount(t,n){const{state:e,Components:o}=this;return F(e.is([1,5]),"Already mounted!"),e.set(1),this._Components=o,this._Transition=n||this._Transition||(this.is(Rt)?Qt:Zt),this._Extensions=t||this._Extensions,E(S({},Jt,this._Extensions,{Transition:this._Transition}),((t,n)=>{const e=t(this,o,this._options);o[n]=e,e.setup&&e.setup()})),E(o,(t=>{t.mount&&t.mount()})),this.emit(nt),m(this.root,"is-initialized"),e.set(3),this.emit(et),this}sync(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._Components.Sync.remount(),t.Components.Sync.remount()),this}go(t){return this._Components.Controller.go(t),this}on(t,n){return this.event.on(t,n,null,20),this}off(t){return this.event.off(t),this}emit(t){return this.event.emit(t,...h(arguments,1)),this}add(t,n){return this._Components.Slides.add(t,n),this}remove(t){return this._Components.Slides.remove(t),this}is(t){return this._options.type===t}refresh(){return this.emit(ut),this}destroy(t=!0){const{event:n,state:o}=this;return o.is(1)?n.on(et,this.destroy.bind(this,t),this):(E(this._Components,(n=>{n.destroy&&n.destroy(t)}),!0),n.emit(gt),n.destroy(),t&&e(this.splides),o.set(5)),this}get options(){return this._options}set options(t){const{_options:n}=this;x(n,t),this.state.is(1)||this.emit(lt,n)}get length(){return this._Components.Slides.getLength(!0)}get index(){return this._Components.Controller.getIndex()}};let nn=tn;nn.defaults={},nn.STATES={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,DESTROYED:5};const en=document.querySelector(".burger"),on=document.querySelector(".mobile-menu-close"),rn=document.querySelector(".menu"),sn=()=>rn.classList.add("menu--open"),cn=()=>rn.classList.remove("menu--open");function un(t){const n=document.querySelectorAll(".cart-badge");t?n.forEach((n=>{n.textContent=t,n.classList.add("cart-badge--shown")})):n.forEach((t=>{t.textContent="",t.classList.remove("cart-badge--shown")}))}function ln(t){return t.reduce(((t,n)=>t+(n?.quantity||0)),0)}const an=()=>JSON.parse(localStorage.getItem("products"))||[];function dn(t){const n=document.createElement("div");n.classList.add("snackbar"),n.textContent=t,document.body.appendChild(n),setTimeout((()=>{n.remove()}),2e3)}un(ln(an())),en.addEventListener("click",sn),on.addEventListener("click",cn);const fn=new nn(".splide",{type:"loop",perPage:2,perMove:2,speed:800,pagination:!1,pauseOnHover:!0,lazyLoad:!0,gap:"2rem",breakpoints:{768:{perPage:1,perMove:1}}}),pn=fn.root.querySelector(".my-slider-progress-bar");function hn(){const t=this.dataset.section;document.querySelector(`section[data-section=${t}]`)?.scrollIntoView({behavior:"smooth"}),cn()}function gn(){document.querySelectorAll(".card").forEach((t=>t.classList.remove("card--flipped"))),this.classList.add("card--flipped")}function mn(){document.querySelectorAll(".card").forEach((t=>t.classList.remove("card--hidden"))),this.remove()}function yn(){const t=this.closest(".card"),n=t.querySelector(".name")?.textContent,e=t.querySelector(".picture")?.getAttribute("src"),o=Number(t.querySelector(".price")?.textContent.replace("$",""));let i=an();if(i.find((t=>t.name===n))){const t=i.map((t=>t.name===n?{...t,quantity:t.quantity+1}:t));return localStorage.setItem("products",JSON.stringify(t)),un(ln(t)),void dn("Item added 😻")}i.push({name:n,picture:e,price:o,quantity:1}),localStorage.setItem("products",JSON.stringify(i)),un(ln(i)),dn("Item added 😻")}fn.on("mounted move",(function(){const t=fn.Components.Controller.getEnd()+1;pn.style.width=String(100*(fn.index+1)/t)+"%";const n=`${fn.index+1+(1===fn.options.perPage||fn.index===fn.length-1?0:1)} / ${fn.length}`;document.querySelector(".splide_progress-number").textContent=n})),fn.mount(),document.querySelectorAll("button[data-section]").forEach((t=>t.addEventListener("click",hn))),function(){const t=document.querySelectorAll(".card");if(t.forEach((t=>t.addEventListener("click",gn))),!t||t.length<=3)return;const n=document.querySelector(".buy");t.forEach(((t,n)=>n>=3&&t.classList.add("card--hidden")));const e=document.createElement("button");e.textContent="View All Products",e.classList.add("btn"),e.addEventListener("click",mn),n.appendChild(e)}(),document.querySelectorAll(".add-to-cart").forEach((t=>t.addEventListener("click",yn)));const vn=new t("AIzaSyDWA8DbXrhKaRvZL7vSKYZQfjFV7A9wa9I");!async function(){const t=await vn.load(),n={lat:50.43637,lng:30.537731},e=new t.maps.Map(document.querySelector(".map"),{zoom:13,center:n});new t.maps.Marker({position:n,map:e,icon:"./img/pin.png"})}()})();