import { StaticImageData } from "next/image"

interface gameLink{
    title:string,
    href:string,
}

export interface iGame{
    id:number,
    title:string,
    information:{
        description:string[],
        year:number|null
    }
    links:gameLink[]|null,
    images:StaticImageData[]|null
}