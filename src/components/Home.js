import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogIn from './LogIn';
import SignUp from './SignUp';
import UserProfile from './UserProfile';
import PostFeed from "../features/posts/PostFeed";
import PostCreator from "../features/posts/PostCreator";

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
            <PostFeed/>
            <PostCreator/>

        </div>
    );
}

export default Home;