import React from "react";
import CodePost from "./code-sub-components/CodePost";

function Code(){
    const posts = [
        {
            id:0,
            title:"Tabletop Game Group Manager",
            description:"A webapp designed to create, help manager, and communicate with the members of friends groups for tabletop games. Built with a React front-end and Rails backend.",
            link:"https://github.com/badihaki/phase-5-project-tabletop-manager"
        },
        {
            id:1,
            title:"Game Reviews Aggregate",
            description:"An aggregator for game reviews. Uses React, the server is ran with Rails. Users can sign up, create new game pages and publish and edit reviews for said games.",
            link:"https://github.com/badihaki/phase-4-project"
        },
        {
            id:2,
            title:"Baking With Internet People",
            description:"** Work in progress ** A baking-centered social media webapp built with React and Rails. Planned to be able to have users sign up and make photo and text posts centered around baking for beginners.",
            link:"https://github.com/badihaki/bake-web"
        },
    ]

    return(
        <div id="code">
            <h1>
                Code
            </h1>
            <p className="intro">
                Building digital worlds and experiences
            </p>
            <p className="panel">
                My first experience with coding was with the <span className="text-highlight"> Microsoft XNA framework in 2007</span>, giving me a strong foundation of C#. 
                Since then, I've gained experience with programming languages and technology such as <span className="text-highlight"> C++, JavaScript, HTML, SQL, 
                Unity3D, Unreal, React and Rails</span>.
            </p>
            <p className="panel">
                You could say I'm incredibly passionate about learning and utilizing new tech.
            </p>
            <p className="panel">
                Here, you will find a list of projects, all publicly host on Github. Feel free to look through the projects and 
                browse the repositories to your heart's content. My full GitHub is linked in the top-right.
            </p>
            <ul>
                { posts.map( post => <CodePost post={post} key={post.id} /> ) }
            </ul>
        </div>
    )
}

export default Code;