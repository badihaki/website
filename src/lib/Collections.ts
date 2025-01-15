//#region Global Imports
import { StaticImageData } from "next/image"
//#endregion

//#region Images
// color images
import aetherPunk from "@/lib/Images/Art/aetherpunk-cowboy-02.jpg"
import foxLady from "@/lib/Images/Art/fox warrior lady.jpg"
import mace from "@/lib/Images/Art/macewinduu.jpg"
import crazyPain from "@/lib/Images/Art/pain.jpg"
import soma from "@/lib/Images/Art/soma-cruz-portfolio.jpg"
// bw images
import dream from "@/lib/Images/Art/dream-morpheus.jpg"
import batman from "@/lib/Images/Art/bw/batman-bust-sketch.jpg"
import lady from "@/lib/Images/Art/bw/female-portrait-001.jpg"
import staticShock from "@/lib/Images/Art/bw/static-pencils.jpg"
import swordsWoman from "@/lib/Images/Art/bw/swordewoman.jpg"

export const images:{
    id: number;
    alt: string;
    image: StaticImageData;
  }[] = [
    {
      id:0,
      alt:"An Aether Punk cowboy, rendered in a pseudo-anime-style.",
      image:aetherPunk
    },
    {
      id:1,
      alt:"A warrior fox lady who is riding a giant, purple cat.",
      image:foxLady
    },
    {
      id:2,
      alt:"Fan-art of a bust of Mace Windu from Star Wars after he (hypothetically) survived Order 66 and escaped into exile.",
      image:mace
    },
    {
      id:3,
      alt:"A super-stylized, comic-style character, hunched and emaciated, crying and screaming in pain.",
      image:crazyPain
    },
    {
      id:4,
      alt:"Fan-art of Soma Cruz from the famous Castlevania series of games.",
      image:soma
    },
    {
      id:5,
      alt:"Fan-art of Dream, also known as Morpheus, from The Sandman comics.",
      image:dream
    },
    {
      id:6,
      alt:"Fan-art of Batman.",
      image:batman
    },
    {
      id:7,
      alt:"A sketch of a woman lady.",
      image:lady
    },
    {
      id:8,
      alt:"Fan-art of Static from Static Shock.",
      image:staticShock
    },
    {
      id:9,
      alt:"A swords-woman, posing and walking forward ready to fight.",
      image:swordsWoman
    },
  ]
  //#endregion

  //#region  Web Projects
  export const webdevProjects:{
    id:number,
    title:string,
    description:string,
    links:{
        project:string,
        demo:string|null,
        deployment:string|null
    },
    techStack: string[]
  }[] = [
    {
        id:0,
        title:"Software Engineer Study Guide",
        description:"This is an app software engineers can use as a study guide. The app presents itself as a repository of interview questions in the form of study cards that users can dynamically add to. Users can also sort questions based on tags in order to better cater to their studying needs.",
        links:{
            project:"https://github.com/badihaki/studyapp",
            demo:null,
            deployment:null
        },
        techStack: [
            "NextJS", "MongoDB", "Tailwind CSS"
        ]
    },
    {
        id:1,
        title:"Software Engineer Study Guide",
        description:"This is an app software engineers can use as a study guide. The app presents itself as a repository of interview questions in the form of study cards that users can dynamically add to. Users can also sort questions based on tags in order to better cater to their studying needs.",
        links:{
            project:"https://github.com/badihaki/studyapp",
            demo:null,
            deployment:null
        },
        techStack: [
            "NextJS", "MongoDB", "Tailwind CSS"
        ]
    },
  ];
//#endregion

  // end