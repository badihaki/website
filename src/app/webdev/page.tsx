import ProjectsContainer from '@/lib/Components/WebDev/ProjectsContainer'
import Link from 'next/link'
import React from 'react'

function WebDev() {
  return (
    <main id="webdev" className="flex flex-col relative top-16 text-center p-2">

      <div id="webdev-intro-container" className="flex flex-col mt-14">
        <div id="webdev-intro" className="relative bottom-11 w-fit mx-auto px-4 pt-4 text-4xl font-semibold rounded-3xl text-slate-200">
          Web Development
        </div>
      </div>

      <div id="home-info-container" className="flex flex-col gap-4 md:gap-10 -mt-6 px-4 pt-2 pb-4 rounded-lg md:max-w-[70%] place-self-center">
        <p id="webdev-info-1" className="flex-1 outline outline-2 outline-slate-400 py-4 px-1 md:py-8 md:px-4 rounded-xl mt-2 indent-3">
          <span className="font-semibold font-serif text-6xl border-b-2 border-[#FFD700] rounded-2xl relative left-2 bottom-1">F</span>
          ull-Stack Web Development is one of my newest passions. I taught myself JavaScript in 2020 and began working on a variety of front-end UI projects. In 2022, I enrolled in the full-stack course at <Link href={"https://flatironschool.com/"} target="_blank" className="transition-all duration-300 ease-in-out text-slate-400 hover:text-slate-200 no-underline hover:underline text-base hover:text-lg">Flatiron School</Link> in order to tighten up my skills.
        </p>

        <p id="webdev-info-2" className="flex-1 outline outline-2 outline-slate-400 py-4 px-1 rounded-xl mt-2">
          At Flatiron School I was exposed to a variety of tools, including component-based UI libraries with React, CSS frameworks suchs as SCSS and SASS, and backend technology like PostgreSQL and Ruby on Rails. I could finally call myself a &apos;full-stack&apos; software engineer, and since graduating from the bootcamp I have been engaged in a variety freelance and in-office projects.
        </p>
      </div>

      <section id='webdev-projects'>
        <ProjectsContainer />
      </section>

    </main>
  )
}

export default WebDev