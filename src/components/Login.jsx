import React from "react";
import {Link} from  "react-router-dom";
import Loginform from "./Loginform";


function Login(){
    return <div>
     <section id="titlel">
        <div className="container-fluid">
          <nav className="navbar navbar-expand navbar-dark ">
            <a className="navbar-brand" href>INTOT</a>
             <div className=" navbar-collapse">
              <ul className="navbar-nav d-none d-lg-flex ml-auto">
                <li className="nav-item">
                  <Link to="/login" className="nav-link" href><span className="p-4"><img src="assets/images/images/login.png" alt="login" /></span>Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link"><span className="p-4"><img src="assets/images/images/signup.png" alt="signup" /></span>Sign Up</Link> 
                </li>
                <li className="nav-item">
                  <a className="nav-link" href><span className="p-4"><img src="assets/images/images/search-icon.png" alt="Search" /></span></a>
                </li>
              </ul>
            </div>
            {/*  navbar button*/}
            <div>
              <div className="container">
                <div className="custom_menu-btn">
                  <button>{/* onClick={"openNav()"}>*/}
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
                    <a href="index.html">HOME</a>
                    <a href="team.html">TEAM</a>
                    <a href="portfolio.html">PORTFOLIO</a>
                    <a href="contact.html">CONTACT US</a>
                  </div>
                </div>
              </div>
            </div>
            {/* button end*/}
          </nav>
        </div>
 </section>
       
<section >
    <div>
      <Loginform />
    </div>
 </section>
 <section className="info layout_padding">
    <div className="container info_content">
      <div>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <h5>
                  About Us
                </h5>
                <ul>
                  <li>
                    <a href=" ">
                      It is a long established
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      fact that a reader will be
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      distracted by the read
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      able LoremIt is a long es
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      tablished fact that a
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      reader will be distracted
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5>
                  Contact Us
                </h5>
                <ul>
                  <li>
                    <a href=" ">
                      It is a long established
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      fact that a reader will be
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      distracted by the read
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      able LoremIt is a long es
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      tablished fact that a
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      reader will be distracted
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="form_container mt-5">
              <form action="">
                <input type="email" placeholder="Enter Your email" />
                <button type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info_img-box">
              <img src="assets/images/images/map.png" alt=""></img>
            </div>
            <div className="d-flex justify-content-end pr-5">
              <div className="social-box">
                <a href=" ">
                  <img src="assets/images/images/fb.png" alt="" />
                </a>
                <a href=" ">
                  <img src="assets/images/images/twitter.png" alt="" />
                </a>
                <a href=" ">
                  <img src="assets/images/images/linkedin1.png" alt="" />
                </a>
                <a href=" ">
                  <img src="assets/images/images/instagram1.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>

  <footer>
  <div >
   <h6> © 2022 All Rights Reserved. Design by Linsha </h6>
    </div>
  </footer>

        
  </div>


}

export default Login;