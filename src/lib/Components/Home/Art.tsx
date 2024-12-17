import { Anchor } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
// color images
import aetherPunk from "@/lib/Images/Art/aetherpunk-cowboy-02.jpg"
import foxLady from "@/lib/Images/Art/fox warrior lady.jpg"
import mace from "@/lib/Images/Art/macewinduu.jpg"
import crazyPain from "@/lib/Images/Art/pain.jpg"
import soma from "@/lib/Images/Art/soma-cruz-portfolio.jpg"
// bw images
import dream from "@/lib/Images/Art/dream-morpheus.jpg"
import batman from "@/lib/Images/Art/bw/batman-bust-sketch.jpg"
import lady from "@/lib/Images/Art/bw/female-portrait-001.jpg"
import staticShock from "@/lib/Images/Art/bw/static-pencils.jpg"
import swordsWoman from "@/lib/Images/Art/bw/swordewoman.jpg"
import Image, { StaticImageData } from 'next/image'

function Art() {
  
  const images:{
    id: number;
    alt: string;
    image: StaticImageData;
  }[] = [
    {
      id:0,
      alt:"An Aether Punk cowboy, rendered in a pseudo-anime-style.",
      image:aetherPunk
    },
    {
      id:1,
      alt:"A warrior fox lady who is riding a giant, purple cat.",
      image:foxLady
    },
    {
      id:2,
      alt:"Fan-art of a bust of Mace Windu from Star Wars after he (hypothetically) survived Order 66 and escaped into exile.",
      image:mace
    },
    {
      id:3,
      alt:"A super-stylized, comic-style character, hunched and emaciated, crying and screaming in pain.",
      image:crazyPain
    },
    {
      id:4,
      alt:"Fan-art of Soma Cruz from the famous Castlevania series of games.",
      image:soma
    },
    {
      id:5,
      alt:"Fan-art of Dream, also known as Morpheus, from The Sandman comics.",
      image:dream
    },
    {
      id:6,
      alt:"Fan-art of Batman.",
      image:batman
    },
    {
      id:7,
      alt:"A sketch of a woman lady.",
      image:lady
    },
    {
      id:8,
      alt:"Fan-art of Static from Static Shock.",
      image:staticShock
    },
    {
      id:9,
      alt:"A swords-woman, posing and walking forward ready to fight.",
      image:swordsWoman
    },
  ]

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