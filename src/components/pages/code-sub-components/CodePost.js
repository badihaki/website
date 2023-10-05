import React from "react";

function CodePost({ post }){
    return(
        <li>
            <h3>{post.title}</h3>
            <p>
                {post.description}
            </p>
            <a href={post.link} target="_blank" rel="noreferrer" >Github Repo</a>
            { post.secondLink? <span><br /><a href={post.secondLink} target="_blank" rel="noreferrer" >Backend Repo</a></span> : '' }
        </li>
    )
}

export default CodePost;