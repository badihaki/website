export interface iProject{
    Id:number,
    title:string,
    information:{
        summary:string|null,
        bulletPoints:{
            point1:string|null,
            point2:string|null,
            point3:string|null,
        }|null
    },
    links:{
        gitHub:string|null,
        webDeploy:string|null,
        youtube:string|null,
    }
}