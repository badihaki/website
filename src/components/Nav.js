import React, { useState } from "react";
import { Link } from "react-router-dom";
import BannerClosed from "../media/banner-closed.png";
import LinkedIn from "../media/LI-In-Bug.png";
import ArtStation from "../media/artstation-logo-white.png";
import GitHub from "../media/github-mark-white.png";
import Gmail from "../media/gmail-logo.png"

function Nav(){
    const [showMenu, setShowMenu] = useState(false);

    function handleNavIconClickEvent(event){
        setShowMenu(!showMenu);
    }

    function NavigationText({ link, linkText }){
        return(
            <li className="nav-link">
                <Link to={link} onClick={()=>{
                    if(showMenu) setShowMenu(false);
                }}>{ linkText }</Link>
            </li>
        )
    }

    return(
        <div id="navigation">
            <div id="nav-title">
                <Link to={"/website"}>Badi-Haki Martin</Link>
            </div>
            <ul id="nav-links" className={showMenu? "show" : ""}>
                <NavigationText link={"/website/about"} linkText={"About"} />
                <NavigationText link={"/website/blog"} linkText={"Blog"} />
                <NavigationText link={"/website/art"} linkText={"Art"} />
                <NavigationText link={"/website/code"} linkText={"Code"} />
                <NavigationText link={"/website/gamedev"} linkText={"Gamedev"} />
            </ul>
            <div id="nav-badge" onClick={handleNavIconClickEvent} >
                <img src={BannerClosed} alt="Icon" className={showMenu ? "open-menu" : ""} />
            </div>
            <div id="socials" className={showMenu? "show" : ""}>
                <a href="https://www.linkedin.com/in/badi-haki-martin-565476145/" target="_blank" rel="noreferrer" >
                    <img className="linkedin" src={LinkedIn} alt="LinkedIn" />
                </a>
                <a href="https://bhakim.artstation.com" target="_blank" rel="noreferrer" >
                    <img className="artstation" src={ArtStation} alt="ArtStation" />
                </a>
                <a href="https://github.com/badihaki" target="_blank" rel="noreferrer" >
                    <img className="github" src={GitHub} alt="GitHub" />
                </a>
                <a href="mailto:jojackblack@gmail.com" >
                    <img className="gmail" src={Gmail} alt="Email me" />
                </a>
            </div>
        </div>
    )
}

export default Nav;