"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import closedIcon from '@/lib/Images/banner-closed.png'
import openIcon from '@/lib/Images/banner-open.png'
import Link from 'next/link'
import LinkComponent from './LinkComponent'
import { links } from './navLinks'

function NavBar() {
  // states
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [canClickButton, setMenuButtonActive] = useState<boolean>(true);

  // component functionality
  // menu button functionality
  function OnClickMenuButton(event: React.MouseEvent<HTMLElement>) {
    if (canClickButton === true) {
      setMenuButtonActive(false);
      setTimeout(() => {
        setMenuButtonActive(true);
      }, 500);
      setMenuOpen(!menuOpen);
    }
  }

  // navigation button functionality
  function OnClickNavButton(event: React.MouseEvent<HTMLElement>) {
    setMenuOpen(!menuOpen);
  }

  // links
  const linkComponents = links.map((link) => {
    return <LinkComponent key={link.id} link={link} buttonFunctionality={OnClickNavButton} menuIsOpen={menuOpen} />
  })

  // component below
  return (
    <nav id='navigation-menu' className={`z-50 fixed h-screen transition-all ease-in-out ${menuOpen ? 'bg-gradient-to-r from-black from-85% to-transparent w-[65%] duration-500' : "bg-transparent w-0"} duration-700`}>
      <Image id='menu-button' src={menuOpen ? openIcon : closedIcon} alt={`Open/Close navigation menu`} onClick={OnClickMenuButton} className={`transition-all ease-in-out p-2 relative rounded-full min-w-12 duration-500 cursor-pointer
        ${menuOpen ? `max-w-40 bg-transparent border-b-8 border-[#FFD700] top-2 left-11` : `max-w-20 bg-gradient-to-t from-[#FFD700] from-5% to-transparent to-35%`} top-2 left-2`} />

      <ul className={`grid grid-rows-5 gap-2 h-1/2 relative top-[5%]
        ${menuOpen ? "visible duration-1000 w-[60%]" : "hidden duration-500 w-0"}`}>
        {
          linkComponents
        }
      </ul>

    </nav>
  )
}

export default NavBar
