import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    function NavigationText({ link, linkText }){
        return(
            <li className="nav-link">
                <Link to={link}>{ linkText }</Link>
            </li>
        )
    }

    return(
        <div>
            <h1>
                Navigation
            </h1>
            <ul>
                <NavigationText link={"/"} linkText={"Home"} />
                <NavigationText link={"/about"} linkText={"About"} />
                <NavigationText link={"/art"} linkText={"Art"} />
                <NavigationText link={"/code"} linkText={"Code"} />
                <NavigationText link={"/gaming"} linkText={"Gamedev"} />
            </ul>
        </div>
    )
}

export default Nav;