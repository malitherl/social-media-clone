import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';

import {postAdded} from './postSlice';

export default function PostCreator() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    function handleTitleChange(event) {
        setTitle(event.target.value)
    }

    function handleContentChange(event){
        setContent(event.target.value)
    }

    function handleSavePost() {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )
        }
    }


    return (

        <section aria-label='Create Post'>
            <h3>Create Post</h3>
                <label aria-label='postName'>Title:</label>
                <input id="postName" type="text" placeholder='Add Title' value={title} onChange={handleTitleChange} ></input>
                <label aria-label='postContent'>Content:</label>
                <input id="postContent" type="text" placeholder='Add Content...' value={content} onChange={handleContentChange}></input>
                <button type='button' onClick={handleSavePost}>Post</button>
        </section>


    )

}