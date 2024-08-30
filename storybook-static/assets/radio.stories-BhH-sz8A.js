import{j as r}from"./clsx-DqFZfPE4.js";import{R as e}from"./radio-D21XcBnu.js";import"./index-DqterGEq.js";import"./index-ESNyr8ci.js";const T={title:"Components/Radio",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{options:["primary","secondary","neutral"],control:{type:"select"}},disabled:{control:{type:"boolean"}},value:{control:{type:"boolean"}}}},o={args:{}},d={args:{},render:function(){return r.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[r.jsx(e,{value:"radio1",label:"Radio Button",name:"radio",size:"sm"}),r.jsx(e,{value:"radio2",name:"radio",label:"Radio Button",size:"md"}),r.jsx(e,{value:"radio3",name:"radio",label:"Radio Button",size:"lg"})]})}},n={args:{},render:function(){return r.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[r.jsx(e,{value:"radio1",label:"Radio Button",name:"radio",color:"primary"}),r.jsx(e,{value:"radio2",name:"radio",label:"Radio Button",color:"secondary"}),r.jsx(e,{value:"radio3",name:"radio",label:"Radio Button",color:"neutral"})]})}},s={args:{},render:function(){return r.jsx("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:r.jsx(e,{value:"radio6",name:"radio",label:"Radio Button",color:"secondary",description:"Empresa Onroad / Expreso"})})}},t={args:{},render:function(){return r.jsx("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:r.jsx(e,{value:"radio6",name:"radio",label:"Radio Button",color:"secondary",description:"Empresa Onroad / Expreso",disabled:!0})})}},i={args:{},render:function(){return r.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[r.jsx(e,{value:"radio6",name:"radio",label:"Radio Button",color:"secondary",description:"Empresa Onroad / Expreso"}),r.jsx(e,{value:"radio6",name:"radio",label:"Radio Button",color:"secondary",description:"Empresa Onroad / Expreso",positionLabel:"start"})]})}},l={args:{},render:function(){return r.jsxs("div",{className:"flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md",children:[r.jsx(e,{value:"radio6",name:"radio",label:"Radio Button",color:"secondary",description:"Empresa Onroad / Expreso",error:"El campo es requerido",touched:!0}),r.jsx(e,{value:"radio6",name:"radio",label:"Radio Button",color:"secondary",error:"El campo es requerido",touched:!0})]})}};var c,u,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,b,x;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <Radio value="radio1" label="Radio Button" name="radio" size="sm" />\r
                <Radio value="radio2" name="radio" label="Radio Button" size="md" />\r
                <Radio value="radio3" name="radio" label="Radio Button" size="lg" />\r
            </div>;
  }
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var R,v,g;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <Radio value="radio1" label="Radio Button" name="radio" color="primary" />\r
                <Radio value="radio2" name="radio" label="Radio Button" color="secondary" />\r
                <Radio value="radio3" name="radio" label="Radio Button" color="neutral" />\r
            </div>;
  }
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,f,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <Radio value="radio6" name="radio" label="Radio Button" color="secondary" description="Empresa Onroad / Expreso" />\r
            </div>;
  }
}`,...(E=(f=s.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var B,j,N;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <Radio value="radio6" name="radio" label="Radio Button" color="secondary" description="Empresa Onroad / Expreso" disabled />\r
            </div>;
  }
}`,...(N=(j=t.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var O,S,h;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <Radio value="radio6" name="radio" label="Radio Button" color="secondary" description="Empresa Onroad / Expreso" />\r
                <Radio value="radio6" name="radio" label="Radio Button" color="secondary" description="Empresa Onroad / Expreso" positionLabel="start" />\r
            </div>;
  }
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var z,q,D;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    return <div className="flex items-center gap-3 border py-4 px-4 border-neutral-300 rounded-md">\r
                <Radio value="radio6" name="radio" label="Radio Button" color="secondary" description="Empresa Onroad / Expreso" error="El campo es requerido" touched />\r
                <Radio value="radio6" name="radio" label="Radio Button" color="secondary" error="El campo es requerido" touched />\r
            </div>;
  }
}`,...(D=(q=l.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const k=["Default","Size","Color","Label","Disabled","Position","State"];export{n as Color,o as Default,t as Disabled,s as Label,i as Position,d as Size,l as State,k as __namedExportsOrder,T as default};
