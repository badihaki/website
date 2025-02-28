import { StaticImageData } from "next/image"

export interface iArtwork {
    id: number,
    title: string,
    image: StaticImageData,
    date: Date | null,
    information: {
        description: string[] | null,
        client: string | null,
        altText: string | null,
    }
}