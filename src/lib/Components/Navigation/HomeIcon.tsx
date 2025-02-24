import Image from 'next/image'
import React from 'react'
import icon from '@/lib/Images/banner-open.png'
import Link from 'next/link'

function HomeIcon() {
  return (
    <Link href={"/"} className='transition-all ease-in-out duration-700 justify-center items-center'>
      <Image src={icon} alt='Icon to take you home'
        className='w-fit max-w-[4px]' />
    </Link>
  )
}

export default HomeIcon