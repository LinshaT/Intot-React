import React from "react";
import { BrowserRouter as Router, Route, Link , Routes } from "react-router-dom";

 import Header from "./Header";
 import Signup from "./Signup";
 

 //Import the pages
 


 function App() {
   return (
     <div className="App">
      
       <Router>
         <Routes>
          <Route exact path="/" element={<Header />}></Route>
           <Route exact path="/signup" element={<Signup />} />
          
         </Routes>
         <div className="list">
           {/* <ul>
  
             <li><Link to="/signup">sign up</Link></li>
             
           </ul> */}
         </div>
       </Router>
     </div>
   );
 }
 
 export default App;