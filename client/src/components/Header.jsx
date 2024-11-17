import { FaDashcube } from 'react-icons/fa';
import avatar from '../assets/avatar.png'; 
import { IoSearchOutline } from "react-icons/io5";

import { useAuth0 } from "@auth0/auth0-react";


function Header() {

  const {user,loginWithRedirect,isAuthenticated,logout} = useAuth0()

  return (
    <div className="bg-[#231f4e] text-white flex items-center justify-between px-6 py-4 shadow-md sticky top-0 z-50">
      
      <div className="flex items-center gap-2 text-lg">
        <FaDashcube className="text-3xl" />
        <span>CRM.com</span>
      </div>

      <div className="flex rounded-lg bg-white justify-center items-center flex-grow  mx-8 max-w-2xl">
        <IoSearchOutline className='text-black ml-2' />
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
        />
      </div>


      <div className="flex items-center gap-4">
        {console.log(isAuthenticated)}
        {isAuthenticated ? (
          <div className="flex items-center w-full gap-4">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className='flex flex-col'>
                <span className="text-sm">{user.name}</span>
                <span className="text-xs">{user.email}</span>
            </div>
            <button onClick={(e)=> logout()} className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">Logout</button>
          </div>
        ) : (
          <div className="flex gap-4">
            <button onClick={(e)=> loginWithRedirect()} className="px-4 py-2 bg-blue-500 rounded-md ">
              Login
            </button>

          </div>)
        }
      </div>
    </div>
  );
}

export default Header;
