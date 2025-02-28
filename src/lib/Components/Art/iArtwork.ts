import { StaticImageData } from "next/image"

export interface iArtwork {
    id: number,
    title: string,
    image: StaticImageData | null,
    date: Date | null,
    information: {
        description: string[] | null,
        client: string | null
    }
}