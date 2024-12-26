import { Anchor } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { images } from '@/lib/Collections'

function Art() {
  return (
    <div id='art-section' className='relative overflow-auto no-scrollbar max-h-[40rem] min-h-[40rem] mt-6 w-[60%] left-[10%]'>
        <p className='ease-in-out transition-all duration-700 relative font-san bg-[#341e7a] bg-opacity-15 hover:bg-opacity-35 px-2 py-1 my-8 rounded-lg hover:rounded-full'>
          So, yeah, my folks tell me I've been drawing since I was 3. I started freelancing professionally in 2012, and since then I've been honored to work for upcoming musical artists designing single and album artwork and inserts, indie comic creators as a cover artist, start ups creating their logos and iconography, and much more.
        </p>
        <p className='ease-in-out transition-all duration-700 relative font-san bg-[#341e7a] bg-opacity-15 hover:bg-opacity-35 px-2 py-1 my-8 rounded-lg hover:rounded-full'>
          Below you'll find a small sampling of my character work, from character designs to fan art. You can find more of my stuff at my <Anchor component={Link} href={"https://bhakim.artstation.com/"} target='blank'>ArtStation Portfolio</Anchor>.
        </p>
        
        <div className='relative'>
          { images.map(image=>{
            return(
              <div key={image.id} className='transition-all duration-700 ease-in-out pb-8 shadow-2xl drop-shadow-2xl shadow-white w-[50%] hover:w-full mx-auto'>
                <Image src={image.image} alt={image.alt} />
              </div>
            )
          }) }
        </div>
    </div>
  )
}

export default Art