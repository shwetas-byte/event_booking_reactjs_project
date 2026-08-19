import { NavLink } from "react-router-dom";
import myImg from '../image/evora.png'
import { useState } from "react";

export default function Private_nav(){
   let[profileOpen, setProfileOpen]= useState(false)
    return(
        <>
            <nav className='bg-black z-50  h-16 fixed flex justify-between items-center w-full  px-8 bg-[#0F0C14] backdrop-blur-md border-b border-white/10'>
                <img className='w-[150px]' src={myImg} alt="" />
                <ul className='flex gap-10 text-white'>

                    <li><NavLink className={({isActive})=>isActive ? "text-pink-400 border-b-2 border-pink-400 text-lg pb-1":'text-white hover:text-pink-300'} to={'/'}>Home</NavLink> </li>

                    <li><NavLink className={({isActive})=>isActive ? "text-pink-400 border-b-2 border-pink-400 text-lg pb-1":'text-white hover:text-pink-300'} to={'/explore'}>Explore Events</NavLink></li>
                    
                    <li><NavLink className={({isActive})=>isActive ? "text-pink-400 border-b-2 border-pink-400 text-lg pb-1":'text-white hover:text-pink-300'} to={'/book'}>My Bookings</NavLink></li>
                    
                    <li><NavLink className={({isActive})=>isActive ? "text-pink-400 border-b-2 border-pink-400 text-lg pb-1":'text-white hover:text-pink-300'} to={'/wish'}>Wishlist</NavLink></li>
                </ul>

                <div className='flex items-center gap-[25px] pr-12 text-white'>

                    <NavLink to={'/notification'} className={'text-2xl'}>🔔</NavLink>

                    <div className="relative">
  <button
    onClick={() => setProfileOpen(!profileOpen)}
    className="text-2xl text-blue-950"
  >
    👤
  </button>

  {profileOpen && (
    <div className="absolute right-0 top-10 w-44 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">

      <NavLink
        to="/profile"
        onClick={() => setProfileOpen(false)}
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        My Profile
      </NavLink>

      <NavLink
        to="/settings"
        onClick={() => setProfileOpen(false)}
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Settings
      </NavLink>

      <button
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          window.location.href = "/login";
        }}
        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Logout
      </button>

    </div>
  )}
</div>


 
                </div>
            </nav>
        </>
    )
}