"use client"

import React, { MouseEventHandler, useState } from 'react'
import { games } from './Games';
import ProjectPanelComponent from './ProjectPanelComponent';

function PanelsContainer() {
  const [activePanel, setActivePanel] = useState<number | null>(null);

  const handleClickOnPanel = (panelId: number | null) => {
    setActivePanel(panelId);
  }

  const gamesList = games.map(game => <ProjectPanelComponent key={game.id} game={game} currentOpen={activePanel} handlePanelClicked={handleClickOnPanel} />)


  return (
    <div id='games-list' className='transition-all duration-300 ease-in-out border-r-4 border-b-8 border-[#FFD700] rounded-full mx-auto w-full md:w-[50%] mb-10 mt-6 py-4 grid grid-cols-1 gap-y-4'>
      {gamesList}
    </div>
  )
}

export default PanelsContainer