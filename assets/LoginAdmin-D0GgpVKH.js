import{j as d,e as p,o as u,c as m,b as e,l as n,E as r}from"./index-Dxvrt6TE.js";import{a as _}from"./axios-B4uVmeYG.js";var f={VITE_DATA_URL:"https://json-server-vercel-cw-space.vercel.app",VITE_PATH:"cw-space-vue",BASE_URL:"/CW-space-vue/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const v={class:"block container",style:{"margin-top":"200px"}},w=e("div",{class:"h2 mb-3"},"登入",-1),h={class:"form-signin w-50 m-auto"},b={class:"form-floating mb-3"},g=e("label",{for:"inputUsername"},"Email address",-1),E={class:"form-floating"},T=e("label",{for:"inputPassword"},"Password",-1),A={__name:"LoginAdmin",setup(k){const{VITE_DATA_URL:l}=f,i=d(),s=p({email:"",password:""}),c=async()=>{const t=`${l}/login`;try{await _.post(t,s.value).then(o=>{console.log(o);const a=o.data.accessToken;document.cookie=`spaceToken=${a};max-age=3600;`,i.push("/dashboard")})}catch{console.error("帳號或密碼錯誤")}};return(t,o)=>(u(),m("div",v,[w,e("div",h,[e("div",b,[n(e("input",{type:"email",class:"form-control",id:"inputUsername",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":o[0]||(o[0]=a=>s.value.email=a)},null,512),[[r,s.value.email]]),g]),e("div",E,[n(e("input",{type:"password",class:"form-control",id:"inputPassword",placeholder:"Password",required:"","onUpdate:modelValue":o[1]||(o[1]=a=>s.value.password=a)},null,512),[[r,s.value.password]]),T]),e("button",{type:"button",class:"btn btn-lg btn-primary w-100 mt-3",onClick:c}," 登入 ")])]))}};export{A as default};
