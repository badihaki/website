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
            <div id="nav-title">
                <Link to={"/website"}>Badi-Haki Martin</Link>
            </div>
            <ul>
                <NavigationText link={"/website/art"} linkText={"Art"} />
                <NavigationText link={"/website/code"} linkText={"Code"} />
                <NavigationText link={"/website/gamedev"} linkText={"Gamedev"} />
            </ul>
        </div>
    )
}

export default Nav;