import{c,j as d}from"./clsx-DqFZfPE4.js";import{c as u,a as m}from"./index-ESNyr8ci.js";const p=m(["w-fit flex items-center text-white"],{variants:{color:{primary:"",secondary:"",neutral:"",success:"",danger:"",warning:"",white:"",default:""},size:{sm:"px-2 h-6 text-xs",md:"px-2.5 h-7 text-xs",lg:"px-3.5 h-8 text-sm"},variant:{solid:"text-white",outline:"border",flat:""},radius:{sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"}},compoundVariants:[{color:"primary",variant:"solid",className:"bg-primary-700"},{color:"primary",variant:"outline",className:"border-primary-700 text-primary-700"},{color:"primary",variant:"flat",className:"bg-primary-100 text-primary-700"},{color:"secondary",variant:"solid",className:"bg-secondary-700"},{color:"secondary",variant:"outline",className:"border-secondary-700 text-secondary-700"},{color:"secondary",variant:"flat",className:"bg-secondary-100 text-secondary-700"},{color:"neutral",variant:"solid",className:"bg-neutral-700"},{color:"neutral",variant:"outline",className:"border-neutral-700 text-neutral-700"},{color:"neutral",variant:"flat",className:"bg-neutral-300 text-neutral-700"},{color:"success",variant:"solid",className:"bg-success-700"},{color:"success",variant:"outline",className:"border-success-700 text-success-700"},{color:"success",variant:"flat",className:"bg-success-100 text-success-700"},{color:"warning",variant:"solid",className:"bg-warning-700"},{color:"warning",variant:"outline",className:"border-warning-700 text-warning-700"},{color:"warning",variant:"flat",className:"bg-warning-100 text-warning-700"},{color:"danger",variant:"solid",className:"bg-danger-700"},{color:"danger",variant:"outline",className:"border-danger-700 text-danger-700"},{color:"danger",variant:"flat",className:"bg-danger-100 text-danger-700"},{color:"white",variant:"solid",className:"border border-neutral-300 text-text-800"},{color:"white",variant:"outline",className:"border-neutral-300 text-text-800"},{color:"white",variant:"flat",className:"border border-neutral-300 text-text-800"}],defaultVariants:{size:"sm",radius:"full",color:"primary",variant:"solid"}}),v=({children:e,className:a,color:r="primary",disabled:n=!1,radius:l="full",size:t="sm",variant:s="solid",onClick:i})=>{const o=c(n&&"opacity-50");return d.jsx("div",{className:u(p({color:r,size:t,radius:l,variant:s,className:a}),o),onClick:i,children:e})};v.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{color:{required:!1,tsType:{name:"union",raw:"T | U[number]",elements:[{name:"union",raw:`| "primary"\r
| "secondary"\r
| "neutral"\r
| "success"\r
| "warning"\r
| "danger"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},{name:"tuple[number]",raw:"U[number]"}]},description:`@description\r
Propiedad para colocar el color.\r
@type\r
Puede recibir **primary** | **secondary**  | **neutral**  | **success**  | **warning** | **danger** | **white**\r
@value\r
El valor por defecto es **primary**`,defaultValue:{value:'"primary"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline" | "flat"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"flat"'}]},description:`@description\r
Propiedad para colocar una variante del boton del icon.\r
@type\r
Puede recibir **solid** | **outline** | **flat**\r
@value\r
El valor por defecto es **solid**`,defaultValue:{value:'"solid"',computed:!1}},size:{required:!1,tsType:{name:"unknown"},description:`@description\r
Propiedad para colocar el tamaño del button.\r
@type\r
Puede recibir **sm** | **md**  | **lg**\r
@value\r
El valor por defecto es **sm**`,defaultValue:{value:'"sm"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`@description\r
Propiedad para insertar elementos jsx\r
@type\r
Puede recibir **React.ReactNode** | **React.ReactNode[]**`},radius:{required:!1,tsType:{name:"union",raw:"T | U[number]",elements:[{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},{name:"tuple[number]",raw:"U[number]"}]},description:`@description\r
Propiedad para colocar un border radius.\r
@type\r
Puede recibir **xs** | **sm** | **md**  | **lg** | **full**\r
@value\r
El valor por defecto es **full**`,defaultValue:{value:'"full"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:`@description\r
Propiedad para brindar clases personalizadas al componente, este se situa en el mismo input.`},disabled:{required:!1,tsType:{name:"boolean"},description:`@description\r
Propiedad para bloquear el chip, mostrando una opacidad en el campo\r
@type\r
Puede recibir **boolean**`,defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:`@description\r
Propiedad lanzar un evento click`}}};export{v as C};
