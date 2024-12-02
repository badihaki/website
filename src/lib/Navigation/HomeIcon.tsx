import Image from 'next/image'
import React from 'react'
import icon from '@/lib/_Images/banner-open.png'

function HomeIcon() {
  return (
    <div>
        <Image src={icon} alt='Icon to take you home' />
    </div>
  )
}

export default HomeIcon