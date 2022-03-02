
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import React, { useState } from "react";
import {db} from './firebase';
import { collection, getDocs} from 'firebase/firestore';
import FindPost from './features/posts/FindPost';
import PostFeed from './features/posts/Posts';
import PostEditor from './features/posts/PostEditor';
import Posts from './features/posts/Posts';

function App() {

  async function retrievePosts(){
    const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    }); 
    return querySnapshot;
  }

  //retrievePosts();
  
  const [loggedIn, isLoggedIn] = useState(false);

  return (
      <Routes>
        <Route path ="/" element={<Posts/>}>
          <Route  path="/posts/:postId" element={<FindPost/>}/>
          <Route  path="/posts/:postId/edit" element={<PostEditor/>}/>
        </Route> 
      </Routes>
  );
}

export default App;
