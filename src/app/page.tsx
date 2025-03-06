import Image from "next/image";
import Link from "next/link";
import profile from "@/lib/Images/Profiles/profile-sml.png"

export default function Home() {
  return (
    <main id="home" className="flex flex-col relative top-16 text-center p-2">

      <div id="home-intro-container" className="flex flex-col gap-0">
        <div id="home-intro" className="relative w-fit mx-auto p-4 text-2xl font-semibold rounded-3xl text-slate-400">
          Official Website of
        </div>
        <div id="home-intro-name" className="relative bottom-11 w-fit mx-auto p-4 text-4xl font-semibold rounded-3xl text-slate-200">
          Badi-Haki Martin
        </div>
      </div>

      <div id="home-info-container" className="flex flex-col gap-4 sm:gap-x-10 -mt-6 px-4 pt-2 pb-4 rounded-lg md:max-w-[70%] place-self-center">
        <section id="welcome" className="transition-all ease-in-out duration-300 flex flex-col sm:flex-row gap-6">
          <Image src={profile} alt="profile-picture of the man, himself, B. Haki Martin, smiling and welcoming" className="rounded-full sm:rounded-3xl w-[75%] sm:w-[35%] mx-auto my-auto" />

          <p id="home-info" className="flex-1 outline outline-2 outline-slate-400 py-4 px-1 md:py-8 md:px-4 rounded-xl mt-2 indent-3 md:max-w-[65%]">
            <span className="font-semibold font-serif text-6xl border-b-2 border-[#FFD700] rounded-2xl relative right-1 bottom-2">W</span>
            elcome to my personal website. My name is Badi-Haki Martin, but please call me Haki. I am a multidisciplinary talent, working in tech as a full-stack software developer and in the entertainment field as an illustrator and designer. My passion and skills come together with my biggest pursuit towards the games industry. This website serves as a showcase to my work.
          </p>
        </section>


        <p id="home-webdev" className="flex-1 outline outline-2 outline-slate-400 py-4 px-1 rounded-xl mt-2">
          I&apos;ve been working as a full-stack web developer for a little over 3 years now. You can check out my <Link href={"/webdev"} className="transition-all duration-300 ease-in-out text-slate-400 hover:text-slate-200 no-underline hover:underline text-base hover:text-lg">Web Development</Link> work to see a small sampling of live projects, work-related projects, and smaller work from my time at <Link href={"https://flatironschool.com/"} target="_blank" className="transition-all duration-300 ease-in-out text-slate-400 hover:text-slate-200 no-underline hover:underline text-base hover:text-lg">Flatiron School</Link>.
        </p>
        <p id="home-gamedev" className="flex-1 outline outline-2 outline-slate-400 py-4 px-1 rounded-xl mt-2">
          I have experience as a hobbyist game developer, working on projects using a variety of engines, frameworks programming languages and tools. You could say, my adventure in software development as a whole started with my interest in game dev. While I&apos;ve been at it for over 15 years, my <Link href={"/gamedev"} className="transition-all duration-300 ease-in-out text-slate-400 hover:text-slate-200 no-underline hover:underline text-base hover:text-lg">Games Showcase</Link> will have information on my more recent projects.
        </p>
        <p id="home-art" className="flex-1 outline outline-2 outline-slate-400 py-4 px-1 rounded-xl mt-2">
          And finally, my passion, my soul, my <Link href={"/art"} className="transition-all duration-300 ease-in-out text-slate-400 hover:text-slate-200 no-underline hover:underline text-base hover:text-lg">Artwork</Link>. I largely attribute this to where it all began, and would love to guide you through the journey and offer a small sampling of illustrations and concept art that I&apos;ve created over the years.
        </p>
      </div>

    </main>
  );
}
