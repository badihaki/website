import Image from 'next/image'
import React from 'react'
import profile from '@/lib/Images/Profiles/profile-2025-orig.jpg'
import Link from 'next/link'
// icons
import emailIcon from '@/lib/Images/Icons/mail.png'
import linkedInIcon from '@/lib/Images/Icons/linkedin.png'
import githubIcon from '@/lib/Images/Icons/github.png'
import itchIcon from '@/lib/Images/Icons/logo-black-new.svg'
import bSkyIcon from '@/lib/Images/Icons/Bluesky_Logo.svg'


function Contact() {
  return (
    <main id="contact" className="relative top-16 text-center p-2">

      <div id="contact-info-container" className="flex flex-col mt-14">
        <div id="contact-intro" className="relative bottom-11 w-fit mx-auto px-4 pt-4 text-4xl font-semibold rounded-3xl text-slate-200">
          Contact Me
        </div>
      </div>

      <div id="contact-info-container" className="flex flex-col gap-4 md:gap-10 -mt-6 px-4 pt-2 pb-4 rounded-lg md:max-w-[70%]">
        <section id='contact-welcome' className='flex flex-col md:flex-row gap-4 md:gap-12 w-[95%] place-self-center place-items-center mx-auto'>
          <Image src={profile} alt='A profile picture of B. Haki Martin, in his office.' className='transition-all ease-in-out duration-500 relative w-[50%] md:w-[35%] hover:w-[55%] opacity-60 hover:opacity-85 active:opacity-100 rounded-full hover:rounded-md' />
          <p id="contact-info-1" className="flex-1 outline outline-2 outline-slate-400 py-4 px-1 md:py-8 md:px-4 rounded-xl mt-2 indent-3">
            <span className="font-semibold font-serif text-6xl border-b-2 border-[#FFD700] rounded-2xl relative bottom-1">T</span>
            here are many ways to contact me. If you need to have an immediate meeting, you can schedule a meeting using this link
            <br />
            <Link href={"https://calendly.com/jojackblack/30min"} target='_blank'
              className='transition-all ease-in-out duration-1000 underline hover:no-underline hover:font-semibold hover:text-slate-300 hover:tracking-widest hover:bg-slate-900 hover:rounded-full hover:px-2 border-2 border-transparent hover:border-[#FFD700]'>here</Link>.
          </p>
        </section>
      </div>

      <section id='contact-methods' className='flex flex-col gap-1 mt-4 lg:mt-0 mb-10'>
        <Link href={"mailto:me@badi-haki.com"} target='_blank' className='mx-auto mb-2'>
          <button id='email' className='transition-all ease-in-out duration-500 bg-slate-200 hover:bg-slate-950 border-2 border-transparent hover:border-[#FFD700] text-slate-950 hover:text-slate-200 flex flex-row mx-auto rounded-full p-2'>
            <div id='email-icon' className='place-self-start rounded-full p-2 bg-slate-200'>
              <Image src={emailIcon} alt='Email me!'/>
            </div>
            <div className='place-self-center mx-2 font-semibold'>Email me</div>
          </button>
        </Link>

        <Link href={"https://www.linkedin.com/in/badi-haki-martin-93481531b/"} target='_blank' className='mx-auto'>
          <button id='linkedin' className='transition-all ease-in-out duration-500 bg-slate-200 hover:bg-slate-950 border-2 border-transparent hover:border-[#FFD700] text-slate-950 hover:text-slate-200 flex flex-row mx-auto rounded-full p-2'>
            <div id='email-icon' className='place-self-start rounded-full p-2 bg-slate-200'>
              <Image src={linkedInIcon} alt='LinkedIn'/>
            </div>
            <div className='place-self-center mx-2 font-semibold'>LinkedIn</div>
          </button>
        </Link>
        
        <Link href={"https://github.com/badihaki"} target='_blank' className='mx-auto'>
          <button id='gitHub' className='transition-all ease-in-out duration-500 bg-slate-200 hover:bg-slate-950 border-2 border-transparent hover:border-[#FFD700] text-slate-950 hover:text-slate-200 flex flex-row mx-auto rounded-full p-2'>
            <div id='github-icon' className='place-self-start rounded-full p-2 bg-slate-200'>
              <Image src={githubIcon} alt='Github'/>
            </div>
            <div className='place-self-center mx-2 font-semibold'>Github</div>
          </button>
        </Link>

        <Link href={"https://badihaki.itch.io/"} target='_blank' className='mx-auto'>
          <button id='itch' className='transition-all ease-in-out duration-500 bg-slate-200 hover:bg-slate-950 border-2 border-transparent hover:border-[#FFD700] text-slate-950 hover:text-slate-200 flex flex-row mx-auto rounded-full p-2'>
            <div id='itch-icon' className='place-self-start rounded-full p-2 bg-slate-200'>
              <Image src={itchIcon} alt='Github' width={100}/>
            </div>
          </button>
        </Link>

        <Link href={"https://bsky.app/profile/badi-haki.com"} target='_blank' className='mx-auto'>
          <button id='bluesky' className='transition-all ease-in-out duration-500 bg-slate-200 hover:bg-slate-950 border-2 border-transparent hover:border-[#FFD700] text-slate-950 hover:text-slate-200 flex flex-row mx-auto rounded-full p-2'>
            <div id='bsky-icon' className='place-self-start rounded-full p-2 bg-slate-200'>
              <Image src={bSkyIcon} alt='Bluesky' width={50}/>
            </div>
            <div className='place-self-center mx-2 font-semibold'>Bluesky</div>
          </button>
        </Link>

      </section>

    </main>
  )
}

export default Contact