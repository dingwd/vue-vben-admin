let a=document.createElement("style");a.innerHTML=".virtual-scroll-demo-wrap[data-v-7b6e7aa7]{display:flex;margin:0 30%;background:#fff;justify-content:center}.virtual-scroll-demo__item[data-v-7b6e7aa7]{height:40px;padding:0 20px;line-height:40px;border-bottom:1px solid #ddd}",document.head.appendChild(a);import{ao as t,y as e,a as i,cR as s,cS as l,i as d,o,j as r,k as c,n,aR as m,p}from"./index.acbb87a5.js";import"./xlsx.a48e520c.js";import{D as u}from"./index.8eebb15a.js";const v=t((()=>import("./index.52205071.js")));e(v);const h=(()=>{const a=[];for(let t=1;t<2e4;t++)a.push({title:"列表项"+t});return a})();var b=i({components:{VScroll:v,Divider:u},setup:()=>({data:h})});const f=m("data-v-7b6e7aa7");s("data-v-7b6e7aa7");const _={class:"p-4 virtual-scroll-demo"},x=p("基础滚动示例"),g={class:"virtual-scroll-demo-wrap"},j={class:"virtual-scroll-demo__item"},w=p("即使不可见，也预先加载50条数据，防止空白"),y={class:"virtual-scroll-demo-wrap"},D={class:"virtual-scroll-demo__item"};l();const H=f(((a,t,e,i,s,l)=>{const m=d("Divider"),p=d("VScroll");return o(),r("div",_,[c(m,null,{default:f((()=>[x])),_:1}),c("div",g,[c(p,{itemHeight:41,items:a.data,height:300,width:300},{default:f((({item:a})=>[c("div",j,n(a.title),1)])),_:1},8,["items"])]),c(m,null,{default:f((()=>[w])),_:1}),c("div",y,[c(p,{itemHeight:41,items:a.data,height:300,width:300,bench:50},{default:f((({item:a})=>[c("div",D,n(a.title),1)])),_:1},8,["items"])])])}));b.render=H,b.__scopeId="data-v-7b6e7aa7";export default b;