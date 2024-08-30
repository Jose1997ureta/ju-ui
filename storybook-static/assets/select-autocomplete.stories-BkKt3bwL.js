import{j as t}from"./clsx-DqFZfPE4.js";import{S as x,F as p,A as w}from"./form-item-BHIv01C9.js";import"./radio-D21XcBnu.js";import{u as j}from"./formik.esm-DCvPZFJY.js";import{c as C,a as F}from"./index.esm-CAdhWr5z.js";import{r as a}from"./index-DqterGEq.js";import"./index-ESNyr8ci.js";import"./assertThisInitialized-ByOjVySJ.js";import"./index-G64dNDM8.js";import"./index-DsMWkBeO.js";import"./iconBase-CdQTX8f7.js";import"./index-B3sNj1pq.js";import"./index-BQnZPrXV.js";const Y={title:"Components/Select/Autocomplete",component:x,parameters:{layout:"centered"},tags:["autodocs"]},V="13",s={args:{},render:function(){const[i,o]=a.useState([]),[g,r]=a.useState(!1),{handleBlur:b,setFieldValue:l,values:O}=j({initialValues:{id:"13"},validationSchema:C().shape({id:F().required("El campo es requerido")}),onSubmit:e=>{console.log(e)}}),c=a.useCallback(async()=>{let e=null;e=await(await fetch(`https://65e8d1804bb72f0a9c5073ba.mockapi.io/api/user/${V}`)).json(),o([e])},[]);a.useEffect(()=>{c()},[c]);const u=async(e="")=>{r(!0);try{const d=await(await fetch(`https://65e8d1804bb72f0a9c5073ba.mockapi.io/api/user/${e}`)).json();return r(!1),e.trim()===""?d:[d]}catch{return r(!1),[]}},y=async e=>await u(e),v=async(e,n)=>{n==="clear"?(l("id",""),o([])):l("id",e.id)},S=async()=>{const e=await u();o(e)};return t.jsx("div",{className:"flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md",children:t.jsxs(p,{children:[t.jsx(p.Label,{label:"Ingrese valor"}),t.jsx(w,{isLoading:g,loadOption:y,onMenuOpen:S,defaultOptions:i.length>0?i:!0,value:O.id,name:"id",onChange:v,onBlur:b("id"),pattern:"number"})]})})}};var m,f,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
        id: "13"
      },
      validationSchema: Yup.object().shape({
        id: Yup.string().required("El campo es requerido")
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
        setFieldValue("id", "");
        setDefaultOption([]);
      } else setFieldValue("id", item.id);
    };
    const handleMenuOpen = async () => {
      const data = await fcGetUserSearch();
      setDefaultOption(data);
    };
    return <div className="flex items-center gap-2 border py-4 px-4 border-neutral-300 rounded-md">\r
                <FormItem>\r
                    <FormItem.Label label="Ingrese valor" />\r
                    <Autocomplete isLoading={loading} loadOption={loadOptions} onMenuOpen={handleMenuOpen} defaultOptions={defaultOption.length > 0 ? defaultOption : true} value={values.id} name="id" onChange={handleChange} onBlur={handleBlur("id")} pattern="number" />\r
                </FormItem>\r
            </div>;
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const _=["AutoComplete"];export{s as AutoComplete,_ as __namedExportsOrder,Y as default};
