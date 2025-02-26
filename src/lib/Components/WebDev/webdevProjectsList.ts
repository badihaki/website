import { iProject } from "./iProject";

export const webdevProjects: iProject[] = [
    {
        Id: 0,
        title: "Commissioned To Serve",
        information: {
            summary: "I created the official website for Commissioned to Serve, a company that serves health and wellness services and products. * Because of the nature of this project, there is no Github link *",
            bulletPoints: [
                "I created the front-end UI using NextJS 15, ReactJS 19 and TailwindCSS 4.",
                "I worked with the client to create a user-friendly layout and color scheme, prototyping the user experience in Figma.",
                "I created a custom component library to responsively handle content and animation.",
                "I set up the DNS using Squarespace and deployed the website to the web using Vercel"
            ],
        },
        links: {
            gitHub: null,
            webDeploy: "https://www.commissioned2serve.com/",
            youtube: null,
        }
    },
    {
        Id: 1,
        title: "Study Card App",
        information: {
            summary: "A full CRUD web app that serves as a universal web-development study resource. It stores and renders user-submitted interview questions and answers as  custom-built, highly responsive animated cards.",
            bulletPoints: [
                "I created the app using NextJS 14 for the full-stack features, TailwindCSS 3 and MongoDB for the project database.",
                "I designed all of the front-end UI, user and question-related data structures, authentication/authorization for a study card app.",
                "I created a custom component library and CSS functions to handle animating the cards. I implemented features from the Material CSS library to handle content drawers.",
                "I built a state-controlled form using React's useState() hook to handle user input and user-submitted questions.",
            ],
        },
        links: {
            gitHub: "https://github.com/badihaki/studyapp",
            webDeploy: null,
            youtube: null,
        }
    },
    {
        Id: 2,
        title: "Study Chatroom",
        information: {
            summary: "An app connecting users to each other in chatrooms to discuss study topics and material.",
            bulletPoints: [
                "I worked closely with the client to create a wireframe in Figma to fully design the user experience before moving to code.",
                "I made the front-end UI using Angular and SASS. Using SASS, reusable components and modern client APIs I made the UI fully responsive for all screen sizes, including customm animations.",
                "I built the backend using Node, ExpressJS and Socket.io. Implementing websockets allowed clients to maintain an open connection, allowing messages to be sent/recieved dynamically and all data be synced between the server and all clients.",
                "I authored an authentication/authorization system using argon2 and JSON Web Tokens. Clients would store a auth credentials in a web token in session storage, which would be requested whenever the server needed to authorize a request. The argon2 libraries were used to hash/salt sensitive information before storing in the JWT private claims."
            ],
        },
        links: {
            gitHub: "https://github.com/badihaki/study-chat/tree/main",
            webDeploy: null,
            youtube: null,
        }
    },
];