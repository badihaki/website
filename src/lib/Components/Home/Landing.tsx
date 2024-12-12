import { Box } from '@mantine/core'
import React from 'react'

function Landing() {
  return (
    <div id='welcome-section' className='relative overflow-auto no-scrollbar max-h-[40rem] min-h-[40rem] mt-6'>
        <p className='ease-in-out transition-all duration-700 relative font-san bg-[#341e7a] bg-opacity-15 hover:bg-opacity-35 px-2 py-1 my-2 rounded-lg hover:rounded-full'>
          Welcome to my personal website and portfolio. My name is Badi-Haki Martin, and I'm a full-stack web developer, game developer and illustrator living in Atlanta, Georgia. I've been coding for well over ten years on a variety of personal projects, in addition to over a year working professionally as a full-stack developer, designing and maintaining a variety of projects in the tech training field. I have always loved computers, technology, and all the knowledge, freedom and connectivity that the internet brings us, and I'm proud to contribute to projects that help others.
        </p>
        <p className='ease-in-out transition-all duration-700 relative font-san bg-[#341e7a] bg-opacity-15 hover:bg-opacity-35 px-2 py-1 my-2 rounded-lg hover:rounded-full'>
          I also have over ten years experience as a professional freelance illustrator and comic artist. I've worked with a variety of clients, including musical artists, burgeoning enterprises and independent film makers. Ever since I could hold a pencil, I have been passionate about bringing dreams to life through my art, and have been honored to do it professionally for my clients.
        </p>
        <div className='flex flex-row mt-14 mb-6'>
          <aside className='relative basis-1/2 mx-4'>
            <Box 
            className='border border-[#ffffff] shadow-xl bg-gray-900 bg-opacity-45 p-2'>
              I have been developing web apps for since 2020. I attended Flatiron Schools' Software Engineering program in 2022-2023, learning how to build robust APIs to serve data to the front-end.
            </Box>
          </aside>
          <p className='basis-1/2 ease-in-out transition-all duration-700 relative font-san bg-[#341e7a] bg-opacity-15 hover:bg-opacity-35 px-2 py-1 rounded-lg hover:rounded-full mx-4'>
            I have experience working with front-end UI libraries and frameworks such as React, NextJS and Angular in order to build performant web apps that help guide users through the experience. I hope you enjoy going through my portfolio of web applications, which you can find in the <span className='bg-slate-200 bg-opacity-20 text-zinc-50 px-2 rounded-lg'>WebDev</span> section of this website.
          </p>
        </div>
        <p className='ease-in-out transition-all duration-700 relative font-san bg-[#341e7a] bg-opacity-15 hover:bg-opacity-35 px-2 py-1 my-2 rounded-lg hover:rounded-full'>
          However, I started my jounrey into code as a hobbyist game developer. 
        </p>
    </div>
  )
}

export default Landing