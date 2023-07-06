import React from "react";

function GamePost({ game }){
    return(
        <li className="game-post">
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            { game.itch? <a href={game.itch} target="_blank" rel="noreferrer" >Itch.io Page</a> : "No Itch.io Page" }
            <br />
            <br />
            { game.github? <a href={game.github} target="_blank" rel="noreferrer" >Github Repo</a> : "No Repository" }
        </li>
    )
}

export default GamePost;