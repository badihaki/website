import React from 'react'
import { iLink } from './iLink'
import Link from 'next/link'

function LinkComponent(props: {
    link: iLink,
    buttonFunctionality: React.MouseEventHandler<HTMLAnchorElement>,
    menuIsOpen:boolean
}) {
    // component
    return (
        <Link id={`link-${props.link.title.toLowerCase().replace(" ", "-")}`} href={props.link.href} onClick={props.buttonFunctionality}
        className={`transition-all ease-in-out m-auto px-11 text-center w-full rounded-full bg-gradient-to-t from-[#ffd900b0] from-5% to-transparent to-55%
        ${props.menuIsOpen? "visible duration-300 w-fit" : "hidden duration-1000 w-0"}`}>
            <li className={`transition-all ease-in-out duration-300 font-semibold tracking-wide text-xl
                ${props.menuIsOpen ? "w-fit": "w-0"}`}>{props.link.title}</li>
        </Link>
    )
}

export default LinkComponent