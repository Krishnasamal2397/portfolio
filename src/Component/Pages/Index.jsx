import React,{useState} from "react";
import { Layout } from "antd";
import HeaderComponent from "../Header/Index";
import FooterComponent from "../Footer/Index";
import Container from "../Container/Index";
import ThemeContext from "../Helper/index"
function Index() {
  const [id, setId] = useState("")
  
  const fetchnavigationid =(id)=>{
    // console.log(id,"first check")
setId([...id])
  }
  
  //  const IdContext = React.createContext(id);
  
  return (
    <ThemeContext.Provider value={id}>
    <Layout>
      <HeaderComponent navigation={fetchnavigationid}/>
      <Container />
      <FooterComponent />
    </Layout>
    </ThemeContext.Provider>
  );
}


export default Index;
