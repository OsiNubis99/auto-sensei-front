import{c as U,d as F,f as G,h as X,g as Y,j as H,k as N,l as V,m as _}from"./navigation-3fda0163.js";function T(z){return z===void 0&&(z=""),`.${z.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function W(z){let{swiper:e,extendParams:O,on:u,emit:h}=z;const g="swiper-pagination";O({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${g}-bullet`,bulletActiveClass:`${g}-bullet-active`,modifierClass:`${g}-`,currentClass:`${g}-current`,totalClass:`${g}-total`,hiddenClass:`${g}-hidden`,progressbarFillClass:`${g}-progressbar-fill`,progressbarOppositeClass:`${g}-progressbar-opposite`,clickableClass:`${g}-clickable`,lockClass:`${g}-lock`,horizontalClass:`${g}-horizontal`,verticalClass:`${g}-vertical`,paginationDisabledClass:`${g}-disabled`}}),e.pagination={el:null,bullets:[]};let d,k=0;const y=t=>(Array.isArray(t)?t:[t]).filter(i=>!!i);function S(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function m(t,i){const{bulletActiveClass:r}=e.params.pagination;t&&(t=t[`${i==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${r}-${i}`),t=t[`${i==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${r}-${i}-${i}`)))}function L(t){const i=t.target.closest(T(e.params.pagination.bulletClass));if(!i)return;t.preventDefault();const r=F(i)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===r)return;e.slideToLoop(r)}else e.slideTo(r)}function M(){const t=e.rtl,i=e.params.pagination;if(S())return;let r=e.pagination.el;r=y(r);let c,C;const A=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,$=e.params.loop?Math.ceil(A/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(C=e.previousRealIndex||0,c=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(c=e.snapIndex,C=e.previousSnapIndex):(C=e.previousIndex||0,c=e.activeIndex||0),i.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const p=e.pagination.bullets;let E,b,n;if(i.dynamicBullets&&(d=U(p[0],e.isHorizontal()?"width":"height",!0),r.forEach(o=>{o.style[e.isHorizontal()?"width":"height"]=`${d*(i.dynamicMainBullets+4)}px`}),i.dynamicMainBullets>1&&C!==void 0&&(k+=c-(C||0),k>i.dynamicMainBullets-1?k=i.dynamicMainBullets-1:k<0&&(k=0)),E=Math.max(c-k,0),b=E+(Math.min(p.length,i.dynamicMainBullets)-1),n=(b+E)/2),p.forEach(o=>{const a=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(s=>`${i.bulletActiveClass}${s}`)].map(s=>typeof s=="string"&&s.includes(" ")?s.split(" "):s).flat();o.classList.remove(...a)}),r.length>1)p.forEach(o=>{const a=F(o);a===c?o.classList.add(...i.bulletActiveClass.split(" ")):e.isElement&&o.setAttribute("part","bullet"),i.dynamicBullets&&(a>=E&&a<=b&&o.classList.add(...`${i.bulletActiveClass}-main`.split(" ")),a===E&&m(o,"prev"),a===b&&m(o,"next"))});else{const o=p[c];if(o&&o.classList.add(...i.bulletActiveClass.split(" ")),e.isElement&&p.forEach((a,s)=>{a.setAttribute("part",s===c?"bullet-active":"bullet")}),i.dynamicBullets){const a=p[E],s=p[b];for(let l=E;l<=b;l+=1)p[l]&&p[l].classList.add(...`${i.bulletActiveClass}-main`.split(" "));m(a,"prev"),m(s,"next")}}if(i.dynamicBullets){const o=Math.min(p.length,i.dynamicMainBullets+4),a=(d*o-d)/2-n*d,s=t?"right":"left";p.forEach(l=>{l.style[e.isHorizontal()?s:"top"]=`${a}px`})}}r.forEach((p,E)=>{if(i.type==="fraction"&&(p.querySelectorAll(T(i.currentClass)).forEach(b=>{b.textContent=i.formatFractionCurrent(c+1)}),p.querySelectorAll(T(i.totalClass)).forEach(b=>{b.textContent=i.formatFractionTotal($)})),i.type==="progressbar"){let b;i.progressbarOpposite?b=e.isHorizontal()?"vertical":"horizontal":b=e.isHorizontal()?"horizontal":"vertical";const n=(c+1)/$;let o=1,a=1;b==="horizontal"?o=n:a=n,p.querySelectorAll(T(i.progressbarFillClass)).forEach(s=>{s.style.transform=`translate3d(0,0,0) scaleX(${o}) scaleY(${a})`,s.style.transitionDuration=`${e.params.speed}ms`})}i.type==="custom"&&i.renderCustom?(p.innerHTML=i.renderCustom(e,c+1,$),E===0&&h("paginationRender",p)):(E===0&&h("paginationRender",p),h("paginationUpdate",p)),e.params.watchOverflow&&e.enabled&&p.classList[e.isLocked?"add":"remove"](i.lockClass)})}function x(){const t=e.params.pagination;if(S())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let r=e.pagination.el;r=y(r);let c="";if(t.type==="bullets"){let C=e.params.loop?Math.ceil(i/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&C>i&&(C=i);for(let A=0;A<C;A+=1)t.renderBullet?c+=t.renderBullet.call(e,A,t.bulletClass):c+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?c=t.renderFraction.call(e,t.currentClass,t.totalClass):c=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?c=t.renderProgressbar.call(e,t.progressbarFillClass):c=`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],r.forEach(C=>{t.type!=="custom"&&(C.innerHTML=c||""),t.type==="bullets"&&e.pagination.bullets.push(...C.querySelectorAll(T(t.bulletClass)))}),t.type!=="custom"&&h("paginationRender",r[0])}function P(){e.params.pagination=G(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let i;typeof t.el=="string"&&e.isElement&&(i=e.el.querySelector(t.el)),!i&&typeof t.el=="string"&&(i=[...document.querySelectorAll(t.el)]),i||(i=t.el),!(!i||i.length===0)&&(e.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(i)&&i.length>1&&(i=[...e.el.querySelectorAll(t.el)],i.length>1&&(i=i.filter(r=>X(r,".swiper")[0]===e.el)[0])),Array.isArray(i)&&i.length===1&&(i=i[0]),Object.assign(e.pagination,{el:i}),i=y(i),i.forEach(r=>{t.type==="bullets"&&t.clickable&&r.classList.add(...(t.clickableClass||"").split(" ")),r.classList.add(t.modifierClass+t.type),r.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(r.classList.add(`${t.modifierClass}${t.type}-dynamic`),k=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&r.classList.add(t.progressbarOppositeClass),t.clickable&&r.addEventListener("click",L),e.enabled||r.classList.add(t.lockClass)}))}function D(){const t=e.params.pagination;if(S())return;let i=e.pagination.el;i&&(i=y(i),i.forEach(r=>{r.classList.remove(t.hiddenClass),r.classList.remove(t.modifierClass+t.type),r.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(r.classList.remove(...(t.clickableClass||"").split(" ")),r.removeEventListener("click",L))})),e.pagination.bullets&&e.pagination.bullets.forEach(r=>r.classList.remove(...t.bulletActiveClass.split(" ")))}u("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:i}=e.pagination;i=y(i),i.forEach(r=>{r.classList.remove(t.horizontalClass,t.verticalClass),r.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),u("init",()=>{e.params.pagination.enabled===!1?B():(P(),x(),M())}),u("activeIndexChange",()=>{typeof e.snapIndex>"u"&&M()}),u("snapIndexChange",()=>{M()}),u("snapGridLengthChange",()=>{x(),M()}),u("destroy",()=>{D()}),u("enable disable",()=>{let{el:t}=e.pagination;t&&(t=y(t),t.forEach(i=>i.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),u("lock unlock",()=>{M()}),u("click",(t,i)=>{const r=i.target,c=y(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&c&&c.length>0&&!r.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&r===e.navigation.nextEl||e.navigation.prevEl&&r===e.navigation.prevEl))return;const C=c[0].classList.contains(e.params.pagination.hiddenClass);h(C===!0?"paginationShow":"paginationHide"),c.forEach(A=>A.classList.toggle(e.params.pagination.hiddenClass))}});const I=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=y(t),t.forEach(i=>i.classList.remove(e.params.pagination.paginationDisabledClass))),P(),x(),M()},B=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=y(t),t.forEach(i=>i.classList.add(e.params.pagination.paginationDisabledClass))),D()};Object.assign(e.pagination,{enable:I,disable:B,render:x,update:M,init:P,destroy:D})}function J(z){let{swiper:e,extendParams:O,on:u,emit:h}=z;const g=Y();let d=!1,k=null,y=null,S,m,L,M;O({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function x(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:n,rtlTranslate:o}=e,{dragEl:a,el:s}=n,l=e.params.scrollbar,v=e.params.loop?e.progressLoop:e.progress;let w=m,f=(L-m)*v;o?(f=-f,f>0?(w=m-f,f=0):-f+m>L&&(w=L+f)):f<0?(w=m+f,f=0):f+m>L&&(w=L-f),e.isHorizontal()?(a.style.transform=`translate3d(${f}px, 0, 0)`,a.style.width=`${w}px`):(a.style.transform=`translate3d(0px, ${f}px, 0)`,a.style.height=`${w}px`),l.hide&&(clearTimeout(k),s.style.opacity=1,k=setTimeout(()=>{s.style.opacity=0,s.style.transitionDuration="400ms"},1e3))}function P(n){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${n}ms`)}function D(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:n}=e,{dragEl:o,el:a}=n;o.style.width="",o.style.height="",L=e.isHorizontal()?a.offsetWidth:a.offsetHeight,M=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?m=L*M:m=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?o.style.width=`${m}px`:o.style.height=`${m}px`,M>=1?a.style.display="none":a.style.display="",e.params.scrollbar.hide&&(a.style.opacity=0),e.params.watchOverflow&&e.enabled&&n.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function I(n){return e.isHorizontal()?n.clientX:n.clientY}function B(n){const{scrollbar:o,rtlTranslate:a}=e,{el:s}=o;let l;l=(I(n)-_(s)[e.isHorizontal()?"left":"top"]-(S!==null?S:m/2))/(L-m),l=Math.max(Math.min(l,1),0),a&&(l=1-l);const v=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*l;e.updateProgress(v),e.setTranslate(v),e.updateActiveIndex(),e.updateSlidesClasses()}function t(n){const o=e.params.scrollbar,{scrollbar:a,wrapperEl:s}=e,{el:l,dragEl:v}=a;d=!0,S=n.target===v?I(n)-n.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,n.preventDefault(),n.stopPropagation(),s.style.transitionDuration="100ms",v.style.transitionDuration="100ms",B(n),clearTimeout(y),l.style.transitionDuration="0ms",o.hide&&(l.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),h("scrollbarDragStart",n)}function i(n){const{scrollbar:o,wrapperEl:a}=e,{el:s,dragEl:l}=o;d&&(n.preventDefault?n.preventDefault():n.returnValue=!1,B(n),a.style.transitionDuration="0ms",s.style.transitionDuration="0ms",l.style.transitionDuration="0ms",h("scrollbarDragMove",n))}function r(n){const o=e.params.scrollbar,{scrollbar:a,wrapperEl:s}=e,{el:l}=a;d&&(d=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",s.style.transitionDuration=""),o.hide&&(clearTimeout(y),y=V(()=>{l.style.opacity=0,l.style.transitionDuration="400ms"},1e3)),h("scrollbarDragEnd",n),o.snapOnRelease&&e.slideToClosest())}function c(n){const{scrollbar:o,params:a}=e,s=o.el;if(!s)return;const l=s,v=a.passiveListeners?{passive:!1,capture:!1}:!1,w=a.passiveListeners?{passive:!0,capture:!1}:!1;if(!l)return;const f=n==="on"?"addEventListener":"removeEventListener";l[f]("pointerdown",t,v),g[f]("pointermove",i,v),g[f]("pointerup",r,w)}function C(){!e.params.scrollbar.el||!e.scrollbar.el||c("on")}function A(){!e.params.scrollbar.el||!e.scrollbar.el||c("off")}function $(){const{scrollbar:n,el:o}=e;e.params.scrollbar=G(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const a=e.params.scrollbar;if(!a.el)return;let s;if(typeof a.el=="string"&&e.isElement&&(s=e.el.querySelector(a.el)),!s&&typeof a.el=="string"){if(s=g.querySelectorAll(a.el),!s.length)return}else s||(s=a.el);e.params.uniqueNavElements&&typeof a.el=="string"&&s.length>1&&o.querySelectorAll(a.el).length===1&&(s=o.querySelector(a.el)),s.length>0&&(s=s[0]),s.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass);let l;s&&(l=s.querySelector(T(e.params.scrollbar.dragClass)),l||(l=N("div",e.params.scrollbar.dragClass),s.append(l))),Object.assign(n,{el:s,dragEl:l}),a.draggable&&C(),s&&s.classList[e.enabled?"remove":"add"](...H(e.params.scrollbar.lockClass))}function p(){const n=e.params.scrollbar,o=e.scrollbar.el;o&&o.classList.remove(...H(e.isHorizontal()?n.horizontalClass:n.verticalClass)),A()}u("init",()=>{e.params.scrollbar.enabled===!1?b():($(),D(),x())}),u("update resize observerUpdate lock unlock",()=>{D()}),u("setTranslate",()=>{x()}),u("setTransition",(n,o)=>{P(o)}),u("enable disable",()=>{const{el:n}=e.scrollbar;n&&n.classList[e.enabled?"remove":"add"](...H(e.params.scrollbar.lockClass))}),u("destroy",()=>{p()});const E=()=>{e.el.classList.remove(...H(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...H(e.params.scrollbar.scrollbarDisabledClass)),$(),D(),x()},b=()=>{e.el.classList.add(...H(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...H(e.params.scrollbar.scrollbarDisabledClass)),p()};Object.assign(e.scrollbar,{enable:E,disable:b,updateSize:D,setTranslate:x,init:$,destroy:p})}function Q(z){let{swiper:e,extendParams:O,on:u}=z;O({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),e.a11y={clicked:!1};let h=null;function g(a){const s=h;s.length!==0&&(s.innerHTML="",s.innerHTML=a)}const d=a=>(Array.isArray(a)?a:[a]).filter(s=>!!s);function k(a){a===void 0&&(a=16);const s=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(a).replace(/x/g,s)}function y(a){a=d(a),a.forEach(s=>{s.setAttribute("tabIndex","0")})}function S(a){a=d(a),a.forEach(s=>{s.setAttribute("tabIndex","-1")})}function m(a,s){a=d(a),a.forEach(l=>{l.setAttribute("role",s)})}function L(a,s){a=d(a),a.forEach(l=>{l.setAttribute("aria-roledescription",s)})}function M(a,s){a=d(a),a.forEach(l=>{l.setAttribute("aria-controls",s)})}function x(a,s){a=d(a),a.forEach(l=>{l.setAttribute("aria-label",s)})}function P(a,s){a=d(a),a.forEach(l=>{l.setAttribute("id",s)})}function D(a,s){a=d(a),a.forEach(l=>{l.setAttribute("aria-live",s)})}function I(a){a=d(a),a.forEach(s=>{s.setAttribute("aria-disabled",!0)})}function B(a){a=d(a),a.forEach(s=>{s.setAttribute("aria-disabled",!1)})}function t(a){if(a.keyCode!==13&&a.keyCode!==32)return;const s=e.params.a11y,l=a.target;e.pagination&&e.pagination.el&&(l===e.pagination.el||e.pagination.el.contains(a.target))&&!a.target.matches(T(e.params.pagination.bulletClass))||(e.navigation&&e.navigation.nextEl&&l===e.navigation.nextEl&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?g(s.lastSlideMessage):g(s.nextSlideMessage)),e.navigation&&e.navigation.prevEl&&l===e.navigation.prevEl&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?g(s.firstSlideMessage):g(s.prevSlideMessage)),e.pagination&&l.matches(T(e.params.pagination.bulletClass))&&l.click())}function i(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:a,prevEl:s}=e.navigation;s&&(e.isBeginning?(I(s),S(s)):(B(s),y(s))),a&&(e.isEnd?(I(a),S(a)):(B(a),y(a)))}function r(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function c(){return r()&&e.params.pagination.clickable}function C(){const a=e.params.a11y;r()&&e.pagination.bullets.forEach(s=>{e.params.pagination.clickable&&(y(s),e.params.pagination.renderBullet||(m(s,"button"),x(s,a.paginationBulletMessage.replace(/\{\{index\}\}/,F(s)+1)))),s.matches(T(e.params.pagination.bulletActiveClass))?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current")})}const A=(a,s,l)=>{y(a),a.tagName!=="BUTTON"&&(m(a,"button"),a.addEventListener("keydown",t)),x(a,l),M(a,s)},$=()=>{e.a11y.clicked=!0},p=()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},E=a=>{if(e.a11y.clicked)return;const s=a.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!s||!e.slides.includes(s))return;const l=e.slides.indexOf(s)===e.activeIndex,v=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(s);l||v||a.sourceCapabilities&&a.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,e.slideTo(e.slides.indexOf(s),0))},b=()=>{const a=e.params.a11y;a.itemRoleDescriptionMessage&&L(e.slides,a.itemRoleDescriptionMessage),a.slideRole&&m(e.slides,a.slideRole);const s=e.slides.length;a.slideLabelMessage&&e.slides.forEach((l,v)=>{const w=e.params.loop?parseInt(l.getAttribute("data-swiper-slide-index"),10):v,f=a.slideLabelMessage.replace(/\{\{index\}\}/,w+1).replace(/\{\{slidesLength\}\}/,s);x(l,f)})},n=()=>{const a=e.params.a11y;e.el.append(h);const s=e.el;a.containerRoleDescriptionMessage&&L(s,a.containerRoleDescriptionMessage),a.containerMessage&&x(s,a.containerMessage);const l=e.wrapperEl,v=a.id||l.getAttribute("id")||`swiper-wrapper-${k(16)}`,w=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";P(l,v),D(l,w),b();let{nextEl:f,prevEl:R}=e.navigation?e.navigation:{};f=d(f),R=d(R),f&&f.forEach(q=>A(q,v,a.nextSlideMessage)),R&&R.forEach(q=>A(q,v,a.prevSlideMessage)),c()&&d(e.pagination.el).forEach(j=>{j.addEventListener("keydown",t)}),e.el.addEventListener("focus",E,!0),e.el.addEventListener("pointerdown",$,!0),e.el.addEventListener("pointerup",p,!0)};function o(){h&&h.remove();let{nextEl:a,prevEl:s}=e.navigation?e.navigation:{};a=d(a),s=d(s),a&&a.forEach(l=>l.removeEventListener("keydown",t)),s&&s.forEach(l=>l.removeEventListener("keydown",t)),c()&&d(e.pagination.el).forEach(v=>{v.removeEventListener("keydown",t)}),e.el.removeEventListener("focus",E,!0),e.el.removeEventListener("pointerdown",$,!0),e.el.removeEventListener("pointerup",p,!0)}u("beforeInit",()=>{h=N("span",e.params.a11y.notificationClass),h.setAttribute("aria-live","assertive"),h.setAttribute("aria-atomic","true")}),u("afterInit",()=>{e.params.a11y.enabled&&n()}),u("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&b()}),u("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&i()}),u("paginationUpdate",()=>{e.params.a11y.enabled&&C()}),u("destroy",()=>{e.params.a11y.enabled&&o()})}export{Q as A,W as P,J as S};