"use client"

import React, { MouseEventHandler, useState } from 'react'
import { iGame } from './iGame';

function ProjectPanelComponent(props: {
    game: iGame,
    currentOpen: number | null,
    handlePanelClicked: (id: number | null) => void
}) {
    const [panelOpen, setPanelOpen] = useState<boolean>(false);
    const [canOpenPanel, setCanOpen] = useState<boolean>(true);
    const { game, currentOpen, handlePanelClicked } = props;

    const handleOnClick: MouseEventHandler<HTMLDivElement> = () => {
        if(canOpenPanel){
            if (currentOpen === game.id) {
                handlePanelClicked(null);
                setPanelOpen(false);
                controlClickEvent();
                return;
            }
            handlePanelClicked(game.id);
            setPanelOpen(true);
            controlClickEvent();
        }
    }

    function controlClickEvent():void{
        setCanOpen(false);
        setTimeout(() => {
            setCanOpen(true);
        }, 1200);
    }

    return (
        <div id={game.id.toString()} onClick={handleOnClick}
            className={`mx-auto max-h-fit rounded-full ${panelOpen ?
                "bg-slate-200 bg-opacity-25 p-6 max-w-[85%]"
                :
                "border-2 border-slate-200 max-w-[50%]"
                }`}>

            <h5>
                {game.title}
            </h5>

            <section id={`${game.id.toString}-info`} className={
                panelOpen ?
                    'visible' : 'hidden'
            }>
                {game.information.description}
            </section>
        </div>
    )
}

export default ProjectPanelComponent