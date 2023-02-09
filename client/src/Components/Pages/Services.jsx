import andriod from "../assets/Services/Android.png";
import web from "../assets/Services/Web.png";
import graphic from "../assets/Services/graphic.png";
import ui from "../assets/Services/ui.png";

const Services = () => {
    return ( 
        <div className="text-white">
            
            <div className="title px-5 py-4 mx-5">
            <h2 className="titleServices ">My Services</h2>
            <label className="lead">Get creative and enjoy the most dedicated development and designs services</label>
            </div>

            <div className="row p-5 text-center row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card cardService">
                        <div className="text-center p-4">
                        <img src={web} alt="" className="img-fluid" id="service-img"/>
                        </div>
                        <h4 className="cardServiceTitle mt-3 px-3">Web Develepment</h4>
                        <p className="p-3 text-start">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et asperiores facere aperiam animi,
                            molestiae maiores sequi minima labore tempora
                        </p>
                    </div>
                </div>

                <div className="col">
                    <div className="card cardService">
                    <div className="text-center p-4">
                        <img src={andriod} alt="" className="img-fluid" id="service-img"/>
                    </div>
                        <h4 className="cardServiceTitle mt-3 px-3">Android Develepment</h4>
                        <p className="p-3 text-start">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et asperiores facere aperiam animi,
                            molestiae maiores sequi minima labore tempora
                        </p>
                    </div>
                </div>
            

            <div className="col">
                    <div className="card cardService">
                    <div className="text-center p-4">
                        <img src={ui} alt="" className="img-fluid" id="service-img"/>
                    </div>
                        <h4 className="cardServiceTitle mt-3 px-3">UI Design</h4>
                        <p className="p-3 text-start">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et asperiores facere aperiam animi,
                            molestiae maiores sequi minima labore tempora
                        </p>
                    </div>
            </div>

            <div className="col">
                    <div className="card cardService">
                    <div className="text-center p-4">
                        <img src={graphic} alt="" className="img-fluid" id="service-img"/>
                    </div>
                        <h4 className="cardServiceTitle mt-3 px-3">Graphic Design</h4>
                        <p className="p-3 text-start">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et asperiores facere aperiam animi,
                            molestiae maiores sequi minima labore tempora
                        </p>
                    </div>
            </div>
            </div>    
        </div>
     );
}
 
export default Services;