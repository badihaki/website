import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import icon from '@/lib/Images/Icons/circle-arrow-left.png'

function BackBtnOverlay(props:{
    link:string
}) {
    const {link} = props;
  return (
    <Link href={link} className='transition-all ease-in-out duration-300 fixed z-50 top-[5%] left-[80%] bg-slate-200 bg-opacity-55 hover:bg-opacity-75 active:bg-opacity-10 border-2 border-[#FFD700] active:border-slate-200 rounded-full w-8 justify-items-center'>
      <Image src={icon} alt='Go back' className='mx-auto w-full' />
    </Link>
  )
}

export default BackBtnOverlay
