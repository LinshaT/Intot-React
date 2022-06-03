import React from "react"

function Portfolio(){
return <div>
<section  className= "port-folio" id="portfolio">
  <h2>OUR PORTFOLIO</h2>
  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>        
  
    <div className="row ">
      <div className="col-md-8 port">
        <img src="assets/images/images/portfolio-img-1.png" alt="portfolio-1"></img>
      </div>
      <div className="col-md-4 port">
        <img src="assets/images/images/portfolio-img-2.jpg" alt="portfolio-2"></img>
      </div>
    </div>
    <div className="row ">
      <div className="col-md-4 port">
        <img src="assets/images/images/portfolio-img-3.png" alt="portfolio-3"></img>
      </div>
      <div className="col-md-8 port">
        <img src="assets/images/images/portfolio-img-4.png"  alt="portfolio-4"></img>
      </div>
    </div>
</section>

</div>
}

export default Portfolio;
