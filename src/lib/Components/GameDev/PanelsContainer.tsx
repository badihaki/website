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
    <div>
      Games
      <div id='games-list' className='border-t-4 border-b-8 border-[#FFD700] rounded-full mx-auto mb-10 py-10'>
        {gamesList}
      </div>
    </div>
  )
}

export default PanelsContainer