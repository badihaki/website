import { webdevProjects } from '@/lib/Collections'
import React from 'react'

function WebDev() {
  const projects = webdevProjects.map(project=>{
    return (
      <li key={project.id}>
        {project.title}
        <br/>
      </li>
    )
  })
  
  return (
    <div id='webdev-section' className='overflow-auto no-scrollbar max-h-[40rem] min-h-[40rem] mt-6'>
        <p className='ease-in-out transition-all duration-700 relative font-san bg-[#341e7a] bg-opacity-15 hover:bg-opacity-35 px-2 py-1 my-2 rounded-lg hover:rounded-full'>
          I've worked as a full-stack web developer since 2022.
        </p>
        <div id='project-list'
        className='max-w-[35%] min-w-[33%] mx-auto justify-self-center px-4 py-2'>
          <ul>
            {projects}
          </ul>
        </div>
    </div>
  )
}

export default WebDev