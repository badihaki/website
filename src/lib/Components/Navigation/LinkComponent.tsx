import React from 'react'
import { iLink } from './iLink'
import Link from 'next/link'

function LinkComponent(props: {
    link: iLink,
    buttonFunctionality: React.MouseEventHandler<HTMLAnchorElement>,
    menuIsOpen:boolean
}) {
    return (
        <Link id={`link-${props.link.title.toLowerCase().replace(" ", "-")}`} href={props.link.href} onClick={props.buttonFunctionality}
        className={`transition-all ease-in-out
        ${props.menuIsOpen? "visible duration-150" : "hidden duration-700"}`}>
            <li>{props.link.title}</li>
        </Link>
    )
}

export default LinkComponent