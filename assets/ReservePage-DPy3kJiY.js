import{e as g,M as B,r as x,o as p,N as h,w,b as e,d as _,a as m,n as y,c as f,O as L,K as z,j as Y,J as I,k as N,s as D,f as F,t as S,u as o,F as $,g as M,l as E,P as J,D as K,Q as q,h as A,m as Q,I as G,S as X}from"./index-BUk_Pi7G.js";import{a as j}from"./axios-B4uVmeYG.js";import{u as O}from"./spaceStore-DnehZNyk.js";import{_ as Z}from"./PageBanner-CM17FZnY.js";import"./statusStore-CIKxEbig.js";var ee={VITE_DATA_URL:"https://json-server-vercel-cw-space.vercel.app",VITE_PATH:"cw-space-vue",BASE_URL:"/CW-space-vue/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const te={class:"form-info"},se={class:"form-info"},le={class:"form-info"},oe={class:"form-info"},ne={class:"form-info"},ae={class:"form-info"},ie={class:"row"},de={class:"col-lg-6"},re={class:"col-lg-6 my-2 my-lg-0"},me={class:"btn-block"},ue=["disabled"],pe={key:1},ce={class:"text-center mt-5"},ve={__name:"ReserveVisit",setup(T){const{VITE_DATA_URL:c}=ee,r=g(!1),d=g(null),i=g({name:"",company:"",phone:"",email:"",space:"",appointment:null,time:""});B("isPhone",u=>/^(09)[0-9]{8}$/.test(u)||"需要正確的電話號碼");const v=async()=>{d.value=L(d.value).unix();const u={name:i.value.name,company:i.value.company,phone:i.value.phone,email:i.value.email,space:i.value.space,appointment:d.value,time:i.value.time};console.log(u);try{await j.post(`${c}/visit`,u),r.value=!0}catch(t){console.log(t)}};return(u,t)=>{const a=x("VField"),n=x("ErrorMessage"),V=x("DatePicker"),l=x("router-link"),b=x("VForm");return r.value?(p(),f("div",pe,[t[18]||(t[18]=e("h2",{class:"text-center"},"預約成功！",-1)),e("div",ce,[m(l,{to:"/",class:"button primary"},{default:w(()=>t[17]||(t[17]=[_("回首頁")])),_:1})])])):(p(),h(b,{key:0,class:"visit-reservation form-list",onSubmit:v},{default:w(({errors:s,meta:R})=>[t[16]||(t[16]=e("span",{class:"fs-6 text-danger text-end mb-2 d-block"},"請填寫表單，將會有專人聯繫您",-1)),e("dl",null,[t[7]||(t[7]=e("dt",{class:"form-title"},[e("label",{for:"name"},[_("姓名"),e("span",{class:"text-danger ms-2"},"*")])],-1)),e("dd",te,[m(a,{id:"name",type:"text",class:y(["form-control",{"is-invalid":s.name}]),name:"name",modelValue:i.value.name,"onUpdate:modelValue":t[0]||(t[0]=k=>i.value.name=k),placeholder:"請輸入姓名",rules:"required"},null,8,["class","modelValue"]),m(n,{class:"invalid-feedback",name:"name"})])]),e("dl",null,[t[8]||(t[8]=e("dt",{class:"form-title"},[e("label",{for:"company"},[_("公司名稱"),e("span",{class:"text-danger ms-2"},"*")])],-1)),e("dd",se,[m(a,{id:"company",type:"text",class:y(["form-control",{"is-invalid":s.company}]),name:"company",modelValue:i.value.company,"onUpdate:modelValue":t[1]||(t[1]=k=>i.value.company=k),placeholder:"請輸入公司名稱",rules:"required"},null,8,["class","modelValue"]),m(n,{class:"invalid-feedback",name:"company"})])]),e("dl",null,[t[9]||(t[9]=e("dt",{class:"form-title"},[e("label",{for:"phone"},[_("聯絡電話"),e("span",{class:"text-danger ms-2"},"*")])],-1)),e("dd",le,[m(a,{id:"phone",type:"tel",class:y(["form-control",{"is-invalid":s.phone}]),name:"phone",modelValue:i.value.phone,"onUpdate:modelValue":t[2]||(t[2]=k=>i.value.phone=k),placeholder:"請輸入聯絡電話",rules:"isPhone|required"},null,8,["class","modelValue"]),m(n,{class:"invalid-feedback",name:"phone"})])]),e("dl",null,[t[10]||(t[10]=e("dt",{class:"form-title"},[e("label",{for:"email"},[_("電子信箱"),e("span",{class:"text-danger ms-2"},"*")])],-1)),e("dd",oe,[m(a,{id:"email",type:"email",class:y(["form-control",{"is-invalid":s.email}]),name:"email",modelValue:i.value.email,"onUpdate:modelValue":t[3]||(t[3]=k=>i.value.email=k),placeholder:"請輸入電子信箱",rules:"email|required"},null,8,["class","modelValue"]),m(n,{class:"invalid-feedback",name:"email"})])]),e("dl",null,[t[12]||(t[12]=e("dt",{class:"form-title"},[e("label",{for:"space"},[_("想要參觀哪個空間"),e("span",{class:"text-danger ms-2"},"*")])],-1)),e("dd",ne,[m(a,{id:"space",class:y(["form-select",{"is-invalid":s.space}]),name:"space",modelValue:i.value.space,"onUpdate:modelValue":t[4]||(t[4]=k=>i.value.space=k),as:"select",rules:"required"},{default:w(()=>t[11]||(t[11]=[e("option",{value:"",selected:"",disabled:""},"請選擇您要參觀的空間",-1),e("option",{value:"共享辦公空間"},"共享辦公空間",-1),e("option",{value:"獨立辦公空間"},"獨立辦公空間",-1),e("option",{value:"會議室空間"},"會議室空間",-1)])),_:2},1032,["class","modelValue"]),m(n,{class:"invalid-feedback",name:"space"})])]),e("dl",null,[t[14]||(t[14]=e("dt",{class:"form-title"},[e("label",{for:"date"},[_("參觀日期"),e("span",{class:"text-danger ms-2"},"*")])],-1)),e("dd",ae,[e("div",ie,[e("div",de,[m(V,{class:"date-picker w-100",value:d.value,"onUpdate:value":t[5]||(t[5]=k=>d.value=k),format:"YYYY-MM-DD",type:"date",placeholder:"請選擇日期","disabled-week-days":[6,0]},null,8,["value"])]),e("div",re,[m(a,{id:"time",name:"time",class:y(["visit-time form-select w-100",{"is-invalid":s.time}]),modelValue:i.value.time,"onUpdate:modelValue":t[6]||(t[6]=k=>i.value.time=k),as:"select",rules:"required"},{default:w(()=>t[13]||(t[13]=[e("option",{value:"",selected:"",disabled:""},"請選擇預約時段",-1),e("option",{value:"09:00"},"09:00",-1),e("option",{value:"10:00"},"10:00",-1),e("option",{value:"11:00"},"11:00",-1),e("option",{value:"12:00"},"12:00",-1),e("option",{value:"13:00"},"13:00",-1),e("option",{value:"14:00"},"14:00",-1),e("option",{value:"15:00"},"15:00",-1)])),_:2},1032,["class","modelValue"]),m(n,{class:"invalid-feedback",name:"time"})])])])]),e("div",me,[m(l,{to:"/",class:"button secondary",title:"回首頁"},{default:w(()=>t[15]||(t[15]=[_("回首頁")])),_:1}),e("button",{type:"button",class:"button primary",title:"送出",onClick:v,disabled:!R.valid},"送出",8,ue)])]),_:1}))}}};var fe={VITE_DATA_URL:"https://json-server-vercel-cw-space.vercel.app",VITE_PATH:"cw-space-vue",BASE_URL:"/CW-space-vue/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const C=z("ReserveStore",()=>{const T=Y(),{VITE_DATA_URL:c}=fe,r=g(!1),d=g(0),i=g(0),v=g(""),u=g(!1),t=g(!1),a=I(()=>v.value?`您目前選擇的是：${v.value}`:"尚未選擇，請點選列表選項");N(()=>v.value,()=>{u.value=!0});const n=g({appointment:null,company:"",name:"",phone:"",email:"",plan:"",space:"",kind:"",time:""});N(()=>[n.value.plan,n.value.appointment,n.value.time,n.value.kind],([U,P,W,H])=>{U!==""&&P!==""&&W!==""&&H!==""&&(t.value=!0)});const V=()=>{d.value===3||!u.value||(d.value+=1)},l=()=>{d.value!==0&&(d.value-=1)},b=()=>{T.go(-1)},s=()=>{n.value.plan===""||n.value.appointment===""||n.value.time===""||n.value.kind===""||(d.value+=1)},R=I(()=>L(n.value.appointment).unix()),k=(U,P)=>Math.floor(Math.random()*(U-P+1)+P);return{isProcessing:r,step:d,picked:v,isPicked:u,isFilledIn:t,random:i,pickedSpace:a,reserveData:n,unixDate:R,checkedForm:s,nextStep:V,backStep:l,goBackPage:b,randomFn:k,submitReveres:async()=>{const U={appointment:n.value.appointment,company:n.value.company,name:n.value.name,phone:n.value.phone,email:n.value.email,plan:n.value.plan,space:v.value,kind:n.value.kind,time:n.value.time};i.value=k(12,0);try{await j.post(`${c}/reserves`,U),U.value={appointment:null,company:"",name:"",phone:"",email:"",plan:"",space:"",kind:"",time:""},V()}catch(P){console.log(P)}},scrollToTop:()=>{window.scrollTo({top:480,left:0,behavior:"smooth"})}}}),_e={class:"text-end text-secondary fs-6 fw-bold mt-2"},be={class:"choice-space"},ke=["id","value","onClick"],ye=["for"],ge={class:"left"},$e={class:"space-img"},Ve=["src","alt"],xe={class:"right"},Se={class:"name"},Te={class:"bg-text"},we={class:"btn-block"},De={__name:"FirstStep",setup(T){const c=O(),{spacePlan:r}=D(c),{getSpaceList:d,changeSpaceId:i}=c,v=C(),{picked:u,isPicked:t,pickedSpace:a}=D(v),{goBackPage:n,nextStep:V}=v;return F(()=>{d()}),(l,b)=>(p(),f($,null,[e("fieldset",null,[e("dl",null,[b[3]||(b[3]=e("dt",null,[e("span",null,[_("想要預約哪個空間"),e("span",{class:"text-danger ms-2"},"*")])],-1)),e("dd",_e,[e("span",be,S(o(a)),1)])]),(p(!0),f($,null,M(o(r),s=>(p(),f("dl",{class:"option",key:s.id},[E(e("input",{type:"radio",name:"space",id:s.id,value:s.name,"onUpdate:modelValue":b[0]||(b[0]=R=>K(u)?u.value=R:null),onClick:R=>o(i)(s.id)},null,8,ke),[[J,o(u)]]),e("label",{for:s.id},[e("dd",null,[e("div",ge,[e("div",$e,[e("img",{src:s.imgUrl[0],alt:s.name},null,8,Ve)])]),e("div",xe,[e("div",Se,S(s.name),1)]),e("div",Te,S(s.enName),1)])],8,ye)]))),128))]),e("div",we,[e("button",{type:"button",onClick:b[1]||(b[1]=(...s)=>o(n)&&o(n)(...s)),class:"button",title:"前一頁"},"前一頁"),e("button",{type:"button",class:y(["button primary",{disabled:!o(t)}]),title:"下一步",onClick:b[2]||(b[2]=(...s)=>o(V)&&o(V)(...s))},"下一步",2)])],64))}},Re={class:"row align-items-center"},Ue={class:"form-info col-md-10 mb-0"},Pe={class:"row align-items-center"},he={class:"form-info col-md-10 mb-0"},Ce={key:1,value:"month"},Ee={key:2,value:"day"},Fe={class:"row align-items-center"},Me={class:"form-info col-md-10 mb-0"},qe={class:"row align-items-center"},Ae={class:"form-info col-md-10 mb-0"},Ie={class:"row align-items-center"},Ne={class:"form-title col-md-2"},Be={for:"seat"},Le={key:0},Ye={key:1},je={class:"form-info col-md-10 mb-0"},Oe=["value"],We={class:"btn-block"},He={__name:"SecondStep",setup(T){const c=C(),{picked:r,reserveData:d,isFilledIn:i}=D(c),{backStep:v,checkedForm:u}=c,{scrollToTop:t}=c,a=O(),{pickedType:n}=D(a);return F(()=>{t()}),(V,l)=>{const b=x("DatePicker");return p(),f($,null,[e("fieldset",null,[e("dl",Re,[l[6]||(l[6]=e("dt",{class:"form-title col-md-2"},[e("label",null," 目前選擇 ")],-1)),e("dd",Ue,S(o(r)),1)]),e("dl",Pe,[l[10]||(l[10]=e("dt",{class:"form-title col-md-2"},[e("label",{for:"reserve-plan"},[_("預約方案"),e("span",{class:"text-danger ms-2"},"*")])],-1)),e("dd",he,[E(e("select",{name:"reserve-plan","onUpdate:modelValue":l[0]||(l[0]=s=>o(d).plan=s),id:"reserve-plan"},[l[9]||(l[9]=e("option",{value:"",selected:"",disabled:""},"請選擇",-1)),o(r)==="共享辦公空間"?(p(),f($,{key:0},[l[7]||(l[7]=e("option",{value:"day"},"日租",-1)),l[8]||(l[8]=e("option",{value:"month"},"月租",-1))],64)):A("",!0),o(r)==="獨立辦公空間"?(p(),f("option",Ce,"月租")):A("",!0),o(r)==="會議室空間"?(p(),f("option",Ee,"小時")):A("",!0)],512),[[q,o(d).plan]])])]),e("dl",Fe,[l[11]||(l[11]=e("dt",{class:"form-title col-md-2"},[e("label",{for:"date-picker"},[_("預約日期"),e("span",{class:"text-danger ms-2"},"*")])],-1)),e("dd",Me,[m(b,{id:"date-picker",class:"date-picker",format:"YYYY-MM-DD",type:"date","value-type":"timestamp",value:o(d).appointment,"onUpdate:value":l[1]||(l[1]=s=>o(d).appointment=s),placeholder:"請選擇日期"},null,8,["value"])])]),e("dl",qe,[l[15]||(l[15]=e("dt",{class:"form-title col-md-2"},[e("label",{for:"time"},[_("預約時段"),e("span",{class:"text-danger ms-2"},"*")])],-1)),e("dd",Ae,[E(e("select",{name:"time",id:"time","onUpdate:modelValue":l[2]||(l[2]=s=>o(d).time=s)},[o(r)!=="會議室空間"?(p(),f($,{key:0},[l[12]||(l[12]=e("option",{disabled:"",value:""},"請選擇時段",-1)),l[13]||(l[13]=e("option",{value:"08:00-18:00"},"08:00-18:00",-1))],64)):(p(),f($,{key:1},[l[14]||(l[14]=Q('<option disabled value="">請選擇時段</option><option value="09:00-11:00">09:00-11:00</option><option value="11:00-13:00">11:00-13:00</option><option value="13:00-15:00">13:00-15:00</option><option value="15:00-17:00">15:00-17:00</option>',5))],64))],512),[[q,o(d).time]])])]),e("dl",Ie,[e("dt",Ne,[e("label",Be,[o(r)==="共享辦公空間"?(p(),f("span",Le,"座位選擇")):(p(),f("span",Ye,"空間選擇")),l[16]||(l[16]=e("span",{class:"text-danger ms-2"},"*",-1))])]),e("dd",je,[E(e("select",{name:"seat",id:"seat","onUpdate:modelValue":l[3]||(l[3]=s=>o(d).kind=s)},[l[17]||(l[17]=e("option",{disabled:"",value:""},"請選擇",-1)),(p(!0),f($,null,M(o(n),s=>(p(),f("option",{key:s,value:s.sort},S(s.sort),9,Oe))),128))],512),[[q,o(d).kind]])])])]),e("div",We,[e("button",{type:"button",onClick:l[4]||(l[4]=(...s)=>o(v)&&o(v)(...s)),class:"button",title:"上一步"},"上一步"),e("button",{type:"button",class:y(["button primary",{disabled:!o(i)}]),title:"下一步",onClick:l[5]||(l[5]=(...s)=>o(u)&&o(u)(...s))},"下一步",2)])],64)}}},ze={class:"row align-items-center"},Je={class:"form-info col-md-10 mb-0"},Ke={class:"row align-items-center"},Qe={class:"form-info col-md-10 mb-0"},Ge={class:"row align-items-center"},Xe={class:"form-info col-md-10 mb-0"},Ze={class:"row align-items-center"},et={class:"form-info col-md-10 mb-0"},tt={class:"btn-block"},st=["disabled"],lt={__name:"ThirdStep",setup(T){const c=C(),{reserveData:r}=D(c),{backStep:d,submitReveres:i}=c,{scrollToTop:v}=c;return B("isPhone",u=>/^(09)[0-9]{8}$/.test(u)||"需要正確的電話號碼"),F(()=>{v()}),(u,t)=>{const a=x("VField"),n=x("ErrorMessage"),V=x("VForm");return p(),h(V,{class:"reserve-list form-list",onSubmit:o(i)},{default:w(({errors:l,meta:b})=>[e("dl",ze,[t[6]||(t[6]=e("dt",{class:"form-title col-md-2"},[e("label",{for:"name"},[_("姓名"),e("span",{class:"text-danger ms-2"},"*")])],-1)),e("dd",Je,[m(a,{id:"name",type:"text",class:y(["form-control",{"is-invalid":l.name}]),name:"name",modelValue:o(r).name,"onUpdate:modelValue":t[0]||(t[0]=s=>o(r).name=s),placeholder:"請輸入姓名",rules:"required"},null,8,["class","modelValue"]),m(n,{class:"invalid-feedback",name:"name"})])]),e("dl",Ke,[t[7]||(t[7]=e("dt",{class:"form-title col-md-2"},[e("label",{for:"company"},[_("公司名稱"),e("span",{class:"text-danger ms-2"},"*")])],-1)),e("dd",Qe,[m(a,{id:"company",type:"text",class:y(["form-control",{"is-invalid":l.company}]),name:"company",modelValue:o(r).company,"onUpdate:modelValue":t[1]||(t[1]=s=>o(r).company=s),placeholder:"請輸入公司名稱",rules:"required"},null,8,["class","modelValue"]),m(n,{class:"invalid-feedback",name:"company"})])]),e("dl",Ge,[t[8]||(t[8]=e("dt",{class:"form-title col-md-2"},[e("label",{for:"phone"},[_("聯絡電話"),e("span",{class:"text-danger ms-2"},"*")])],-1)),e("dd",Xe,[m(a,{id:"phone",type:"phone",class:y(["form-control",{"is-invalid":l.phone}]),name:"phone",modelValue:o(r).phone,"onUpdate:modelValue":t[2]||(t[2]=s=>o(r).phone=s),placeholder:"請輸入聯絡電話",rules:"isPhone|required"},null,8,["class","modelValue"]),m(n,{class:"invalid-feedback",name:"phone"})])]),e("dl",Ze,[t[9]||(t[9]=e("dt",{class:"form-title col-md-2"},[e("label",{for:"email"},[_("電子信箱"),e("span",{class:"text-danger ms-2"},"*")])],-1)),e("dd",et,[m(a,{id:"email",type:"email",class:y(["form-control",{"is-invalid":l.email}]),name:"email",modelValue:o(r).email,"onUpdate:modelValue":t[3]||(t[3]=s=>o(r).email=s),placeholder:"請輸入電子信箱",rules:"email|required"},null,8,["class","modelValue"]),m(n,{class:"invalid-feedback",name:"email"})])]),e("div",tt,[e("button",{type:"button",onClick:t[4]||(t[4]=(...s)=>o(d)&&o(d)(...s)),class:"button",title:"上一步"},"上一步"),e("button",{type:"button",class:y(["button primary",{disabled:!b.valid}]),title:"送出",onClick:t[5]||(t[5]=(...s)=>o(i)&&o(i)(...s)),disabled:!b.valid},"送出",10,st)])]),_:1},8,["onSubmit"])}}},ot={class:"reserve-list service-finish"},nt={class:"text-danger fw-bold"},at={class:"btn-block"},it={__name:"FourthStep",setup(T){const c=Y(),r=C(),{unixDate:d,random:i,step:v}=D(r),{scrollToTop:u}=r;return setTimeout(()=>{v.value=0,c.go(0)},5e3),F(()=>{u()}),(t,a)=>{const n=x("router-link");return p(),f($,null,[e("div",ot,[a[1]||(a[1]=e("h2",null,"預約成功",-1)),e("p",null,[a[0]||(a[0]=_("訂單編號 ")),e("span",nt,"CW"+S(o(d))+"-"+S(o(i)),1)]),a[2]||(a[2]=e("p",null,"請確認您的電子郵件，牢記您的訂單編號。",-1)),a[3]||(a[3]=e("p",null,[_("請您於"),e("span",{class:"text-danger fw-bold"},"7個工作天"),_("內匯款，收到款項後，完成預約")],-1)),a[4]||(a[4]=e("p",null,"匯款資訊 013國泰世華 1234-5678-4321-0018",-1)),a[5]||(a[5]=e("p",null,"匯款後，請您來電告知帳戶後末四碼，以及訂單資料，才算完成預約手續。",-1))]),a[7]||(a[7]=e("h6",{class:"mt-4 text-danger fw-bold text-center"},"五秒後，將自動跳轉回預約頁",-1)),e("div",at,[m(n,{to:"/",class:"button primary",title:"回首頁"},{default:w(()=>a[6]||(a[6]=[_("回首頁")])),_:1})])],64)}}},dt={class:"reserve-step"},rt={class:"circle"},mt={class:"text"},ut={class:"reserve-list"},pt={__name:"ReserveSpace",setup(T){const c=C(),{step:r}=D(c),d=["選擇空間","選擇時段/座位","填寫資料","預約完成"],i=G([{name:"first",component:De},{name:"second",component:He},{name:"third",component:lt},{name:"fourth",component:it}]),v=I(()=>i.value[r.value]);return(u,t)=>(p(),f($,null,[e("ul",dt,[(p(),f($,null,M(d,(a,n)=>e("li",{class:y(["step",{active:n===o(r)}]),key:a},[e("div",rt,S(n+1),1),e("div",mt,S(a),1)],2)),64))]),e("div",ut,[(p(),h(X(v.value.component)))])],64))}},ct="/CW-space-vue/assets/visit-banner-Bj85rV6T.jpg",vt={class:"container block mt-5"},ft={class:"space-tabs"},_t=["onClick"],St={__name:"ReservePage",setup(T){const c=g(0),r=g(["預約參觀","預約空間"]),d=i=>{c.value=i};return(i,v)=>(p(),f($,null,[m(Z,{"images-url":o(ct),"page-title":r.value[c.value]},null,8,["images-url","page-title"]),e("div",vt,[e("div",ft,[(p(!0),f($,null,M(r.value,(u,t)=>(p(),f("div",{key:u,class:y(["space-tab-item",{active:t===c.value}]),onClick:a=>d(t)},S(u),11,_t))),128))]),c.value===0?(p(),h(ve,{key:0})):(p(),h(pt,{key:1}))])],64))}};export{St as default};
