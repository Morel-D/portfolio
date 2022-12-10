import Biography from "../Pages/Biography";
import Introduction from "../Pages/Introduction";
import Services from "../Pages/Services";


const Content = () => {
    return ( 
        <div className="content">
            <div className="Introduction">
               <Introduction />
            </div>
            <div className="Biography">
                <Biography />
            </div>
            <div className="Services">
                <Services />
            </div>
        </div>
     );
}
 
export default Content;