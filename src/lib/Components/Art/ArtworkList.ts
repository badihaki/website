import { iArtwork } from "./iArtwork";

import fox from '@/lib/Images/Art/fox warrior lady.jpg';
import cowboy from '@/lib/Images/Art/aetherpunk-cowboy-02.jpg';
import pain from '@/lib/Images/Art/pain.jpg';
import lady from '@/lib/Images/Art/bw/female-portrait-001.jpg';
import swordswoman from '@/lib/Images/Art/bw/swordewoman.jpg';
import batman from '@/lib/Images/Art/bw/batman-bust-sketch.jpg';
import staticShock from '@/lib/Images/Art/bw/static-pencils.jpg';
import windu from '@/lib/Images/Art/macewinduu.jpg';
import somaCruz from '@/lib/Images/Art/soma-cruz-portfolio.jpg';
export const ArtworkList: iArtwork[] = [
    {
        id: 0,
        title: "Fox Warrior Lady",
        image: fox,
        date: null,
        information: {
            description: [
                "A fox warrior riding a purple panther.",
                "I've always loved anthropomorphic animal characters, like Star Fox and Sonic the Hedgehog. This is kind of my homage to characters like that.",
                "Made in Clip Studio Paint",
            ],
            client: "Personal Work",
            altText: "A fox-warrior, hunting atop a purple panther",
        }
    },
    {
        id: 1,
        title: "Aetherpunk Cowboy",
        image: cowboy,
        date: null,
        information: {
            description: [
                "Powered by the souls of his ancestors, the lone Cowboy roams the desert looking for his parents' killer - his older brother!",
                "Character design for a cancelled video game.",
                "Made in Clip Studio Paint",
            ],
            client: "Personal Work",
            altText: null,
        }
    },
    {
        id: 2,
        title: "Hurt/Pain",
        image: pain,
        date: null,
        information: {
            description: [
                "Anger, disgust, sadness, Hurt, Pain...",
                "Even if they are negative emotions, they are still emotions that prove we are human.",
                "There's nobody out there who has never had a bad day.",
                "Made in Photoshop",
            ],
            client: "Personal Work",
            altText: null,
        }
    },
    {
        id: 3,
        title: "Portrait of a Lady",
        image: lady,
        date: null,
        information: {
            description: [
                "Morning practice using my new WACOM tablet, using my neighbor as a model.",
                "Made in Photoshop",
            ],
            client: "Personal Work",
            altText: null,
        }
    },
    {
        id: 4,
        title: "The Swordswoman at the Ready",
        image: swordswoman,
        date: null,
        information: {
            description: [
                "A fantasy swordsmaster, a woman as deadly as she is beautiful.",
                "Character design for a cancelled video game.",
                "Made in Clip Studio Paint",
            ],
            client: "Personal Work",
            altText: null,
        }
    },
    {
        id: 5,
        title: "Batman Portrait",
        image: batman,
        date: null,
        information: {
            description: [
                "Morning practice, trying to redesign Batman's cowl.",
                "Made in Clip Studio Paint",
            ],
            client: "Personal Work",
            altText: null,
        }
    },
    {
        id: 6,
        title: "Static Shock Sketch",
        image: staticShock,
        date: null,
        information: {
            description: [
                "Morning practice, trying to redesign the classic Dwayne McDuffie character, Static from Static Shock.",
                "Created for the now defunct Project: Rooftop website and comic art collective.",
                "Made in Clip Studio Paint",
            ],
            client: "Project: Rooftop",
            altText: null,
        }
    },
    {
        id: 7,
        title: "Mace Windu",
        image: windu,
        date: null,
        information: {
            description: [
                "Morning practice, Star Wars fanart of Mace Windu.",
                "We all know he survived Order 66, Mr. Jackson. The real question is, what does he look like?",
            ],
            client: "Personal Work",
            altText: null,
        }
    },
    {
        id: 8,
        title: "Soma Cruz",
        image: somaCruz,
        date: null,
        information: {
            description: [
                "Fanart for the Castlevania series, featuring Soma Cruz, one of the protagonists from the games.",
            ],
            client: "Personal Work",
            altText: null,
        }
    },
];

export const fanartList: iArtwork[] = [
]