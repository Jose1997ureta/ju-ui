import{j as e}from"./clsx-DqFZfPE4.js";import{S as R,F as r}from"./form-item-BHIv01C9.js";import"./radio-D21XcBnu.js";import{a as g}from"./index-DvdVyUJd.js";import{u as m}from"./formik.esm-DCvPZFJY.js";import{B as N}from"./button-CZXEs_Ak.js";import"./button-icon-CWfaple7.js";import{r as O}from"./index-DqterGEq.js";import"./index-ESNyr8ci.js";import"./assertThisInitialized-ByOjVySJ.js";import"./index-G64dNDM8.js";import"./index-DsMWkBeO.js";import"./iconBase-CdQTX8f7.js";import"./index-B3sNj1pq.js";import"./index-BQnZPrXV.js";const c=[{id:"1",name:"Ocean",color:"#00B8D9"},{id:"2",name:"Blue",color:"#0052CC",disabled:!0},{id:"3",name:"Purple",color:"#5243AA"},{id:"4",name:"Red",color:"#FF5630"},{id:"5",name:"Orange",color:"#FF8B00"},{id:"6",name:"Yellow",color:"#FFC400"},{id:"7",name:"Green",color:"#36B37E"},{id:"8",name:"Forest",color:"#00875A"},{id:"9",name:"Slate",color:"#253858"},{id:"10",name:"Silver",color:"#666666"}],z={title:"Components/Select/Select",component:R,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{},render:function(){const{values:a,handleBlur:o,setFieldValue:t}=m({initialValues:{id:""},onSubmit:n=>{console.log(n)}});return e.jsx("div",{className:"flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md",children:e.jsxs(r,{children:[e.jsx(r.Label,{label:"Ingrese valor"}),e.jsx(r.Select,{name:"id",data:c,onChange:({item:n})=>t("id",n.id),color:"primary",value:a.id,onBlur:o("id"),widthMenu:400})]})})}},i={args:{},render:function(){const{values:a,handleBlur:o,setFieldValue:t}=m({initialValues:{id:""},onSubmit:n=>{console.log(n)}});return e.jsx("div",{className:"flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md",children:e.jsxs(r,{children:[e.jsx(r.Label,{label:"Ingrese valor"}),e.jsx(r.Select,{data:c,name:"id",onChange:({item:n})=>t("id",n.id),startValueContent:e.jsx(g,{onMouseDown:n=>{n.preventDefault(),n.stopPropagation(),alert()}}),value:a.id,onBlur:o("id")})]})})}},d={args:{},render:function(){const{values:a,handleBlur:o,setFieldValue:t}=m({initialValues:{id:""},onSubmit:n=>{console.log(n)}});return e.jsx("div",{className:"flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md",children:e.jsxs(r,{children:[e.jsx(r.Label,{label:"Ingrese valor"}),e.jsx(r.Select,{data:c,name:"id",onChange:({item:n})=>t("id",n.id),childrenOption:({data:n})=>e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(g,{}),e.jsx("p",{className:"text-sm",children:n.name})]}),value:a.id,onBlur:o("id")})]})})}},u={args:{},render:function(){const a=O.useRef(null),{values:o,handleBlur:t,setFieldValue:n}=m({initialValues:{id:""},onSubmit:l=>{console.log(l)}});return e.jsxs("div",{className:"flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsx(N,{onClick:()=>{var l;return(l=a.current)==null?void 0:l.focus()},children:"hola"}),e.jsxs(r,{children:[e.jsx(r.Label,{label:"Ingrese valor"}),e.jsx(r.Select,{ref:a,data:c,name:"id",onChange:({item:l})=>n("id",l.id),childrenSingleValue:({data:l})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(g,{}),e.jsx("p",{children:l.name})]}),value:o.id,onBlur:t("id")})]})]})}};var x,v,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const {
      values,
      handleBlur,
      setFieldValue
    } = useFormik({
      initialValues: {
        id: ""
      },
      onSubmit: ids => {
        console.log(ids);
      }
    });
    return <div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md">\r
                <FormItem>\r
                    <FormItem.Label label="Ingrese valor" />\r
                    <FormItem.Select name="id" data={colourOptions} onChange={({
          item
        }) => setFieldValue("id", item.id)} color="primary" value={values.id} onBlur={handleBlur("id")} widthMenu={400} />\r
                </FormItem>\r
            </div>;
  }
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var F,b,f;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const {
      values,
      handleBlur,
      setFieldValue
    } = useFormik({
      initialValues: {
        id: ""
      },
      onSubmit: ids => {
        console.log(ids);
      }
    });
    return <div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md">\r
                <FormItem>\r
                    <FormItem.Label label="Ingrese valor" />\r
                    <FormItem.Select data={colourOptions} name="id" onChange={({
          item
        }) => setFieldValue("id", item.id)} startValueContent={<AiOutlineUser onMouseDown={e => {
          e.preventDefault();
          e.stopPropagation();
          alert();
        }} />} value={values.id} onBlur={handleBlur("id")} />\r
                </FormItem>\r
            </div>;
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var S,I,B;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const {
      values,
      handleBlur,
      setFieldValue
    } = useFormik({
      initialValues: {
        id: ""
      },
      onSubmit: ids => {
        console.log(ids);
      }
    });
    return <div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md">\r
                <FormItem>\r
                    <FormItem.Label label="Ingrese valor" />\r
                    <FormItem.Select data={colourOptions} name="id" onChange={({
          item
        }) => setFieldValue("id", item.id)} childrenOption={({
          data
        }) => {
          return <div className="flex items-center gap-1">\r
                                    <AiOutlineUser />\r
                                    <p className="text-sm">{data.name}</p>\r
                                </div>;
        }} value={values.id} onBlur={handleBlur("id")} />\r
                </FormItem>\r
            </div>;
  }
}`,...(B=(I=d.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var j,V,C;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const selectRef = useRef<SelectInstance<any> | null>(null);
    const {
      values,
      handleBlur,
      setFieldValue
    } = useFormik({
      initialValues: {
        id: ""
      },
      onSubmit: ids => {
        console.log(ids);
      }
    });
    return <div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md">\r
                <Button onClick={() => selectRef.current?.focus()}>hola</Button>\r
                <FormItem>\r
                    <FormItem.Label label="Ingrese valor" />\r
                    <FormItem.Select ref={selectRef} data={colourOptions} name="id" onChange={({
          item
        }) => setFieldValue("id", item.id)} childrenSingleValue={({
          data
        }) => {
          return <div className="flex items-center gap-2">\r
                                    <AiOutlineUser />\r
                                    <p>{data.name}</p>\r
                                </div>;
        }} value={values.id} onBlur={handleBlur("id")} />\r
                </FormItem>\r
            </div>;
  }
}`,...(C=(V=u.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const H=["WidthMenu","IconStart","CustomItem","CustomValue"];export{d as CustomItem,u as CustomValue,i as IconStart,s as WidthMenu,H as __namedExportsOrder,z as default};
