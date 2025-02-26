import React from 'react'
import { iProject } from './iProject'

function ProjectCardComponent(props: {
    project: iProject,
    isOpen:boolean
}) {
    const { Id, title, info: { summary } } = props.project;
    const folderOpen = props.isOpen;
    
    return (
        <div id={`project-${Id}`}
        className={`max-w-full bg-blue-800 px-3 place-self-center ${folderOpen ? "visible h-fit" : "hidden h-0"}`}>
            <div id={`${title.toLowerCase().slice(0, 7).replace(" ", "-")}-title`} className='uppercase text-lg'>
                {title}
            </div>
        </div>
    )
}

export default ProjectCardComponent