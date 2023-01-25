const Navigation = () => {
    return ( 
      <nav className="navbar p-2 shadow-sm navbar-expand-lg" id="navbar">
        <h2 className="mx-4 text-white" id="title">My Protfolio</h2>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div className="conatiner ms-auto p-3">
            <div className="collapse navbar-collapse ">
                <ul className="navbar-nav mx-5 gap-3  mb-2 mb-lg-0">
                  <li className="nav-item"><a class="nav-link text-secondary" href="#" id="navtext">Service</a></li>
                  <li className="nav-item"><label class="nav-link text-secondary" htmlFor="Biography" id="navtext">About Me</label></li>
                  <li className="nav-item"><a class="nav-link text-secondary" href="#" id="navtext">Skills</a></li>
                  <li className="nav-item"><a class="nav-link text-secondary" href="#" id="navtext">Projects</a></li>
                </ul>
            </div>     
        </div>
      </nav>
     );
}
 
export default Navigation;