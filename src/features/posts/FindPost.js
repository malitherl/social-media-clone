import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function FindPost({match}) {
    const { postId } = match.params;

    const post = useSelector(state=> state.posts.find(post => post.id === postId))


    if(!post) {
        return(
            <section>
                <h3>Post not found!</h3>
            </section>
        )
    }
    return (
        <section>
            <article>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </article>
            <button><Link to={`posts/${postId}`}> Edit Post</Link></button>
        </section>
    )
}

