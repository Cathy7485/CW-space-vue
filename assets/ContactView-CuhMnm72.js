import{_ as C}from"./PageBanner-B79xvVyk.js";import{e as _,z as $,r as f,o as i,A as V,w as g,b as e,a as l,n as r,c as p,d as m,u as T,F as y,g as A,t as E}from"./index-CtDL4sg3.js";import{a as z}from"./axios-B4uVmeYG.js";const D="/CW-space-vue/assets/contact-banner-DGVHTwMs.jpg";var U={VITE_DATA_URL:"https://json-server-vercel-cw-space.vercel.app",VITE_PATH:"cw-space-vue",BASE_URL:"/CW-space-vue/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const q=e("span",{class:"fs-6 text-danger text-end mb-2 d-block"},"請填寫表單，將會有專人聯繫您",-1),N=e("dt",{class:"form-label"},[e("label",{for:"name"},[m("聯絡姓名"),e("span",{class:"text-danger ms-2"},"*")])],-1),F={class:"form-info"},I=e("dt",{class:"form-label"},[e("label",{for:"company"},[m("公司名稱"),e("span",{class:"text-danger ms-2"},"*")])],-1),L={class:"form-info"},P=e("dt",{class:"form-label"},[e("label",{for:"phone"},[m("聯絡電話"),e("span",{class:"text-danger ms-2"},"*")])],-1),R={class:"form-info"},B=e("dt",{class:"form-label"},[e("label",{for:"email"},[m("Email"),e("span",{class:"text-danger ms-2"},"*")])],-1),M={class:"form-info"},W=e("dt",{class:"form-label"},[e("label",{for:"content"},[m("留言"),e("span",{class:"text-danger ms-2"},"*")])],-1),S={class:"form-info"},Y={class:"btn-block"},j=["disabled"],H={key:1},J=e("h2",{class:"text-center"},"留言成功！",-1),O={class:"text-center mt-5"},G={__name:"PageContact",setup(k){const{VITE_DATA_URL:v}=U,t=_(!1),a=_({name:"",company:"",phone:"",email:"",content:""});$("isPhone",n=>/^(09)[0-9]{8}$/.test(n)||"需要正確的電話號碼");const h=async()=>{t.value=!0;const n={name:a.value.name,company:a.value.company,phone:a.value.phone,email:a.value.email,content:a.value.content};console.log(n);try{await z.post(`${v}/comments`,n),t.value=!0}catch(s){console.log(s)}};return(n,s)=>{const c=f("VField"),d=f("ErrorMessage"),b=f("VForm"),x=f("router-link");return t.value?(i(),p("div",H,[J,e("div",O,[l(x,{to:"/",class:"button primary"},{default:g(()=>[m("回首頁")]),_:1})])])):(i(),V(b,{key:0,ref:"form",class:"contact-form form-list"},{default:g(({errors:u,meta:w})=>[q,e("dl",null,[N,e("dd",F,[l(c,{id:"name",class:r(["form-control",{"is-invalid":u.name}]),name:"name",type:"text",modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=o=>a.value.name=o),placeholder:"請輸入姓名",rules:"required"},null,8,["class","modelValue"]),l(d,{class:"invalid-feedback",name:"name"})])]),e("dl",null,[I,e("dd",L,[l(c,{id:"company",class:r(["form-control",{"is-invalid":u.company}]),name:"company",type:"text",modelValue:a.value.company,"onUpdate:modelValue":s[1]||(s[1]=o=>a.value.company=o),placeholder:"請輸入公司名稱",rules:"required"},null,8,["class","modelValue"]),l(d,{class:"invalid-feedback",name:"company"})])]),e("dl",null,[P,e("dd",R,[l(c,{id:"phone",class:r(["form-control",{"is-invalid":u.phone}]),name:"phone",type:"tel",modelValue:a.value.phone,"onUpdate:modelValue":s[2]||(s[2]=o=>a.value.phone=o),placeholder:"請輸入電話",rules:"isPhone|required"},null,8,["class","modelValue"]),l(d,{class:"invalid-feedback",name:"phone"})])]),e("dl",null,[B,e("dd",M,[l(c,{id:"email",class:r(["form-control",{"is-invalid":u.email}]),name:"email",type:"email",modelValue:a.value.email,"onUpdate:modelValue":s[3]||(s[3]=o=>a.value.email=o),placeholder:"請輸入信箱",rules:"email|required"},null,8,["class","modelValue"]),l(d,{class:"invalid-feedback",name:"email"})])]),e("dl",null,[W,e("dd",S,[l(c,{id:"content",class:r({"is-invalid":u.content}),name:"content",cols:"30",rows:"10",modelValue:a.value.contact,"onUpdate:modelValue":s[4]||(s[4]=o=>a.value.contact=o),placeholder:"請輸入內容",as:"textarea",rules:"required"},null,8,["class","modelValue"]),l(d,{class:"invalid-feedback",name:"content"})])]),e("div",Y,[e("button",{type:"button",class:"button primary",title:"送出",onClick:h,disabled:!w.valid},"送出",8,j)])]),_:1},512))}}},X={class:"block container mt-5"},K={class:"space-tabs"},Q=["onClick"],Z={key:1,class:"location-section"},ee=e("div",{class:"left"},[e("div",{class:"fs-4 fw-bold"},"地理位置"),e("div",{class:"fw-bold mt-4"},"臺南市安平區永華路二段777號"),e("hr"),e("div",null,"搭乘台南捷運綠線到府平公園站下車，步行3分鐘即可抵達CW space 中心")],-1),ae=e("div",{class:"right"},[e("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.890343628232!2d120.16842215129887!3d22.991059489200016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e7608a0982b33%3A0x1e55b069e1044555!2zNzA45Y-w5Y2X5biC5a6J5bmz5Y2A5rC46I-v6Lev5LqM5q61Nzc36Jmf!5e0!3m2!1szh-TW!2stw!4v1732238779614!5m2!1szh-TW!2stw",width:"100%",height:"100%",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1),se=[ee,ae],ne={__name:"ContactView",setup(k){const v=_("聯絡我們"),t=_(0),a=_(["線上留言","地理位置"]),h=n=>{t.value=n};return(n,s)=>(i(),p(y,null,[l(C,{"images-url":T(D),"page-title":`${v.value} - ${a.value[t.value]}`},null,8,["images-url","page-title"]),e("div",X,[e("div",K,[(i(!0),p(y,null,A(a.value,(c,d)=>(i(),p("div",{key:c,class:r(["space-tab-item",{active:d===t.value}]),onClick:b=>h(d)},E(c),11,Q))),128))]),t.value===0?(i(),V(G,{key:0})):(i(),p("div",Z,se))])],64))}};export{ne as default};