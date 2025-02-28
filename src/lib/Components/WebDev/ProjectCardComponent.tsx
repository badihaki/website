import React from 'react'
import { iProject } from './iProject'
import Link from 'next/link';

function ProjectCardComponent(props: {
    project: iProject,
    isOpen: boolean
}) {
    const { Id, title, information: { summary } } = props.project;
    const folderOpen: boolean = props.isOpen;
    const tag: string = title.toLowerCase().slice(0, 7).replace(" ", "-");

    return (
        <Link id={`project-${Id}`} href={`/webdev/${Id}`}
            className={`w-full sm:w-[70%] border-2 border-slate-200 px-3 py-2 place-self-center rounded-2xl 
            ${folderOpen ? "visible h-fit" : "hidden h-0"}`}>

            <div id={`${tag}-title`} className='uppercase text-lg'>
                {title}
            </div>

            <div id={`${tag}-summary`} className='truncate'>
                {summary ? summary : ""}
            </div>

        </Link>
    )
}

export default ProjectCardComponent