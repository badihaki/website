"use client"

import BackBtnOverlay from '@/lib/Components/Navigation/BackBtnOverlayComponent';
import { iProject } from '@/lib/Components/WebDev/iProject';
import { webdevProjects } from '@/lib/Components/WebDev/webdevProjectsList';
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

    return (
        <main id={`${projectInfo != undefined ? `project-info-${tag}` : "no-project-info"}`} className="flex flex-col relative top-16 text-center p-2" >
            <BackBtnOverlay link='/webdev' />
            {projectInfo != undefined ?
                <>
                    <div id={`project-header`}>
                        <div id={`header-intro`} className="relative w-fit mx-auto p-4 text-2xl font-semibold rounded-3xl text-slate-400">
                            Official Website of
                        </div>
                        <div id={`header-title`} className="relative bottom-11 w-fit mx-auto p-4 text-4xl font-semibold rounded-3xl text-slate-200">
                            {projectInfo.title}
                        </div>
                    </div>

                    <div id={`project-summary`} className='border-slate-200'>
                        {projectInfo.information.summary}
                    </div>
                </>
                : "projcet not found"}
        </main>
    )
}

export default Page
