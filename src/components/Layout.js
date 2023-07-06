import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Layout(){
    useEffect( ()=>{
        document.body.oncontextmenu=()=>false;
      }, [] )

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