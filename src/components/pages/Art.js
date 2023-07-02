import React, { useState } from "react";
import BookCover from "../../media/artwork/book-cover.jpg";
import AetherCowboy from "../../media/artwork/aetherpunk-cowboy.jpg";
import FoxWarrior from "../../media/artwork/fox-warrior-lady.jpg";
import Soma from "../../media/artwork/soma-cruz.jpg";
import Sowala from "../../media/artwork/sowala.jpg";
import Therra from "../../media/artwork/therra.jpg";
import Modal from "./art-sub-components/Modal";

function Art(){
    const [isArtWindowOpen, setOpenArtWindow] = useState(false);
    const [selectedArt, setSelectedArt] = useState(null);

    const artwork = [
        {
            name: "Alpha's Triangle Promotional Material",
            imagesrc: BookCover,
            imageFileName: "book-cover.jpg",
            description: "A book cover for a private client.",
            id: 0
        },
        {
            name: "Aetherpunk Cowboy",
            imagesrc: AetherCowboy,
            imageFileName: "aetherpunk-cowboy.jpg",
            description: "A cowboy with an aether-punk style",
            id: 1
        },
        {
            name: "Fox Warrior",
            imagesrc: FoxWarrior,
            imageFileName: "fox-warrior-lady.jpg",
            description: "A fox warrior woman riding a panther",
            id: 2
        },
        {
            name: "Soma Cruz Fanart",
            imagesrc: Soma,
            imageFileName: "soma-cruz.jpg",
            description: "Fanart of Soma Cruz from the video game franchise Castlevania",
            id: 3
        },
        {
            name: "Therra",
            imagesrc: Therra,
            imageFileName: "therra.jpg",
            description: "A portrait of my friend Therra",
            id: 4
        },
        {
            name: "Singles Art",
            imagesrc: Sowala,
            imageFileName: "sowala.jpg",
            description: "Art for a single released by Atlanta-based DJ Sound of Sowala",
            id: 5
        }
    ]
    
    function Thumbnail({ artwork }){
        return(
            <div className="thumbnail" key={artwork.id} >
                {artwork.name}
                <br />
                {<img src={artwork.imagesrc} alt={artwork.imageFileName} onClick={openModalWindow} />}
                <br />
                {artwork.description}
            </div>
        )
    }

    function openModalWindow(event){
        setSelectedArt(event.target.alt);
        setOpenArtWindow(true);
    }
    function closeModalWindow(){
        setOpenArtWindow(false);
        setSelectedArt(null);
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
                Hover over an image. Click an image to show the full version...
            </p>
            <div id="artwork-panel">
                { artwork.map( (art)=><Thumbnail artwork={art} key={art.id} /> ) }
                <div className="hide" id="art-window">
                    {/* create a button that will give this div the classname of hide */}
                    {/* put artwork components here */}
                </div>
            </div>
            <Modal isOpen={isArtWindowOpen} closeModalFunc={closeModalWindow} art={selectedArt} >
                Modal
            </Modal>
        </div>
    )
}

export default Art;