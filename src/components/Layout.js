import React from "react"
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Layout(){
    return(
        <div id="layout">
            <Nav />
            <div id="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;