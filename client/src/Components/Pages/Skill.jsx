import img_frontend from "../assets/Skills/skill_Front_end.png";
import img_backend from "../assets/Skills/skill_backend.png";
import img_database from "../assets/Skills/skill_database.png";
import img_graphics from "../assets/Skills/skill_graphics.png";
import img_ui from "../assets/Skills/skill_ui.png";
import img_android from "../assets/Skills/skill_android.png";

const Skill = () => {

    const frontend = [
        { language: "HTML", percentage: "90%" },
        { language: "CSS", percentage: "90%" },
        { language: "Javascript", percentage: "90%" },
        { language: "Bootstrap", percentage: "90%" },
        { language: "React js", percentage: "80%" }
    ]

    const backend = [
        { language: "Php", percentage: "70%" },
        { language: "Node js", percentage: "85%" },
        { language: "Express js", percentage: "80%" },
    ]

    const database = [
        { language: "Mysql", percentage: "80%" },
        { language: "Mongo db", percentage: "70%" },
        { language: "Firebase", percentage: "55%" },
    ]

    const androidDev = [
        { language: "Flutter", percentage: "15%" },
        { language: "Java", percentage: "70%" },
    ]

    const UiDesign = [
        { tool: "Figma", percentage: "90%" },
        { tool: "Adobe XD", percentage: "90%" },
    ]

    const GraphicDesign = [
        { tool: "Adobe Illustrator", percentage: "40%" }
    ]

    const codeEditors = [
        { tool: "Visual Studio Code", percentage: "90%" },
        { tool: "Sublime Text", percentage: "90%" },
        { tool: "Intelliji", percentage: "70%" },
        { tool: "Android Studio", percentage: "65%" }
    ]

    const otherTools = [
        { tool: "WordPress", percentage: "70%" },
        { tool: "Wix", percentage: "20%" },
        { tool: "Git/GitHub", percentage: "70%" },
        { tool: "PostMan", percentage: "80%" },
    ]

    return ( 
        <div className="skills p-5">
       <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
  </div>
  

                <div className="row">
                    {/* <div className="col col-1">
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button> 
                    </div>*/}

                    <div className="col">
                        <div className="carousel-inner p-5">
                            
                            <div className="carousel-item active">
                                <div className="row text-white">
                                    <div className="col">
                                        <h5>Frontend Development</h5>
                                        <div className="text-center">
                                           <img src={img_frontend} alt="" className="img-fluid" id="skill-img"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        {frontend && frontend.map((front) => (
                                            <div className="percentage py-2">
                                            <div className="text">
                                               <label className="text-secondary">{front.language} ({front.percentage})</label>       
                                            </div>
                                            <div className="progress">
                                               <div className="progress-bar bg-danger" role="progressbar" aria-label="Basic example" style={{"width": `${front.percentage}`}}></div>
                                            </div>  
                                         </div> 
                                        ))}
                                         
                                    </div>
                                </div>
                            </div>
                            
                           <div className="carousel-item">
                                <div className="row text-white">
                                    <div className="col">
                                        <h5>Backend Development</h5>
                                        <div className="text-center">
                                           <img src={img_backend} alt="" className="img-fluid" id="skill-img"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        {backend && backend.map((back) => (
                                            <div className="percentage py-4">
                                            <div className="text">
                                               <label className="text-secondary">{back.language} ({back.percentage})</label>       
                                            </div>
                                            <div className="progress">
                                               <div className="progress-bar bg-danger" role="progressbar" aria-label="Basic example" style={{"width": `${back.percentage}`}}></div>
                                            </div>  
                                         </div> 
                                        ))}
                                         
                                    </div>
                                </div>
                            </div>
                            


                           <div className="carousel-item">
                            <div className="row text-white">
                                    <div className="col">
                                        <h5>Database</h5>
                                        <div className="text-center">
                                           <img src={img_database} alt="" className="img-fluid" id="skill-img"/>
                                        </div>                                        
                                    </div>

                                    <div className="col">
                                        {database && database.map((data) => (
                                            <div className="percentage py-4">
                                            <div className="text">
                                               <label className="text-secondary">{data.language} ({data.percentage})</label>       
                                            </div>
                                            <div className="progress">
                                               <div className="progress-bar bg-danger" role="progressbar" aria-label="Basic example" style={{"width": `${data.percentage}`}}></div>
                                            </div>  
                                         </div> 
                                        ))}
                                         
                                    </div>
                                </div>
                            </div>
                            

                            <div className="carousel-item">
                            <div className="row text-white">
                                    <div className="col">
                                        <h5>Android Development</h5>
                                        <div className="text-center">
                                           <img src={img_android} alt="" className="img-fluid" id="skill-img"/>
                                        </div>                                        
                                    </div>

                                    <div className="col">
                                        {androidDev && androidDev.map((android) => (
                                            <div className="percentage py-5">
                                            <div className="text">
                                               <label className="text-secondary">{android.language} ({android.percentage})</label>       
                                            </div>
                                            <div className="progress">
                                               <div className="progress-bar bg-danger" role="progressbar" aria-label="Basic example" style={{"width": `${android.percentage}`}}></div>
                                            </div>  
                                         </div> 
                                        ))}
                                         
                                    </div>
                                </div>
                            </div>
                            

                            <div className="carousel-item">
                            <div className="row text-white">
                                    <div className="col">
                                        <h5>UI Design</h5>
                                        <div className="text-center">
                                           <img src={img_ui} alt="" className="img-fluid" id="skill-img"/>
                                        </div>                                        
                                    </div>

                                    <div className="col">
                                        {UiDesign && UiDesign.map((design) => (
                                            <div className="percentage py-5">
                                            <div className="text">
                                               <label className="text-secondary">{design.tool} ({design.percentage})</label>       
                                            </div>
                                            <div className="progress">
                                               <div className="progress-bar bg-danger" role="progressbar" aria-label="Basic example" style={{"width": `${design.percentage}`}}></div>
                                            </div>  
                                         </div> 
                                        ))}
                                         
                                    </div>
                                </div>
                            </div>


                            <div className="carousel-item">
                                <div className="row text-white">
                                      <div className="col">
                                        <h5>Graphic Design</h5>
                                        <div className="text-center">
                                           <img src={img_graphics} alt="" className="img-fluid" id="skill-img"/>
                                        </div>                                        
                                      </div>

                                      <div className="col">
                                          {GraphicDesign && GraphicDesign.map((graphic) => (
                                              <div className="percentage py-5">
                                              <div className="text">
                                                 <label className="text-secondary">{graphic.tool} ({graphic.percentage})</label>       
                                              </div>
                                              <div className="progress">
                                                 <div className="progress-bar bg-danger" role="progressbar" aria-label="Basic example" style={{"width": `${graphic.percentage}`}}></div>
                                              </div>  
                                           </div> 
                                          ))}
                                           
                                      </div>
                                </div>
                            </div>


                            <div className="carousel-item">
                                <div className="row text-white">
                                      <div className="col">
                                          <h2>Developmnet Tools</h2>
                                      </div>

                                      <div className="col">
                                          {codeEditors && codeEditors.map((code) => (
                                              <div className="percentage py-3">
                                              <div className="text">
                                                 <label className="text-secondary">{code.tool} ({code.percentage})</label>       
                                              </div>
                                              <div className="progress">
                                                 <div className="progress-bar bg-danger" role="progressbar" aria-label="Basic example" style={{"width": `${code.percentage}`}}></div>
                                              </div>  
                                           </div> 
                                          ))}
                                           
                                      </div>
                                </div>
                            </div>
                            

                            <div className="carousel-item">
                                <div className="row text-white">
                                      <div className="col">
                                          <h2>Other Tools</h2>
                                      </div>

                                      <div className="col">
                                          {otherTools && otherTools.map((other) => (
                                              <div className="percentage py-3">
                                              <div className="text">
                                                 <label className="text-secondary">{other.tool} ({other.percentage})</label>       
                                              </div>
                                              <div className="progress">
                                                 <div className="progress-bar bg-danger" role="progressbar" aria-label="Basic example" style={{"width": `${other.percentage}`}}></div>
                                              </div>  
                                           </div> 
                                          ))}
                                           
                                      </div>
                                </div>
                            </div>

                         </div>
                    </div>

                    {/* <div className="col col-1">
                       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Next</span>
                       </button>
                    </div> */}
                </div>
                
                
 


</div>
       </div>
     );
}
 
export default Skill;