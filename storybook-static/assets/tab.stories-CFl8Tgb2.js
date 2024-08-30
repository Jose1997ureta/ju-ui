import{j as e}from"./clsx-DqFZfPE4.js";import{T as n,a as s}from"./tab-DAfGRyoT.js";import{r as o}from"./index-DqterGEq.js";import{F as u}from"./index-D6gcYc2T.js";import"./iconBase-CdQTX8f7.js";const p=[{id:"item1",name:"Item 1"},{id:"item2",name:"Item 2"},{id:"item3",name:"Item 3"},{id:"item4",name:"Item 4"},{id:"item5",name:"Item 5"},{id:"item6",name:"Item 6"}],v={title:"Components/Tab",component:n,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{},render:function(){const[d,c]=o.useState(""),[b,h]=o.useState(""),t=a=>{c(a)},T=a=>{h(a)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border mt-2 w-[400px] p-4",children:e.jsxs(n,{activeKey:d,disabledKeys:["hola2"],className:"grid grid-cols-3",color:"danger",children:[e.jsxs(n.Item,{keyCurrent:"hola1",className:"gap-x-2",onClick:()=>t("hola1"),children:[e.jsx(u,{className:"w-3 h-3"})," Hola 1"]}),e.jsx(s,{keyCurrent:"hola2",onClick:()=>t("hola2"),children:"Hola 2"}),e.jsx(s,{keyCurrent:"hola3",onClick:()=>t("hola3"),children:"Hola 3"})]})}),e.jsx("div",{className:"border mt-2 w-[500px] p-4",children:e.jsx(n,{data:p,activeKey:b,color:"danger",disabledKeys:["item1"],className:"overflow-x-auto flex items-center",variant:"underline",children:({item:a})=>e.jsx(n.Item,{keyCurrent:a.id,onClick:()=>T(a.id),className:"w-[100px]",children:a.name})})})]})}};var l,i,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [tab1, setTab1] = useState<string>("");
    const [tab2, setTab2] = useState<string>("");
    const handleChangeTab1 = (key: string) => {
      setTab1(key);
    };
    const handleChangeTab2 = (key: string) => {
      setTab2(key);
    };
    return <>\r
                <div className="border mt-2 w-[400px] p-4">\r
                    <Tab activeKey={tab1} disabledKeys={["hola2"]} className="grid grid-cols-3" color="danger">\r
                        <Tab.Item keyCurrent="hola1" className="gap-x-2" onClick={() => handleChangeTab1("hola1")}>\r
                            <FaUser className="w-3 h-3" /> Hola 1\r
                        </Tab.Item>\r
                        <TabItem keyCurrent="hola2" onClick={() => handleChangeTab1("hola2")}>\r
                            Hola 2\r
                        </TabItem>\r
                        <TabItem keyCurrent="hola3" onClick={() => handleChangeTab1("hola3")}>\r
                            Hola 3\r
                        </TabItem>\r
                    </Tab>\r
                </div>\r
\r
                <div className="border mt-2 w-[500px] p-4">\r
                    <Tab data={data} activeKey={tab2} color="danger" disabledKeys={["item1"]} className="overflow-x-auto flex items-center" variant="underline">\r
                        {({
            item
          }) => <Tab.Item keyCurrent={item.id} onClick={() => handleChangeTab2(item.id)} className="w-[100px]">\r
                                {item.name}\r
                            </Tab.Item>}\r
                    </Tab>\r
                </div>\r
            </>;
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const N=["Default"];export{r as Default,N as __namedExportsOrder,v as default};
