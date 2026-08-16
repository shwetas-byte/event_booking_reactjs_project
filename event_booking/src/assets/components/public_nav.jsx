import { Link, NavLink } from 'react-router-dom'
import myImg from '../image/evora.png'
export default function Public_nav(){
    return(
        <>
            <nav className='z-50 bg-transparent h-19 fixed flex justify-between items-center w-full  px-8 bg-[#0F0C14] backdrop-blur-md border-b border-white/10'>
                <img className='w-[150px]' src={myImg} alt="" />
                <ul className='flex gap-10 text-white'>

                    <li><NavLink className={({isActive})=>isActive ? "text-pink-400 border-b-2 border-pink-400 text-lg pb-1":'text-white hover:text-pink-300'} to={'/'}>Home</NavLink> </li>

                    <li><NavLink className={({isActive})=>isActive ? "text-pink-400 border-b-2 border-pink-400 text-lg pb-1":'text-white hover:text-pink-300'} to={'/explore'}>Explore Events</NavLink></li>
                    
                    <li><NavLink className={({isActive})=>isActive ? "text-pink-400 border-b-2 border-pink-400 text-lg pb-1":'text-white hover:text-pink-300'} to={'/about'}>About</NavLink></li>
                    
                    <li><NavLink className={({isActive})=>isActive ? "text-pink-400 border-b-2 border-pink-400 text-lg pb-1":'text-white hover:text-pink-300'} to={'/contact'}>Contact</NavLink></li>
                </ul>
                <div className='flex items-center gap-[20px] text-white'>

                    <NavLink to={'/login'}>Login</NavLink>

                    <NavLink className={'px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8E2EA0] via-[#C53A87] to-[#F75270] text-white text-sm font-semibold transition-all duration-300 hover:opacity-95 hover:shadow-[0_0_20px_rgba(247,82,112,0.4)] active:scale-95 cursor-pointer'} to={'/signup'}>Sign Up</NavLink>

                </div>
            </nav>
        </>
    )
}