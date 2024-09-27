import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@material-tailwind/react';


function Navbar({ saveCode }) {
    const { loginWithRedirect , isAuthenticated, logout , user } = useAuth0();
    return (
        <div
            className='main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#90dfdb] py-3'>
            <div className="left">
                <div className="logo font-bold text-4xl text-white text-center">
                    <img className=' w-44' src="img/tri.png" alt="" />
                </div>
            </div>
                 {/* Right side with user info and authentication buttons */}
                <div className="right flex items-center space-x-4">
                {/* Show username and picture when authenticated */}
                {isAuthenticated && (
                    <div className="flex items-center space-x-2">
                        <img className='w-11 rounded-full' src={user.picture} alt="User profile" />
                        <p className="text-black font-bold">{user.name}</p>
                    </div>
                )}
                 {/* Save Button */}
               <Button onClick={saveCode} className="bg-green-500">
                Save Code
                </Button>

                {/* Authentication buttons */}
                {isAuthenticated ? (
                    <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                    </Button>
                ) : (
                    <Button onClick={() => loginWithRedirect()}>
                        Log In
                    </Button>
                )}
            </div>
        </div>

    )
}

export default Navbar