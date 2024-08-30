import{j as a}from"./clsx-DqFZfPE4.js";import{S as w,F as m,A as j}from"./form-item-BHIv01C9.js";import"./radio-D21XcBnu.js";import{u as C}from"./formik.esm-DCvPZFJY.js";import{c as F,b as V}from"./index.esm-CAdhWr5z.js";import{r as s}from"./index-DqterGEq.js";import"./index-ESNyr8ci.js";import"./assertThisInitialized-ByOjVySJ.js";import"./index-G64dNDM8.js";import"./index-DsMWkBeO.js";import"./iconBase-CdQTX8f7.js";import"./index-B3sNj1pq.js";import"./index-BQnZPrXV.js";const Y={title:"Components/Select/Autocomplete Multi",component:w,parameters:{layout:"centered"},tags:["autodocs"]},L="13",o={args:{},render:function(){const[l,r]=s.useState([]),[b,i]=s.useState(!1),{handleBlur:O,setFieldValue:c,values:u}=C({initialValues:{ids:[13]},validationSchema:F().shape({ids:V().min(1,"El campo es requerido")}),onSubmit:e=>{console.log(e)}}),d=s.useCallback(async()=>{let e=null;e=await(await fetch(`https://65e8d1804bb72f0a9c5073ba.mockapi.io/api/user/${L}`)).json(),r([e])},[]);s.useEffect(()=>{d()},[d]);const p=async(e="")=>{i(!0);try{const t=await(await fetch(`https://65e8d1804bb72f0a9c5073ba.mockapi.io/api/user/${e}`)).json();return i(!1),e.trim()===""?t:[t]}catch{return i(!1),[]}},y=async e=>await p(e),S=async(e,n)=>{if(n==="clear")c("ids",[]),r([]);else{const t=e.map(x=>x.id);c("ids",t)}},v=async()=>{const e=await p();r(e)};return a.jsx("div",{className:"flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md",children:a.jsxs(m,{children:[a.jsx(m.Label,{label:"Ingrese valor"}),a.jsx(j,{isMulti:!0,isLoading:b,loadOption:y,onMenuOpen:v,defaultOptions:l.length>0?l:!0,value:u.ids,name:"ids",onChange:S,onBlur:O("ids")}),JSON.stringify(u)]})})}};var f,h,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const [defaultOption, setDefaultOption] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const {
      handleBlur,
      setFieldValue,
      values
    } = useFormik({
      initialValues: {
        ids: [13]
      },
      validationSchema: Yup.object().shape({
        ids: Yup.array().min(1, "El campo es requerido")
      }),
      onSubmit: ids => {
        console.log(ids);
      }
    });
    const fcGetUser = useCallback(async () => {
      let value = null;
      if (refresh) {
        const response = await fetch(\`https://65e8d1804bb72f0a9c5073ba.mockapi.io/api/user/\${refresh}\`);
        value = await response.json();
      }
      setDefaultOption([value]);
    }, []);
    useEffect(() => {
      fcGetUser();
    }, [fcGetUser]);
    const fcGetUserSearch = async (inputValue = "") => {
      setLoading(true);
      try {
        const response = await fetch(\`https://65e8d1804bb72f0a9c5073ba.mockapi.io/api/user/\${inputValue}\`);
        const data = await response.json();
        setLoading(false);
        if (inputValue.trim() === "") return data;
        return [data];
      } catch (error) {
        setLoading(false);
        return [];
      }
    };
    const loadOptions = async (inputValue: string) => {
      return await fcGetUserSearch(inputValue);
    };
    const handleChange = async (item: any, option?: ActionChangeProps) => {
      if (option === "clear") {
        setFieldValue("ids", []);
        setDefaultOption([]);
      } else {
        const result = item.map((el: any) => el.id);
        setFieldValue("ids", result);
      }
    };
    const handleMenuOpen = async () => {
      const data = await fcGetUserSearch();
      setDefaultOption(data);
    };
    return <div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md">\r
                <FormItem>\r
                    <FormItem.Label label="Ingrese valor" />\r
                    <Autocomplete isMulti isLoading={loading} loadOption={loadOptions} onMenuOpen={handleMenuOpen} defaultOptions={defaultOption.length > 0 ? defaultOption : true} value={values.ids} name="ids" onChange={handleChange} onBlur={handleBlur("ids")} />\r
                    {JSON.stringify(values)}\r
                </FormItem>\r
            </div>;
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const _=["AutoComplete"];export{o as AutoComplete,_ as __namedExportsOrder,Y as default};
