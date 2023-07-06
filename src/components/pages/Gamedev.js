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
                <span className="text-highlight">I have been tinkering with game creation tools my entire life</span>. I made small RPGs with the OHRRPGCE and RPG Maker with my friends while I was
                attending elementary school. I started coding as a hobby in C# with the XNA platform in 2007. And I discovered Unity3D back in version 
                3 while attending college. Lack of funds never hampered my learning, and upon being forced to leave school, I continued making small 
                games as a hobby whenever I could find the time.
            </p>
            <p className="panel">
                As a game designer and developer, I have an extreme focus on creating <span className="text-highlight">high-octane combat mechanics</span> and <span className="text-highlight">rich, systems-driven gameplay 
                experiences</span>. Below you'll find different releases of various prototypes, demos and other interactive ideas that I've worked on 
                through the years.
            </p>
            <ul id="games-list">
                {listOfGames.map( game=><GamePost game={game} key={game.id} /> )}
            </ul>
        </div>
    )
}

export default Gamedev;