import{j as e}from"./clsx-DqFZfPE4.js";import{S as t,F as n}from"./form-item-BHIv01C9.js";import"./radio-D21XcBnu.js";import{a as H}from"./index-DvdVyUJd.js";import{u as s}from"./formik.esm-DCvPZFJY.js";import{c as K,a as M}from"./index.esm-CAdhWr5z.js";import{r as S}from"./index-DqterGEq.js";import"./index-ESNyr8ci.js";import"./assertThisInitialized-ByOjVySJ.js";import"./index-G64dNDM8.js";import"./index-DsMWkBeO.js";import"./iconBase-CdQTX8f7.js";import"./index-B3sNj1pq.js";import"./index-BQnZPrXV.js";const i=[{id:"1",name:"Ocean",color:"#00B8D9"},{id:"2",name:"Blue",color:"#0052CC",disabled:!0},{id:"3",name:"Purple",color:"#5243AA"},{id:"4",name:"Red",color:"#FF5630"},{id:"5",name:"Orange",color:"#FF8B00"},{id:"6",name:"Yellow",color:"#FFC400"},{id:"7",name:"Green",color:"#36B37E"},{id:"8",name:"Forest",color:"#00875A"},{id:"9",name:"Slate",color:"#253858"},{id:"10",name:"Silver",color:"#666666"}],ue={title:"Components/Select",component:t,parameters:{layout:"centered"},tags:["autodocs"]},p={args:{}},g={args:{},render:function(){const{values:a,handleBlur:l,setFieldValue:o}=s({initialValues:{id:""},onSubmit:r=>{console.log(r)}});return e.jsxs("div",{className:"grid grid-cols-1 gap-2 border py-4 px-4 border-neutral-300 rounded-md w-[300px]",children:[e.jsx(t,{name:"id",data:i,onChange:({item:r})=>o("id",r.id),color:"primary",value:a.id,onBlur:l("id")}),e.jsx(t,{data:i,name:"id",onChange:({item:r})=>o("id",r.id),color:"secondary",value:a.id,onBlur:l("id")}),e.jsx(t,{name:"id",data:i,onChange:({item:r})=>o("id",r.id),color:"neutral",value:a.id,onBlur:l("id")})]})}},v={args:{},render:function(){const{values:a,handleBlur:l,setFieldValue:o}=s({initialValues:{id:""},onSubmit:r=>{console.log(r)}});return e.jsxs("div",{className:"grid grid-cols-1 gap-2 border py-4 px-4 border-neutral-300 rounded-md w-[300px]",children:[e.jsx(t,{name:"id",data:i,onChange:({item:r})=>o("id",r.id),size:"sm",value:a.id,onBlur:l("id")}),e.jsx(t,{data:i,name:"id",onChange:({item:r})=>o("id",r.id),size:"md",value:a.id,onBlur:l("id")}),e.jsx(t,{size:"lg",name:"id",data:i,onChange:({item:r})=>o("id",r.id),value:a.id,onBlur:l("id")})]})}},b={args:{},render:function(){const{values:a,handleBlur:l,setFieldValue:o}=s({initialValues:{id:""},onSubmit:r=>{console.log(r)}});return e.jsxs("div",{className:"flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsxs(n,{children:[e.jsx(n.Label,{label:"Ingrese valor"}),e.jsx(n.Select,{name:"id",data:i,onChange:({item:r})=>o("id",r.id),color:"primary",value:a.id,onBlur:l("id")})]}),e.jsxs(n,{children:[e.jsx(n.Label,{label:"Ingrese valor",required:!0}),e.jsx(n.Select,{name:"id",data:i,onChange:({item:r})=>o("id",r.id),color:"primary",value:a.id,onBlur:l("id")})]}),e.jsxs(n,{children:[e.jsx(n.Label,{label:"Ingrese valor",required:!0,startContent:e.jsx(H,{})}),e.jsx(n.Select,{name:"id",data:i,onChange:({item:r})=>o("id",r.id),color:"primary",value:a.id,onBlur:l("id")})]})]})}},h={args:{},render:function(){const[a,l]=S.useState([]),[o,r]=S.useState(!1),{values:c,handleBlur:d,setFieldValue:J}=s({initialValues:{id:""},onSubmit:m=>{console.log(m)}});return S.useEffect(()=>{r(!0);const m=setTimeout(()=>{l(i),r(!1)},3e3);return()=>{clearTimeout(m)}},[]),e.jsx("div",{className:"flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md",children:e.jsxs(n,{children:[e.jsx(n.Label,{label:"Ingrese valor"}),e.jsx(n.Select,{name:"id",data:a,onChange:({item:m})=>J("id",m.id),color:"primary",value:c.id,onBlur:d("id"),isLoading:o})]})})}},F={args:{},render:function(){const{values:a,handleBlur:l,setFieldValue:o}=s({initialValues:{id:""},onSubmit:r=>{console.log(r)}});return e.jsxs("div",{className:"flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsxs(n,{disabled:!0,children:[e.jsx(n.Label,{label:"Ingrese valor"}),e.jsx(n.Select,{name:"id",data:i,onChange:({item:r})=>o("id",r.id),color:"primary",value:a.id,onBlur:l("id")})]}),e.jsxs(n,{disabled:!0,children:[e.jsx(n.Label,{label:"Ingrese valor",required:!0}),e.jsx(n.Select,{name:"id",data:i,onChange:({item:r})=>o("id",r.id),color:"primary",value:a.id,onBlur:l("id")})]}),e.jsxs(n,{disabled:!0,children:[e.jsx(n.Label,{label:"Ingrese valor",required:!0,startContent:e.jsx(H,{})}),e.jsx(n.Select,{name:"id",data:i,onChange:({item:r})=>o("id",r.id),color:"primary",value:a.id,onBlur:l("id")})]})]})}},x={args:{},render:function(){const{values:a,errors:l,touched:o,handleBlur:r,setFieldValue:c}=s({initialValues:{id:""},validationSchema:K().shape({id:M().required("El campo es requerido")}),onSubmit:d=>{console.log(d)}});return e.jsxs("div",{className:"flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsxs(n,{children:[e.jsx(n.Label,{label:"Ingrese valor"}),e.jsx(n.Select,{name:"id",data:i,onChange:({item:d})=>c("id",d.id),color:"primary",value:a.id,onBlur:r("id"),error:l.id,touched:o.id})]}),e.jsxs(n,{children:[e.jsx(n.Label,{label:"Ingrese valor",required:!0}),e.jsx(n.Select,{name:"id",data:i,onChange:({item:d})=>c("id",d.id),color:"primary",value:a.id,onBlur:r("id"),error:l.id,touched:o.id})]})]})}},B={args:{},render:function(){const{values:a,handleBlur:l,setFieldValue:o}=s({initialValues:{id:""},onSubmit:r=>{console.log(r)}});return e.jsx("div",{className:"flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md",children:e.jsxs(n,{children:[e.jsx(n.Label,{label:"Ingrese valor"}),e.jsx(n.Select,{name:"id",data:i,onChange:({item:r})=>o("id",r.id),color:"primary",value:a.id,onBlur:l("id")})]})})}};var I,j,V;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {}
}`,...(V=(j=p.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var C,f,y;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    return <div className="grid grid-cols-1 gap-2 border py-4 px-4 border-neutral-300 rounded-md w-[300px]">\r
                <Select name="id" data={colourOptions} onChange={({
        item
      }) => setFieldValue("id", item.id)} color="primary" value={values.id} onBlur={handleBlur("id")} />\r
                <Select data={colourOptions} name="id" onChange={({
        item
      }) => setFieldValue("id", item.id)} color="secondary" value={values.id} onBlur={handleBlur("id")} />\r
                <Select name="id" data={colourOptions} onChange={({
        item
      }) => setFieldValue("id", item.id)} color="neutral" value={values.id} onBlur={handleBlur("id")} />\r
            </div>;
  }
}`,...(y=(f=g.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var L,O,R;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    return <div className="grid grid-cols-1 gap-2 border py-4 px-4 border-neutral-300 rounded-md w-[300px]">\r
                <Select name="id" data={colourOptions} onChange={({
        item
      }) => setFieldValue("id", item.id)} size="sm" value={values.id} onBlur={handleBlur("id")} />\r
                <Select data={colourOptions} name="id" onChange={({
        item
      }) => setFieldValue("id", item.id)} size="md" value={values.id} onBlur={handleBlur("id")} />\r
                <Select size="lg" name="id" data={colourOptions} onChange={({
        item
      }) => setFieldValue("id", item.id)} value={values.id} onBlur={handleBlur("id")} />\r
            </div>;
  }
}`,...(R=(O=v.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,N,k;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
        }) => setFieldValue("id", item.id)} color="primary" value={values.id} onBlur={handleBlur("id")} />\r
                </FormItem>\r
                <FormItem>\r
                    <FormItem.Label label="Ingrese valor" required />\r
                    <FormItem.Select name="id" data={colourOptions} onChange={({
          item
        }) => setFieldValue("id", item.id)} color="primary" value={values.id} onBlur={handleBlur("id")} />\r
                </FormItem>\r
                <FormItem>\r
                    <FormItem.Label label="Ingrese valor" required startContent={<AiOutlineUser />} />\r
                    <FormItem.Select name="id" data={colourOptions} onChange={({
          item
        }) => setFieldValue("id", item.id)} color="primary" value={values.id} onBlur={handleBlur("id")} />\r
                </FormItem>\r
            </div>;
  }
}`,...(k=(N=b.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var z,D,E;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
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
    useEffect(() => {
      setLoading(true);
      const time = setTimeout(() => {
        setData(colourOptions);
        setLoading(false);
      }, 3000);
      return () => {
        clearTimeout(time);
      };
    }, []);
    return <div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md">\r
                <FormItem>\r
                    <FormItem.Label label="Ingrese valor" />\r
                    <FormItem.Select name="id" data={data} onChange={({
          item
        }) => setFieldValue("id", item.id)} color="primary" value={values.id} onBlur={handleBlur("id")} isLoading={loading} />\r
                </FormItem>\r
            </div>;
  }
}`,...(E=(D=h.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var A,w,T;F.parameters={...F.parameters,docs:{...(A=F.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
                <FormItem disabled>\r
                    <FormItem.Label label="Ingrese valor" />\r
                    <FormItem.Select name="id" data={colourOptions} onChange={({
          item
        }) => setFieldValue("id", item.id)} color="primary" value={values.id} onBlur={handleBlur("id")} />\r
                </FormItem>\r
                <FormItem disabled>\r
                    <FormItem.Label label="Ingrese valor" required />\r
                    <FormItem.Select name="id" data={colourOptions} onChange={({
          item
        }) => setFieldValue("id", item.id)} color="primary" value={values.id} onBlur={handleBlur("id")} />\r
                </FormItem>\r
                <FormItem disabled>\r
                    <FormItem.Label label="Ingrese valor" required startContent={<AiOutlineUser />} />\r
                    <FormItem.Select name="id" data={colourOptions} onChange={({
          item
        }) => setFieldValue("id", item.id)} color="primary" value={values.id} onBlur={handleBlur("id")} />\r
                </FormItem>\r
            </div>;
  }
}`,...(T=(w=F.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var U,Y,_;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const {
      values,
      errors,
      touched,
      handleBlur,
      setFieldValue
    } = useFormik({
      initialValues: {
        id: ""
      },
      validationSchema: Yup.object().shape({
        id: Yup.string().required("El campo es requerido")
      }),
      onSubmit: ids => {
        console.log(ids);
      }
    });
    return <div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md">\r
                <FormItem>\r
                    <FormItem.Label label="Ingrese valor" />\r
                    <FormItem.Select name="id" data={colourOptions} onChange={({
          item
        }) => setFieldValue("id", item.id)} color="primary" value={values.id} onBlur={handleBlur("id")} error={errors.id} touched={touched.id} />\r
                </FormItem>\r
                <FormItem>\r
                    <FormItem.Label label="Ingrese valor" required />\r
                    <FormItem.Select name="id" data={colourOptions} onChange={({
          item
        }) => setFieldValue("id", item.id)} color="primary" value={values.id} onBlur={handleBlur("id")} error={errors.id} touched={touched.id} />\r
                </FormItem>\r
            </div>;
  }
}`,...(_=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var $,G,P;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
        }) => setFieldValue("id", item.id)} color="primary" value={values.id} onBlur={handleBlur("id")} />\r
                </FormItem>\r
            </div>;
  }
}`,...(P=(G=B.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const me=["Default","Color","Size","Label","Loading","Disabled","State","Search"];export{g as Color,p as Default,F as Disabled,b as Label,h as Loading,B as Search,v as Size,x as State,me as __namedExportsOrder,ue as default};
