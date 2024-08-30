import{j as o}from"./clsx-DqFZfPE4.js";import{M as n}from"./modal-C0HosiJQ.js";import{B as d}from"./button-CZXEs_Ak.js";import{S as w}from"./form-item-BHIv01C9.js";import"./radio-D21XcBnu.js";import{r as l}from"./index-DqterGEq.js";import"./index-G64dNDM8.js";import"./button-icon-CWfaple7.js";import"./index-BQnZPrXV.js";import"./iconBase-CdQTX8f7.js";import"./index-ESNyr8ci.js";import"./index-B3sNj1pq.js";import"./transition-DyhMFySx.js";import"./assertThisInitialized-ByOjVySJ.js";import"./index-DsMWkBeO.js";const i={show:!1,hidden:!1,params:null},c=()=>{const[s,r]=l.useState(i),a=l.useCallback(t=>{r({show:!0,hidden:!1,params:t})},[]),h=l.useCallback(t=>{r(C=>({...C,...t}))},[]),p=l.useCallback(()=>{r(i)},[]);return{modal:s,showModal:a,updateModal:h,closeModal:p}},R={title:"Components/Modal",component:n,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{},render:function(){const r=c(),a=c();return o.jsxs(o.Fragment,{children:[o.jsx(d,{onClick:()=>r.showModal(),children:"Abrir Modal 1"}),o.jsxs(n,{show:r.modal.show,hidden:r.modal.hidden,className:"w-1/2",children:[o.jsx(n.Header,{title:"Activar Ciudad"}),o.jsxs(n.Body,{children:[o.jsx(d,{onClick:()=>r.closeModal(),children:"Cerrar Modal 1"}),o.jsx(d,{onClick:()=>{r.updateModal({hidden:!0}),a.showModal()},children:"Abrir Modal 2"}),o.jsx(w,{data:[],onChange:()=>alert(),isPortal:!0}),o.jsx(n,{show:a.modal.show,children:o.jsxs("div",{className:"bg-secondary-500",children:[o.jsx(d,{onClick:()=>{a.closeModal(),r.updateModal({hidden:!1})},children:"Cerrar Modal 2"}),o.jsx(d,{onClick:()=>{r.closeModal()},children:"Cerrar Modal 1"})]})})]}),o.jsx(n.Footer,{children:"gola"})]})]})}};var m,u,M;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const modal1 = useModal();
    const modal2 = useModal();
    return <>\r
                <Button onClick={() => modal1.showModal()}>Abrir Modal 1</Button>\r
\r
                {/* {show ? ( */}\r
                <Modal show={modal1.modal.show} hidden={modal1.modal.hidden} className="w-1/2">\r
                    <Modal.Header title="Activar Ciudad" />\r
                    <Modal.Body>\r
                        <Button onClick={() => modal1.closeModal()}>\r
                            Cerrar Modal 1\r
                        </Button>\r
                        <Button onClick={() => {
            modal1.updateModal({
              hidden: true
            });
            modal2.showModal();
          }}>\r
                            Abrir Modal 2\r
                        </Button>\r
\r
                        <Select data={[]} onChange={() => alert()} isPortal />\r
\r
                        {/* {show1 ? ( */}\r
                        <Modal show={modal2.modal.show}>\r
                            <div className="bg-secondary-500">\r
                                <Button onClick={() => {
                modal2.closeModal();
                modal1.updateModal({
                  hidden: false
                });
              }}>\r
                                    Cerrar Modal 2\r
                                </Button>\r
                                <Button onClick={() => {
                modal1.closeModal();
              }}>\r
                                    Cerrar Modal 1\r
                                </Button>\r
                            </div>\r
                        </Modal>\r
                    </Modal.Body>\r
                    <Modal.Footer>gola</Modal.Footer>\r
                    {/* ) : null} */}\r
                </Modal>\r
                {/* ) : null} */}\r
\r
                {/* <Modal show={show} hidden={hidden}>\r
                    <div className="bg-secondary-500">\r
                        <Button onClick={() => setShow(false)}>Cerrar Modal 1</Button>\r
                        <Button\r
                            onClick={() => {\r
                                setHidden(true);\r
                                setShow1(true);\r
                            }}\r
                        >\r
                            Abrir Modal 2\r
                        </Button>\r
                          <Modal show={show1}>\r
                            <div className="bg-secondary-500">\r
                                <Button\r
                                    onClick={() => {\r
                                        setShow1(false);\r
                                        setHidden(false);\r
                                    }}\r
                                >\r
                                    Cerrar Modal 2\r
                                </Button>\r
                                <Button\r
                                    onClick={() => {\r
                                        setShow(false);\r
                                    }}\r
                                >\r
                                    Cerrar Modal 1\r
                                </Button>\r
                            </div>\r
                        </Modal>\r
                    </div>\r
                 </Modal> */}\r
            </>;
  }
}`,...(M=(u=e.parameters)==null?void 0:u.docs)==null?void 0:M.source}}};const I=["ModaInModal"];export{e as ModaInModal,I as __namedExportsOrder,R as default};
