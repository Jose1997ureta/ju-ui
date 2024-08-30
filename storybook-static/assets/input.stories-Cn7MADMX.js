import{j as e}from"./clsx-DqFZfPE4.js";import{I as $,F as r}from"./form-item-BHIv01C9.js";import"./radio-D21XcBnu.js";import{a as n,A as s}from"./index-DvdVyUJd.js";import{I as G,a as H}from"./index-B3sNj1pq.js";import{r as m}from"./index-DqterGEq.js";import{u as J}from"./formik.esm-DCvPZFJY.js";import{c as K,a as M}from"./index.esm-CAdhWr5z.js";import"./index-ESNyr8ci.js";import"./assertThisInitialized-ByOjVySJ.js";import"./index-G64dNDM8.js";import"./index-DsMWkBeO.js";import"./iconBase-CdQTX8f7.js";import"./index-BQnZPrXV.js";const ie={title:"Components/Input",component:$,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"text"}},type:{options:["text","password","email"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},pattern:{options:["all","number","decimal","alphabetic","alphanumeric","allAlphabetic","numericAndSpace","numericAndComma"],control:{type:"select"}}}},p={args:{placeholder:"Ingresar tu nombre"}},c={args:{placeholder:"Ingresar tu nombre"},render:function(){const[a,o]=m.useState(!0),[t,u]=m.useState("");return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsx(r,{children:e.jsx(r.Input,{placeholder:"Ingresa tu nombre",value:t,onChange:l=>u(l.target.value)})}),e.jsx(r,{children:e.jsx(r.Input,{placeholder:"Ingresa tu password",type:a?"password":"text",endContent:e.jsx("div",{onClick:()=>o(!a),children:a?e.jsx(G,{}):e.jsx(H,{})}),onChange:l=>u(l.target.value),value:t})}),e.jsx(r,{children:e.jsx(r.Input,{placeholder:"Ingresa tu correo",type:"email",value:t,onChange:l=>u(l.target.value)})})]})}},I={args:{placeholder:"Ingresar tu nombre"},render:function(){return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsx(r,{children:e.jsx(r.Input,{placeholder:"Ingresa tu nombre",type:"text",size:"sm",value:""})}),e.jsx(r,{children:e.jsx(r.Input,{placeholder:"Ingresa tu password",type:"password",size:"md",value:""})}),e.jsx(r,{children:e.jsx(r.Input,{placeholder:"Ingresa tu correo",type:"email",size:"lg",value:""})})]})}},b={args:{placeholder:"Ingresar tu nombre"},render:function(){const[a,o]=m.useState("");return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsx(r,{children:e.jsx(r.Input,{placeholder:"Ingresar tu nombre",startContent:e.jsx(n,{}),value:a,onChange:t=>o(t.target.value),className:"rounded-full"})}),e.jsx(r,{children:e.jsx(r.Input,{placeholder:"Ingresar tu nombre",endContent:e.jsx(s,{}),value:a,onChange:t=>o(t.target.value)})}),e.jsx(r,{children:e.jsx(r.Input,{placeholder:"Ingresar tu nombre",startContent:e.jsx(n,{}),endContent:e.jsx(s,{}),value:a,onChange:t=>o(t.target.value)})})]})}},g={args:{placeholder:"Ingresar tu nombre"},render:function(){return e.jsxs("div",{className:"grid grid-cols-3 gap-5 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsxs(r,{children:[e.jsx(r.Label,{label:"Nombre",size:"md"}),e.jsx(r.Input,{value:"",id:"d",placeholder:"Ingresar tu nombre",startContent:e.jsx(n,{}),size:"md",disabled:!1,pattern:""})]}),e.jsxs(r,{children:[e.jsx(r.Label,{label:"Nombre",required:!0,size:"sm"}),e.jsx(r.Input,{value:"",placeholder:"Ingresar tu nombre",startContent:e.jsx(n,{}),size:"sm"})]}),e.jsxs(r,{children:[e.jsx(r.Label,{label:"Nombre",startContent:e.jsx(n,{}),size:"lg"}),e.jsx(r.Input,{value:"",placeholder:"Ingresar tu nombre",startContent:e.jsx(n,{}),size:"lg"})]}),e.jsxs(r,{children:[e.jsx(r.Label,{label:"Nombre",endContent:e.jsx(s,{})}),e.jsx(r.Input,{value:"",placeholder:"Ingresar tu nombre",startContent:e.jsx(n,{}),endContent:e.jsx(s,{})})]}),e.jsxs(r,{children:[e.jsx(r.Label,{label:"Nombre",startContent:e.jsx(n,{}),endContent:e.jsx(s,{})}),e.jsx(r.Input,{value:"",placeholder:"Ingresar tu nombre",startContent:e.jsx(n,{}),endContent:e.jsx(s,{})})]}),e.jsxs(r,{children:[e.jsx(r.Label,{label:"Nombre",startContent:e.jsx(n,{}),endContent:e.jsx(s,{}),required:!0}),e.jsx(r.Input,{value:"",placeholder:"Ingresar tu nombre",startContent:e.jsx(n,{}),endContent:e.jsx(s,{})})]})]})}},h={args:{placeholder:"Ingresar tu nombre"},render:function(){const{handleChange:a,handleBlur:o,errors:t,touched:u,values:l}=J({initialValues:{company:""},validationSchema:K().shape({company:M().required("El campo es requerido")}),onSubmit:j=>{console.log(j)}});return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsxs(r,{children:[e.jsx(r.Label,{label:"Empresa",startContent:e.jsx(n,{}),endContent:e.jsx(s,{})}),e.jsx(r.Input,{value:"",placeholder:"Ingresar tu nombre",startContent:e.jsx(n,{}),endContent:e.jsx(s,{})})]}),e.jsxs(r,{children:[e.jsx(r.Label,{label:"Empresa",startContent:e.jsx(n,{}),endContent:e.jsx(s,{}),required:!0}),e.jsx(r.Input,{name:"company",placeholder:"Ingresar tu nombre",startContent:e.jsx(n,{}),endContent:e.jsx(s,{}),value:l.company,onChange:a,onBlur:o,error:t.company,touched:u.company})]})]})}},x={args:{placeholder:"Ingresar tu nombre"},render:function(){const[a,o]=m.useState("Onroad");return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsxs(r,{children:[e.jsx(r.Label,{label:"Empresa",required:!0}),e.jsx(r.Input,{placeholder:"Ingresar tu nombre",startContent:e.jsx(n,{}),endContent:e.jsx(s,{}),disabled:!0,value:a,onChange:t=>o(t.target.value)})]}),e.jsxs(r,{disabled:!0,children:[e.jsx(r.Label,{label:"Empresa",required:!0}),e.jsx(r.Input,{placeholder:"Ingresar tu nombre",startContent:e.jsx(n,{}),endContent:e.jsx(s,{}),error:"Ingrese valor",touched:!0,value:a,onChange:t=>o(t.target.value)})]})]})}},v={args:{placeholder:"Ingresar tu nombre"},render:function(){const[a,o]=m.useState(""),[t,u]=m.useState(""),[l,j]=m.useState("");return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsxs(r,{children:[e.jsx(r.Label,{label:"All"}),e.jsx(r.Input,{placeholder:"Ingresar tu nombre",startContent:e.jsx(n,{}),pattern:"",value:a,onChange:i=>o(i.target.value)})]}),e.jsxs(r,{children:[e.jsx(r.Label,{label:"Number"}),e.jsx(r.Input,{placeholder:"Ingresar tu nombre",startContent:e.jsx(n,{}),pattern:"number",value:t,onChange:i=>u(i.target.value)})]}),e.jsxs(r,{children:[e.jsx(r.Label,{label:"Decimal"}),e.jsx(r.Input,{placeholder:"Ingresar tu nombre",startContent:e.jsx(n,{}),pattern:"decimal",value:l,onChange:i=>j(i.target.value)})]})]})}};var C,F,A;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    placeholder: "Ingresar tu nombre"
  }
}`,...(A=(F=p.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var y,f,N;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: "Ingresar tu nombre"
  },
  render: function Render() {
    const [isPassword, setIsPassword] = useState<boolean>(true);
    const [value, setValue] = useState<string>("");
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <FormItem>\r
                    <FormItem.Input placeholder="Ingresa tu nombre" value={value} onChange={e => setValue(e.target.value)} />\r
                </FormItem>\r
\r
                <FormItem>\r
                    <FormItem.Input placeholder="Ingresa tu password" type={isPassword ? "password" : "text"} endContent={<div onClick={() => setIsPassword(!isPassword)}>\r
                                {isPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}\r
                            </div>} onChange={e => setValue(e.target.value)} value={value} />\r
                </FormItem>\r
\r
                <FormItem>\r
                    <FormItem.Input placeholder="Ingresa tu correo" type="email" value={value} onChange={e => setValue(e.target.value)} />\r
                </FormItem>\r
            </div>;
  }
}`,...(N=(f=c.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var S,O,L;I.parameters={...I.parameters,docs:{...(S=I.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "Ingresar tu nombre"
  },
  render: function Render() {
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <FormItem>\r
                    <FormItem.Input placeholder="Ingresa tu nombre" type="text" size="sm" value="" />\r
                </FormItem>\r
                <FormItem>\r
                    <FormItem.Input placeholder="Ingresa tu password" type="password" size="md" value="" />\r
                </FormItem>\r
                <FormItem>\r
                    <FormItem.Input placeholder="Ingresa tu correo" type="email" size="lg" value="" />\r
                </FormItem>\r
            </div>;
  }
}`,...(L=(O=I.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var V,U,z;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    placeholder: "Ingresar tu nombre"
  },
  render: function Render() {
    const [value, setValue] = useState<string>("");
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <FormItem>\r
                    <FormItem.Input placeholder="Ingresar tu nombre" startContent={<AiOutlineUser />} value={value} onChange={e => setValue(e.target.value)} className="rounded-full" />\r
                </FormItem>\r
\r
                <FormItem>\r
                    <FormItem.Input placeholder="Ingresar tu nombre" endContent={<AiFillApi />} value={value} onChange={e => setValue(e.target.value)} />\r
                </FormItem>\r
\r
                <FormItem>\r
                    <FormItem.Input placeholder="Ingresar tu nombre" startContent={<AiOutlineUser />} endContent={<AiFillApi />} value={value} onChange={e => setValue(e.target.value)} />\r
                </FormItem>\r
            </div>;
  }
}`,...(z=(U=b.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var w,E,R;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: "Ingresar tu nombre"
  },
  render: function Render() {
    return <div className="grid grid-cols-3 gap-5 border py-4 px-4 border-neutral-300 rounded-md">\r
                <FormItem>\r
                    <FormItem.Label label="Nombre" size="md" />\r
                    <FormItem.Input value="" id="d" placeholder="Ingresar tu nombre" startContent={<AiOutlineUser />} size="md" disabled={false} pattern="" />\r
                </FormItem>\r
\r
                <FormItem>\r
                    <FormItem.Label label="Nombre" required size="sm" />\r
                    <FormItem.Input value="" placeholder="Ingresar tu nombre" startContent={<AiOutlineUser />} size="sm" />\r
                </FormItem>\r
\r
                <FormItem>\r
                    <FormItem.Label label="Nombre" startContent={<AiOutlineUser />} size="lg" />\r
                    <FormItem.Input value="" placeholder="Ingresar tu nombre" startContent={<AiOutlineUser />} size="lg" />\r
                </FormItem>\r
\r
                <FormItem>\r
                    <FormItem.Label label="Nombre" endContent={<AiFillApi />} />\r
                    <FormItem.Input value="" placeholder="Ingresar tu nombre" startContent={<AiOutlineUser />} endContent={<AiFillApi />} />\r
                </FormItem>\r
\r
                <FormItem>\r
                    <FormItem.Label label="Nombre" startContent={<AiOutlineUser />} endContent={<AiFillApi />} />\r
                    <FormItem.Input value="" placeholder="Ingresar tu nombre" startContent={<AiOutlineUser />} endContent={<AiFillApi />} />\r
                </FormItem>\r
\r
                <FormItem>\r
                    <FormItem.Label label="Nombre" startContent={<AiOutlineUser />} endContent={<AiFillApi />} required />\r
                    <FormItem.Input value="" placeholder="Ingresar tu nombre" startContent={<AiOutlineUser />} endContent={<AiFillApi />} />\r
                </FormItem>\r
            </div>;
  }
}`,...(R=(E=g.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var q,D,P;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    placeholder: "Ingresar tu nombre"
  },
  render: function Render() {
    const {
      handleChange,
      handleBlur,
      errors,
      touched,
      values
    } = useFormik({
      initialValues: {
        company: ""
      },
      validationSchema: Yup.object().shape({
        company: Yup.string().required("El campo es requerido")
      }),
      onSubmit: values => {
        console.log(values);
      }
    });
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <FormItem>\r
                    <FormItem.Label label="Empresa" startContent={<AiOutlineUser />} endContent={<AiFillApi />} />\r
                    <FormItem.Input value="" placeholder="Ingresar tu nombre" startContent={<AiOutlineUser />} endContent={<AiFillApi />} />\r
                </FormItem>\r
\r
                <FormItem>\r
                    <FormItem.Label label="Empresa" startContent={<AiOutlineUser />} endContent={<AiFillApi />} required />\r
                    <FormItem.Input name="company" placeholder="Ingresar tu nombre" startContent={<AiOutlineUser />} endContent={<AiFillApi />} value={values.company} onChange={handleChange} onBlur={handleBlur} error={errors.company} touched={touched.company} />\r
                </FormItem>\r
            </div>;
  }
}`,...(P=(D=h.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var B,k,W;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "Ingresar tu nombre"
  },
  render: function Render() {
    const [value, setValue] = useState<string>("Onroad");
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <FormItem>\r
                    <FormItem.Label label="Empresa" required />\r
                    <FormItem.Input placeholder="Ingresar tu nombre" startContent={<AiOutlineUser />} endContent={<AiFillApi />} disabled value={value} onChange={e => setValue(e.target.value)} />\r
                </FormItem>\r
\r
                <FormItem disabled>\r
                    <FormItem.Label label="Empresa" required />\r
                    <FormItem.Input placeholder="Ingresar tu nombre" startContent={<AiOutlineUser />} endContent={<AiFillApi />} error="Ingrese valor" touched value={value} onChange={e => setValue(e.target.value)} />\r
                </FormItem>\r
            </div>;
  }
}`,...(W=(k=x.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var T,Y,_;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: "Ingresar tu nombre"
  },
  render: function Render() {
    const [valueAll, setValueAll] = useState<string>("");
    const [valueNumber, setValueNumber] = useState<string>("");
    const [valueDecimal, setValueDecimal] = useState<string>("");
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <FormItem>\r
                    <FormItem.Label label="All" />\r
                    <FormItem.Input placeholder="Ingresar tu nombre" startContent={<AiOutlineUser />} pattern="" value={valueAll} onChange={e => setValueAll(e.target.value)} />\r
                </FormItem>\r
\r
                <FormItem>\r
                    <FormItem.Label label="Number" />\r
                    <FormItem.Input placeholder="Ingresar tu nombre" startContent={<AiOutlineUser />} pattern="number" value={valueNumber} onChange={e => setValueNumber(e.target.value)} />\r
                </FormItem>\r
\r
                <FormItem>\r
                    <FormItem.Label label="Decimal" />\r
                    <FormItem.Input placeholder="Ingresar tu nombre" startContent={<AiOutlineUser />} pattern="decimal" value={valueDecimal} onChange={e => setValueDecimal(e.target.value)} />\r
                </FormItem>\r
            </div>;
  }
}`,...(_=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};const pe=["Default","Type","Size","WithIcon","WithLabel","State","Disabled","Pattern"];export{p as Default,x as Disabled,v as Pattern,I as Size,h as State,c as Type,b as WithIcon,g as WithLabel,pe as __namedExportsOrder,ie as default};
