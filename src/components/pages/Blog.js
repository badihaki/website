import React from "react";
import BlogPost from "./blog-sub-components/BlogPost"

function Blog(){
    const blogPosts = [
        {
            id: 0,
            title: "Implementing my own Roles/Permissions System",
            date: "Mar 31 '23",
            snippet: "...web app managing permissions for your user profile. I wanted to author a similar system for my most recent web app...",
            link: "https://medium.com/@jojackblack/implementing-my-own-roles-permissions-system-1a919c0816b3"
        },
        {
            id: 1,
            title: "Rails and model associations…? How do they work?",
            date: "Oct 29 '22",
            snippet: "...I'd like to clear up some of the mystery behind how I used Rails associations to link three different tables with each other...",
            link: "https://medium.com/@jojackblack/rails-and-model-associations-how-do-they-work-83dfa3d605b3"
        }
    ]
    return(
        <div id="blog">
            <h1>Blog</h1>
            <p className="intro">
                Nuts and bolts of how my mind works
            </p>
            <p className="panel">
                A small collection of my writing. Hosted on Medium.
            </p>
            <ul>
                { blogPosts.map(( post )=><BlogPost post={post} key={post.id} />) }
            </ul>
        </div>
    )
}

export default Blog;