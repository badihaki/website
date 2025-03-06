"use client"

import { ArtworkList } from '@/lib/Components/Art/ArtworkList';
import { iArtwork } from '@/lib/Components/Art/iArtwork';
import BackBtnOverlay from '@/lib/Components/Navigation/BackBtnOverlayComponent';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'

function ArtworkDetails() {
    const params = useParams<{ id: string }>();
    const { id } = params;
    const art: iArtwork | undefined = ArtworkList.find(piece => Number(id) === piece.id);
    const tag: string | undefined = art?.title.toLowerCase().slice(0, 7).replace(" ", "-");

    function ArtDescription() {
        const descriptions = art?.information.description?.map(description => {
            return (
                <li key={description.replace(" ", "-")} className=' border-l-2 border-l-slate-200 border-b-2 border-b-slate-200 rounded-3xl mx-auto px-4 pt-1'>
                    {description}
                </li>
            )
        })
        return (
            <ul id='art-description' className='my-4 md:my-10 flex flex-col gap-4 md:gap-8'>
                {
                    art?.information.client ?
                        <li className='col-span-2 border-2 border-slate-200 w-fit mx-auto rounded-3xl px-2 py-1'>
                            {
                                art.information.client
                            }
                        </li>
                        :
                        ""
                }
                {descriptions}
            </ul>
        )
    }

    return (
        <main id={`${art != undefined ? `${tag}-details` : `no-art-details`}`} className="flex flex-col relative top-16 text-center p-2">
            <BackBtnOverlay link='/art' />
            {
                art != undefined ?
                    <>
                        <section id={`art-header`} className='relative top-6'>
                            <div id={`header-intro`} className="w-fit mx-auto p-4 text-2xl font-semibold rounded-3xl text-slate-400">
                                Details for...
                            </div>
                            <div id={`header-title`} className="relative bottom-11 w-fit mx-auto pt-4 text-4xl font-semibold rounded-3xl text-slate-200">
                                {art?.title}
                            </div>
                        </section>

                        <Image id='art-image' src={art.image} className='max-w-full mx-auto' alt={art.information.altText ? art.information.altText : "Image"} />

                        <section id='artwork-information'>
                            {
                                art.date ?
                                    <div id='art-date'>{art.date.toString()}</div>
                                    :
                                    ""
                            }
                            {
                                art.information.description ?
                                    <ArtDescription />
                                    :
                                    ""
                            }
                        </section>
                    </>
                    :
                    "Art not found"
            }
        </main>
    )
}

export default ArtworkDetails
