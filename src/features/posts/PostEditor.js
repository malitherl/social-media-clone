import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postUpdated } from "./postSlice";
import { useState } from "react";
import { createBrowserHistory } from "history";

export default function PostEditor({match}) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const postId = match.params;
    const dispatch = useDispatch();
    const history = createBrowserHistory();

    const post = useSelector(state => (state.find(posts=> posts.id === postId)))

    function handleTitleChange(event) {
        setTitle(event.target.value);
    } 
    function handleContentChange(event) {
        setContent(event.target.value)
    }

    function handleSavePost() {
       if (title && content) {
            dispatch(postUpdated({
                id: nanoid, 
                title, 
                content
            }))
            history.push(`/posts/${postId}`)
       }
    }    



    return (
        <section aria-label="Edit Post">
              <h3>Edit Post</h3>
                <label aria-label='postName'>Title:</label>
                <input id="postName" type="text" placeholder='Add Title' value={title} onChange={handleTitleChange} ></input>
                <label aria-label='postContent'>Content:</label>
                <input id="postContent" type="text" placeholder='Add Content...' value={content} onChange={handleContentChange}></input>
                <button type='button' onClick={handleSavePost}>Post</button>
        </section>

    )

}