import{j as r}from"./clsx-DqFZfPE4.js";import{r as i}from"./index-DqterGEq.js";import{T as o}from"./time-DIMZOUbQ.js";import"./index-G64dNDM8.js";import"./icon-close-calendar-5onB3g24.js";import"./iconBase-CdQTX8f7.js";import"./index-D6gcYc2T.js";import"./form-item-BHIv01C9.js";import"./index-ESNyr8ci.js";import"./radio-D21XcBnu.js";import"./assertThisInitialized-ByOjVySJ.js";import"./index-DsMWkBeO.js";import"./index-B3sNj1pq.js";import"./index-BQnZPrXV.js";const h={title:"Components/Time Picker",component:o,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{},render:function(){const[s,m]=i.useState("13:00");return r.jsx("div",{className:"border w-[400px] p-4 ",children:r.jsx(o,{className:"w-[85px] bg-red-50",value:s,onChange:m})})}};var a,t,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [value, setValue] = useState<ValueCalendar>("13:00");
    return <div className="border w-[400px] p-4 ">\r
                {/* <TimePicker\r
                    value={value}\r
                    onChange={setValue}\r
                    isIcon={false}\r
                    isIconClear={false}\r
                 /> */}\r
                <TimePicker
      // classNameContainer="w-[100px] bg-red-50"
      className="w-[85px] bg-red-50" value={value} onChange={setValue} />\r
            </div>;
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,h as default};
