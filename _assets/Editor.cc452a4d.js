import{a as e,az as i,h as s,i as t,o,j as r,k as n,w as a}from"./index.dc2474c5.js";import"./xlsx.a48e520c.js";import"./index.42b663c7.js";import"./omit.b6891b40.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.483b4322.js";import"./CheckOutlined.443a507c.js";import{s as d}from"./index.51354d44.js";import"./index.24bd1cf1.js";import"./colors.36c97d94.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.954ddf05.js";import"./index.0316d2b5.js";import"./UpOutlined.a4448786.js";import"./DownOutlined.16ed644d.js";import"./index.ff51f9f3.js";import"./index.0ed8c2eb.js";import"./index.4b77d643.js";import{s as m}from"./index.c7a3deea.js";import"./CloseOutlined.b1e89784.js";import"./index.45a74137.js";import"./index.aa029d51.js";import"./LeftOutlined.9fba55b2.js";import"./functional.eee1b379.js";import"./RightOutlined.69404973.js";import"./useTimeout.ece0018d.js";import"./useDebounce.6bfe7d92.js";import"./useEventListener.242996ad.js";import"./useBreakpoint.0182c2b6.js";import"./resizeEvent.4ed1410d.js";import"./domUtils.7f740ab5.js";import"./useExpose.d292bc72.js";import"./animation.580f6c3e.js";import"./index.779102c9.js";import"./index.177e3769.js";import"./useWindowSizeFn.b69303c2.js";import"./uuid.40269c00.js";import"./download.5de813c4.js";import{s as p}from"./index.5318d3d0.js";const l=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:s})=>i(p,{value:e[s],onChange:i=>{e[s]=i}})}];var c=e({components:{BasicForm:d,CollapseContainer:m},setup(){const{createMessage:e}=s();return{schemas:l,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});const u={class:"m-4"};c.render=function(e,i,s,d,m,p){const l=t("BasicForm"),c=t("CollapseContainer");return o(),r("div",u,[n(c,{title:"富文本表单"},{default:a((()=>[n(l,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])};export default c;