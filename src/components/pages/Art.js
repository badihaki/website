import React from "react";
import { Link, Outlet } from "react-router-dom";
import AetherCowboy from "../../media/artwork/aetherpunk-cowboy.jpg";
import BookCover from "../../media/artwork/book-cover.jpg";
import FoxWarrior from "../../media/artwork/fox-warrior-lady.jpg";
import Soma from "../../media/artwork/soma-cruz.jpg";
import Sowala from "../../media/artwork/sowala.jpg";
import Therra from "../../media/artwork/therra.jpg";

function Art(){
    const baseURL = "./artwork/"

    const artwork = [
        {
            name: "Book cover",
            imagesrc: BookCover,
            description: "A book cover for a private client.",
            id: 0
        },
        {
            name: "Aetherpunk Cowboy",
            imagesrc: AetherCowboy,
            description: "A cowboy with an aether-punk style",
            id: 1
        },
        {
            name: "Fox Warrior",
            imagesrc: FoxWarrior,
            description: "A fox warrior woman riding a panther",
            id: 2
        },
        {
            name: "Soma Cruz Fanart",
            imagesrc: Soma,
            description: "Fanart of Soma Cruz from the video game franchise Castlevania",
            id: 3
        },
        {
            name: "Therra",
            imagesrc: Therra,
            description: "A portrait of my friend Therra",
            id: 4
        },
        {
            name: "Singles Art",
            imagesrc: Sowala,
            description: "Art for a single released by Atlanta-based DJ Sound of Sowala",
            id: 5
        }
    ]
    // map over the array, giving each a thumbnail component
    function Thumbnail({ artwork }){
        return(
            <div className="thumbnail">
                {artwork.name}
                <br />
                {<img src={artwork.imagesrc} />}
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
            <br />
            <p className="panel">
                Hover over an image. Click to view more details...
            </p>
            <div id="artwork-panel">
                { artwork.map( (art)=><Thumbnail artwork={art} key={art.id} /> ) }
                <div className="hide" id="art-window">
                    {/* create a button that will give this div the classname of hide */}
                    {/* put artwork components here */}
                </div>
            </div>
        </div>
    )
}

export default Art;