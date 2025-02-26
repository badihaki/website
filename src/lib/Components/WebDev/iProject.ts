export interface iProject{
    Id:number,
    title:string,
    info:{
        summary:string|null
    },
    links:{
        gitHub:string|null,
        webDeploy:string|null,
    }
}