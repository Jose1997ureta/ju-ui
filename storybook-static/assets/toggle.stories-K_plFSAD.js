import{j as e}from"./clsx-DqFZfPE4.js";import{a}from"./form-item-BHIv01C9.js";import"./radio-D21XcBnu.js";import{r as l}from"./index-DqterGEq.js";import"./index-ESNyr8ci.js";import"./assertThisInitialized-ByOjVySJ.js";import"./index-G64dNDM8.js";import"./index-DsMWkBeO.js";import"./iconBase-CdQTX8f7.js";import"./index-B3sNj1pq.js";import"./index-BQnZPrXV.js";const Q={title:"Components/Toogle",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{options:["primary","secondary","neutral","success","danger","warning"],control:{type:"select"}},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}},value:{control:{type:"boolean"}}}},d={args:{}},i={args:{},render:function(){const[r,n]=l.useState(!1),o=s=>{n(s)};return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsx(a,{id:"toogle1",value:r,onChange:o,size:"sm"}),e.jsx(a,{id:"toogle2",value:r,onChange:o,size:"md"}),e.jsx(a,{id:"toogle3",value:r,onChange:o,size:"lg"})]})}},u={args:{},render:function(){const[r,n]=l.useState(!1),o=s=>{n(s)};return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsx(a,{id:"toogle1",value:r,onChange:o,color:"primary"}),e.jsx(a,{id:"toogle2",value:r,onChange:o,color:"secondary"}),e.jsx(a,{id:"toogle3",value:r,onChange:o,color:"neutral"}),e.jsx(a,{id:"toogle4",value:r,onChange:o,color:"success"}),e.jsx(a,{id:"toogle5",value:r,onChange:o,color:"warning"}),e.jsx(a,{id:"toogle6",value:r,onChange:o,color:"danger"})]})}},c={args:{},render:function(){const[r,n]=l.useState(!1),o=s=>{n(s)};return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsx(a,{id:"toogle1",value:r,onChange:o,label:"Empresa",color:"primary",required:!0}),e.jsx(a,{id:"toogle2",value:r,onChange:o,label:"Empresa",color:"secondary",description:"Empresa Onroad / Expreso",required:!0}),e.jsx(a,{id:"toogle3",value:r,onChange:o,color:"neutral",description:"Empresa Onroad / Expreso",required:!0})]})}},g={args:{},render:function(){const[r,n]=l.useState(!1),o=s=>{n(s)};return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsx(a,{id:"toogle1",value:r,onChange:o,label:"Empresa",color:"primary",required:!0,disabled:!0}),e.jsx(a,{id:"toogle2",value:r,onChange:o,label:"Empresa",color:"secondary",description:"Empresa Onroad / Expreso",required:!0,disabled:!0}),e.jsx(a,{id:"toogle3",value:r,onChange:o,color:"neutral",description:"Empresa Onroad / Expreso",required:!0,disabled:!0})]})}},p={args:{},render:function(){const[r,n]=l.useState(!1),o=s=>{n(s)};return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsx(a,{id:"toogle1",value:r,onChange:o,label:"Empresa",color:"primary",required:!0,positionLabel:"start",description:"Empresa Onroad / Expreso"}),e.jsx(a,{id:"toogle2",value:r,onChange:o,label:"Empresa",color:"secondary",description:"Empresa Onroad / Expreso",required:!0,positionLabel:"end"})]})}},m={args:{},render:function(){const[r,n]=l.useState(!1),o=s=>{n(s)};return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsx(a,{id:"toogle1",value:r,onChange:o,label:"Empresa",color:"primary",required:!0,description:"Empresa Onroad / Expreso",error:"El campo es requerido",touched:!0}),e.jsx(a,{id:"toogle2",value:r,onChange:o,label:"Empresa",color:"secondary",description:"Empresa Onroad / Expreso",required:!0,error:"El campo es requerido",touched:!0,positionLabel:"start"}),e.jsx(a,{id:"toogle3",value:r,onChange:o,label:"Empresa",color:"secondary",description:"Empresa Onroad / Expreso",required:!0,error:"El campo es requerido",touched:!0,positionLabel:"start"})]})}};var h,b,C;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {}
}`,...(C=(b=d.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var x,v,E;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [value, setValue] = useState<boolean>(false);
    const handleChange = (state: boolean) => {
      setValue(state);
    };
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <Toggle id="toogle1" value={value} onChange={handleChange} size="sm" />\r
                <Toggle id="toogle2" value={value} onChange={handleChange} size="md" />\r
                <Toggle id="toogle3" value={value} onChange={handleChange} size="lg" />\r
            </div>;
  }
}`,...(E=(v=i.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var f,y,q;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [value, setValue] = useState<boolean>(false);
    const handleChange = (state: boolean) => {
      setValue(state);
    };
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <Toggle id="toogle1" value={value} onChange={handleChange} color="primary" />\r
                <Toggle id="toogle2" value={value} onChange={handleChange} color="secondary" />\r
                <Toggle id="toogle3" value={value} onChange={handleChange} color="neutral" />\r
                <Toggle id="toogle4" value={value} onChange={handleChange} color="success" />\r
                <Toggle id="toogle5" value={value} onChange={handleChange} color="warning" />\r
                <Toggle id="toogle6" value={value} onChange={handleChange} color="danger" />\r
            </div>;
  }
}`,...(q=(y=u.parameters)==null?void 0:y.docs)==null?void 0:q.source}}};var j,S,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [value, setValue] = useState<boolean>(false);
    const handleChange = (state: boolean) => {
      setValue(state);
    };
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <Toggle id="toogle1" value={value} onChange={handleChange} label="Empresa" color="primary" required />\r
                <Toggle id="toogle2" value={value} onChange={handleChange} label="Empresa" color="secondary" description="Empresa Onroad / Expreso" required />\r
                <Toggle id="toogle3" value={value} onChange={handleChange} color="neutral" description="Empresa Onroad / Expreso" required />\r
            </div>;
  }
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var O,V,R;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [value, setValue] = useState<boolean>(false);
    const handleChange = (state: boolean) => {
      setValue(state);
    };
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <Toggle id="toogle1" value={value} onChange={handleChange} label="Empresa" color="primary" required disabled />\r
                <Toggle id="toogle2" value={value} onChange={handleChange} label="Empresa" color="secondary" description="Empresa Onroad / Expreso" required disabled />\r
                <Toggle id="toogle3" value={value} onChange={handleChange} color="neutral" description="Empresa Onroad / Expreso" required disabled />\r
            </div>;
  }
}`,...(R=(V=g.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var N,L,z;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [value, setValue] = useState<boolean>(false);
    const handleChange = (state: boolean) => {
      setValue(state);
    };
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <Toggle id="toogle1" value={value} onChange={handleChange} label="Empresa" color="primary" required positionLabel="start" description="Empresa Onroad / Expreso" />\r
                <Toggle id="toogle2" value={value} onChange={handleChange} label="Empresa" color="secondary" description="Empresa Onroad / Expreso" required positionLabel="end" />\r
            </div>;
  }
}`,...(z=(L=p.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var D,w,P;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [value, setValue] = useState<boolean>(false);
    const handleChange = (state: boolean) => {
      setValue(state);
    };
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <Toggle id="toogle1" value={value} onChange={handleChange} label="Empresa" color="primary" required description="Empresa Onroad / Expreso" error="El campo es requerido" touched />\r
                <Toggle id="toogle2" value={value} onChange={handleChange} label="Empresa" color="secondary" description="Empresa Onroad / Expreso" required error="El campo es requerido" touched positionLabel="start" />\r
                <Toggle id="toogle3" value={value} onChange={handleChange} label="Empresa" color="secondary" description="Empresa Onroad / Expreso" required error="El campo es requerido" touched positionLabel="start" />\r
            </div>;
  }
}`,...(P=(w=m.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const U=["Default","Size","Color","Label","Disabled","Position","State"];export{u as Color,d as Default,g as Disabled,c as Label,p as Position,i as Size,m as State,U as __namedExportsOrder,Q as default};
