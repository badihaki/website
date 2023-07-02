import React from "react";

function BlogPost({ post }){
    return(
        <li className="blog-post">
            <h3>{post.title}</h3>
            <div className="blog-post-date">
                {post.date}
            </div>
            <p className="blog-post-snippet">{post.snippet}</p>
            <a href={post.link} target="_blank" >Check out the full post!</a>
        </li>
    )
}

export default BlogPost;