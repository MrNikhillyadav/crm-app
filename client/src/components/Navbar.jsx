import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import avatar from '../assets/avatar.png';
import { IoNotificationsSharp } from 'react-icons/io5';
import { FiMessageSquare, FiShoppingCart } from 'react-icons/fi';
import { FaUserSecret } from 'react-icons/fa6';
import { RxDashboard } from 'react-icons/rx';
import { IoLogoLaravel } from 'react-icons/io5';

function NavBar() {
  return (
    <div className="bg-[#231f4e] flex flex-col h-screen  min-w-[20vw]  text-white pt-[4rem]">
     
      <div className="flex flex-col py-6 items-center justify-between p-2 ">
      
        <div className="flex flex-col drop-shadow-lg py-2 items-center text-center w-full rounded-md">
          <Link
            to="/"
            className="cursor-pointer w-full flex justify-start pl-10 items-center gap-4 p-4 rounded-md hover:bg-white hover:bg-opacity-20"
          >
            <RxDashboard className="text-lg" />
            Home
          </Link>
          <Link
            to="/clients"
            className="cursor-pointer w-full flex justify-start pl-10 items-center gap-4 p-4 rounded-md hover:bg-white hover:bg-opacity-20"
          >
            <FaUserSecret className="text-lg" />
            Clients
          </Link>
          <Link
            to="/orders"
            className="cursor-pointer w-full flex justify-start pl-10 items-center gap-4 p-4 rounded-md hover:bg-white hover:bg-opacity-20"
          >
            <FiShoppingCart className="text-lg" />
            Orders
          </Link>
          <Link
            to="/messages"
            className="cursor-pointer w-full flex justify-start pl-10 items-center gap-4 p-4 rounded-md hover:bg-white hover:bg-opacity-20"
          >
            <FiMessageSquare className="text-lg" />
            Messages
          </Link>
          <Link
            to="/products"
            className="cursor-pointer w-full flex justify-start pl-10 items-center gap-4 p-4 rounded-md hover:bg-white hover:bg-opacity-20"
          >
            <IoLogoLaravel className="text-lg" />
            Products
          </Link>
          <Link
            to="/notifications"
            className="cursor-pointer w-full flex justify-start pl-10 items-center gap-4 p-4 rounded-md hover:bg-white hover:bg-opacity-20"
          >
            <IoNotificationsSharp className="text-lg" />
            Notifications
          </Link>
        </div>

       
        <div className="flex cursor-pointer my-2 flex-col drop-shadow-lg items-start justify-center bg-[#8e8aba2c] w-full p-6 rounded-md">
          <div className="flex my-2 w-full justify-between items-center">
            <img className="rounded-full w-12 h-12" src={avatar} alt="logo" />
            <div className="rounded-full hover:bg-white hover:bg-opacity-20 text-lg p-1">
              <FaArrowRight />
            </div>
          </div>

          <div>Name</div>
          <div className="text-xs">facts.foundr@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
