import React from 'react'
import { originalArtworkList } from './ArtworkList'
import ArtworkComponent from './ArtworkComponent'

function OrignalArtContainer() {
    const artwork = originalArtworkList.map(art => {
        return <ArtworkComponent key={`original-art-${art.id}`} art={art} />
    })
    return (
        <>
            <div id='original-artwork-title' className='text-2xl'>
                Original Artwork
            </div>
            
            <div id='original-artwork-container' className='grid grid-cols-2 gap-6 sm:gap-x-0 sm:place-items-center px-4 sm:px-16 md:px-44'>
                {artwork}
            </div>
        </>
    )
}

export default OrignalArtContainer