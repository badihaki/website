import Image from 'next/image'
import React from 'react'
import icon from '@/lib/_Images/banner-open.png'
import Link from 'next/link'

function HomeIcon() {
  return (
    <div className='transition-all ease-in-out duration-700 absolute justify-center items-center w-[50px] top-2 left-4 hover:w-[100px] hover:top-4 hover:left-4'>
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