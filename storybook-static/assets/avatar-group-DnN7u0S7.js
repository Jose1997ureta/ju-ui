import{j as r,c as g,t as f}from"./clsx-DqFZfPE4.js";import{c as b,a as T}from"./index-ESNyr8ci.js";import{r as y,R as w}from"./index-DqterGEq.js";const m=T(["bg-neutral-300"],{variants:{border:{primary:"ring-primary-700",secondary:"ring-secondary-700",neutral:"ring-neutral-700",success:"ring-success-700 ",danger:"ring-danger-700",warning:"ring-warning-700",default:"ring-text-500"},size:{xs:"w-6 h-6 text-[10px]",sm:"w-8 h-8 text-xs",md:"w-10 h-10 text-base",lg:"w-12 h-12 text-base"},radius:{sm:"rounded-lg",md:"rounded-xl",lg:"rounded-2xl",full:"rounded-full"}}}),q=({className:l,classNameContainer:c,content:n,border:t,disabled:s=!1,name:o,radius:i="full",size:e="md",src:u,status:d,onClick:p})=>{const v=y.useMemo(()=>{if(u)return r.jsx("img",{src:u,alt:"",className:b(m({radius:i}),"object-cover w-full h-full")});if(n)return n;if(o){let a="text-xs";switch(e){case"md":a="text-md";break;case"lg":a="text-md";break}return r.jsx("span",{className:`${a}`,children:o})}},[n,o,i,e,u]),x=y.useMemo(()=>{const a=m({size:e,radius:i}),N=t?`ring ring-2 ${m({border:t})}`:"";return r.jsx("div",{className:b("cursor-pointer flex justify-center items-center overflow-hidden bg-white",a,N,l,s?"cursor-not-allowed":"cursor-pointer"),children:v})},[v,t,l,s,i,e]),h=g(e==="xs"&&"-bottom-[5%] -right-[5%] w-2.5 h-2.5 border",e==="sm"&&"-bottom-[5%] -right-[5%] w-3.5 h-3.5 border",e==="md"&&"-bottom-[5%] -right-[5%] w-4 h-4 border-2",e==="lg"&&"-bottom-[5%] -right-[5%] w-5 h-5 border-2",d==="active"&&"bg-success-700",d==="pending"&&"bg-warning-700",d==="inactive"&&"bg-text-500"),R=a=>{s||p&&p(a)};return r.jsxs("div",{className:f("w-fit relative",g(s&&"opacity-50"),c),onClick:R,children:[x,d?r.jsx("div",{className:f("absolute bg-success-700 rounded-full border-white",h)}):null]})};q.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:`@description\r
Propiedad para colocar el tamaño del avatar.\r
@type\r
Puede recibir **"xs"** | **"sm"** | **"md"**  | **"lg"**\r
@value\r
El valor por defecto es **"md"**`,defaultValue:{value:'"md"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`@description\r
Propiedad para opacar el avatar\r
@type\r
Puede recibir **"boolean"**`,defaultValue:{value:"false",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"T | U[number]",elements:[{name:"unknown"},{name:"tuple[number]",raw:"U[number]"}]},description:`@description\r
Propiedad para colocar un border radius.\r
@type\r
Puede recibir **"sm"** | **"md"**  | **"lg"** | **"full"**\r
@value\r
El valor por defecto es **""full""**`,defaultValue:{value:'"full"',computed:!1}},border:{required:!1,tsType:{name:"union",raw:"T | U[number]",elements:[{name:"union",raw:`| "primary"\r
| "secondary"\r
| "neutral"\r
| "success"\r
| "warning"\r
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},{name:"tuple[number]",raw:"U[number]"}]},description:`@description\r
Propiedad para colocar un border color.\r
@type\r
Puede recibir **"default"** | **"primary"** | **"secondary"**  | **"neutral"** | **"success"** | **"warning"** | **"danger"**\r
@value\r
El valor no es requerido`},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`@description\r
Propiedad para ingresar elementos personalizados\r
@type\r
Puede recibir **"JSX"**`},src:{required:!1,tsType:{name:"string"},description:`@description\r
Propiedad para brindar la ruta de la imagen`},className:{required:!1,tsType:{name:"string"},description:`@description\r
Propiedad para brindar clases personalizadas al componente de avatar.`},classNameContainer:{required:!1,tsType:{name:"string"},description:`@description\r
Propiedad para brindar clases personalizadas al componente de containers avatar.`},name:{required:!1,tsType:{name:"string"},description:`@description\r
Propiedad para ingresar un nombre`},status:{required:!1,tsType:{name:"union",raw:'"active" | "pending" | "inactive"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"pending"'},{name:"literal",value:'"inactive"'}]},description:`@description\r
Propiedad para ingresar un estado al avatar`},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:`@description\r
Propiedad lanzar un evento click`}}};const P=({max:l=5,total:c,children:n,renderCount:t})=>{const s=w.Children.toArray(n).slice(0,l);return r.jsxs("div",{className:"flex items-center -space-x-2",children:[s.map((o,i)=>r.jsx("div",{className:"hover:scale-105 transition-all duration-200 hover:z-10",children:o},i)),t&&t({total:(c||w.Children.toArray(n).length)-l})]})};P.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},total:{required:!1,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},renderCount:{required:!1,tsType:{name:"signature",type:"function",raw:"({ total }: { total: number }) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ total: number }",signature:{properties:[{key:"total",value:{name:"number",required:!0}}]}},name:""}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};export{q as A,P as a};
