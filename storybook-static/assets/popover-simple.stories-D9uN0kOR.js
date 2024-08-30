import{j as e,t as f}from"./clsx-DqFZfPE4.js";import{C as o}from"./form-item-BHIv01C9.js";import"./radio-D21XcBnu.js";import{B as g}from"./button-CZXEs_Ak.js";import"./button-icon-CWfaple7.js";import{P as T}from"./calendar-CzzNCgQh.js";import"./badge-DAUdz69A.js";import"./avatar-group-DnN7u0S7.js";import"./chip-Ca4d7D59.js";import"./modal-C0HosiJQ.js";import{r as s}from"./index-DqterGEq.js";import"./slide-over-BDzBbFlo.js";import"./confirmation-0-KEF7Jg.js";import"./time-DIMZOUbQ.js";import"./tab-DAfGRyoT.js";import"./accordion-fNCDoMOh.js";import"./loading-C-kW5ff5.js";import"./pagination-YnyEQZdB.js";import"./card-footer-D8nGX8Zh.js";import"./index-ESNyr8ci.js";import"./assertThisInitialized-ByOjVySJ.js";import"./index-G64dNDM8.js";import"./index-DsMWkBeO.js";import"./iconBase-CdQTX8f7.js";import"./index-B3sNj1pq.js";import"./index-BQnZPrXV.js";import"./icon-close-calendar-5onB3g24.js";import"./index-D6gcYc2T.js";import"./v4-DvF23Exx.js";import"./transition-DyhMFySx.js";const p=({isArrow:l=!0,textContent:t,children:n,isShow:r=!1,onClickOutside:i,tooltipStyle:a,tooltipClassName:c,containerStyle:R,containerClassName:q,className:E,positions:M=["top"],reposition:A=!0,bg:L="primary",eventOpen:x="hover",ref:V})=>{const[D,v]=s.useState(!1);s.useEffect(()=>{v(r)},[r]);const H=()=>{x!=="click"&&v(!0)},_=()=>{x!=="click"&&v(!1)};return e.jsx(T,{reposition:A,isShow:D,onClickOutside:i,positions:M,ref:V,containerStyle:R,containerClassName:q,isArrow:l,bg:L,tooltipClassName:f("p-2",c),tooltipStyle:a,content:t,children:e.jsx("div",{className:f("w-fit",E),onMouseEnter:H,onMouseLeave:_,children:n})})};p.__docgenInfo={description:"",methods:[],displayName:"PopOverInline",props:{isArrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"JSX.Element"},description:""},isShow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClickOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},positions:{required:!1,tsType:{name:"Array",elements:[{name:"PopoverPosition"}],raw:"PopoverPosition[]"},description:"",defaultValue:{value:'["top"]',computed:!1}},reposition:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:""},bg:{required:!1,tsType:{name:"union",raw:"T | U[number]",elements:[{name:"union",raw:`| "primary"\r
| "secondary"\r
| "neutral"\r
| "success"\r
| "warning"\r
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},{name:"tuple[number]",raw:"U[number]"}]},description:"",defaultValue:{value:'"primary"',computed:!1}},tooltipStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},tooltipClassName:{required:!1,tsType:{name:"string"},description:""},containerStyle:{required:!1,tsType:{name:"Partial",elements:[{name:"CSSStyleDeclaration"}],raw:"Partial<CSSStyleDeclaration>"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},textContent:{required:!0,tsType:{name:"JSX.Element"},description:""},eventOpen:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"",defaultValue:{value:'"hover"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const fe={title:"Components/PopOver/Simple",component:T,parameters:{layout:"centered"},tags:["autodocs"]},d={args:{},render:function(){return e.jsx(p,{textContent:e.jsx("p",{className:"text-xs text-white",children:"Por haga click para mostrar la informacion"}),children:e.jsx(g,{color:"neutral",children:"Abrir"})})}},u={args:{},render:function(){const[t,n]=s.useState(!1);return e.jsx(p,{onClickOutside:()=>n(!1),isShow:t,eventOpen:"click",textContent:e.jsx("p",{className:"text-xs text-white",children:"Por haga click para mostrar la informacion"}),children:e.jsx(g,{color:"neutral",onClick:()=>n(!0),children:"Abrir"})})}},m={args:{},render:function(){const[t,n]=s.useState(!0),[r,i]=s.useState("primary"),a=c=>{i(c)};return e.jsxs("div",{className:"grid grid-cols-3 w-[760px] gap-4 border py-4 px-4  border-neutral-300 rounded-md",children:[e.jsxs("div",{className:"grid-cols-1",children:[e.jsx("p",{className:"",children:"Position"}),e.jsxs("div",{className:"divide-y",children:[e.jsx(o,{id:"top",onChange:()=>a("primary"),value:r==="primary",label:"Primary",className:"py-2"}),e.jsx(o,{id:"top",onChange:()=>a("secondary"),value:r==="secondary",className:"py-2",label:"Secondary"}),e.jsx(o,{id:"top",onChange:()=>a("neutral"),value:r==="neutral",className:"py-2",label:"Neutral"}),e.jsx(o,{id:"top",onChange:()=>a("success"),value:r==="success",className:"py-2",label:"Success"}),e.jsx(o,{id:"top",onChange:()=>a("warning"),value:r==="warning",className:"py-2",label:"Warning"}),e.jsx(o,{id:"top",onChange:()=>a("danger"),value:r==="danger",className:"py-2",label:"Danger"})]})]}),e.jsx("div",{className:"grid-cols-2",children:e.jsx(p,{onClickOutside:()=>n(!1),isShow:t,eventOpen:"click",textContent:e.jsx("p",{className:"text-xs text-white",children:"Por haga click para mostrar la informacion"}),className:"w-full",bg:r,children:e.jsx(g,{color:"neutral",onClick:()=>n(!0),className:"w-full justify-center",children:"Continue"})})})]})}},h={args:{},render:function(){const[t,n]=s.useState(!0),[r,i]=s.useState("top"),a=c=>{i(c)};return e.jsxs("div",{className:"grid grid-cols-3 w-[760px] gap-4 border py-4 px-4  border-neutral-300 rounded-md",children:[e.jsxs("div",{className:"grid-cols-1",children:[e.jsx("p",{className:"",children:"Position"}),e.jsxs("div",{className:"divide-y",children:[e.jsx(o,{id:"top",onChange:()=>a("top"),value:r==="top",label:"Top",className:"py-2"}),e.jsx(o,{id:"top",onChange:()=>a("bottom"),value:r==="bottom",className:"py-2",label:"Bottom"}),e.jsx(o,{id:"top",onChange:()=>a("right"),value:r==="right",className:"py-2",label:"Right"}),e.jsx(o,{id:"top",onChange:()=>a("left"),value:r==="left",className:"py-2",label:"Left"})]})]}),e.jsx("div",{className:"grid-cols-2",children:e.jsx(p,{onClickOutside:()=>n(!1),isShow:t,positions:[r],eventOpen:"click",textContent:e.jsx("p",{className:"text-xs text-white",children:"Por haga click para mostrar la informacion"}),className:"w-full",children:e.jsx(g,{color:"neutral",onClick:()=>n(!0),className:"w-full justify-center",children:"Mostrar"})})})]})}};var C,y,N;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    return <PopOverInline textContent={<p className="text-xs text-white">\r
                        Por haga click para mostrar la informacion\r
                    </p>}>\r
                <Button color="neutral">Abrir</Button>\r
            </PopOverInline>;
  }
}`,...(N=(y=d.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var w,S,b;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [isShow, setIsShow] = useState<boolean>(false);
    return <PopOverInline onClickOutside={() => setIsShow(false)} isShow={isShow} eventOpen="click" textContent={<p className="text-xs text-white">\r
                        Por haga click para mostrar la informacion\r
                    </p>}>\r
                <Button color="neutral" onClick={() => setIsShow(true)}>\r
                    Abrir\r
                </Button>\r
            </PopOverInline>;
  }
}`,...(b=(S=u.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var P,k,j;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [isShow, setIsShow] = useState<boolean>(true);
    const [color, setColor] = useState<ColorProps>("primary");
    const handleChange = (value: ColorProps) => {
      setColor(value);
    };
    return <div className="grid grid-cols-3 w-[760px] gap-4 border py-4 px-4  border-neutral-300 rounded-md">\r
                <div className="grid-cols-1">\r
                    <p className="">Position</p>\r
                    <div className="divide-y">\r
                        <CheckBox id="top" onChange={() => handleChange("primary")} value={color === "primary"} label="Primary" className="py-2" />\r
                        <CheckBox id="top" onChange={() => handleChange("secondary")} value={color === "secondary"} className="py-2" label="Secondary" />\r
                        <CheckBox id="top" onChange={() => handleChange("neutral")} value={color === "neutral"} className="py-2" label="Neutral" />\r
                        <CheckBox id="top" onChange={() => handleChange("success")} value={color === "success"} className="py-2" label="Success" />\r
                        <CheckBox id="top" onChange={() => handleChange("warning")} value={color === "warning"} className="py-2" label="Warning" />\r
                        <CheckBox id="top" onChange={() => handleChange("danger")} value={color === "danger"} className="py-2" label="Danger" />\r
                    </div>\r
                </div>\r
                <div className="grid-cols-2">\r
                    <PopOverInline onClickOutside={() => setIsShow(false)} isShow={isShow} eventOpen="click" textContent={<p className="text-xs text-white">\r
                                Por haga click para mostrar la informacion\r
                            </p>} className="w-full" bg={color}>\r
                        <Button color="neutral" onClick={() => setIsShow(true)} className="w-full justify-center">\r
                            Continue\r
                        </Button>\r
                    </PopOverInline>\r
                </div>\r
            </div>;
  }
}`,...(j=(k=m.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var O,I,B;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [isShow, setIsShow] = useState<boolean>(true);
    const [position, setPosition] = useState<PopoverPosition>("top");
    const handleChange = (value: PopoverPosition) => {
      setPosition(value);
    };
    return <div className="grid grid-cols-3 w-[760px] gap-4 border py-4 px-4  border-neutral-300 rounded-md">\r
                <div className="grid-cols-1">\r
                    <p className="">Position</p>\r
                    <div className="divide-y">\r
                        <CheckBox id="top" onChange={() => handleChange("top")} value={position === "top"} label="Top" className="py-2" />\r
                        <CheckBox id="top" onChange={() => handleChange("bottom")} value={position === "bottom"} className="py-2" label="Bottom" />\r
                        <CheckBox id="top" onChange={() => handleChange("right")} value={position === "right"} className="py-2" label="Right" />\r
                        <CheckBox id="top" onChange={() => handleChange("left")} value={position === "left"} className="py-2" label="Left" />\r
                    </div>\r
                </div>\r
                <div className="grid-cols-2">\r
                    <PopOverInline onClickOutside={() => setIsShow(false)} isShow={isShow} positions={[position]} eventOpen="click" textContent={<p className="text-xs text-white">\r
                                Por haga click para mostrar la informacion\r
                            </p>} className="w-full">\r
                        <Button color="neutral" onClick={() => setIsShow(true)} className="w-full justify-center">\r
                            Mostrar\r
                        </Button>\r
                    </PopOverInline>\r
                </div>\r
            </div>;
  }
}`,...(B=(I=h.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const Ce=["Hover","Click","Color","Position"];export{u as Click,m as Color,d as Hover,h as Position,Ce as __namedExportsOrder,fe as default};
