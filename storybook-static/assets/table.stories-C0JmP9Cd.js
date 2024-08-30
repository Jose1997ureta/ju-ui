import{j as a}from"./clsx-DqFZfPE4.js";import{T as n,P}from"./pagination-YnyEQZdB.js";import{e as R,c as L}from"./index-B3sNj1pq.js";import{I as O,a as H}from"./form-item-BHIv01C9.js";import"./radio-D21XcBnu.js";import{a as I,b as z,c as V}from"./index-D6gcYc2T.js";import{r as l}from"./index-DqterGEq.js";import"./v4-DvF23Exx.js";import"./index-DsMWkBeO.js";import"./iconBase-CdQTX8f7.js";import"./index-ESNyr8ci.js";import"./assertThisInitialized-ByOjVySJ.js";import"./index-G64dNDM8.js";import"./index-BQnZPrXV.js";const J=({initialDisabledKeys:S=[],initialSelectkey:g=[],initialValueSearch:s={}})=>{const[r,d]=l.useState(g),[h,b]=l.useState(S),[c,u]=l.useState(s),p=t=>{const y=r.some(m=>m.id===t.id);let o=[...r];y?o=r.filter(m=>m.id!==t.id):o.push(t),d(o)},C=l.useCallback(t=>{r.length!==t.length&&d(t)},[r.length]);return{selectkeys:r,disabledKeys:h,valueSearch:c,handleSelectKeys:C,handleSelectKey:p,handleDisabledKeys:t=>{b(t)},handleSetValueSearch:(t,y)=>{u(o=>{const m={...o};return y?m[t]=y:delete m[t],m})}}},G=({initialPage:S=1,initialLimit:g=20})=>{const[s,r]=l.useState(S),[d,h]=l.useState(g);return{handleSetPagination:l.useCallback(({page:c,limit:u})=>{c!==s&&r(c),u!==d&&h(u)},[d,s]),page:s,limit:d}},T=[{id:1,name:"Pete",lastName:"Chesterman",email:"pchesterman0@oakley.com",gender:"Agender",married:!1},{id:2,name:"Waldemar",lastName:"Bingham",email:"wbingham1@prnewswire.com",gender:"Male",married:!0},{id:3,name:"Joby",lastName:"Jellybrand",email:"jjellybrand2@xing.com",gender:"Female",married:!1},{id:4,name:"Gwendolen",lastName:"Lorent",email:"glorent3@narod.ru",gender:"Female",married:!0},{id:5,name:"Rhetta",lastName:"Bartosik",email:"rbartosik4@de.vu",gender:"Female",married:!1},{id:6,name:"Bronson",lastName:"Okker",email:"bokker5@com.com",gender:"Male",married:!1},{id:7,name:"Aland",lastName:"Coppen",email:"acoppen6@opensource.org",gender:"Male",married:!1},{id:8,name:"Eric",lastName:"Draye",email:"edraye7@loc.gov",gender:"Male",married:!0},{id:9,name:"Flynn",lastName:"Kristiansen",email:"fkristiansen8@illinois.edu",gender:"Male",married:!0},{id:10,name:"Freeman",lastName:"Legen",email:"flegen9@ucoz.com",gender:"Male",married:!0},{id:11,name:"Waldo",lastName:"Polleye",email:"wpolleyea@xrea.com",gender:"Male",married:!1},{id:12,name:"Hernando",lastName:"Ife",email:"hifeb@oracle.com",gender:"Male",married:!0},{id:13,name:"Fletch",lastName:"Bailes",email:"fbailesc@webs.com",gender:"Male",married:!0},{id:14,name:"Farlee",lastName:"Vella",email:"fvellad@springer.com",gender:"Male",married:!0},{id:15,name:"Dorie",lastName:"Moland",email:"dmolande@msu.edu",gender:"Male",married:!0},{id:16,name:"Mikol",lastName:"Sturmey",email:"msturmeyf@tiny.cc",gender:"Male",married:!1},{id:17,name:"Bob",lastName:"Bunce",email:"bbunceg@xrea.com",gender:"Male",married:!0},{id:18,name:"Janenna",lastName:"Buntine",email:"jbuntineh@wix.com",gender:"Female",married:!1},{id:19,name:"Stan",lastName:"Reisen",email:"sreiseni@vkontakte.ru",gender:"Male",married:!1},{id:20,name:"Wayland",lastName:"Peterkin",email:"wpeterkinj@indiatimes.com",gender:"Male",married:!0},{id:21,name:"Phillie",lastName:"Schulze",email:"pschulzek@discovery.com",gender:"Agender",married:!0},{id:22,name:"Effie",lastName:"McKilroe",email:"emckilroel@nasa.gov",gender:"Female",married:!0},{id:23,name:"Erv",lastName:"Burkwood",email:"eburkwoodm@pagesperso-orange.fr",gender:"Male",married:!0},{id:24,name:"Mayor",lastName:"Yellowlees",email:"myellowleesn@mac.com",gender:"Male",married:!1},{id:25,name:"Drew",lastName:"Shepheard",email:"dshepheardo@histats.com",gender:"Male",married:!1},{id:26,name:"Donnie",lastName:"Kalker",email:"dkalkerp@hp.com",gender:"Bigender",married:!0},{id:27,name:"Clyde",lastName:"Reeders",email:"creedersq@who.int",gender:"Male",married:!0},{id:28,name:"Aileen",lastName:"Matokhnin",email:"amatokhninr@who.int",gender:"Female",married:!1},{id:29,name:"Roderigo",lastName:"Vick",email:"rvicks@apache.org",gender:"Male",married:!0},{id:30,name:"Pen",lastName:"Gamett",email:"pgamettt@oracle.com",gender:"Female",married:!1},{id:31,name:"Susi",lastName:"McAteer",email:"smcateeru@freewebs.com",gender:"Female",married:!0},{id:32,name:"Archy",lastName:"Baldassi",email:"abaldassiv@biglobe.ne.jp",gender:"Male",married:!0},{id:33,name:"Brittne",lastName:"Athersmith",email:"bathersmithw@google.com.au",gender:"Female",married:!0},{id:34,name:"Bernard",lastName:"Rookledge",email:"brookledgex@cam.ac.uk",gender:"Male",married:!1},{id:35,name:"Dannie",lastName:"Rozier",email:"droziery@miibeian.gov.cn",gender:"Genderfluid",married:!0},{id:36,name:"Oby",lastName:"Alder",email:"oalderz@newyorker.com",gender:"Male",married:!0},{id:37,name:"Basil",lastName:"Brimman",email:"bbrimman10@ow.ly",gender:"Male",married:!0},{id:38,name:"Haywood",lastName:"Crump",email:"hcrump11@eepurl.com",gender:"Male",married:!1},{id:39,name:"Chuck",lastName:"Casiero",email:"ccasiero12@example.com",gender:"Polygender",married:!0},{id:40,name:"Aundrea",lastName:"Lindborg",email:"alindborg13@psu.edu",gender:"Female",married:!0},{id:41,name:"Rosaline",lastName:"Jayne",email:"rjayne14@independent.co.uk",gender:"Female",married:!1},{id:42,name:"Niels",lastName:"Leguey",email:"nleguey15@jigsy.com",gender:"Male",married:!1},{id:43,name:"Rowen",lastName:"Itzkovici",email:"ritzkovici16@cbc.ca",gender:"Male",married:!1},{id:44,name:"Gerhardt",lastName:"Downing",email:"gdowning17@exblog.jp",gender:"Male",married:!0},{id:45,name:"Dov",lastName:"Okill",email:"dokill18@studiopress.com",gender:"Male",married:!0},{id:46,name:"Jacquette",lastName:"Cereceres",email:"jcereceres19@feedburner.com",gender:"Female",married:!1},{id:47,name:"Ediva",lastName:"Orrah",email:"eorrah1a@google.nl",gender:"Female",married:!1},{id:48,name:"Frederic",lastName:"Stagg",email:"fstagg1b@pcworld.com",gender:"Male",married:!1},{id:49,name:"Joelie",lastName:"Vanderson",email:"jvanderson1c@foxnews.com",gender:"Female",married:!1},{id:50,name:"Kipper",lastName:"Antoinet",email:"kantoinet1d@tripod.com",gender:"Male",married:!0}],_=[{id:"name",name:"Nombre"},{id:"lastName",name:"Apellidos"},{id:"email",name:"Correo Electronico"},{id:"gender",name:"Genero"},{id:"married",name:"Es Casado?"}],se={title:"Components/Table",component:n,parameters:{layout:"centered"},tags:["autodocs"]},W=[10,20,50,100,200],N={args:{},render:function(){const{selectkeys:g,disabledKeys:s,valueSearch:r,handleSelectKey:d,handleSelectKeys:h,handleSetValueSearch:b}=J({initialDisabledKeys:["1","4","5"]}),{handleSetPagination:c,page:u,limit:p}=G({}),[C,k]=l.useState([]),[x,t]=l.useState([]),[y,o]=l.useState(!1);l.useEffect(()=>{o(!0);const e=setTimeout(()=>{k(T),t(T),o(!1)},1e3);return()=>{clearTimeout(e)}},[]),l.useEffect(()=>{const e=x.filter(i=>Object.keys(r).every(f=>i[f]&&i[f].toString().toLowerCase().includes(r[f].toString().toLowerCase())));k(e)},[x,r]);const m=e=>{d(e)},D=e=>{if(e===!1)return h([]);const i=w.map(f=>({id:f.id.toString(),name:f.name}));h(i)},w=l.useMemo(()=>x.filter(e=>!s.some(i=>e.id.toString()===i)),[x,s]),v=(e,i)=>{b(e,i),c({page:1,limit:p})},F=e=>{c(e)},j=u*p,E=j-p,K=C.slice(E,j);return a.jsxs("div",{className:"border p-4",style:{width:900},children:[a.jsxs(n,{classNameContainer:"max-h-[500px]",selectkeys:g,disabledKeys:s,dataHeader:_,theme:"secondary",children:[a.jsxs(n.Header,{children:[a.jsx(n.HeaderRow,{onChangeCheck:D,valueCheck:w.length===g.length,children:({item:e})=>a.jsx(n.HeaderColumn,{text:e.name,color:e.id==="married"?"secondary":"primary",icon:a.jsx(R,{className:"h-4 w-4"}),className:e.id==="email"?"w-[250px] min-w-[250px]":""})}),a.jsx(n.SearchRow,{children:({item:e})=>a.jsx(n.SearchColumn,{className:"w-[100px] min-w-[100px]",children:a.jsx(O,{value:r[e.id]||"",size:"sm",onChange:i=>v(e.id.toString(),i.target.value),endContent:r[e.id.toString()]?a.jsx(L,{className:"cursor-pointer",onClick:()=>v(e.id.toString(),"")}):null})})})]}),a.jsx(n.Body,{data:K,loading:y,children:({item:e})=>a.jsxs(n.BodyRow,{keyCurrent:{id:e.id.toString(),name:e.name},onChangeCheck:m,children:[a.jsx(n.BodyColumn,{text:e.name}),a.jsx(n.BodyColumn,{text:e.lastName}),a.jsx(n.BodyColumn,{text:e.email}),a.jsx(n.BodyColumn,{text:e.gender}),a.jsx(n.BodyColumn,{children:a.jsx("div",{className:"flex justify-center",children:a.jsx(H,{id:e.id,value:e.married,onChange:()=>alert(),color:"secondary",size:"sm"})})}),a.jsx(n.BodyColumn,{children:a.jsxs("div",{className:"flex items-center gap-x-3 justify-center",children:[a.jsx(I,{className:"fill-text-800 h-[14px] w-[14px]"}),a.jsx(z,{className:"fill-text-800 w-[14px] h-[14px]"}),a.jsx(V,{className:"fill-text-800 w-[14px] h-[14px]"})]})})]})})]}),a.jsx(P,{className:"mt-5",total:C.length,onChange:F,page:u,limit:p,dataLimit:W})]})}};var M,A,B;N.parameters={...N.parameters,docs:{...(M=N.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {},
  render: function Render() {
    const {
      selectkeys,
      disabledKeys,
      valueSearch,
      handleSelectKey,
      handleSelectKeys,
      handleSetValueSearch
    } = useTable({
      initialDisabledKeys: ["1", "4", "5"]
    });
    const {
      handleSetPagination,
      page,
      limit
    } = usePagination({});
    const [data, setData] = useState<any[]>([]);
    const [dataAll, setDataAll] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
      setLoading(true);
      const time = setTimeout(() => {
        setData(DATA);
        setDataAll(DATA);
        setLoading(false);
      }, 1000);
      return () => {
        clearTimeout(time);
      };
    }, []);
    useEffect(() => {
      const filteredData = dataAll.filter((item: any) => {
        return Object.keys(valueSearch).every(key => {
          return item[key] && item[key].toString().toLowerCase().includes(valueSearch[key].toString().toLowerCase());
        });
      });
      setData(filteredData);
    }, [dataAll, valueSearch]);
    const handleCheckRow = (key: TableKeyCurrent) => {
      handleSelectKey(key);
    };
    const handleCheckAll = (value: boolean) => {
      if (value === false) return handleSelectKeys([]);
      const result: TableKeyCurrent[] = dataFormate.map(el => {
        return {
          id: el.id.toString(),
          name: el.name
        };
      });
      handleSelectKeys(result);
    };
    const dataFormate = useMemo(() => {
      return dataAll.filter(el => {
        return !disabledKeys.some(d => el.id.toString() === d);
      });
    }, [dataAll, disabledKeys]);
    const handleChangeInput = (key: string, value: string) => {
      handleSetValueSearch(key, value);
      handleSetPagination({
        page: 1,
        limit
      });
    };
    const handleChangePagination = (value: PaginationSetValueProps) => {
      handleSetPagination(value);
    };
    const indexOfLastElement = page * limit;
    const indexOfFirstElement = indexOfLastElement - limit;
    const currentElements = data.slice(indexOfFirstElement, indexOfLastElement);
    return <div className="border p-4" style={{
      width: 900
    }}>\r
                <Table classNameContainer="max-h-[500px]" selectkeys={selectkeys} disabledKeys={disabledKeys} dataHeader={DATA_HEADER} theme="secondary">\r
                    <Table.Header>\r
                        <Table.HeaderRow onChangeCheck={handleCheckAll} valueCheck={dataFormate.length === selectkeys.length}>\r
                            {({
              item
            }) => <Table.HeaderColumn text={item.name} color={item.id === "married" ? "secondary" : "primary"} icon={<IoSearchOutline className="h-4 w-4" />} className={item.id === "email" ? "w-[250px] min-w-[250px]" : ""} />}\r
                        </Table.HeaderRow>\r
\r
                        <Table.SearchRow>\r
                            {({
              item
            }) => <Table.SearchColumn className="w-[100px] min-w-[100px]">\r
                                    <Input value={valueSearch[item.id] || ""} size="sm" onChange={e => handleChangeInput(item.id.toString(), e.target.value)} endContent={valueSearch[item.id.toString()] ? <IoCloseSharp className="cursor-pointer" onClick={() => handleChangeInput(item.id.toString(), "")} /> : null} />\r
                                </Table.SearchColumn>}\r
                        </Table.SearchRow>\r
                    </Table.Header>\r
                    <Table.Body data={currentElements} loading={loading}>\r
                        {({
            item
          }) => <Table.BodyRow keyCurrent={{
            id: item.id.toString(),
            name: item.name
          }} onChangeCheck={handleCheckRow}>\r
                                <Table.BodyColumn text={item.name} />\r
                                <Table.BodyColumn text={item.lastName} />\r
                                <Table.BodyColumn text={item.email} />\r
                                <Table.BodyColumn text={item.gender} />\r
                                <Table.BodyColumn>\r
                                    <div className="flex justify-center">\r
                                        <Toggle id={item.id} value={item.married} onChange={() => alert()} color="secondary" size="sm" />\r
                                    </div>\r
                                </Table.BodyColumn>\r
\r
                                <Table.BodyColumn>\r
                                    <div className="flex items-center gap-x-3 justify-center">\r
                                        <FaSearchDollar className="fill-text-800 h-[14px] w-[14px]" />\r
                                        <FaPenAlt className="fill-text-800 w-[14px] h-[14px]" />\r
                                        <FaTrash className="fill-text-800 w-[14px] h-[14px]" />\r
                                    </div>\r
                                </Table.BodyColumn>\r
                            </Table.BodyRow>}\r
                    </Table.Body>\r
                </Table>\r
                <Pagination className="mt-5" total={data.length} onChange={handleChangePagination} page={page} limit={limit} dataLimit={dataLimit} />\r
            </div>;
  }
}`,...(B=(A=N.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const me=["Default"];export{N as Default,me as __namedExportsOrder,se as default};
