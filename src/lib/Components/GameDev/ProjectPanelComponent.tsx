"use client"

import React, { useState } from 'react'
import { iGame } from './iGame';

function ProjectPanelComponent(props:{
    game:iGame,
    currentOpen:number|null
}) {
    const [panelOpen, setPanelOpen] = useState<boolean>(false);
    
    const {game, currentOpen} = props;
    const currentOpenPanel = `game-${currentOpen}`

    return (
        <div id={game.id.toString()} className={`mx-auto max-h-fit rounded-full ${
            currentOpen === Number(game.id) ?
            "bg-slate-200 bg-opacity-25 p-6 max-w-[85%]"
            :
            "border-2 border-slate-200 max-w-[50%]"
        }`}>
            {game.title}
            <section id={`${game.id.toString}-info`} className={
                currentOpen === game.id?
                'visible':'hidden'
            }>
                {game.information.description}
            </section>
        </div>
    )
}

export default ProjectPanelComponent