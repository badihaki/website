export interface iProject{
    Id:number,
    title:string,
    information:{
        summary:string|null,
        bulletPoints:string[]|null
    },
    links:{
        gitHub:string|null,
        webDeploy:string|null,
        youtube:string|null,
    }
}