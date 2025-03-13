"use client"

import React, { MouseEventHandler, useState } from 'react'
import { iGame } from './iGame';
import Link from 'next/link';

function ProjectPanelComponent(props: {
    game: iGame,
    currentOpen: number | null,
    handlePanelClicked: (id: number | null) => void
}) {
    // const [panelOpen, setPanelOpen] = useState<boolean>(false);
    const [canOpenPanel, setCanOpen] = useState<boolean>(true);
    const { game, currentOpen, handlePanelClicked } = props;
    
    const handleOnClick: MouseEventHandler<HTMLDivElement> = () => {
        if (canOpenPanel) {
            if (currentOpen === game.id) {
                handlePanelClicked(null);
                // setPanelOpen(false);
                controlClickEvent();
                return;
            }
            handlePanelClicked(game.id);
            // setPanelOpen(true);
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
        <div id={game.id.toString()}
            className={`transition-all ease-in-out duration-300 mx-auto w-fit md:w-[45%] place-items-center
                ${currentOpen === game.id ?
                    "bg-slate-200 bg-opacity-25 p-10 max-w-[85%] rounded-full"
                    :
                    "border-2 border-slate-200 max-w-[50%] rounded-full px-4 py-1"
                }`}>

            <h5 className={`transition-all ease-in-out duration-300 mx-auto rounded-full cursor-pointer font-semibold ${
                currentOpen === game.id ?
                `border-l-2 border-b-4 border-[#FFD700] bg-black py-1 px-2 my-2 tracking-widest w-fit`
                :
                `p-1 tracking-wider w-full`
            }`} onClick={handleOnClick}>
                {game.title}
            </h5>

            {
                currentOpen === game.id ?
                    <section id={`${game.id.toString}-info`} className={`transition-all ease-in-out duration-500
                ${currentOpen === game.id ?
                            'visible text-pretty'
                            :
                            'hidden h-[0%] overflow-hidden'
                        }`}>
                        {game.information.description[0]}
                        <br />
                        <Link href={`gamedev/${game.id}`}>
                            <button className='rounded-full transition-all ease-in-out duration-200 p-2 mt-2 border-2 border-[#FFD700] bg-black hover:bg-[#FFD700] active:bg-[#FFD700] hover:text-black tracking-wide hover:tracking-widest font-semibold active:tracking-widest'>More Info Here</button>
                        </Link>
                    </section>
                    :
                    ""
            }
        </div>
    )
}

export default ProjectPanelComponent