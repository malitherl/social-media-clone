import { createSlice, original } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, author: "Staff", title: "Welcome!", 
     content: "Here you will find a vast repository of bread related posts, videos, and essays, compiled from everywhere on the internet! If you want to learn how to bake bread, find new recipes, or just to share your enjoyment of bread, then you have come to the right place!"
    }
]

const postSlice = createSlice({
        name: "posts",
        initialState,
        reducers: {
            postAdded(state, action) {
                state.push(action.payload);
            },
            postUpdated(state, action) {
              const {id, title, content, userId} = action.payload;
              const originalPost = state.find(post => post.id === id)
              if(originalPost) {
                  originalPost.id = id;
                  originalPost.title = title;
                  originalPost.content = content;
                  originalPost.author = userId;
              }
            }
        },
    })

export const {postAdded, postUpdated} = postSlice.actions;

export default postSlice.reducer;