import{b as r,ck as e,r as n,cG as s,f as a,c_ as o,co as t,t as i,ae as u,cH as c,F as l,ao as w,y as f}from"./index.acbb87a5.js";const p=r({});function D(){if(!e())throw new Error("Please put useDrawer function in the setup function!");const r=n(null),u=n(!1),c=n("");const l=()=>{const e=a(r);if(!e)throw new Error("instance is undefined!");return e};return[function(e,n){s((()=>{r.value=null,u.value=null,p[a(c)]=null})),a(u)&&o()&&e===a(r)||(c.value=n,r.value=e,u.value=!0)},{setDrawerProps:r=>{l().setDrawerProps(r)},openDrawer:(r=!0,e,n=!0)=>{if(l().setDrawerProps({visible:r}),!e)return;if(n)return p[a(c)]=null,void(p[a(c)]=e);t(i(p[a(c)]),e)||(p[a(c)]=e)}}]}const d=r=>{const o=n(null),t=e(),i=n("");if(!t)throw new Error("useDrawerInner instance is undefined!");const w=()=>{const r=a(o);if(!r)throw new Error("useDrawerInner instance is undefined!");return r};return u((()=>{const e=p[a(i)];e&&r&&c(r)&&l((()=>{r(e)}))})),[(r,e)=>{s((()=>{o.value=null})),i.value=e,o.value=r,t.emit("register",r,e)},{changeLoading:(r=!0)=>{w().setDrawerProps({loading:r})},changeOkLoading:(r=!0)=>{w().setDrawerProps({confirmLoading:r})},closeDrawer:()=>{w().setDrawerProps({visible:!1})},setDrawerProps:r=>{w().setDrawerProps(r)}}]},v=w((()=>import("./BasicDrawer.95d7a177.js")));f(v);export{v as B,d as a,D as u};