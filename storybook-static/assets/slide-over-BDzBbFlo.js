import{j as e,t as n}from"./clsx-DqFZfPE4.js";import{r as t}from"./index-DqterGEq.js";import{q as s,_ as p}from"./transition-DyhMFySx.js";const m=({children:i,className:r,classNamePosition:o})=>e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:n("pointer-events-none fixed inset-y-0 right-0 flex max-w-full",o),children:e.jsx(s.Child,{as:t.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:e.jsx(p.Panel,{className:n("pointer-events-auto relative max-w-md",r),children:i})})})})});m.__docgenInfo={description:"",methods:[],displayName:"ItemRight",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},classNamePosition:{required:!1,tsType:{name:"string"},description:""}}};const R=({children:i,show:r,isOverLay:o=!1,classNameOverLay:u,position:d="right",className:f,classNameContainer:v,classNamePosition:g,onCloseOut:l,interaction:c=!0})=>{const a=document.getElementById("root");t.useEffect(()=>{const q=setTimeout(()=>{c&&r&&a&&(a.removeAttribute("inert"),a.removeAttribute("aria-hidden"));const x=document.getElementsByTagName("html")[0];x.style.paddingRight=""},100);return()=>{clearTimeout(q)}},[c,a,r]);const y=()=>d==="right"?e.jsx(m,{className:f,classNamePosition:g,children:i}):null,h=()=>{if(l)return l()};return e.jsx(s,{appear:!0,show:r,as:t.Fragment,children:e.jsxs(p,{as:"div",className:n("relative",v),onClose:h,children:[o?e.jsx(s.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:n("fixed inset-0 transition-opacity bg-black/50",u)})}):null,y()]})})};R.__docgenInfo={description:"",methods:[],displayName:"SliderOver",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`@description\r
Propiedad para poder ingresar Valores Elementos\r
@type\r
Recibe **ReactNode** -> el campo es requerido`},show:{required:!0,tsType:{name:"boolean"},description:`@description\r
Propiedad para poder mostrar el modal\r
@type\r
Recibe **boolean** -> campo es requerido`},onCloseOut:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`@description\r
Propiedad para poder hacer click fuera del modal\r
@type\r
Recibe **function** -> campo no requerido`},isOverLay:{required:!1,tsType:{name:"boolean"},description:`@description\r
Propiedad para mostrar el fondo oscuro del modal\r
@type\r
Recibe **boolean** -> campo no requerido\r
@value\r
El valor por defecto es **false**`,defaultValue:{value:"false",computed:!1}},classNameOverLay:{required:!1,tsType:{name:"string"},description:`@description\r
Propiedad para dar estilo al fondo oscuro del modal\r
@type\r
Recibe **string** -> campo no requerido`},position:{required:!1,tsType:{name:"union",raw:'"right" | "left"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"left"'}]},description:`@description\r
Propiedad para elegir la posicion que va aparecer el modal\r
@type\r
Recibe  **right** | **left** -> campo no requerido\r
@value\r
El valor por defecto es **right**`,defaultValue:{value:'"right"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:`@description\r
Propiedad para dar estilo al contenido del modal\r
@type\r
Recibe **string** -> campo no requerido`},classNamePosition:{required:!1,tsType:{name:"string"},description:`@description\r
Propiedad para dar estilo al contenido general del modal\r
@type\r
Recibe **string** -> campo no requerido`},classNameContainer:{required:!1,tsType:{name:"string"},description:`@description\r
Propiedad para dar estilo al contenido de la posicion del modal\r
@type\r
Recibe **string** -> campo no requerido`},interaction:{required:!1,tsType:{name:"boolean"},description:`@description\r
Propiedad para eliminar el **inert** y hacer la interaccion normalmente\r
@type\r
Recibe **boolean** -> campo no requerido\r
@value\r
el valor por defecto es **true**`,defaultValue:{value:"true",computed:!1}}}};export{R as S};
