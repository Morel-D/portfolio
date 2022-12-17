import Biography from "../Pages/Biography";
import Introduction from "../Pages/Introduction";
import Services from "../Pages/Services";
import Skill from "../Pages/Skill";


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
            <div className="skill p-3">
                <div className="px-5 mx-5">
                <h2 className="" id="introText">Skills</h2>
                <p className="lead text-white">My self-taught skills acquired throughout my academic periods</p>
                </div>
                <Skill />
            </div>
        </div>
     );
}
 
export default Content;