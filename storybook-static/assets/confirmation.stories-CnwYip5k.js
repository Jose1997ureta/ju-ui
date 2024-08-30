import{j as o}from"./clsx-DqFZfPE4.js";import{B as c}from"./button-CZXEs_Ak.js";import{r as l}from"./index-DqterGEq.js";import{C as e}from"./confirmation-0-KEF7Jg.js";import{b as m}from"./index-B3sNj1pq.js";import{B as d}from"./button-icon-CWfaple7.js";import"./index-BQnZPrXV.js";import"./iconBase-CdQTX8f7.js";import"./index-ESNyr8ci.js";import"./index-G64dNDM8.js";import"./transition-DyhMFySx.js";const I={title:"Components/Confirmation",component:e,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{},render:function(){const[i,n]=l.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:()=>n(!0),children:"Abrir Confirmation"}),o.jsxs(e,{show:i,children:[o.jsx(e.Header,{title:"¿Está seguro que desea cerrar sesión de todos los usuarios seleccionados?",icon:o.jsx(d,{className:"w-12 h-12 sm:w-10 sm:h-10 text-2xl",color:"danger",children:o.jsx(m,{})}),onClose:()=>n(!1)}),o.jsx(e.Body,{text:"Al confirmar se cerrarán las sesiones de todos los usuarios seleccionados"}),o.jsx(e.Footer,{options:{accept:{text:"Confirmar",color:"danger"},cancel:{onCancel:()=>n(!1)}}})]})]})}};var s,t,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [show, setShow] = useState<boolean>(false);
    return <>\r
                <Button onClick={() => setShow(true)}>Abrir Confirmation</Button>\r
\r
                <Confirmation show={show}>\r
                    <Confirmation.Header
        // title="¿Está seguro de realizar estos cambios?"
        title="¿Está seguro que desea cerrar sesión de todos los usuarios seleccionados?" icon={<ButtonIcon className="w-12 h-12 sm:w-10 sm:h-10 text-2xl" color="danger">\r
                                <IoWarningOutline />\r
                            </ButtonIcon>} onClose={() => setShow(false)} />\r
                    <Confirmation.Body text="Al confirmar se cerrarán las sesiones de todos los usuarios seleccionados"
        // isClose={false}
        // isIcon={false}
        />\r
\r
                    <Confirmation.Footer options={{
          accept: {
            text: "Confirmar",
            color: "danger"
          },
          cancel: {
            onCancel: () => setShow(false)
          }
        }} />\r
                </Confirmation>\r
            </>;
  }
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const b=["Default"];export{r as Default,b as __namedExportsOrder,I as default};
