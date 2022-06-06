
 import React from "react";
   // import { BrowserRouter as Router, Route, Link , Routes } from "react-router-dom";
 import { BrowserRouter as Router , Route , Routes } from "react-router-dom";

 import Header from "./Header";
 import Signup from "./Signup";
 import Login from "./Login";
import Users from "./Users";
// import Users from "./Users";
 

 function App() {
   return (
     <div>
       <Router>
         <Routes>
          <Route exact path="/" element={<Header />}></Route>
          <Route exact path="/signup" element={<Signup />}> </Route>
          <Route exact path="/login" element={<Login />}></Route> 
         </Routes>
       </Router>
     </div>
   );
 }
 
 export default App;