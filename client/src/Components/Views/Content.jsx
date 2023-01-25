import Biography from "../Pages/Biography";
import Expererience from "../Pages/Experience";
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
                <div className="px-5 mx-5 ">
                <h2 className="d-flex justify-content-end" id="introText">Skills</h2>
                <p className="lead text-white d-flex justify-content-end">My self-taught skills acquired throughout my academic periods</p>
                </div>
                <Skill />
            </div>
            <div className="experience">
                <Expererience />
            </div>
        </div>
     );
}
 
export default Content;