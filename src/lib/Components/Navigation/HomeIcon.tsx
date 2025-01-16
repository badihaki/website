import Image from 'next/image'
import React from 'react'
import icon from '@/lib/Images/banner-open.png'
import Link from 'next/link'

function HomeIcon() {
  return (
    <div className='basis-4/12 transition-all ease-in-out duration-700 justify-center items-center min-w-[1/2vw] max-w-[1/2vw]'>
        <Link href={"/"} className=''>
            <div className='flex transition-all ease-in-out duration-500 bg-[#341e7a] bg-opacity-15 hover:bg-opacity-35 rounded-full justify-center items-center px-2 w-2/5 hover:w-4/5'>
                <Image src={icon} alt='Icon to take you home' 
                className='max-w-[75px]'/>
            </div>
        </Link>
    </div>
  )
}

export default HomeIcon