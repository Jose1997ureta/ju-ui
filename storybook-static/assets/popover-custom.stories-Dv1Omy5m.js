import{j as r}from"./clsx-DqFZfPE4.js";import{F as e}from"./form-item-BHIv01C9.js";import"./radio-D21XcBnu.js";import{B as s}from"./button-CZXEs_Ak.js";import"./button-icon-CWfaple7.js";import{P as l}from"./calendar-CzzNCgQh.js";import"./badge-DAUdz69A.js";import"./avatar-group-DnN7u0S7.js";import"./chip-Ca4d7D59.js";import"./modal-C0HosiJQ.js";import{r as p}from"./index-DqterGEq.js";import"./slide-over-BDzBbFlo.js";import"./confirmation-0-KEF7Jg.js";import"./time-DIMZOUbQ.js";import"./tab-DAfGRyoT.js";import"./accordion-fNCDoMOh.js";import"./loading-C-kW5ff5.js";import"./pagination-YnyEQZdB.js";import"./card-footer-D8nGX8Zh.js";import"./index-ESNyr8ci.js";import"./assertThisInitialized-ByOjVySJ.js";import"./index-G64dNDM8.js";import"./index-DsMWkBeO.js";import"./iconBase-CdQTX8f7.js";import"./index-B3sNj1pq.js";import"./index-BQnZPrXV.js";import"./icon-close-calendar-5onB3g24.js";import"./index-D6gcYc2T.js";import"./v4-DvF23Exx.js";import"./transition-DyhMFySx.js";const H={title:"Components/PopOver/Custom",component:l,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{},render:function(){const[i,o]=p.useState(!1);return r.jsx(l,{tooltipClassName:"w-80 p-2",onClickOutside:()=>o(!1),isShow:i,content:r.jsxs("div",{children:[r.jsx("p",{className:"text-sm mb-2",children:"Formulario de resgistro"}),r.jsxs("div",{children:[r.jsxs(e,{className:"mb-2",children:[r.jsx(e.Label,{label:"Email"}),r.jsx(e.Input,{value:"",type:"email"})]}),r.jsxs(e,{className:"mb-2",children:[r.jsx(e.Label,{label:"Password"}),r.jsx(e.Input,{value:"",type:"password"})]}),r.jsxs(e,{className:"mb-3",children:[r.jsx(e.Label,{label:"Usuario"}),r.jsx(e.Select,{data:[],onChange:()=>console.log()})]}),r.jsx(s,{className:"w-full justify-center",children:"Ingresar"})]})]}),children:r.jsx(s,{color:"neutral",onClick:()=>o(!0),children:"Abrir"})})}};var m,a,n;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [isShow, setIsShow] = useState<boolean>(false);
    return <PopOver tooltipClassName="w-80 p-2" onClickOutside={() => setIsShow(false)} isShow={isShow} content={<div>\r
                        <p className="text-sm mb-2">Formulario de resgistro</p>\r
\r
                        <div>\r
                            <FormItem className="mb-2">\r
                                <FormItem.Label label="Email" />\r
                                <FormItem.Input value="" type="email" />\r
                            </FormItem>\r
                            <FormItem className="mb-2">\r
                                <FormItem.Label label="Password" />\r
                                <FormItem.Input value="" type="password" />\r
                            </FormItem>\r
                            <FormItem className="mb-3">\r
                                <FormItem.Label label="Usuario" />\r
                                <FormItem.Select data={[]} onChange={() => console.log()} />\r
                            </FormItem>\r
                            <Button className="w-full justify-center">Ingresar</Button>\r
                        </div>\r
                    </div>}>\r
                <Button color="neutral" onClick={() => setIsShow(true)}>\r
                    Abrir\r
                </Button>\r
            </PopOver>;
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const J=["Click"];export{t as Click,J as __namedExportsOrder,H as default};
