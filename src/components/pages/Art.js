import React from "react";
import { Link, Outlet } from "react-router-dom";

function Art(){
// create a context that holds an array of art pieces
// map over the array, giving each a thumbnail component
    function Thumbnail({ artwork }){
        return(
            <div className="thumbnail">
                {artwork.name}
                <br />
                - Thumbnail of image -
                <br />
                {artwork.description}
            </div>
        )
    }

    return(
        <div id="art">
            <h1>Art</h1>
            <p className="intro">
                A million worlds, birthed of one mind...
            </p>
            <p className="panel">
            Welcome to the gallery. This is a small selection of some of my best work. To see
            more of my work, please visit my 
            <br />
            <a href={"https://bhakim.artstation.com"} target="_blank" >Full Portfolio</a>.
            </p>
            <div className="artwork=panel">
                {/* put thumbnails here */}
                <Thumbnail artwork={{
                    name: "test",
                    description: "a test"
                }} />
                <div className="hide" id="art-window">
                    {/* create a button that will give this div the classname of hide */}
                    {/* put artwork components here */}
                </div>
            </div>
        </div>
    )
}

export default Art;