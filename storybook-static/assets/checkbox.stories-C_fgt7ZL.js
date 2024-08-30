import{j as e}from"./clsx-DqFZfPE4.js";import{C as o}from"./form-item-BHIv01C9.js";import"./radio-D21XcBnu.js";import{r as d}from"./index-DqterGEq.js";import"./index-ESNyr8ci.js";import"./assertThisInitialized-ByOjVySJ.js";import"./index-G64dNDM8.js";import"./index-DsMWkBeO.js";import"./iconBase-CdQTX8f7.js";import"./index-B3sNj1pq.js";import"./index-BQnZPrXV.js";const Q={title:"Components/CheckBox",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{options:["primary","secondary","neutral","success","danger","warning"],control:{type:"select"}},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}},value:{control:{type:"boolean"}}}},t={args:{}},l={args:{},render:function(){const[r,n]=d.useState(!1),a=s=>{n(s)};return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsx(o,{id:"checkbox",value:r,onChange:a,size:"sm"}),e.jsx(o,{id:"checkbox1",value:r,onChange:a,size:"md"}),e.jsx(o,{id:"checkbox2",value:r,onChange:a,size:"lg"})]})}},i={args:{},render:function(){const[r,n]=d.useState(!1),a=s=>{n(s)};return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsx(o,{id:"checkbox1",value:r,onChange:a,color:"primary"}),e.jsx(o,{id:"checkbox2",value:r,onChange:a,color:"secondary"}),e.jsx(o,{id:"checkbox3",value:r,onChange:a,color:"neutral"}),e.jsx(o,{id:"checkbox4",value:r,onChange:a,color:"success"}),e.jsx(o,{id:"checkbox5",value:r,onChange:a,color:"warning"}),e.jsx(o,{id:"checkbox6",value:r,onChange:a,color:"danger"})]})}},u={args:{},render:function(){const[r,n]=d.useState(!1),a=s=>{n(s)};return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsx(o,{id:"checkbox1",value:r,onChange:a,label:"Empresa",color:"primary",required:!0}),e.jsx(o,{id:"checkbox2",value:r,onChange:a,label:"Empresa",color:"secondary",description:"Empresa Onroad / Expreso",required:!0}),e.jsx(o,{id:"checkbox3",value:r,onChange:a,color:"neutral",description:"Empresa Onroad / Expreso",required:!0})]})}},p={args:{},render:function(){const[r,n]=d.useState(!1),a=s=>{n(s)};return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsx(o,{id:"checkbox1",value:r,onChange:a,label:"Empresa",color:"primary",required:!0,disabled:!0}),e.jsx(o,{id:"checkbox2",value:r,onChange:a,label:"Empresa",color:"secondary",description:"Empresa Onroad / Expreso",required:!0,disabled:!0}),e.jsx(o,{id:"checkbox3",value:r,onChange:a,color:"neutral",description:"Empresa Onroad / Expreso",required:!0,disabled:!0})]})}},h={args:{},render:function(){const[r,n]=d.useState(!1),a=s=>{n(s)};return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsx(o,{id:"checkbox1",value:r,onChange:a,label:"Empresa",color:"primary",required:!0,positionLabel:"start",description:"Empresa Onroad / Expreso"}),e.jsx(o,{id:"checkbox2",value:r,onChange:a,label:"Empresa",color:"secondary",description:"Empresa Onroad / Expreso",required:!0,positionLabel:"end"})]})}},m={args:{},render:function(){const[r,n]=d.useState(!1),a=s=>{n(s)};return e.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[e.jsx(o,{id:"checkbox1",value:r,onChange:a,label:"Empresa",color:"primary",required:!0,description:"Empresa Onroad / Expreso",error:"El campo es requerido",touched:!0,size:"sm"}),e.jsx(o,{id:"checkbox2",value:r,onChange:a,label:"Empresa",color:"secondary",description:"Empresa Onroad / Expreso",required:!0,error:"El campo es requerido",touched:!0,positionLabel:"start"}),e.jsx(o,{size:"lg",id:"checkbox3",value:r,onChange:a,label:"Empresa",color:"neutral",description:"Empresa Onroad / Expreso",required:!0,error:"El campo es requerido",touched:!0,positionLabel:"start"})]})}};var x,g,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {}
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var C,v,E;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [value, setValue] = useState<boolean>(false);
    const handleChange = (state: boolean) => {
      setValue(state);
    };
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <CheckBox id="checkbox" value={value} onChange={handleChange} size="sm" />\r
                <CheckBox id="checkbox1" value={value} onChange={handleChange} size="md" />\r
                <CheckBox id="checkbox2" value={value} onChange={handleChange} size="lg" />\r
            </div>;
  }
}`,...(E=(v=l.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var k,f,y;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [value, setValue] = useState<boolean>(false);
    const handleChange = (state: boolean) => {
      setValue(state);
    };
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <CheckBox id="checkbox1" value={value} onChange={handleChange} color="primary" />\r
                <CheckBox id="checkbox2" value={value} onChange={handleChange} color="secondary" />\r
                <CheckBox id="checkbox3" value={value} onChange={handleChange} color="neutral" />\r
                <CheckBox id="checkbox4" value={value} onChange={handleChange} color="success" />\r
                <CheckBox id="checkbox5" value={value} onChange={handleChange} color="warning" />\r
                <CheckBox id="checkbox6" value={value} onChange={handleChange} color="danger" />\r
            </div>;
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var q,j,S;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [value, setValue] = useState<boolean>(false);
    const handleChange = (state: boolean) => {
      setValue(state);
    };
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <CheckBox id="checkbox1" value={value} onChange={handleChange} label="Empresa" color="primary" required />\r
                <CheckBox id="checkbox2" value={value} onChange={handleChange} label="Empresa" color="secondary" description="Empresa Onroad / Expreso" required />\r
                <CheckBox id="checkbox3" value={value} onChange={handleChange} color="neutral" description="Empresa Onroad / Expreso" required />\r
            </div>;
  }
}`,...(S=(j=u.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,O,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [value, setValue] = useState<boolean>(false);
    const handleChange = (state: boolean) => {
      setValue(state);
    };
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <CheckBox id="checkbox1" value={value} onChange={handleChange} label="Empresa" color="primary" required disabled />\r
                <CheckBox id="checkbox2" value={value} onChange={handleChange} label="Empresa" color="secondary" description="Empresa Onroad / Expreso" required disabled />\r
                <CheckBox id="checkbox3" value={value} onChange={handleChange} color="neutral" description="Empresa Onroad / Expreso" required disabled />\r
            </div>;
  }
}`,...(V=(O=p.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var R,z,N;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [value, setValue] = useState<boolean>(false);
    const handleChange = (state: boolean) => {
      setValue(state);
    };
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <CheckBox id="checkbox1" value={value} onChange={handleChange} label="Empresa" color="primary" required positionLabel="start" description="Empresa Onroad / Expreso" />\r
                <CheckBox id="checkbox2" value={value} onChange={handleChange} label="Empresa" color="secondary" description="Empresa Onroad / Expreso" required positionLabel="end" />\r
            </div>;
  }
}`,...(N=(z=h.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var L,D,w;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [value, setValue] = useState<boolean>(false);
    const handleChange = (state: boolean) => {
      setValue(state);
    };
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <CheckBox id="checkbox1" value={value} onChange={handleChange} label="Empresa" color="primary" required description="Empresa Onroad / Expreso" error="El campo es requerido" touched size="sm" />\r
                <CheckBox id="checkbox2" value={value} onChange={handleChange} label="Empresa" color="secondary" description="Empresa Onroad / Expreso" required error="El campo es requerido" touched positionLabel="start" />\r
                <CheckBox size="lg" id="checkbox3" value={value} onChange={handleChange} label="Empresa" color="neutral" description="Empresa Onroad / Expreso" required error="El campo es requerido" touched positionLabel="start" />\r
            </div>;
  }
}`,...(w=(D=m.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const U=["Default","Size","Color","Label","Disabled","Position","State"];export{i as Color,t as Default,p as Disabled,u as Label,h as Position,l as Size,m as State,U as __namedExportsOrder,Q as default};
