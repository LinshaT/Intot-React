import React from "react";
import Navbar  from "./Navbar";
import Company from "./Company";
import Portfolio from "./Portfolio";
import Team from "./Team";





function Header(){
    return <div><section id="title">
    <div className="container-fluid">

     <Navbar />

    </div>
    <section id="slide-section">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
    
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
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
                    <img src="assets/images/images/slider-img.png" className="slide-image" alt="sliderImg"></img>
                   </div>
               </div>
            </div>
          </div>
          <div className="carousel-item">
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
                    <img src="assets/images/images/slider-img.png" className="slide-image" alt="sliderImg"></img>
                   </div>
                </div>
            </div>
          </div>
        </div>
        <div className="caroucal-div">
        {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        </a> */}
      </div>
    </div>
    
    </section>
 </section>

 <Company />

 <Portfolio />
 <Team />

</div>
}
export default Header;

