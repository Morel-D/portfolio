import logo from "../assets/WhiteLogo.png";

const Navigation = () => {
    return ( 
      <nav className="navbar p-2 shadow-sm navbar-expand-lg py-3" id="navbar">
        <h2 className="mx-4 text-white" id="title"> <img src={logo} className="img-fluid mx-2" id="logo"/> My Protfolio</h2>
        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
        <div className="conatiner ms-auto p-3">
            {/*    */}
        </div>
      </nav>
     );
}
 
export default Navigation;