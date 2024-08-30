import{c as p,t as f,j as e}from"./clsx-DqFZfPE4.js";import{c as h,a as v}from"./index-ESNyr8ci.js";import{r as T}from"./index-DqterGEq.js";const N=v(["text-text-800 leading-none flex justify-between"],{variants:{size:{sm:"text-xs",md:"text-sm",lg:"text-sm"}}}),w=T.forwardRef(({id:i,required:o=!1,size:s="sm",classNameContainer:a,className:c,label:r,startContent:n,endContent:t,disabled:d},l)=>{const u=p(o&&"after:content-['*'] after:ml-0.5",d?"after:text-text-800":"after:text-danger-700"),m=f("flex justify-between items-center w-full text-text-800 mb-1",a);return e.jsxs("div",{className:m,children:[e.jsxs("div",{className:"flex items-center gap-1",children:[n||null,e.jsx("label",{ref:l,htmlFor:i,className:h(N({size:s,className:c}),u),children:r})]}),t||null]})});w.__docgenInfo={description:"",methods:[],displayName:"LabelForm",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:'"sm"',computed:!1},required:!1}}};const P=({text:i,className:o})=>{const s=f("text-danger-700 text-xs mt-1 before:content-['*'] before:mr-1 leading-none",o);return e.jsx("p",{className:s,children:i})};P.__docgenInfo={description:"",methods:[],displayName:"LabelErrorForm",props:{text:{required:!0,tsType:{name:"string"},description:`@description\r
Propiedad para colocar el texto.\r
@type\r
Puede recibir **string**`},className:{required:!1,tsType:{name:"string"},description:`@description\r
Propiedad para brindar clases personalizadas al componente, este se situa en el container del label.`}}};const E=v(["rounded-full border-2 peer appearance-none disabled:border-neutral-200"],{variants:{color:{primary:"border-primary-700",secondary:"border-secondary-700",neutral:"border-neutral-700"},size:{sm:"w-[18px] h-[18px]",md:"w-5 h-5",lg:"w-[22px] h-[22px]"}},defaultVariants:{color:"secondary",size:"md"}}),L=({id:i="radio",name:o,color:s="primary",size:a="md",className:c,disabled:r=!1,label:n,description:t,positionLabel:d="end",error:l,touched:u,checked:m,value:x,onChange:y})=>{const j=b=>{b.stopPropagation(),!r&&y&&y(b)},g=p("text-text-800 leading-none",a==="sm"&&"text-xs",a==="md"&&"text-sm",a==="lg"&&"text-sm"),q=p({"w-2.5 h-2.5":a==="sm","w-3 h-3":a==="md","w-[14px] h-[14px]":a==="lg","peer-checked:bg-neutral-200":r,"peer-checked:bg-primary-700":s==="primary"&&!r,"peer-checked:bg-secondary-700":s==="secondary"&&!r,"peer-checked:bg-neutral-700":s==="neutral"&&!r});return e.jsxs("div",{className:c,children:[e.jsxs("label",{className:p("flex gap-x-2",!r&&"cursor-pointer",t&&n?"items-start":"items-center"),children:[d==="start"&&(n||t)?e.jsxs("div",{children:[n?e.jsx("p",{className:g,children:n}):null,t?e.jsx("p",{className:"text-xs text-text-800",children:t}):null]}):null,e.jsxs("div",{className:"relative flex justify-center items-center",children:[e.jsx("input",{id:i,type:"radio",name:o,className:h(E({size:a,color:s})),disabled:r,value:x,onChange:j,defaultChecked:x===m}),e.jsx("div",{className:f("absolute rounded-full",q)})]}),d==="end"&&(n||t)?e.jsxs("div",{children:[n?e.jsx("p",{className:g,children:n}):null,t?e.jsx("p",{className:"text-xs text-text-800",children:t}):null]}):null]}),!r&&l&&u&&e.jsx(P,{text:l})]})};L.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"radio"',computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"unknown"},description:`@description\r
Propiedad para colocar el tamaño del radio.\r
@type\r
Puede recibir  **"sm"** | **"md"**  | **"lg"**\r
@value\r
El valor por defecto es **"md"**`,defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"unknown"},description:`@description\r
Propiedad para colocar un color de fondo.\r
@type\r
Puede recibir  **"primary"** | **"secondary"**  | **"neutral"**\r
@value\r
El valor por defecto es **"primary"**`,defaultValue:{value:'"primary"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`@description\r
Propiedad para bloquear el radio, mostrando una opacidad en el campo\r
@type\r
Puede recibir **"boolean"**`,defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:`@description\r
Propiedad para colocar el texto al aldo del radio.\r
@type\r
Puede recibir **"string"**`},description:{required:!1,tsType:{name:"string"},description:`@description\r
Propiedad para colocar la descripcion abajo del texto.\r
@type\r
Puede recibir **"string"**`},positionLabel:{required:!1,tsType:{name:"union",raw:'"start" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:`@description\r
Propiedad para decidir la posicion de los texto del radio\r
@type\r
Puede recibir **"start"** | **"end"**\r
@value\r
El valor por defecto es **start**`,defaultValue:{value:'"end"',computed:!1}},error:{required:!1,tsType:{name:"string"},description:`@description\r
Propiedad para mostrar un texto de error\r
@type\r
Puede recibir **"string"** -> pensado en el formik`},touched:{required:!1,tsType:{name:"boolean"},description:`@description\r
Propiedad para pasar si el valor a hizo objecto del focus del onblur\r
@type\r
Puede recibir **"boolean"** -> pensado en el formik`},value:{required:!0,tsType:{name:"string"},description:`@description\r
Propiedad para ingresar valor del radio\r
@type\r
Puede recibir **"string"**`},checked:{required:!1,tsType:{name:"string"},description:`@description\r
Propiedad para ingresar el estado del radio\r
@type\r
Puede recibir **"string"**`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:`@description\r
Propiedad para lanzar un evento de cambio de estado del valor del radio\r
@type\r
Retorna un valor (state) => de tipo boolean\r
@value\r
El campo es requerido`},className:{required:!1,tsType:{name:"string"},description:`@description\r
Propiedad para brindar clases personalizadas al componente`}}};export{P as L,L as R,w as a};
