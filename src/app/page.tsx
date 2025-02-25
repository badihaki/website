import { Span } from "next/dist/trace";

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

      <div id="home-info-container" className="flex flex-col gap-4 -mt-6 px-4 pt-2 pb-4 rounded-lg">
        <p id="home-details-1" className="flex-1 outline outline-2 outline-slate-400 py-4 px-1 rounded-xl mt-2 indent-3 text-base/">
          <span className="font-semibold font-serif text-6xl border-b-2 border-slate-400 rounded-2xl relative right-1 bottom-2">W</span>
          elcome to my personal website. My name is Badi-Haki Martin, but please call me Haki.
        </p>
        <p id="home-details-2" className="flex-1 outline outline-2 outline-slate-400 py-4 px-1 rounded-xl mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p id="home-details-3" className="flex-1 outline outline-2 outline-slate-400 py-4 px-1 rounded-xl mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

    </main>
  );
}
