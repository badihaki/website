"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import closedIcon from '@/lib/Images/banner-closed.png'
import openIcon from '@/lib/Images/banner-open.png'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [canClickButton, setMenuButtonActive] = useState<boolean>(true);
  // let canClickButton: boolean;

  function OnClickMenuButton(event: React.MouseEvent<HTMLElement>) {
    console.log(canClickButton);
    if (canClickButton === true) {
      setMenuButtonActive(false);
      console.log('cant click nig');
      setTimeout(() => {
        setMenuButtonActive(true);
        console.log('can click again');
      }, 500);
      setMenuOpen(!menuOpen);
    }
  }

  return (
    <nav id='navigation-menu' className='z-50 fixed bg-black h-screen w-[65%]'>
      <Image id='menu-button' src={menuOpen ? openIcon : closedIcon} alt={`Open/Close navigation menu`} onClick={OnClickMenuButton} className={` transition-all ease-in-out duration-300 ${menuOpen ? `max-w-40` : `max-w-20`}`} />
      <ul className='grid grid-rows-5 font-semibold tracking-wide text-xl '>
        <li>Webdev</li>
        <li>Gamedev</li>
        <li>Art</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar
