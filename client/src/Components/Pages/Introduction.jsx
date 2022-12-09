import user from "../Images/Me.png"

const Introduction = () => {
    return ( 
        <div className="introduction">
            <div className="text-center">
                <div className="row my-5 px-5">
                    <div className="col  text-white text-start my-5 mx-5">
                        <h2 className="mt-5" id="introText1">~ Hi !</h2>
                        <h2 className="" id="intro">I'm TCHAPTCHE MOREL</h2>
                        <h2 className="" id="introText">Developer x Designer</h2>
                        <label className="lead" id="intro3">Welcome to my corner of the internet. i'm glad you're here</label>
                    </div>

                    <div className="col col-5 text-white">
                        <div className="pattern my-5" id="partten">
                            <img src={user} id ="user"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Introduction;