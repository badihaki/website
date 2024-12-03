import { Box } from '@mantine/core'
import React from 'react'

function Landing() {
  return (
    <div id='welcome-section' className='relative overflow-auto no-scrollbar max-h-[40rem] min-h-[40rem] mt-6'>
        <p className='ease-in-out transition-all duration-700 relative font-san bg-[#341e7a] bg-opacity-15 hover:bg-opacity-35 px-2 py-1 my-2 rounded-lg hover:rounded-full'>
          Welcome to my personal website and portfolio. My name is Badi-Haki Martin, and I'm a programmer and artist living in Atlanta, Georgia. I'm a professioanl full-stack web developer with over two years of experience working on enterprise-level projects.
        </p>
        <div className='flex flex-row mt-14 mb-6'>
          <aside className='relative basis-1/2'>
            <Box 
            className='border border-[#ffffff] shadow-xl'>
              I have been developing web apps for since 2020. I attended Flatiron Schools' Software Engineering program in 2022-2023, learning how to build robust APIs to serve data to the front-end.
            </Box>
          </aside>
          <p className='basis-1/2 ease-in-out transition-all duration-700 relative font-san bg-[#341e7a] bg-opacity-15 hover:bg-opacity-35 px-2 py-1 rounded-lg hover:rounded-full'>
            I have experience working with front-end UI libraries and frameworks such as React, NextJS and Angular in order to build performant web apps that help guide users through the experience. 
          </p>
        </div>
    </div>
  )
}

export default Landing