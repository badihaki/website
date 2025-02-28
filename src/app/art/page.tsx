import Link from 'next/link'
import React from 'react'

function Art() {
  return (
    <main id="art" className="flex flex-col relative top-16 text-center p-2">

      <div id="art-intro-container" className="flex flex-col mt-14">
        <div id="art-intro" className="relative bottom-11 w-fit mx-auto px-4 pt-4 text-4xl font-semibold rounded-3xl text-slate-200">
          My Artwork
        </div>
      </div>

      <div id="art-info-container" className="flex flex-col gap-4 md:gap-10 -mt-6 px-4 pt-2 pb-4 rounded-lg md:max-w-[70%] place-self-center">
        <p id="art-info-intro" className="flex-1 outline outline-2 outline-slate-400 py-4 px-1 md:py-8 md:px-4 rounded-xl mt-2 indent-3">
          <span className="font-semibold font-serif text-6xl border-b-2 border-[#FFD700] rounded-2xl relative">I</span>
          llustration and art has always been at the root of my passions.
        </p>

        <p id="art-info" className="flex-1 outline outline-2 outline-slate-400 py-4 px-1 md:py-8 md:px-4 rounded-xl mt-2 indent-3">
          I have drawn all my life. My mother always loved to tell her friends how I was always a creative child, and how I picked up a pencil and paper at age 2 and just...never stopped. I started drawing professionally at age 17, working as a freelance illustrator for various clients in the entertainment industry, from musical artists to film producers.
        </p>

        <p id="art-info" className="flex-1 outline outline-2 outline-slate-400 py-4 px-1 md:py-8 md:px-4 rounded-xl mt-2 indent-3">
          Below you will find a sampling of work, from rough concept pieces to illustration. All of the artwork is created and owned by me, with rights to certain pieces granted to the specific clients that commissioned them.
        </p>
      </div>

    </main>
  )
}

export default Art