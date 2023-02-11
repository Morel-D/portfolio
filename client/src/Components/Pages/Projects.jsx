import fitness from "../Images/designs/Fitness.png"
import gaming from "../Images/designs/Gaming.png"
import vision from "../Images/designs/vision.png"
import haircut from "../Images/designs/Hair-cut.png";
import fashion from "../Images/designs/Fashion.png";
import limited1 from "../Images/designs/Limited 1.png";
import ice from "../Images/designs/Ice.png";
import shoes from "../Images/designs/shoes.png";

// Videos
import chats from "../assets/Videos/ChatRoom System.mp4";
import commerce from "../assets/Videos/E_Commerce.mp4";
import gallery from "../assets/Videos/Gallery_Image.mp4";
import information from "../assets/Videos/Information.mp4";
import blog from "../assets/Videos/Micro Blogging WebApp.mp4";
import mini from "../assets/Videos/miniProjects.mp4";
import srcms from "../assets/Videos/SRCMS.mp4";

import time_app from "../assets/Videos/world_time_app.mp4";
import bike from "../assets/Videos/bike_appointment.mp4";



const Projects = () => {

    // Desings

  const projects =
    [
      {
        target: "target",
        title: "Fitness UI Design",
        desciption: " Track your daily activity levels with ease and stay motivated with personalized workout planstailored to your individual needs and preferences",
        stack: "Figma",
        image: fitness
      },

      {
        target: "gaming",
        title: "Gaming UI Design",
        desciption: "A digital environments where players can access and play video games.",
        stack: "Figma",
        image: gaming
      },


      {
        target: "vision",
        title: "Furnitures UI Design",
        desciption: "Furniture is an essential part of every home and office, providing comfort, style and functionality.",
        stack: "Adobe XD",
        image: vision
      },

      {
        target: "haircut",
        title: "Hair-Cut Shop UI Design",
        desciption: "We offer a variety of haircuts and styling services for men, women, and children.",
        stack: "Figma",
        image: haircut
      },

      {
        target: "fashion",
        title: "Fashion UI Design",
        desciption: "Unleash Your Style with Every Click.",
        stack: "Figma",
        image: fashion
      },


      {
        target: "limited",
        title: "T-Shirt UI Design",
        desciption: "Comfortable, stylish, and unique.",
        stack: "Figma",
        image: limited1
      },

      {
        target: "ice",
        title: "Ice Scream UI Design",
        desciption: "Scoops of happiness in every bite !",
        stack: "Figma",
        image: ice
      },
            
      {
        target: "shoes",
        title: "Shoes UI Design",
        desciption: "Step into comfort, step into style with us.",
        stack: "Adobe XD",
        image: shoes
      },

    ];
  
  //web Projects

  const webProjects = 
    [
      {
        target: "chat",
        title: "ChatRoom System",
        desciption: "",
        stacks: ['MONGODB', 'EXPRESS.JS', 'REACT.JS', 'NODE.JS'],
        video: chats
      },
      
      {
        target: "commerce",
        title: "E Commerce WebApp",
        desciption: "",
        stacks: ['REACT.JS'],
        video: commerce
      },

      {
        target: "gallery",
        title: "Image Gallery",
        desciption: "",
        stacks: ['HTML', 'CSS', 'PHP', 'MYSQL'],
        video: gallery
      },

      {
        target: "info",
        title: "Information Recording System",
        desciption: "",
        stacks: ['HTML', 'CSS', 'NODE.JS', 'MONGODB'],
        video: information
      },


      {
        target: "micro",
        title: "Micro Blogging System",
        desciption: "",
        stacks: ['REACT.JS', 'NODE.JS', 'EXPRESS.JS', 'MONGODB'],
        video: blog
      },

      {
        target: "mini",
        title: "Mini Projects",
        desciption: "",
        stacks: ['HTML', 'CSS', 'JAVASCRIPT'],
        video: mini
      },

      {
        target: "school",
        title: "School Recording Managment Sysetm",
        desciption: "",
        stacks: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'MYSQL'],
        video: srcms
      },

  ]


  const MoblieProjects = 
    [
      {
        target: "time",
        title: "World Time App",
        desciption: "",
        stacks: ['Flutter'],
        video: time_app
      },

      {
        target: "bike",
        title: "Bike Appointment App",
        desciption: "",
        stacks: ['Java', "Firebase", "Figma"],
        video: bike
      },
  ]


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
            
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
              {webProjects && webProjects.map((project) => (
                  
                  <div className="card my-5" id="project-card" type="button" data-bs-toggle="modal" data-bs-target={`#${project.target}`}>
                  <div className="row no-gutters">
                      <div className="col-md-4">
                         <video src={project.video} className="object-fit-contain" autoplay></video>
                      </div>
                      <div className="col-md-8 px-5">
                      <h3 className="mt-4 text-white">{project.title}</h3>
                          <p className="mt-2 py-3 lead">
                            {project.desciption}
                      </p>
                      <div className="row">
                        <div className="col col-2 mt-3"><h5>Use Stack :</h5></div>
                      {project.stacks.map((stack) => (
                        <div className="col col-2"><div class="shadow p-3 text-center bg-body-tertiary rounded">{stack}</div></div>
                      ))}
                     </div>

                      </div>
                  </div>
                </div>
                
                ))}
              
            </div>
            
                    


            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
              
              <div class="row row-cols-1 row-cols-md-3 g-4">
                  {MoblieProjects && MoblieProjects.map((project) => (
                    <div className="col"  type="button" data-bs-toggle="modal" data-bs-target={`#${project.target}`}>
                       <div className="card" id="project-card">
                          <div className="col-md-3">
                           <video src={project.video} className="object-fit-contain" id="mobile1" autoplay></video>
                          </div>
                         <div className="card-body">
                           <h5 className="card-title">{project.title}</h5>
                          <p className="card-text">{project.desciption}</p>
                            <div className="row">
                               <div className="col col-4 mt-3"><h5>Use Stack :</h5></div>
                             {project.stacks.map((stack) => (
                               <div className="col col-4"><div class="shadow p-3 text-center bg-body-tertiary rounded">{stack}</div></div>
                             ))}
                            </div>
                         </div>
                       </div>
                     </div>
                   
                  ))} 
               </div>
            </div>
                    
            

                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                        <div className="container" >
                            
                            {projects && projects.map((project) => (
    
                                  <div className="card my-5" id="project-card" type="button" data-bs-toggle="modal" data-bs-target={`#${project.target}`}>
                                      <div className="row no-gutters">
                                          <div className="col-md-4">
                                              <img src={project.image} className="img-fluid"/>
                                          </div>
                                          <div className="col-md-8 px-5">
                                            <h3 className="mt-4 text-white">{project.title}</h3>
                                              <p className="mt-2 py-3 lead">
                                                {project.desciption}
                                              </p>
                                              <h5 className="">Used Technology :</h5>
                                              <label htmlFor="">
                                                <div class="shadow p-3  bg-body-tertiary rounded">{project.stack}</div>
                                              </label>
                                          </div>
                                      </div>
                                  </div>
                            ))}
                           
                        </div>

                    </div>
                    
               </div>
                
        </div>
        


            {/* <!-- Modal --> */}
            {projects && projects.map((project => (
                    <div className="modal fade" id={project.target} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                      <div className="modal-content text-white" id="modal-projects">
                        <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">{project.title}</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                          <div className="modal-body p-5">
                              <img src={project.image} className="img-fluid" id="img-projects" />
                              <p className="mt-2 lead p-2">
                                  {project.desciption}
                              </p>
                              <h5 className="">Used Technology :</h5>   
                              <label htmlFor="">
                                    <div className="shadow p-3 mb-2 bg-body-tertiary rounded">{project.stack}</div>
                              </label>
                        </div>
                      </div>
                    </div>
              </div>
                )))}
        {/* <!-- Modal --> */}   
        


                    {/* <!-- Modal 2 --> */}
                    {webProjects && webProjects.map((project => (
                    <div className="modal fade" id={project.target} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                      <div className="modal-content text-white" id="modal-projects">
                        <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">{project.title}</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                          <div className="modal-body p-5">
                              <video className="object-fit-contain" controls>
                                <source src={project.video} type="video/mp4" />
                                </video>
                              <p className="mt-2 lead p-2">
                                  {project.desciption}
                              </p>
                              <div className="row">
                                 <div className="col col-2 mt-3"><h5>Use Stack :</h5></div>
                               {project.stacks.map((stack) => (
                                 <div className="col col-2"><div class="shadow p-3 text-center bg-body-tertiary rounded">{stack}</div></div>
                               ))}
                              </div>
                        </div>
                      </div>
                    </div>
              </div>
                )))}
        {/* <!-- Modal --> */} 
        

        

                {/* <!-- Modal 3 --> */}
                {MoblieProjects && MoblieProjects.map((project => (
                    <div className="modal fade" id={project.target} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                      <div className="modal-content text-white" id="modal-projects">
                        <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">{project.title}</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                          <div className="modal-body text-center p-5">
                              <video className="object-fit-contain"id="mobile" controls>
                                <source src={project.video} type="video/mp4"/>
                                </video>
                              <p className="mt-2 lead p-2">
                                  {project.desciption}
                              </p>
                              <div className="row">
                                 <div className="col col-2 mt-3"><h5>Use Stack :</h5></div>
                               {project.stacks.map((stack) => (
                                 <div className="col col-2"><div class="shadow p-3 text-center bg-body-tertiary rounded">{stack}</div></div>
                               ))}
                              </div>
                        </div>
                      </div>
                    </div>
              </div>
                )))}
        {/* <!-- Modal --> */} 

        

        </div>
     );
}
 
export default Projects;