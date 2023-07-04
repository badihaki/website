import React from "react";

function CodePost({ post }){
    return(
        <li>
            <h3>{post.title}</h3>
            <p>
                {post.description}
            </p>
            <a href={post.link} target="_blank">Github Repo</a>
        </li>
    )
}

export default CodePost;