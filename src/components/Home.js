import { useState } from "react";
import { Link } from "react-router-dom";
import LogIn from './LogIn';
import SignUp from './SignUp';
import UserProfile from './UserProfile';
import MainFeed from "./MainFeed";

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
                        <div> <LogIn/> <SignUp/> </div>
                    :
                        <UserProfile/>
                }
            </nav>
                <MainFeed></MainFeed>
        </div>
    );
}

export default Home;