import PanelsContainer from '@/lib/Components/GameDev/PanelsContainer'
import React from 'react'

function GameDev() {
  return (
    <main id="gamedev" className="flex flex-col relative top-16 text-center p-2">

      <div id="gamedev-container" className="flex flex-col mt-14">
        <div id="gamedev-intro" className="relative bottom-11 w-fit mx-auto px-4 pt-4 text-4xl font-semibold rounded-3xl text-slate-200">
          Game Development
        </div>
      </div>

      <div id="gamedev-info-container" className="flex flex-col gap-4 md:gap-10 -mt-6 px-4 pt-2 pb-4 rounded-lg md:max-w-[70%] place-self-center">
        <p id="gamedev-info-1" className="flex-1 outline outline-2 outline-slate-400 py-4 px-1 md:py-8 md:px-4 rounded-xl mt-2 indent-3">
          <span className="font-semibold font-serif text-6xl border-b-2 border-[#FFD700] rounded-2xl relative bottom-1">G</span>
          aming has been a big part of my life since childhood, bringing me lifelong friendships and useful interpersonal and planning skills. It was only a matter of time until the wonders I witnessed in these virtual worlds inspired me to create my own.
        </p>
      </div>

      <PanelsContainer />

    </main>
  )
}

export default GameDev