import React from "react";
import GamePost from "./gamedev-sub-components/GamePost";

function Gamedev(){
    const listOfGames = [
        {
            id:0,
            title:"The Eldritch and the Iron",
            description:"An auto-scrolling, mech-based shooter made in Unity3D for MechJam III",
            itch:"https://badihaki.itch.io/the-eldritch-and-the-iron",
            github:"https://github.com/badihaki/eldrith-iron"
        },
        {
            id:1,
            title:"2D Interactive Map",
            description:"An interactive map template, made in the style of Super Mario Bros 3, with Unity3D and C#.",
            itch:null,
            github:"https://github.com/badihaki/2D-Interactive-Map"
        }
    ]

    return(
        <div className="gamedev">
            <h1>
                Gamedev
            </h1>
            <p className="intro">Play in my imagination</p>
            <p className="panel">
                Below you'll find different releases of various prototypes, demos and other interactive ideas that I've worked on through the years.
            </p>
            <ul id="games-list">
                {listOfGames.map( game=><GamePost game={game} key={game.id} /> )}
            </ul>
        </div>
    )
}

export default Gamedev;