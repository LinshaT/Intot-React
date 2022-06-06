import React from "react";
import {Link} from "react-router-dom";



function Loginform(){
    return <div>
    <section >
            <div className="logform">
            <div className="contact-content">
            <div className="row">
      <div class="col-lg-6">
          {/* <!-- form start --> */}
          <div className="container">
            <form action="#">
              {/* <label for="fname">Name</label>
              <input type="text" id="fname" name="firstname" ></input> */}
          
              <label for="email">Email</label>
              <input type="email" id="email" name="lastname" ></input>

              <label for="lname">Password</label>
              <input type="password" id="lname" name="password" ></input>
              <input type="submit" value="SEND"></input>
            </form>
            <p><br />
              If you doesn't have an account then <Link to= "/signup">Register
              </Link>    <br />
              <a href="/">Terms and Condition</a> and <a href="/">Policy Privacy</a>
          </p>
          </div>
          {/* <!-- form end--> */}
      </div>
      <div class="col-lg-6">
          <img src="assets/images/images/form-img.png" class="contact-image" alt=""></img>
      </div>
    </div>
  </div>
 </div>
          
      
        </section>
</div>
}

export default Loginform;