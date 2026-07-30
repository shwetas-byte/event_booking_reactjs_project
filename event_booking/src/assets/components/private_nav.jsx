import { NavLink } from "react-router-dom";
import myImg from '../image/evora.png'

export default function Private_nav(){
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
                    <NavLink to={'/profile'} className={'text-2xl text-blue-950'}>  👤</NavLink>

                </div>
            </nav>
        </>
    )
}