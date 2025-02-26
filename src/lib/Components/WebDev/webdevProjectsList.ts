import { iProject } from "./iProject";

export const webdevProjects:iProject[] = [
    {
        Id:0,
        title:"Study Chatroom",
        information:{
            summary:"An app connecting users to each other in chatrooms to discuss study topics and material.",
            bulletPoints:[
                "I created a wireframe in Figma to fully design the user experience before moving to code.",
                "I created the front-end UI using Angular and SASS. Using SASS, reusable components and modern client APIs I made the UI fully responsive for all screen sizes, including customm animations.",
                "I built the backend using Node, ExpressJS and Socket.io. Implementing websockets allowed clients to maintain an open connection, allowing messages to be sent/recieved dynamically and all data be synced between the server and all clients.",
                "I authored an authentication/authorization system using argon2 and JSON Web Tokens. Clients would store a auth credentials in a web token in session storage, which would be requested whenever the server needed to authorize a request. The argon2 libraries were used to hash/salt sensitive information before storing in the JWT private claims."
            ],
        },
        links:{
            gitHub:"https://github.com/badihaki/study-chat/tree/main",
            webDeploy:null,
            youtube:null,
        }
    },
    {
        Id:1,
        title:"Study Card App",
        information:{
            summary:"I created the UI, data structures, authentication/authorization for a study card app.",
            bulletPoints:null,
        },
        links:{
            gitHub:null,
            webDeploy:null,
            youtube:null,
        }
    },
    {
        Id:2,
        title:"Commissioned To Serve",
        information:{
            summary:"I created the official website for the health and wellness company Commissioned to Serve.",
            bulletPoints:null,
        },
        links:{
            gitHub:null,
            webDeploy:"https://www.commissioned2serve.com/",
            youtube:null,
        }
    },
];