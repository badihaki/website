import { Anchor } from '@mantine/core'
import Link from 'next/link';
import React from 'react'

function Contact() {
  const socials:{
    text:string,
    href:string,
  }[] = [
    {
      text:"LinkedIn",
      href:"https://www.linkedin.com/in/badi-haki-martin-93481531b/",
    },
    {
      text:"Bluesky",
      href:"https://bsky.app/profile/kurokaras.bsky.social",
    },
    {
      text:"ArtStation",
      href:"https://bhakim.artstation.com/",
    },
    {
      text:"Itch.io",
      href:"https://badihaki.itch.io/",
    },
  ];

  return (
    <div id='contact-section' className='overflow-auto no-scrollbar max-h-[40rem] min-h-[40rem] mt-6'>
        <p className='ease-in-out transition-all duration-700 relative font-san bg-[#341e7a] bg-opacity-15 hover:bg-opacity-35 px-2 py-1 hover:py-4 my-4 rounded-lg hover:rounded-full w-1/2 hover:w-[75%] left-[10%] hover:left-0'>
          You can email me directly at <Anchor href='jojackblack@gmail.com' underline='hover' target='blank'>jojackblack@gmail.com</Anchor>.
        </p>
        
        <div  className='ease-in-out transition-all duration-700 relative font-san bg-[#341e7a] bg-opacity-15 hover:bg-opacity-35 px-2 py-1 hover:py-4 my-4 rounded-lg hover:rounded-full w-1/2 hover:w-[75%] left-[25%] hover:left-[10%]'>
          <p>
            Alternatively, you can follow me on my socials:
          </p>
          <ul>
            {
              socials.map(social=>{
                return(
                  <li>
                    <Anchor href={social.href} component={Link} target='blank'>
                      {social.text}
                    </Anchor>
                  </li>
                )
              })
            }
          </ul>
        </div>
    </div>
  )
}

export default Contact