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
      <main className="flex flex-col justify-center min-h-screen top-10">
      <Tabs value={activeTab} onChange={setActiveTab} className="text-center items-center justify-center">
        <Tabs.List>
            <Tabs.Tab value="home">Home</Tabs.Tab>
            <Tabs.Tab value="webdev">WebDev</Tabs.Tab>
            <Tabs.Tab value="gamedev">Gamedev</Tabs.Tab>
            <Tabs.Tab value="art">Art</Tabs.Tab>
            <Tabs.Tab value="contact">Contact Me</Tabs.Tab>
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
