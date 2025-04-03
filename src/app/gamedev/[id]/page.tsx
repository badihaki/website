"use client"

import { games } from '@/lib/Components/GameDev/Games';
import { iGame } from '@/lib/Components/GameDev/iGame';
import BackBtnOverlay from '@/lib/Components/Navigation/BackBtnOverlayComponent';
import { iLink } from '@/lib/Components/Navigation/iLink';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'

function GamePage() {
    const params = useParams<{ id: string }>();
    const { id } = params;
    const gameData: iGame | undefined = games.find(game => Number(id) === game.id);
    const tag: string | undefined = gameData?.title.toLocaleLowerCase().slice(0, 9).replace(" ", "-");

    const gameInfo: React.JSX.Element[] | undefined = gameData?.information.description.slice(1).map(textContent => {
        return(
            <li>
                {textContent}
            </li>
        )
    })
    const links: React.JSX.Element[] | undefined = gameData?.links?.map(link => {
        return (
            <Link key={link.id} href={link.href} target='_blank' >{link.title}</Link>
        )
    })

    if (gameData != undefined) {
        return (
            <main id={tag + `-${id}`} className="flex flex-col relative top-16 text-center p-2">
                <BackBtnOverlay link='/gamedev' />
                <>
                    <div id={`project-header`} className='relative top-6'>
                        <div id={`header-intro`} className="w-fit mx-auto p-4 text-2xl font-semibold rounded-3xl text-slate-400">
                            Project info for
                        </div>

                        <div id={`header-title`} className="relative bottom-11 w-fit mx-auto pt-4 text-4xl font-semibold rounded-3xl text-slate-200">
                            {gameData.title}
                        </div>
                    </div>

                    <div id={`project-summary`} className='border-slate-200 border-b-2 rounded-2xl pb-1 px-4 mx-auto relative bottom-4'>
                        {gameData.information.description[0]}
                    </div>

                    <div id={`project-info`} className='border-slate-200 border-b-2 border-r-2 border-l-2 rounded-2xl pb-1 px-4 w-full flex flex-col'>
                        <ul id='project-information' className='border-b-2 border-slate-200 rounded-xl pb-4'>
                            {gameInfo}
                        </ul>

                        <div id='project-links' className='mt-6'>
                            <h5 className='font-semibold tracking-widest text-lg underline capitalize'>
                                Notable Links
                            </h5>

                            <ul id='links-list' className='my-2 grid grid-cols-1 gap-4'>
                                {links}
                            </ul>
                        </div>
                    </div>
                </>
            </main>
        )
    }
    return (
        <div>page</div>
    )
}

export default GamePage