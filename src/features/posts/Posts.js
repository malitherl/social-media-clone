import React from 'react'; 

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Posts(){
    const posts = useSelector(state => state.posts)

    const renderPosts = posts.map(post => (
        <article key= {post.id}>
            <h3>{post.title} by {post.author}</h3>
            <p>{post.content}</p>
            <Link to={`/posts/${post.id}`}>View Post</Link>
        </article>
    ))
    return (
        <section aria-label='Post Feed'>
            {renderPosts}
        </section>
    )
}

export default Posts;