import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import avatar from '../assets/avatar.png';
import { IoNotificationsSharp } from 'react-icons/io5';
import { FiMessageSquare, FiShoppingCart } from 'react-icons/fi';
import { FaUserSecret } from 'react-icons/fa6';
import { RxDashboard } from 'react-icons/rx';
import { IoLogoLaravel } from 'react-icons/io5';
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const {user , isAuthenticated} = useAuth0()
  
  return (
    <div className="bg-[#2d00f7] flex flex-col h-screen  min-w-[20vw]  text-white pt-[4rem]">
     
      <div className="flex flex-col py-6 items-center justify-between p-2 ">
      
        <div className="flex flex-col drop-shadow-lg py-2 items-center text-center w-full rounded-md">
          <Link
            to="/"
            className="cursor-pointer w-full flex justify-start pl-10 items-center gap-4 p-4 rounded-md hover:bg-white  hover:bg-opacity-90 hover:text-[#6a00f4]"
          >
            <RxDashboard className="text-lg" />
            Home
          </Link>
          <Link
            to="/clients"
            className="cursor-pointer w-full flex justify-start pl-10 items-center gap-4 p-4 rounded-md hover:bg-white hover:bg-opacity-90 hover:text-[#6a00f4]"
          >
            <FaUserSecret className="text-lg" />
            Clients
          </Link>
          <Link
            to="/orders"
            className="cursor-pointer w-full flex justify-start pl-10 items-center gap-4 p-4 rounded-md hover:bg-white  hover:bg-opacity-90 hover:text-[#6a00f4]"
          >
            <FiShoppingCart className="text-lg" />
            Orders
          </Link>
          <Link
            to="/messages"
            className="cursor-pointer w-full flex justify-start pl-10 items-center gap-4 p-4 rounded-md hover:bg-white  hover:bg-opacity-90 hover:text-[#6a00f4]"
          >
            <FiMessageSquare className="text-lg" />
            Messages
          </Link>
          <Link
            to="/products"
            className="cursor-pointer w-full flex justify-start pl-10 items-center gap-4 p-4 rounded-md hover:bg-white  hover:bg-opacity-90 hover:text-[#6a00f4]"
          >
            <IoLogoLaravel className="text-lg" />
            Products
          </Link>
          <Link
            to="/notifications"
            className="cursor-pointer w-full flex justify-start pl-10 items-center gap-4 p-4 rounded-md hover:bg-white  hover:bg-opacity-90 hover:text-[#6a00f4]"
          >
            <IoNotificationsSharp className="text-lg" />
            Notifications
          </Link>
        </div>

 
          { isAuthenticated &&
             (
               <>
                  <div className="flex cursor-pointer hover:bg-white hover:text-[#6a00f4] my-2 flex-col drop-shadow-lg items-start justify-center bg-[#8e8aba2c] w-full p-6 mx-2 rounded-md">
                    <div>
                          <div className="flex my-2 w-full justify-between items-center">
                                  <img className="rounded-full w-12 h-12" src={avatar} alt="logo" />
                                  <div className="rounded-full hover:bg-white hover:text-[#6a00f4] text-lg p-1">
                                    <FaArrowRight />
                                  </div>
                            </div>

                            <div className='flex flex-col '>
                                  <span className="text-sm">{user.name}</span>
                                  <span className="text-xs">{user.email}</span>
                              </div>
                          
                        
                        </div>
                  </div>
              </>
            ) 
            }
        
      </div>
    </div>
  );
}

export default NavBar;
