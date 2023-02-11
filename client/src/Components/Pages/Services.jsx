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
                        <h4 className="cardServiceTitle">Web Develepment</h4>
                        <p className="p-3 text-start">
                        Empower your online presence with my web development services. Dynamic, responsive and user-friendly websites built for your success.
                        </p>
                    </div>
                </div>

                <div className="col">
                    <div className="card cardService">
                    <div className="text-center p-4">
                        <img src={andriod} alt="" className="img-fluid" id="service-img"/>
                    </div>
                        <h4 className="cardServiceTitle mt-3">Mobile Develepment</h4>
                        <p className="p-3 text-start mb-5">
                           Transform your ideas into innovative mobile apps with our expert development team
                        </p>
                    </div>
                </div>
            

            <div className="col">
                    <div className="card cardService">
                    <div className="text-center p-4">
                        <img src={ui} alt="" className="img-fluid" id="service-img"/>
                    </div>
                        <h4 className="cardServiceTitle mt-3">UI Design</h4>
                        <p className="p-3 text-start mb-5">
                        Streamline and improve your user interface design with powerful features and intuitive design elements.
                        </p>
                    </div>
            </div>

            <div className="col">
                    <div className="card cardService">
                    <div className="text-center p-4">
                        <img src={graphic} alt="" className="img-fluid" id="service-img"/>
                    </div>
                        <h4 className="cardServiceTitle mt-3">Graphic Design</h4>
                        <p className="p-3 text-start">
                        Unleash creativity with our top-notch graphic design services. Make your brand stand out!
                        </p>
                    </div>
            </div>
            </div>    
        </div>
     );
}
 
export default Services;