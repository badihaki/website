import React from 'react'
import { iArtwork } from './iArtwork'
import Image from 'next/image';

function ArtworkComponent(props: {
    art: iArtwork
}) {
    const { art } = props;
    const tag: string = art.title.replace(" ", "-").slice(0, 9);
    return (
        <div id={tag} className='border border-slate-200 rounded-lg max-w-52 max-h-52 overflow-hidden'>
            <div id={`${tag}-title`}>
                {art.title}
            </div>

            <Image src={art.image} alt={art.information.altText ? art.information.altText : "image"}
                className=''
            />
        </div>
    )
}

export default ArtworkComponent