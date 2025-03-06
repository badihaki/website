import React from 'react'
import { ArtworkList } from './ArtworkList'
import ArtworkComponent from './ArtworkComponent'

function ArtContainer() {
    const artwork = ArtworkList.map(art => {
        return <ArtworkComponent key={`original-art-${art.id}`} art={art} />
    })
    return (
        <div id='original-artwork-container' className='grid grid-cols-2 gap-6 sm:gap-x-0 sm:place-items-center px-4 sm:px-16 md:px-44 my-4'>
            {artwork}
        </div>
    )
}

export default ArtContainer