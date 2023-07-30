import { Link } from "react-router-dom";

const Contacts = () => {
    return ( 
        <div className="bg-dark">
            <div className="title px-5 py-4 mx-5">
            <h2 className="titleServices ">Contact</h2>
            <h4 className="text-secondary">Get in touch</h4>
   

                <div className="conatiner mt-3">
                    <div className="p-3">
                        <h4> PHONE : <label className="lead mx-4">+237696676139</label></h4> 
                        <h4> EMAIL : <label className="lead mx-4">mtchaptche@gmail.com</label></h4> 

                        <hr />

                        <h4><Link to="https://github.com/Morel-D?tab=repositories" className="text-danger">My GitHub</Link></h4> 
                        <h4><Link to="https://www.linkedin.com/in/morel-tchaptche/" className="text-danger">My LinkedIn</Link></h4>
                    </div>
                </div>
            </div> 
        </div>
     );
}
 
export default Contacts;