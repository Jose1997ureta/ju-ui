import{j as r}from"./clsx-DqFZfPE4.js";import{S as i}from"./slide-over-BDzBbFlo.js";import{B as o}from"./button-CZXEs_Ak.js";import{r as c}from"./index-DqterGEq.js";import"./transition-DyhMFySx.js";import"./index-G64dNDM8.js";import"./index-BQnZPrXV.js";import"./iconBase-CdQTX8f7.js";import"./index-ESNyr8ci.js";const w={title:"Components/SliderOver",component:i,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{},render:function(){const[l,t]=c.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(o,{onClick:()=>{t(!0)},children:"Abrir"}),r.jsx(i,{onCloseOut:()=>t(!1),show:l,isOverLay:!1,children:r.jsx("div",{className:"bg-secondary-500",children:r.jsx(o,{onClick:()=>t(!1),children:"Cerrar"})})})]})}};var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [show, setShow] = useState<boolean>(false);
    return <>\r
                <Button onClick={() => {
        setShow(true);
      }}>\r
                    Abrir\r
                </Button>\r
\r
                <SliderOver onCloseOut={() => setShow(false)} show={show} isOverLay={false}>\r
                    <div className="bg-secondary-500">\r
                        <Button onClick={() => setShow(false)}>Cerrar</Button>\r
                    </div>\r
                </SliderOver>\r
            </>;
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const C=["SlideRight"];export{e as SlideRight,C as __namedExportsOrder,w as default};
