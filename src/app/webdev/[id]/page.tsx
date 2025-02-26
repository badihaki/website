"use client"

import BackBtnOverlay from '@/lib/Components/Navigation/BackBtnOverlayComponent';
import { iProject } from '@/lib/Components/WebDev/iProject';
import { webdevProjects } from '@/lib/Components/WebDev/webdevProjectsList';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'

function Page() {
    // const projectInfo:()=>iProject|undefined = ()=>{
    //     return webdevProjects.find(project => id === project.Id);
    // }
    const params = useParams<{ id: string }>();
    const { id } = params;
    const projectInfo: iProject | undefined = webdevProjects.find(project => Number(id) === project.Id);
    const tag: string | undefined = projectInfo?.title.toLowerCase().slice(0, 7).replace(" ", "-");

    const infoListElements = projectInfo?.information.bulletPoints?.map(bulletPoint => {
        return (
            <li key={bulletPoint.replace(" ", "").slice(0, 11)} className='flex-1 outline outline-2 outline-slate-200 bg-opacity-25 p-2 rounded-2xl w-full place-self-center'>
                {bulletPoint}
            </li>
        )
    })

    return (
        <main id={`${projectInfo != undefined ? `project-info-${tag}` : "no-project-info"}`} className="flex flex-col relative top-16 text-center p-2" >
            <BackBtnOverlay link='/webdev' />
            {projectInfo != undefined ?

                <>
                    <div id={`project-header`} className='relative top-6'>
                        <div id={`header-intro`} className="w-fit mx-auto p-4 text-2xl font-semibold rounded-3xl text-slate-400">
                            Project info for
                        </div>
                        <div id={`header-title`} className="relative bottom-11 w-fit mx-auto pt-4 text-4xl font-semibold rounded-3xl text-slate-200">
                            {projectInfo.title}
                        </div>
                    </div>

                    <div id={`project-summary`} className='border-slate-200 border-b-2 rounded-2xl pb-1 px-4 mx-auto'>
                        {projectInfo.information.summary}
                    </div>

                    <div id='project-information'>
                        <div id='info-intro' className='text-lg font-semibold tracking-widest mt-10'>
                            What I did
                        </div>

                        <ul id='project-bullet-points' className='mx-auto mt-2 flex flex-col gap-6 max-w-[75%] place-self-center'>
                            {infoListElements}
                        </ul>
                    </div>

                    <div id='project-links'>
                        <div id='links-intro' className='text-lg font-semibold tracking-widest mt-10'>
                            Notable Links
                        </div>

                        <div id='links' className='grid grid-cols-2 gap-y-3 mb-4 md:mb-0 mt-2 md:mt-6'>
                            <button id='github-link' className='col-span-2 mx-auto px-3 rounded-full transition-all ease-in-out duration-300 bg-slate-200 hover:bg-slate-900 text-black hover:text-slate-100 border-2 border-slate-200 hover:border-[#FFD700]'>
                                {projectInfo.links.gitHub ?
                                    <Link href={projectInfo.links.gitHub} target='_blank'>
                                        Github Link
                                    </Link>
                                    :
                                    "No GitHub Link"}
                            </button>

                            <button id='youitube-link' className='mx-auto px-3 rounded-full transition-all ease-in-out duration-300 bg-slate-200 hover:bg-slate-900 text-black hover:text-slate-100 border-2 border-slate-200 hover:border-[#FFD700]'>{
                                projectInfo.links.youtube ?
                                    <Link href={projectInfo.links.youtube} target='_blank'>
                                        Github Link
                                    </Link>
                                    :
                                    "No Youtube Link"
                            }</button>

                            <button id='web-link' className='mx-auto px-3 rounded-full transition-all ease-in-out duration-300 bg-slate-200 hover:bg-slate-900 text-black hover:text-slate-100 border-2 border-slate-200 hover:border-[#FFD700]'>{
                                projectInfo.links.webDeploy ?
                                    <Link href={projectInfo.links.webDeploy} target='_blank'>
                                        Web Deployment
                                    </Link>
                                    :
                                    "No Web Deployment"
                            }</button>
                        </div>
                    </div>
                </>

                : "projcet not found"}
        </main>
    )
}

export default Page
