"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import closedIcon from '@/lib/Images/banner-closed.png'
import openIcon from '@/lib/Images/banner-open.png'
import Link from 'next/link'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [canClickButton, setMenuButtonActive] = useState<boolean>(true);
  // let canClickButton: boolean;

  function OnClickMenuButton(event: React.MouseEvent<HTMLElement>) {
    if (canClickButton === true) {
      setMenuButtonActive(false);
      setTimeout(() => {
        setMenuButtonActive(true);
      }, 500);
      setMenuOpen(!menuOpen);
    }
  }
  
  function OnClickNavButton(event: React.MouseEvent<HTMLElement>){
    setMenuOpen(!menuOpen);    
  }


  return (
    <nav id='navigation-menu' className={`z-50 fixed h-screen transition-all ease-in-out duration-300 ${menuOpen ? 'bg-black w-[65%]' : "bg-transparent w-0"}`}>
      <Image id='menu-button' src={menuOpen ? openIcon : closedIcon} alt={`Open/Close navigation menu`} onClick={OnClickMenuButton} className={`transition-all ease-in-out p-2 relative rounded-full min-w-12
        ${menuOpen ? `max-w-40 bg-transparent border-b-8 border-[#FFD700] top-2` : `max-w-20 bg-gradient-to-t from-[#FFD700]`} mx-auto top-2 duration-300`} />

      <ul className={`grid grid-rows-5 font-semibold tracking-wide text-xl text-center h-1/2 relative top-[5%]
        ${menuOpen ? "visible" : "hidden"}`}>
        <Link href={"/"} onClick={OnClickNavButton}>
          <li>Home</li>
        </Link>
        <Link href={"/webdev"} onClick={OnClickNavButton}>
          <li>Webdev</li>
        </Link>
        <li>Gamedev</li>
        <li>Art</li>
        <li>Contact</li>
      </ul>

    </nav>
  )
}

export default NavBar
