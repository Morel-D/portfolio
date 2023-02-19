import Content from "./Content";
import Navigation from "./Navigation";
import loading from "../Images/Loading.gif";
import { useEffect, useState } from "react";


const MyApp = () => {

  const [visible, setVisible] = useState();
  const [load, setLoad] = useState();

  useEffect(() => {

    setVisible('app d-none');
    setLoad('loading d-block')

    setInterval(() => {
      setLoad('loading d-none');
      setVisible('app d-block')
      console.log('2 sceonds');
    }, 2000)

  },[])

  return ( 
    <div className="App">

        <div className={load}>
            <div className="loading d-flex justify-content-center mt-5 py-5" id="loading">
                <img src={loading} />
            </div>
        </div>

        <div className={visible}>
           <div className="header">
              <Navigation />
           </div>
           <div className="content">
             <Content />
           </div>
        </div>
  </div>
   );
}
 
export default MyApp;
