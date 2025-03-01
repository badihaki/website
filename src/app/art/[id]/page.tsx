"use client"

import { originalArtworkList } from '@/lib/Components/Art/ArtworkList';
import { iArtwork } from '@/lib/Components/Art/iArtwork';
import BackBtnOverlay from '@/lib/Components/Navigation/BackBtnOverlayComponent';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'

function ArtworkDetails() {
    const params = useParams<{ id: string }>();
    const { id } = params;
    const art: iArtwork | undefined = originalArtworkList.find(piece => Number(id) === piece.id);
    const tag: string | undefined = art?.title.toLowerCase().slice(0, 7).replace(" ", "-");

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

                        <Image id='art-image' src={art.image} className='max-w-full' alt={art.information.altText ? art.information.altText : "Image"} />

                        <section id='artwork-information'>
                            {
                                art.date ?
                                    <div id='art-date'>{art.date.toString()}</div>
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
