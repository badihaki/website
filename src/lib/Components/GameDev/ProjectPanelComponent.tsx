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
    
    /* @typescript-eslint/no-unused-vars */
    // eslint-disable-next-line no-unused-vars
    const handleOnClick: MouseEventHandler<HTMLDivElement> = () => {
        if (canOpenPanel) {
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

    function controlClickEvent(): void {
        setCanOpen(false);
        setTimeout(() => {
            setCanOpen(true);
        }, 1200);
    }

    return (
        <div id={game.id.toString()} onClick={handleOnClick}
            className={`mx-auto w-fit md:w-[45%] rounded-full px-4 py-1 place-items-center
                ${panelOpen ?
                    "bg-slate-200 bg-opacity-25 p-6 max-w-[85%]"
                    :
                    "border-2 border-slate-200 max-w-[50%]"
                }`}>

            <h5 className='p-1'>
                {game.title}
            </h5>

            {
                panelOpen ?
                    <section id={`${game.id.toString}-info`} className={`transition-all ease-in-out duration-500
                ${panelOpen ?
                            'visible h-fit'
                            :
                            'hidden h-[0%] overflow-hidden'
                        }`}>
                        {game.information.description}
                    </section>
                    :
                    ""
            }
        </div>
    )
}

export default ProjectPanelComponent