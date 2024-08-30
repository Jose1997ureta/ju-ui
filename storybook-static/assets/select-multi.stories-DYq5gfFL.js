import{j as e}from"./clsx-DqFZfPE4.js";import{S as c,F as o}from"./form-item-BHIv01C9.js";import"./radio-D21XcBnu.js";import{u}from"./formik.esm-DCvPZFJY.js";import{c as p,b as F}from"./index.esm-CAdhWr5z.js";import"./index-DqterGEq.js";import"./index-ESNyr8ci.js";import"./assertThisInitialized-ByOjVySJ.js";import"./index-G64dNDM8.js";import"./index-DsMWkBeO.js";import"./iconBase-CdQTX8f7.js";import"./index-B3sNj1pq.js";import"./index-BQnZPrXV.js";const g=[{id:"0",name:"Todo",color:"#00B8D9"},{id:"1",name:"Ocean",color:"#00B8D9"},{id:"2",name:"Blue",color:"#0052CC",disabled:!0},{id:"3",name:"Purple",color:"#5243AA"},{id:"4",name:"Red",color:"#FF5630"},{id:"5",name:"Orange",color:"#FF8B00"},{id:"6",name:"Yellow",color:"#FFC400"},{id:"7",name:"Green",color:"#36B37E"},{id:"8",name:"Forest",color:"#00875A"},{id:"9",name:"Slate",color:"#253858"},{id:"10",name:"Silver",color:"#666666"}],O={title:"Components/Select/Multi",component:c,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{},render:function(){const{values:m,handleBlur:i,setFieldValue:s}=u({initialValues:{name:["1","2"]},validationSchema:p().shape({name:F().min(1,"El campo es requerido")}),onSubmit:n=>{console.log(n)}});return e.jsx("div",{className:"flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md ring",children:e.jsxs(o,{children:[e.jsx(o.Label,{label:"Ingrese valor"}),e.jsx(o.Select,{isMulti:!0,size:"sm",data:g,name:"name",onChange:({data:n})=>s("name",n.map(d=>d.id)),value:m.name,onBlur:i("name"),isItemAll:"only",color:"danger"})]})})}};var a,l,t;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const {
      values,
      handleBlur,
      setFieldValue
    } = useFormik({
      initialValues: {
        name: ["1", "2"]
      },
      validationSchema: Yup.object().shape({
        name: Yup.array().min(1, "El campo es requerido")
      }),
      onSubmit: ids => {
        console.log(ids);
      }
    });
    return <div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md ring">\r
                <FormItem>\r
                    <FormItem.Label label="Ingrese valor" />\r
                    <FormItem.Select isMulti size="sm" data={colourOptions} name="name" onChange={({
          data
        }) => setFieldValue("name", data.map(el => el.id))} value={values.name} onBlur={handleBlur("name")} isItemAll="only" color="danger" />\r
                </FormItem>\r
            </div>;
  }
}`,...(t=(l=r.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const V=["Multi"];export{r as Multi,V as __namedExportsOrder,O as default};
