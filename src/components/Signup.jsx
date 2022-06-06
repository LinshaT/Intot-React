
import React ,{useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
// import { create } from "models/signupModel";



function Signup(){

    const [input , setInput]=useState({
        fname :'',
        email:'',
        phone:'',
        password:'',
        subject:''
    })
    function handleChange(event){
        const {name,value}= event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]:value,
            };
        })
    }

    function handleClick(event){
        event.preventDefault();
        
        const newSign={
        fname:input.fname,
        email:input.email,
        phone:input.phone,
        password:input.password,
        subject:input.subject,
    }
        axios.post('http://localhost:3001/create',newSign);
}



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

<section id="contact">
    <div className="container-consult">
    <h5>Don't Hesitate To Ask</h5>
    <h2>FREE CONSULTATION</h2>
    </div>
    <div className="contact-content">
     <div className="row">
      <div className="col-lg-6">
          {/* <!-- form start --> */}
          <div className="container">
            <form action="">
              <label htmlFor="fname">Name</label>
              <input type="text"  name="fname" value={input.fname} onChange={handleChange} autoComplete="off"></input>
          
              <label htmlFor="lname">Email</label>
              <input onChange={ handleChange } type="email"  value={input.email}   name="email"  autoComplete="off" />

              <label htmlFor="lname">Phone Number</label>
              <input onChange={handleChange} type="text"  value={input.phone} name="phone" autoComplete="off"></input>

              <label htmlFor="password">Password</label>
              <input onChange={handleChange} type="password"  value={input.password} name="password" autoComplete="off" ></input>


              <label htmlFor="subject">Message</label>
              <input type="text"  onChange={handleChange} name="subject" value={input.subject}  autoComplete="off" ></input>
              
              <button onClick={handleClick} name="send" className="btn btn-lg " >Register</button>
    
              {/* <input type="submit" value="SEND"></input> */}
            </form>
            <p><br />
              By clicking the Register button,you agree to our <br />
              <a href=" ">Terms and Condition</a> and <a href=" ">Policy Privacy.</a><br/>
              Already have an account?<Link to= "/login" >Login</Link>
                                            
          </p>
          </div>
          {/* <!-- form end--> */}
      </div>
      <div className="col-lg-6">
          <img src="assets/images/images/form-img.png" className="contact-image" alt=""></img>
      </div>
    </div>
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

export default Signup;