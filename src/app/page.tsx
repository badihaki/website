"use client"

import Art from "@/lib/Components/Home/Art";
import Contact from "@/lib/Components/Home/Contact";
import GameDev from "@/lib/Components/Home/GameDev";
import Landing from "@/lib/Components/Home/Landing";
import WebDev from "@/lib/Components/Home/WebDev";
import { Tabs } from "@mantine/core";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string|null>("home");

  return (
    <div className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <main className="relative flex flex-col min-h-screen top-10 max-w-[65%] min-w-[65%] text-center">
      <Tabs value={activeTab} onChange={setActiveTab} color="#FFD700" variant="pills" radius="lg" className="text-center items-center justify-center">
        <Tabs.List>
            <Tabs.Tab value="home" className="transition-all duration-500 ease-in-out tracking-tighter hover:bg-[#FFD700] hover:text-[#060202] hover:mr-4 hover:font-semibold hover:tracking-widest">Home</Tabs.Tab>
            <Tabs.Tab value="webdev"
            className="transition-all duration-500 ease-in-out tracking-tighter hover:bg-[#FFD700] hover:text-[#060202] hover:mx-4 hover:font-semibold hover:tracking-widest">WebDev</Tabs.Tab>
            <Tabs.Tab value="gamedev"
            className="transition-all duration-500 ease-in-out tracking-tighter hover:bg-[#FFD700] hover:text-[#060202] hover:mx-4 hover:font-semibold hover:tracking-widest">Gamedev</Tabs.Tab>
            <Tabs.Tab value="art"
            className="transition-all duration-500 ease-in-out tracking-tighter hover:bg-[#FFD700] hover:text-[#060202] hover:mx-4 hover:font-semibold hover:tracking-widest">Art</Tabs.Tab>
            <Tabs.Tab value="contact"
            className="transition-all duration-500 ease-in-out tracking-tighter hover:bg-[#FFD700] hover:text-[#060202] hover:ml-4 hover:font-semibold hover:tracking-widest">Contact Me</Tabs.Tab>
        </Tabs.List>
          <Tabs.Panel value="home">
            <Landing />
          </Tabs.Panel>
          <Tabs.Panel value="webdev">
            <WebDev />
          </Tabs.Panel>
          <Tabs.Panel value="gamedev">
            <GameDev />
          </Tabs.Panel>
          <Tabs.Panel value="art">
            <Art />
          </Tabs.Panel>
          <Tabs.Panel value="contact">
            <Contact />
          </Tabs.Panel>
      </Tabs>
      </main>
    </div>
  );
}
