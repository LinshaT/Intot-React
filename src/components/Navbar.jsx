

import React from "react";
import {Link} from "react-router-dom";



function Navbar(){
    return <div>
    <section id="title">
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
        <section id="slide-section">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active">01</li>
              <li data-target="#carouselExampleIndicators" data-slide-to={1}>02</li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/*my section*/}
                <div className="row">
                  <div className="col-md-3 offset-md-2">
                    <div className="slider-details">
                      <h1>INNOVATIVE<span> SOLUTIONS</span></h1>
                      <p>We find the best solutions for you,we redesign your home and work places.Discover why over 5,100 home owners trust</p>
                      <div>
                        <button type="button" className="read-more">Read More</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="slide-img">
                      <img src="assets/images/images/slider-img.png" className="slide-image" alt="sliderImg" />
                    </div>
                  </div>
                </div>
                {/*my sec end*/}
              </div>
              <div className="carousel-item">
                {/*my section*/}
                <div className="row">
                  <div className="col-md-3 offset-md-2">
                    <div className="slider-details">
                      <h1>INNOVATIVE<span> SOLUTIONS</span></h1>
                      <p>We find the best solutions for you,we redesign your home and work places.Discover why over 5,100 home owners trust</p>
                      <div>
                        <button type="button" className="read-more">Read More</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="slider-img">
                      <img src="assets/images/images/slider-img.png" className="slide-image" alt="sliderImg" />
                    </div>
                  </div>
                </div>
                {/*my sec end*/}
              </div>
            </div>
            <div className="caroucal-div">
              {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"> */}
                {/* <span class="" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>*/}
              {/* </a> */}
              {/* <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"> */}
                {/*<span class="" aria-hidden="true"></span>
                 <span class="sr-only">Next</span>*/}
                {/* </a> */}
            </div>
          </div>
        </section>
      </section>
</div>
}
export default Navbar;