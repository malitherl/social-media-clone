import { useState } from "react";
import { Link } from "react-router-dom";
import LogIn from './LogIn';
import SignUp from './SignUp';
import UserProfile from './UserProfile';

function Home(props) {

    const isLoggedIn = props.loggedIn;
    
    const [loginModal, displayLoginModal] = useState(false);
    const [signUpModal, displaySignModal] = useState(false);


    return (
        <div>
            <nav>
                <Link to="/">#</Link>
                {!isLoggedIn 
                    ? 
                        <div> <LogIn/> <SignUp/> </div>
                    :
                        <UserProfile/>

                }
            </nav>

        </div>
    );
}

export default Home;