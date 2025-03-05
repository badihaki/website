import Image from 'next/image'
import React from 'react'
import profile from '@/lib/Images/Profiles/profile-2025-orig.jpg'
import email from '@/lib/Images/Icons/mail.png'

function Contact() {
  return (
    <main id="contact" className="relative top-16 text-center p-2">

      <div id="contact-container" className="flex flex-col mt-14">
        <div id="contact-intro" className="relative bottom-11 w-fit mx-auto px-4 pt-4 text-4xl font-semibold rounded-3xl text-slate-200">
          Contact Me
        </div>
      </div>

      <div id="contact-info-container" className="flex flex-col gap-4 md:gap-10 -mt-6 px-4 pt-2 pb-4 rounded-lg md:max-w-[70%] place-self-center">
        <section id='contact-welcome' className='flex flex-col md:flex-row gap-4 w-[95%] place-self-center mx-auto place-items-center'>
          <Image src={profile} alt='A profile picture of B. Haki Martin, in his office.' className='transition-all ease-in-out duration-500 relative w-[35%] hover:w-[50%] opacity-60 hover:opacity-85 active:opacity-100 rounded-full hover:rounded-md' />
          <p id="contact-info-1" className="flex-1 outline outline-2 outline-slate-400 py-4 px-1 md:py-8 md:px-4 rounded-xl mt-2 indent-3">
            <span className="font-semibold font-serif text-6xl border-b-2 border-[#FFD700] rounded-2xl relative bottom-1">T</span>
            here are many ways to contact me.
          </p>
        </section>
      </div>

      <button id='email' className='bg-slate-200 flex flex-row mx-auto rounded-full p-2'>
        <Image src={email} alt='Email me!' className='place-self-start' />
        <div className='text-slate-950 place-self-end'>Email me</div>
      </button>

    </main>
  )
}

export default Contact