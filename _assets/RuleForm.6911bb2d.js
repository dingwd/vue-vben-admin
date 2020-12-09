import{a as e,h as s,i,o,j as t,k as l,w as r,p as a}from"./index.dc2474c5.js";import"./xlsx.a48e520c.js";import"./index.42b663c7.js";import"./omit.b6891b40.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.483b4322.js";import"./CheckOutlined.443a507c.js";import{s as n}from"./index.51354d44.js";import"./index.24bd1cf1.js";import"./colors.36c97d94.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.954ddf05.js";import"./index.0316d2b5.js";import"./UpOutlined.a4448786.js";import"./DownOutlined.16ed644d.js";import"./index.ff51f9f3.js";import"./index.0ed8c2eb.js";import"./index.4b77d643.js";import{s as d}from"./index.c7a3deea.js";import"./CloseOutlined.b1e89784.js";import"./index.45a74137.js";import"./index.aa029d51.js";import"./LeftOutlined.9fba55b2.js";import"./functional.eee1b379.js";import"./RightOutlined.69404973.js";import"./useTimeout.ece0018d.js";import"./useDebounce.6bfe7d92.js";import"./useEventListener.242996ad.js";import"./useBreakpoint.0182c2b6.js";import"./resizeEvent.4ed1410d.js";import"./domUtils.7f740ab5.js";import"./useExpose.d292bc72.js";import"./animation.580f6c3e.js";import"./index.779102c9.js";import"./index.177e3769.js";import"./useWindowSizeFn.b69303c2.js";import"./uuid.40269c00.js";import"./download.5de813c4.js";import{u as c}from"./useForm.423dbb98.js";const p=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa"}]},{field:"field44",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,s)=>"1"===s?Promise.reject("值不能为1"):Promise.resolve(),trigger:"blur"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var m=e({components:{BasicForm:n,CollapseContainer:d},setup(){const{createMessage:e}=s(),[i,{validateFields:o,clearValidate:t,getFieldsValue:l,setFieldsValue:r}]=c({labelWidth:120,schemas:p,actionColOptions:{span:24}});return{register:i,schemas:p,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},getFormValues:function(){const s=l();e.success("values:"+JSON.stringify(s))},setFormValues:function(){r({field1:"1111",field5:["1"],field7:"1"})},validateForm:async function(){try{await o()}catch(e){}},resetValidate:async function(){t()}}}});const u={class:"m-4"},f={class:"mb-4"},b=a("手动校验表单"),j=a("清空校验信息"),v=a("获取表单值"),x=a("设置表单值");m.render=function(e,s,a,n,d,c){const p=i("a-button"),m=i("BasicForm"),g=i("CollapseContainer");return o(),t("div",u,[l("div",f,[l(p,{onClick:e.validateForm,class:"mr-2"},{default:r((()=>[b])),_:1},8,["onClick"]),l(p,{onClick:e.resetValidate,class:"mr-2"},{default:r((()=>[j])),_:1},8,["onClick"]),l(p,{onClick:e.getFormValues,class:"mr-2"},{default:r((()=>[v])),_:1},8,["onClick"]),l(p,{onClick:e.setFormValues,class:"mr-2"},{default:r((()=>[x])),_:1},8,["onClick"])]),l(g,{title:"表单校验"},{default:r((()=>[l(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])};export default m;