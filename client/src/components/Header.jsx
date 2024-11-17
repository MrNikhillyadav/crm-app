import { FaDashcube } from 'react-icons/fa';
import avatar from '../assets/avatar.png'; 
import { IoSearchOutline } from "react-icons/io5";


function Header() {
  const isLoggedIn = true;
  const userEmail = "facts.foundr@gmail.com"; 


  return (
    <div className="bg-[#231f4e] text-white flex items-center justify-between px-6 py-4 shadow-md sticky top-0 z-50">
      
      <div className="flex items-center gap-2 text-lg">
        <FaDashcube className="text-3xl" />
        <span>CRM.com</span>
      </div>

      <div className="flex rounded-sm bg-white justify-center items-center flex-grow mx-10 max-w-3xl">
        <IoSearchOutline className='text-black ml-2' />
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
        />
      </div>


      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <div className="flex items-center gap-3">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span>{userEmail}</span>
          </div>
        ) : (
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
