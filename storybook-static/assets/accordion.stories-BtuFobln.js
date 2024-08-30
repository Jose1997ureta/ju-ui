import{j as e}from"./clsx-DqFZfPE4.js";import{A as t}from"./accordion-fNCDoMOh.js";import{r as a}from"./index-DqterGEq.js";import"./index-DsMWkBeO.js";import"./iconBase-CdQTX8f7.js";const w={title:"Components/Accordion",component:t,parameters:{layout:"centered"},tags:["autodocs"]},x=[{id:"hola1",name:"Soporte"},{id:"hola2",name:"Administracion"},{id:"hola3",name:"Operaciones"}],s={args:{},render:function(){const[c,l]=a.useState(["hola1"]),[u,m]=a.useState(""),[p,n]=a.useState(!1),h=o=>{n(!0),l(o),m('Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).'),setTimeout(()=>{n(!1)},2e3)};return e.jsx("div",{className:"border w-[400px] p-4",children:e.jsx(t,{data:x,activeKeys:c,radius:"lg",color:"secondary",children:({item:o})=>e.jsxs(t.Item,{keyCurrent:o.id,onClick:h,title:o.name,className:{body:"p-2"},children:[o.id==="hola1"?e.jsx("p",{children:"Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un"}):null,o.id==="hola2"?e.jsx("div",{className:"max-h-[100px] overflow-auto",children:p?e.jsx("p",{children:"Loading"}):e.jsx("p",{children:u})}):null]})})})}};var r,d,i;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [show1, setShow1] = useState<string[]>(["hola1"]);
    const [text, setText] = useState<string>("");
    const [loading, setloading] = useState<boolean>(false);
    const handleClick = (key: string[]) => {
      setloading(true);
      setShow1(key);
      setText(\`Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).\`);
      setTimeout(() => {
        setloading(false);
      }, 2000);
    };
    return <div className="border w-[400px] p-4">\r
                <Accordion data={data} activeKeys={show1} radius="lg" color="secondary">\r
                    {({
          item
        }) => <Accordion.Item keyCurrent={item.id} onClick={handleClick} title={item.name} className={{
          body: "p-2"
        }}>\r
                            {item.id === "hola1" ? <p>\r
                                    Es un hecho establecido hace demasiado tiempo que un lector se\r
                                    distraerá con el contenido del texto de un\r
                                </p> : null}\r
\r
                            {item.id === "hola2" ? <div className="max-h-[100px] overflow-auto">\r
                                    {loading ? <p>Loading</p> : <p>{text}</p>}\r
                                </div> : null}\r
                        </Accordion.Item>}\r
                </Accordion>\r
            </div>;
  }
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const j=["Default"];export{s as Default,j as __namedExportsOrder,w as default};
