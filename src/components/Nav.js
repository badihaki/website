import React from "react";
import { Link } from "react-router-dom";
import BannerClosed from "../media/banner-closed.png";
import LinkedIn from "../media/LI-In-Bug.png";
import ArtStation from "../media/artstation-logo-white.png";
import GitHub from "../media/github-mark-white.png"

function Nav(){
    function NavigationText({ link, linkText }){
        return(
            <li className="nav-link">
                <Link to={link}>{ linkText }</Link>
            </li>
        )
    }

    return(
        <div id="navigation">
            <div id="nav-title">
                <Link to={"/website"}>Badi-Haki Martin</Link>
            </div>
            <ul id="nav-links">
                <NavigationText link={"/website/about"} linkText={"About"} />
                <NavigationText link={"/website/blog"} linkText={"Blog"} />
                <NavigationText link={"/website/art"} linkText={"Art"} />
                <NavigationText link={"/website/code"} linkText={"Code"} />
                <NavigationText link={"/website/gamedev"} linkText={"Gamedev"} />
            </ul>
            <div id="nav-badge">
                <img src={BannerClosed} alt="Icon" />
            </div>
            <div id="socials">
                <a href="https://www.linkedin.com/in/badi-haki-martin-565476145/" target="_blank" rel="noreferrer" >
                    <img className="linkedin" src={LinkedIn} alt="LinkedIn" />
                </a>
                <a href="https://bhakim.artstation.com" target="_blank" rel="noreferrer" >
                    <img className="artstation" src={ArtStation} alt="ArtStation" />
                </a>
                <a href="https://github.com/badihaki" target="_blank" rel="noreferrer" >
                    <img className="github" src={GitHub} alt="GitHub" />
                </a>
            </div>
        </div>
    )
}

export default Nav;