const Expererience = () => {
    return ( 
        <div className="text-white">
            <div className="title px-5 py-4 mx-5">
            <h2 className="titleServices ">Resume</h2>
                <label className="lead">my school and work experience</label>

                <div className="row mt-5">
                    <div className="col">
                        <h5 className="text-secondary">EDUCATION</h5>
                         <div className="py-5">
                           <ul className="timeline">
                             <li className="timeline-item mb-5">
                               <h5 className="fw-bold">Degree in software engineering</h5>
                               <p className="text-muted mb-2 fw-bold">The ICT University - Yaounde</p>
                               <p className="text-muted">
                                 2019 - 2023
                               </p>
                             </li>
                         
                             <li className="timeline-item mb-5">
                               <h5 className="fw-bold">GCE Advanced Level</h5>
                               <p className="text-muted mb-2 fw-bold">All Nations Shcool - Yaounde</p>
                                 <p className="text-muted">
                                 2018 - 2019                                
                               </p>
                             </li>
                         
                             <li className="timeline-item mb-5">
                               <h5 className="fw-bold">GCE Ordinary Level</h5>
                               <p className="text-muted mb-2 fw-bold">All Nations Shcool - Yaounde</p>
                               <p className="text-muted">
                                 2016 - 2017
                               </p>
                             </li>
                           </ul>
                         </div>
                    </div>

                    <div className="col">
                    <h5 className="text-secondary">PROFESSIONAL</h5>
                        <div className="py-5">             
                        <ul className="timeline">
                          <li className="timeline-item mb-5">
                            <h5 className="fw-bold">Web development internship</h5>
                            <p className="text-muted mb-2 fw-bold">LMT GROUP - Yaounde</p>
                              <p className="text-muted">
                               June 2021 - September 2021
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                </div>    

            </div>
        </div>
     );
}
 
export default Expererience;