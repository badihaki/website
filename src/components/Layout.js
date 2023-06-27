import React from "react"
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Layout(){
    return(
        <div>
            <div id="navigation">
                <Nav />
            </div>
            <div id="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;