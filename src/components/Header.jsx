

import React from "react";
import Navbar  from "./Navbar";
import Company from "./Company";
import Portfolio from "./Portfolio";
import Team from "./Team";


function Header(){
    return <div>
    <Navbar />
    <Company />
    <Portfolio />
    <Team />
</div>
}
export default Header;

