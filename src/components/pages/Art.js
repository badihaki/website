import React from "react";

function Art(){
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
        </div>
    )
}

export default Art;