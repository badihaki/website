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
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List className="fixed top-6 text-center items-center justify-center mx-auto">
              <Tabs.Tab value="home">Home</Tabs.Tab>
              <Tabs.Tab value="webdev">WebDev</Tabs.Tab>
              <Tabs.Tab value="gamedev">Gamedev</Tabs.Tab>
              <Tabs.Tab value="art">Art</Tabs.Tab>
              <Tabs.Tab value="contact">Contact Me</Tabs.Tab>
          </Tabs.List>
          <main className="relative flex flex-col gap-8 row-start-2 items-center min-h-screen top-10">
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
          </main>
        </Tabs>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a> */}
      </footer>
    </div>
  );
}
