"use client"

import React, { useState } from 'react'
import { webdevProjects } from './webdevProjectsList';
import ProjectCardComponent from './ProjectCardComponent';
import Image from 'next/image';
import openIcon from '@/lib/Images/Icons/arrow-down.png';
import closedIcon from '@/lib/Images/Icons/arrow-left-from-line.png';

function ProjectsContainer() {
    // state variables
    const [folderOpen, setFolderOpen] = useState<boolean>(false);
    const [canOpenFolder, setCanOpenFolder] = useState<boolean>(true);

    // data
    const projectComponents = webdevProjects.map((project) => {
        return <ProjectCardComponent key={project.Id} project={project} isOpen={folderOpen} />
    })

    // functions
    function OnFolderBtnElementClick() {
        if (canOpenFolder) {
            setFolderOpen(!folderOpen);
            setCanOpenFolder(false);
            setTimeout(() => {
                setCanOpenFolder(true);
            }, 350);
        }
    }

    return (
        <div id='projects-folder' className='flex flex-col gap-4'>
            <button id='projects-folder-btn' onClick={OnFolderBtnElementClick} className={`transition-all ease-in-out duration-500 flex-1 grid grid-flow-col gap-2 mx-auto mt-6 mb-2 px-2 hover:px-6 pt-1 hover:py-2 rounded-2xl ${folderOpen ? "outline outline-2 outline-slate-200": "border-b-2 border-[#FFD700]"}`}>
                {folderOpen ? " Close " : " Open "} Projects
                <Image src={folderOpen ? openIcon : closedIcon} alt={folderOpen ? "click to close projects folder" : "click to open projects folder"}
                className='bg-slate-200 bg-opacity-20 rounded-full'/>
            </button>

            <div id='projects-container' className={`grid grid-cols-2 gap-y-4 gap-x-2 transition-all ease-in-out duration-500
                ${folderOpen ? "h-fit" : "h-full"}`}>
                {projectComponents}
            </div>
        </div>
    )
}

export default ProjectsContainer