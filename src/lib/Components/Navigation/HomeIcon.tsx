import Image from 'next/image'
import React from 'react'
import icon from '@/lib/Images/banner-open.png'
import Link from 'next/link'

function HomeIcon() {
  return (
    <div className='basis-3/12 transition-all ease-in-out duration-700 justify-center items-center w-[50px] hover:w-[100px]'>
        <Link href={"/"}>
            <div className='flex transition-all ease-in-out duration-500 bg-[#341e7a] bg-opacity-15 hover:bg-opacity-35 rounded-full justify-center items-center px-2'>
                <Image src={icon} alt='Icon to take you home' 
                className='max-w-[75px]'/>
            </div>
        </Link>
    </div>
  )
}

export default HomeIcon