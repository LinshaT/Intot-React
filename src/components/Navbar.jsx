

import React from "react";
import {Link} from "react-router-dom";



function Navbar(){

    return <div>
<nav className="navbar navbar-expand navbar-dark ">
        <a className="navbar-brand" href=" ">INTOT</a>
      <div className=" navbar-collapse">
        <ul className="navbar-nav d-none d-lg-flex ml-auto">
        <li className="nav-item">
          {/* <a className="nav-link" href=" "><span className="p-4"><img src="assets/images/images/login.png" alt="login"></img></span>Login</a> */}
        </li>
        <li className="nav-item">
        <Link to="/signup" className="nav-link"><span className="p-4"><img src="assets/images/images/signup.png" alt="signup"></img></span>signup</Link>
          {/* <a className="nav-link" href=" "><span className="p-4"><img src="aseets/images/images/signup.png" alt="signup"></img></span>Sign Up</a> */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href=" "><span className="p-4"><img src="assets/images/images/search-icon.png" alt="Search"></img></span></a> */}
        </li>
        </ul>
      </div>

    {/* <!--  navbar button--> */}
    <div>
        <div className="container" >

          <div className="custom_menu-btn">
            <button onclick="openNav()">
              <span className="s-1">
              </span>
              <span className="s-2">
              </span>
              <span className="s-3">

              </span>
            </button>
          </div>
          <div id="myNav" className="overlay">
            <div className="overlay-content">
              {/* <a href="index.html">HOME</a>
              <a href="team.html">TEAM</a>
              <a href="portfolio.html">PORTFOLIO</a>
              <a href="contact.html">CONTACT US</a> */}

            </div>
          </div>
        </div>
    </div>

    {/* <!-- button end--> */}
    </nav>
</div>
}
export default Navbar;