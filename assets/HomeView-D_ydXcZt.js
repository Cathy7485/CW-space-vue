import{_ as j,r as f,o as n,c as o,b as s,a as i,w as b,d as y,t as v,e as u,F as m,f as g,n as S,s as B,g as H,h as C,u as $,i as I,T as N,j as x}from"./index-B1EJfjqm.js";import{u as L}from"./spaceStore-CF1zFqti.js";import{_ as T}from"./LatestNews-CDnTPuSj.js";import{_ as P}from"./FrequentlyAskedQuestions-CtxZaXry.js";import"./statusStore-CN1jttri.js";import"./axios-B4uVmeYG.js";const E="/CW-space-vue/assets/banner-RK0TYm07.jpg",U={},D={class:"banner"},F={class:"banner-text"};function R(c,t){const e=f("router-link");return n(),o("div",D,[t[3]||(t[3]=s("div",{class:"banner-img"},[s("img",{src:E,alt:"banner"})],-1)),s("div",F,[t[1]||(t[1]=s("h1",null,"提供您最舒適的辦公環境",-1)),t[2]||(t[2]=s("h3",null,"辦公只需要帶一台筆電，其他的我們準備",-1)),i(e,{to:"/reserve",class:"button primary"},{default:b(()=>t[0]||(t[0]=[y("立即預約")])),_:1})])])}const W=j(U,[["render",R]]),Y="/CW-space-vue/assets/about-DrmgK0PB.jpg",A={class:"block-title"},K={class:"hover-title"},h={__name:"HomeBlockTitle",props:{title:{type:String,default:""},link:{type:String,default:""}},setup(c){const t=c;return(e,r)=>{const a=f("router-link");return n(),o("div",A,[s("div",K,v(t.title),1),i(a,{to:`/${t.link}`},{default:b(()=>r[0]||(r[0]=[y("MORE")])),_:1},8,["to"])])}}},M={class:"block"},q={class:"row"},z={class:"col-lg-6"},Q={class:"about-info"},G={__name:"HomeAbout",setup(c){const t=u("關於我們"),e=u("about");return(r,a)=>(n(),o("div",M,[s("div",q,[s("div",z,[s("div",Q,[i(h,{title:t.value,link:e.value},null,8,["title","link"]),a[0]||(a[0]=s("div",null,[s("p",null,"我們位於交通發達市中心區域性的商業區，提供給您最便利的辦公位置。"),s("p",null,"您不需要額外再支出龐大的設備採買費用，只需要帶上您的筆電，即刻便可以開始工作！"),s("p",null,"最適合新創企業、SOHO族、斜槓專家"),s("p",null,"舒適的環境，提供給您最佳的辦公空間，搭配月租方案更優惠，也有年租方案供您選擇，詳情請查看方案介紹頁面。")],-1))])]),a[1]||(a[1]=s("div",{class:"col-lg-6"},[s("div",{class:"about-img"},[s("img",{src:Y,alt:"關於我們"})])],-1))])]))}},J={class:"lightbox"},X=["src"],Z={class:"thumbnail"},ss=["onClick"],ts=["src"],es={__name:"LightBox",props:{imagesList:{type:Array,default:()=>[]},currentUrl:{type:String,default:""},isOpen:{type:Boolean,default:!1}},emits:["onShowImg","onCloseLightBox"],setup(c,{emit:t}){const e=c,r=t,a=p=>{r("onShowImg",p)},_=p=>{r("onCloseLightBox",p)};return(p,l)=>(n(),o("div",{class:S(["panel",{isOpen:c.isOpen}]),onClick:_},[s("div",J,[s("img",{src:c.currentUrl,alt:"image"},null,8,X)]),s("div",Z,[(n(!0),o(m,null,g(e.imagesList,(d,w)=>(n(),o("div",{onClick:k=>a(w),key:d,class:S(["thumbnail-btn",{active:e.currentUrl===d}])},[s("img",{src:d,alt:"image"},null,8,ts)],10,ss))),128))])],2))}},ns={class:"swiper-container"},os=["onClick"],is=["src"],ls={__name:"SwiperImage",setup(c){const t=L(),{imagesList:e}=B(t),{getSpaceList:r}=t,a=u(null),_=u(!1),p=u(0),l=H(()=>e.value[p.value]),d=k=>{_.value=!0,p.value=k},w=k=>{k.target.tagName==="DIV"&&(_.value=!1)};return C(()=>{r()}),(k,Ds)=>(n(),o("div",ns,[s("swiper-container",{class:"space-swiper",ref_key:"swiperEl",ref:a,navigation:!0,pagination:!0,slidesPerView:1,spaceBetween:0,breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}}},[(n(!0),o(m,null,g($(e),(O,V)=>(n(),o("swiper-slide",{key:O,onClick:Fs=>d(V)},[s("img",{src:O},null,8,is)],8,os))),128))],512),(n(),I(N,{to:"body"},[i(es,{onOnCloseLightBox:w,onOnShowImg:d,isOpen:_.value,currentUrl:l.value,imagesList:$(e)},null,8,["isOpen","currentUrl","imagesList"])]))]))}},rs={class:"home-space block"},cs={__name:"HomeSpace",setup(c){const t=u("環境空間"),e=u("space");return(r,a)=>(n(),o("div",rs,[i(h,{title:t.value,link:e.value},null,8,["title","link"]),i(ls)]))}},as={class:"home-service"},_s={class:"service-swiper",autoHeight:!0,navigation:{prevEl:".custom-prev",nextEl:".custom-next"},slidesPerView:1,"space-between":32,breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}}},us={class:"service-item"},ps={class:"img"},ds=["src","alt"],ms={class:"info"},vs={class:"title"},ks={key:0},hs={key:0},gs={key:1},$s={key:2},fs={key:3},bs={key:0},ys={__name:"SwiperPlan",setup(c){const t=L(),{spaceList:e}=B(t),{getSpaceList:r}=t;return C(()=>{r()}),(a,_)=>{const p=f("router-link");return n(),o("div",as,[s("swiper-container",_s,[(n(!0),o(m,null,g($(e),l=>(n(),o("swiper-slide",{key:l.id},[s("div",us,[s("div",ps,[s("img",{src:l.imgUrl[0],alt:l.name},null,8,ds)]),s("div",ms,[s("div",vs,v(l.name),1),l.type.length>1?(n(),o("div",ks,[Object.keys(l.type[0].price)[0]==="day"?(n(),o("div",hs," 當日體驗 NT$ "+v(Object.values(l.type[0].price)[0])+" / 天 ",1)):x("",!0),Object.keys(l.type[0].price)[0]==="month"?(n(),o("div",gs," 整月優惠 NT$ "+v(Object.values(l.type[0].price)[0].length>0?"6000 起":Object.values(l.type[0].price)[0])+" / 月 ",1)):x("",!0),Object.keys(l.type[0].price)[0]==="hour"?(n(),o("div",$s," NT$ "+v(Object.values(l.type[0].price)[0])+" / 時 ",1)):(n(),o("div",fs))])):(n(!0),o(m,{key:1},g(l.type,d=>(n(),o("div",{key:d},[Object.values(d.price)[0]===0?(n(),o("div",bs,"免費使用")):x("",!0)]))),128)),_[1]||(_[1]=s("hr",null,null,-1)),s("div",null,[s("p",null,v(l.info),1)]),i(p,{to:"/space",class:"button primary"},{default:b(()=>_[0]||(_[0]=[y("更多資訊")])),_:1})])])]))),128))]),_[2]||(_[2]=s("button",{class:"custom-prev"},null,-1)),_[3]||(_[3]=s("button",{class:"custom-next"},null,-1))])}}},ws={class:"container"},xs={class:"block-inner"},Os={__name:"HomeService",setup(c){const t=u("空間簡介"),e=u("service");return(r,a)=>(n(),o(m,null,[s("div",ws,[i(h,{title:t.value,link:e.value},null,8,["title","link"])]),s("div",xs,[i(ys)])],64))}},Ss={class:"block home-news"},Bs={__name:"HomeNews",setup(c){const t=u("公告訊息"),e=u("news");return(r,a)=>(n(),o("div",Ss,[i(h,{title:t.value,link:e.value},null,8,["title","link"]),i(T)]))}},Cs={__name:"HomeQuestion",setup(c){const t=u("常見問題"),e=u("faq");return(r,a)=>(n(),o(m,null,[i(h,{title:t.value,link:e.value},null,8,["title","link"]),i(P)],64))}},Ls="/CW-space-vue/assets/visit-DDF3Y_Y8.jpg",Vs={class:"home-visit"},js=["src"],Hs={class:"info container"},Is={__name:"HomeVisitBanner",setup(c){return(t,e)=>{const r=f("router-link");return n(),o("div",Vs,[s("img",{class:"block-banner",src:$(Ls),alt:"banner"},null,8,js),s("div",Hs,[e[1]||(e[1]=s("div",{class:"title"},"我們體驗過都覺得棒",-1)),i(r,{to:"/reserve",class:"button primary"},{default:b(()=>e[0]||(e[0]=[y("預約參觀")])),_:1})])])}}},Ns={class:"content"},Ts={class:"container"},Ps={class:"container"},Es={class:"container"},Us={class:"container"},qs={__name:"HomeView",setup(c){return(t,e)=>(n(),o(m,null,[i(W),e[0]||(e[0]=s("div",{class:"bg-lines"},[s("span"),s("span"),s("span"),s("span"),s("span"),s("span"),s("span"),s("span")],-1)),s("div",Ns,[s("div",Ts,[i(G)]),s("div",Ps,[i(cs)]),i(Os),s("div",Es,[i(Bs)]),s("div",Us,[i(Cs)])]),i(Is)],64))}};export{qs as default};
