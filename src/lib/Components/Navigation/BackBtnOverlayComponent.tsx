import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import icon from '@/lib/Images/Icons/circle-arrow-left.png'

function BackBtnOverlay(props:{
    link:string
}) {
    const {link} = props;
  return (
    <Link href={link} className='fixed z-50 top-[5%] left-[80%] bg-slate-200 bg-opacity-35 hover:bg-opacity-5 border-2 border-[#FFD700] rounded-full w-8 justify-items-center'>
      <Image src={icon} alt='Go back' className='mx-auto w-full' />
    </Link>
  )
}

export default BackBtnOverlay
