
const Biography = () => {
    return ( 
        <div className="bio p-5 text-white">
            <div className="row">
                {/* <div className="col">
                    <div className="text-center mt-5 d-grid gap-5">
                        <div className="row">
                            <div className="col">1</div>
                            <div className="col">2</div>
                        </div>
                        <div className="row">
                            <div className="col">3</div>
                            <div className="col">4</div>
                        </div>
                    </div>
                </div> */}
                <div className="col">
                    <h3 className="bioTitle">Biography</h3>
                      <p className="bioText py-2">
                        With the age of 21 years, I'm Full stack developper and designer from
                        Yaounde - Cameroon with 3 years of experience and  putting  innovative ideas
                        in the spotlight by implementing web app systems and awesome creations through
                        my designs are my aims. 
                    </p>
                    <p className="bioText">
                        Having some basic knowledge in Networking, IOT, Machine Learning,
                     Agile methodology and software Architecture.  
                    </p>

                    <p className="bioText">
                        I'm bilingual with a hobby of drawing (digital and by hand),
                        baking and learning about tech stuffs
                    </p>

                    <p className="bioText">
                     curiosity, one of my biggest flaws, Calm of nature but has no problem socializing. likes to watch animes because it relaxes me
                     and boost my productivity in design as well as reflection series and films. 
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Biography;