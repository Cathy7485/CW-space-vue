import{q as Z,x as K,y as Q,z as ee,A as te,e as L,B as x,k as A,C as z,D as ne,E as se,G as oe,H as re,I as R,J as Y,s as ie,f as le,r as ae,o as v,c as m,a as B,u as h,b as l,F as E,g as N,t as S,h as T,w as I,n as H,d as D}from"./index-BUk_Pi7G.js";import{u as ce}from"./spaceStore-DnehZNyk.js";import{_ as ue}from"./PageBanner-CM17FZnY.js";import"./statusStore-CIKxEbig.js";import"./axios-B4uVmeYG.js";function F(e){return Z()?(K(e),!0):!1}const X=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const de=Object.prototype.toString,fe=e=>de.call(e)==="[object Object]",O=()=>{},j=pe();function pe(){var e,t;return X&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function M(e,t=!1,n="Timeout"){return new Promise((s,w)=>{setTimeout(t?()=>w(n):s,e)})}function G(e){return Array.isArray(e)?e:[e]}function ve(...e){if(e.length!==1)return Q(...e);const t=e[0];return typeof t=="function"?ee(te(()=>({get:t,set:O}))):L(t)}function V(e,t=!1){function n(o,{flush:c="sync",deep:d=!1,timeout:r,throwOnTimeout:k}={}){let i=null;const C=[new Promise(P=>{i=A(e,b=>{o(b)!==t&&(i?i():z(()=>i==null?void 0:i()),P(b))},{flush:c,deep:d,immediate:!0})})];return r!=null&&C.push(M(r,k).then(()=>x(e)).finally(()=>i==null?void 0:i())),Promise.race(C)}function s(o,c){if(!ne(o))return n(b=>b===o,c);const{flush:d="sync",deep:r=!1,timeout:k,throwOnTimeout:i}=c??{};let f=null;const P=[new Promise(b=>{f=A([e,o],([$,J])=>{t!==($===J)&&(f?f():z(()=>f==null?void 0:f()),b($))},{flush:d,deep:r,immediate:!0})})];return k!=null&&P.push(M(k,i).then(()=>x(e)).finally(()=>(f==null||f(),x(e)))),Promise.race(P)}function w(o){return n(c=>!!c,o)}function a(o){return s(null,o)}function _(o){return s(void 0,o)}function u(o){return n(Number.isNaN,o)}function y(o,c){return n(d=>{const r=Array.from(d);return r.includes(o)||r.includes(x(o))},c)}function g(o){return p(1,o)}function p(o=1,c){let d=-1;return n(()=>(d+=1,d>=o),c)}return Array.isArray(x(e))?{toMatch:n,toContains:y,changed:g,changedTimes:p,get not(){return V(e,!t)}}:{toMatch:n,toBe:s,toBeTruthy:w,toBeNull:a,toBeNaN:u,toBeUndefined:_,changed:g,changedTimes:p,get not(){return V(e,!t)}}}function me(e){return V(e)}const ge=X?window:void 0;function he(e){var t;const n=x(e);return(t=n==null?void 0:n.$el)!=null?t:n}function we(...e){let t,n,s,w;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,w]=e,t=ge):[t,n,s,w]=e,!t)return O;n=G(n),s=G(s);const a=[],_=()=>{a.forEach(p=>p()),a.length=0},u=(p,o,c,d)=>(p.addEventListener(o,c,d),()=>p.removeEventListener(o,c,d)),y=A(()=>[he(t),x(w)],([p,o])=>{if(_(),!p)return;const c=fe(o)?{...o}:o;a.push(...n.flatMap(d=>s.map(r=>u(p,d,r,c))))},{immediate:!0,flush:"post"}),g=()=>{y(),_()};return F(g),g}function ye(e,t,n){const{immediate:s=!0,delay:w=0,onError:a=O,onSuccess:_=O,resetOnExecute:u=!0,shallow:y=!0,throwError:g}=n??{},p=y?R(t):L(t),o=L(!1),c=L(!1),d=R(void 0);async function r(f=0,...C){u&&(p.value=t),d.value=void 0,o.value=!1,c.value=!0,f>0&&await M(f);const P=typeof e=="function"?e(...C):e;try{const b=await P;p.value=b,o.value=!0,_(b)}catch(b){if(d.value=b,a(b),g)throw b}finally{c.value=!1}return p.value}s&&r(w);const k={state:p,isReady:o,isLoading:c,error:d,execute:r};function i(){return new Promise((f,C)=>{me(c).toBe(!1).then(()=>f(k)).catch(C)})}return{...k,then(f,C){return i().then(f,C)}}}async function _e(e){return new Promise((t,n)=>{const s=new Image,{src:w,srcset:a,sizes:_,class:u,loading:y,crossorigin:g,referrerPolicy:p,width:o,height:c,decoding:d,fetchPriority:r,ismap:k,usemap:i}=e;s.src=w,a!=null&&(s.srcset=a),_!=null&&(s.sizes=_),u!=null&&(s.className=u),y!=null&&(s.loading=y),g!=null&&(s.crossOrigin=g),p!=null&&(s.referrerPolicy=p),o!=null&&(s.width=o),c!=null&&(s.height=c),d!=null&&(s.decoding=d),r!=null&&(s.fetchPriority=r),k!=null&&(s.isMap=k),i!=null&&(s.useMap=i),s.onload=()=>t(s),s.onerror=n})}function ke(e,t={}){const n=ye(()=>_e(x(e)),void 0,{resetOnExecute:!0,...t});return A(()=>x(e),()=>n.execute(t.delay),{deep:!0}),n}const be=se({name:"UseImage",props:["src","srcset","sizes","as","alt","class","loading","crossorigin","referrerPolicy","width","height","decoding","fetchPriority","ismap","usemap"],setup(e,{slots:t}){const n=oe(ke(e));return()=>n.isLoading&&t.loading?t.loading(n):n.error&&t.error?t.error(n.error):t.default?t.default(n):re(e.as||"img",e)}});function U(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function q(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const n=e.parentNode;return!n||n.tagName==="BODY"?!1:q(n)}}function xe(e){const t=e||window.event,n=t.target;return q(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const W=new WeakMap;function Ce(e,t=!1){const n=L(t);let s=null,w="";A(ve(e),u=>{const y=U(x(u));if(y){const g=y;if(W.get(g)||W.set(g,g.style.overflow),g.style.overflow!=="hidden"&&(w=g.style.overflow),g.style.overflow==="hidden")return n.value=!0;if(n.value)return g.style.overflow="hidden"}},{immediate:!0});const a=()=>{const u=U(x(e));!u||n.value||(j&&(s=we(u,"touchmove",y=>{xe(y)},{passive:!1})),u.style.overflow="hidden",n.value=!0)},_=()=>{const u=U(x(e));!u||!n.value||(j&&(s==null||s()),u.style.overflow=w,W.delete(u),n.value=!1)};return F(_),Y({get(){return n.value},set(u){u?a():_()}})}function Se(){let e=!1;const t=L(!1);return(n,s)=>{if(t.value=s.value,e)return;e=!0;const w=Ce(n,s.value);A(t,a=>w.value=a)}}Se();const Te="/CW-space-vue/assets/shared-banner-BgCOtoS9.jpg",Le="data:image/svg+xml,%3csvg%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.0364%203.7428L12.077%202.70217C12.5176%202.26155%2013.2301%202.26155%2013.6661%202.70217L22.7786%2011.81C23.2192%2012.2506%2023.2192%2012.9631%2022.7786%2013.399L13.6661%2022.5115C13.2254%2022.9522%2012.5129%2022.9522%2012.077%2022.5115L11.0364%2021.4709C10.5911%2021.0256%2010.6004%2020.299%2011.0551%2019.8631L16.7036%2014.4819H3.23169C2.60825%2014.4819%202.10669%2013.9803%202.10669%2013.3569V11.8569C2.10669%2011.2334%202.60825%2010.7319%203.23169%2010.7319H16.7036L11.0551%205.35061C10.5958%204.91467%2010.5864%204.18811%2011.0364%203.7428Z'%20fill='%23848484'/%3e%3c/svg%3e",Pe="/CW-space-vue/assets/loading-C01haHxA.gif",Ee={class:"block container space-page mt-5"},Ae={class:"space-tabs"},Be=["onClick"],Ie={key:0,class:"space-info"},Oe={class:"row"},Ne={class:"col-lg-5 d-flex flex-column"},De={class:"space-title"},Ue={class:"d-block mb-3"},We={key:0},Me={class:"gray-info"},Ve={class:"p-3"},$e={key:0,class:"mt-auto"},ze={class:"col-lg-7 gy-5 gy-lg-0 position-relative"},Re={class:"space-img-box",loop:"true",navigation:{nextEl:".custom-next"}},He=["src"],je={class:"custom-next space-next-btn"},Ge=["src"],Ye={key:1,class:"my-3 text-center"},Fe={key:2,class:"space-detail"},Xe={class:"space-type-detail"},qe={class:"type-img"},Je=["src"],Ze=["src"],Ke={class:"type-btn"},Qe={class:"type-swiper type-btn-inner",loop:!1,direction:"vertical",slidesPerView:2,spaceBetween:12,mousewheel:!0,breakpoints:{768:{slidesPerView:3}},navigation:{prevEl:".type-btn .custom-prev",nextEl:".type-btn .custom-next"}},et=["onClick"],tt={key:0},nt={key:1},st={key:0},ot={key:1},rt={key:2},it={class:"bg-text"},ft={__name:"SpaceView",setup(e){const t=L(0),n=L(["共享辦公空間","獨立辦公空間","會議室空間","休息茶水間","沙發休閒空間"]),s=L("空間介紹"),w=ce(),{activeSpace:a,activeIdx:_,spaceDetail:u,spaceType:y}=ie(w),{getSpaceList:g,changeIdx:p}=w,o=Y(()=>u.value[0].price.free!==0),c=d=>{t.value=d};return le(()=>{g(),p(0)}),(d,r)=>{const k=ae("router-link");return v(),m(E,null,[B(ue,{"images-url":h(Te),"page-title":s.value},null,8,["images-url","page-title"]),l("div",Ee,[l("div",Ae,[(v(!0),m(E,null,N(n.value,(i,f)=>(v(),m("div",{key:i,class:H(["space-tab-item",{active:f===h(_)}]),onClick:C=>h(p)(f)},S(i),11,Be))),128))]),h(a)?(v(),m("div",Ie,[l("div",Oe,[l("div",Ne,[l("div",De,S(h(a).name),1),l("div",Ue,[r[0]||(r[0]=l("div",null,"開放時間：",-1)),h(a).open.weekdays?(v(),m("p",We,"週一到週五 "+S(h(a).open.weekdays)+" (不含例假日)",1)):T("",!0)]),l("div",Me,[r[1]||(r[1]=l("div",{class:"title"},"詳細資訊",-1)),l("div",Ve,S(h(a).info),1)]),o.value?(v(),m("div",$e,[B(k,{to:"reserve",class:"button primary me-3"},{default:I(()=>r[2]||(r[2]=[D("立即預約")])),_:1}),B(k,{to:"service",class:"button"},{default:I(()=>r[3]||(r[3]=[D("方案價格")])),_:1})])):T("",!0)]),l("div",ze,[l("swiper-container",Re,[(v(!0),m(E,null,N(h(a).imgUrl,(i,f)=>(v(),m("swiper-slide",{class:"space-img",key:i},[B(h(be),{src:i,alt:`圖片${f}`},{loading:I(()=>[l("img",{class:"loading-gif",src:h(Pe)},null,8,He)]),error:I(()=>r[4]||(r[4]=[l("span",{class:"error-text"},"圖片錯誤",-1)])),_:2},1032,["src","alt"])]))),128))]),l("div",je,[l("img",{src:h(Le),alt:"下一張圖片"},null,8,Ge)])])])])):(v(),m("h2",Ye,"目前無資料")),h(a)?(v(),m("div",Fe,[o.value?(v(),m(E,{key:0},[r[7]||(r[7]=l("div",{class:"flex-title"},[l("div",{class:"title"},"空間資訊")],-1)),l("div",Xe,[l("div",qe,[t.value>=h(a).imgUrl.length?(v(),m("img",{key:0,src:h(a).imgUrl[0],alt:"空間"},null,8,Je)):(v(),m("img",{key:1,src:h(a).imgUrl[t.value],alt:"空間"},null,8,Ze))]),l("div",Ke,[l("swiper-container",Qe,[(v(!0),m(E,null,N(h(u),(i,f)=>(v(),m("swiper-slide",{class:H(["btn",{active:f===t.value}]),key:i,onClick:C=>c(f)},[l("div",null,[h(y)==="seat"?(v(),m("span",tt,"座位")):T("",!0),h(y)==="room"?(v(),m("span",nt,"空間")):T("",!0),D(" "+S(i.sort),1)]),l("div",null,[i.price.day?(v(),m("span",st," NT$ "+S(i.price.day)+" 元/日， ",1)):T("",!0),i.price.month?(v(),m("span",ot," NT$ "+S(i.price.month)+" 元/月 ",1)):T("",!0),i.price.hour?(v(),m("span",rt," NT$"+S(i.price.hour)+"/小時 ",1)):T("",!0)]),l("div",null,"容納人數："+S(i.capacity)+" 人",1),l("div",it,S(i.sort),1)],10,et))),128))]),h(a).imgUrl.length<3?(v(),m(E,{key:0},[r[5]||(r[5]=l("button",{class:"custom-prev"},null,-1)),r[6]||(r[6]=l("button",{class:"custom-next"},null,-1))],64)):T("",!0)])])],64)):T("",!0)])):T("",!0)])],64)}}};export{ft as default};
