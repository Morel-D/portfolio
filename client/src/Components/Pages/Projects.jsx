import fitness from "../Images/designs/Fitness.png"
import gaming from "../Images/designs/Gaming.png"
import vision from "../Images/designs/vision.png"

const Projects = () => {
    return ( 
        <div className="projects">
              <div className="px-5 mx-5 py-5">
                <h2 className="d-flex justify-content-start" id="introText">Projects</h2>
                <p className="lead text-white d-flex justify-content-start">My self-taught skills acquired throughout my academic periods</p>
            </div>
        
            <div className="px-5 mx-5 py-3">

               <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                 <li className="nav-item" role="presentation">
                   <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Web Projects</button>
                 </li>
                 <li className="nav-item" role="presentation">
                   <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Moblie Projects</button>
                 </li>
                 <li className="nav-item" role="presentation">
                   <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Designs</button>
                 </li>
               </ul>
                   
               <div className="tab-content text-white" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">One</div>
                    


                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">

                    </div>
                    
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">

                        <div className="container">
                            <div className="card my-5" id="project-card">
                                <div className="row">
                                    <div className="col">
                                        <img src={fitness} className="img-fluid"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="mt-5 text-white">Fitness UI Design</h3>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="card my-5" id="project-card">
                                <div className="row">
                                    <div className="col">
                                        <img src={gaming} className="img-fluid"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="mt-5 text-white">Gaming UI Design</h3>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="card my-5" id="project-card">
                                <div className="row">
                                    <div className="col">
                                        <img src={vision} className="img-fluid"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="mt-5 text-white">Gaming UI Design</h3>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            
                            
                        </div>

                    </div>
                    
               </div>
                
            </div>

        </div>
     );
}
 
export default Projects;