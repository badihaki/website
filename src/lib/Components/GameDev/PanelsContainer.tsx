"use client"

import React, { MouseEventHandler, useState } from 'react'
import { games } from './Games';
import ProjectPanelComponent from './ProjectPanelComponent';

function PanelsContainer() {
  const [activePanel, setActivePanel] = useState<number | null>(null);

  const handlePanelClicked: MouseEventHandler<HTMLDivElement> = (event: React.MouseEvent<HTMLDivElement>) => {
    const target: HTMLDivElement = event.target as HTMLDivElement;
    console.log(target.id);
    console.log(!isNaN(Number(target.id)));
    if (!isNaN(Number(target.id))) {
      const divId = Number(target.id);
      console.log(`div id is ${divId}`);
      setActivePanel(divId);
    }
    else {
      setActivePanel(null);
    }
    event.stopPropagation();
  }

  const handleClickOnPanel = (panelId:number|null) => {
    setActivePanel(panelId);
  }

  const gamesList = games.map(game => <ProjectPanelComponent key={game.id} game={game} currentOpen={activePanel} handlePanelClicked={handleClickOnPanel} />)


  return (
    <div>
      Games
      {/* <div id='games-list' onClick={handlePanelClicked} className='border-t-4 border-b-8 border-[#FFD700] rounded-full mx-auto mb-10 py-10'>
        {gamesList}
      </div> */}
      <div id='games-list' className='border-t-4 border-b-8 border-[#FFD700] rounded-full mx-auto mb-10 py-10'>
        {gamesList}
      </div>
    </div>
  )
}

export default PanelsContainer