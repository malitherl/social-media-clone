import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogIn from './LogIn';
import SignUp from './SignUp';
import UserProfile from './UserProfile';
import Posts from "../features/posts/Posts";
import PostCreator from "../features/posts/PostCreator";
import FindPost from '../features/posts/FindPost';

function Home(props) {

    const isLoggedIn = props.loggedIn;
    
    const [loginModal, displayLoginModal] = useState(false);
    const [signUpModal, displaySignModal] = useState(false);


    return (
        <div>
            <nav>
                <Link to="/">#</Link>
                <input type="text" placeholder="Find more breads"></input>
                {!isLoggedIn 
                    ? 
                         <LogIn/> 
                    :
                        <UserProfile/>
                }
            </nav>
            
        </div>
    );
}

export default Home;