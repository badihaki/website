import { iGame } from "./iGame";

export const games: iGame[] = [
    {
        id: 0,
        title: "Tarantula",
        information: {
            description: [
                "A rogue-lite top-down shooter made for MechJam V. I made everything except for the music.",
                "The game is made in Unity and C#, graphics are made with Blender and Clip Studio Paint, and the sound is created with Audacity."
            ],
            year: 2024
        },
        links: [
            {
                title:"Itch.io Page",
                href:"https://badihaki.itch.io/tarantula"
            }
        ],
        images: null
    },
    {
        id: 1,
        title: "OverArmor Rivals",
        information: {
            description: [
                "A 2-player fighting game made for MechJam IV. This project was made in conjunction with a friend, who handled the characters and sound effects. I created the design, did all the coding and engineering, and implemented the art and sound into the game.",
                "This is a multiplayer-only game.",
                "The game is made in Unity and C#. The project took around 6 days."
            ],
            year: 2022
        },
        links: [
            {
                title:"Itch.io Page",
                href:"https://badihaki.itch.io/overarmor-rivals"
            }
        ],
        images: null
    },
    {
        id: 2,
        title: "The Eldritch and the Iron",
        information: {
            description: [
                "This solo-dev project is a side-scrolling shooter where the player takes the role of a mech pilot in a war against eldritch beasts from the beyond.",
                "The game is made in Unity and C#, graphics are made with Photoshop and Clip Studio Paint, and the sound is created with Audacity.",
            ],
            year: 2018
        },
        links: [
            {
                title:"Itch.io Page",
                href:"https://badihaki.itch.io/the-eldritch-and-the-iron"
            }
        ],
        images: null
    },
];