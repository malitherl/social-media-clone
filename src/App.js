
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import React, { useState } from "react";
import {db} from './firebase';
import { collection, getDocs} from 'firebase/firestore';
import PostFeed from './features/posts/PostFeed';
import PostEditor from './features/posts/PostEditor';

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
    <div className="App">
      <h1>Breaded</h1>
      <p>Bringing Home the Bread</p>
      <Routes>
        <Route path ="/" element={<Home/> }/>
        <Route exact path="/posts/:postId" element={<FindPost/>}/>
        <Route exact path='/posts/:postId' element={<PostEditor/>}/>
      </Routes>
    </div>
  );
}

export default App;
