import sign_up from '../image/sign_up.png'
import myImg from '../image/evora.png'
import { FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { data, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";


export function Login(){
    let[logindata,setlogindata]=useState({})
    function change(e){
        const{name,value}=e.target
        setlogindata({...logindata,[name]:value})


    }
    let navigate=useNavigate()
    function submit(e) {
    e.preventDefault();

    console.log("submit function chal raha hai");
    const {email,password}=logindata
    if(!password || !email){
        alert("Please fill all the fields")
        return
    }
    let data=JSON.parse(localStorage.getItem('userdata'))
    console.log("data aa gya");
    if(data.email!=logindata.email || data.password!=logindata.password){
        alert("User not found")
    }
    
    navigate('/book')
    console.log("navigate ho gya");
    
    
}
    return(
        <>
            <div className="grid grid-cols-2 min-h-screen w-full bg-zinc-950 overflow-hidden">
            
                            {/* LEFT IMAGE */}
                            <div className="flex items-center justify-center h-screen">
            
                                <div className="relative w-[65%] h-[500px]">
            
                                    <div className="absolute inset-0 translate-x-3 translate-y-3 border border-[#B65C7A] rounded-[35%_65%_45%_55%/25%_35%_65%_75%]">
                                    </div>
            
                                    <img
                                        src={sign_up}
                                        alt="Evora"
                                        className="w-full h-full object-cover rounded-[35%_65%_45%_55%/25%_35%_65%_75%]"
                                    />
            
                                    <div className="absolute inset-0 bg-black/35 rounded-[35%_65%_45%_55%/25%_35%_65%_75%]">
                                    </div>
            
                                </div>
            
                            </div>

                            <div className="w-[75%] bg-zinc-950 px-10 py-25">
                            
                                                {/* LOGO */}
                                                <div>
                                                    <img
                                                        className="w-[130px] ml-38 mb-4 "
                                                        src={myImg}
                                                        alt="Evora"
                                                    />
                                                </div>
                            
                            
                                                {/* HEADING */}
                                                <div>
                                                    <h1 className="text-white tracking-wider mb-1 text-center text-3xl font-serif">
                                                        Welcome Back
                                                    </h1>
                            
                                                    <p className="text-gray-400 text-center pt-1 text-sm tracking-wide">
                                                        Login to continue your <br />
                                                        experience with Evora.
                                                    </p>

                                                    {/* FORM */}
                    <form onSubmit={submit} className="mt-3 ml-10">

                        

                        {/* EMAIL */}
                        <label
                            className="text-white tracking-wider text-sm font-serif"
                            htmlFor="email"
                        >
                            Email Address
                        </label>

                        <div className="relative">

                            <MdOutlineMail className="text-pink-400 text-lg absolute left-3 top-1/2 -translate-y-1/2" />

                            <input
                                id="email"
                                name="email"
                                className="bg-zinc-900 border rounded-[8px] placeholder:text-gray-400/50 text-white mb-3 border-[#B65C7A] pl-10 mt-1 w-[90%] p-2"
                                type="email"
                                onChange={change}
                                placeholder="Enter your email"
                            />

                        </div>


                        {/* PASSWORD */}
                        <label
                            className="text-white tracking-wider text-sm font-serif"
                            htmlFor="password"
                        >
                            Password
                        </label>

                        <div className="relative">

                            <MdLockOutline className="text-pink-400 text-lg absolute left-3 top-1/2 -translate-y-1/2" />

                            <input
                                id="password"
                                name="password"
                                className="bg-zinc-900 border rounded-[8px] placeholder:text-gray-400/50 text-white mb-3 border-[#B65C7A] pl-10 mt-1 w-[90%] p-2"
                                type="password"
                                onChange={change}
                                placeholder="Create a password"
                            />

                        </div>

                        <p className='text-[#B65C7A] mb-6 pl-70 underline'>Forgot Password?</p>


                        


                        {/* Login BUTTON */}
                        <button type="submit"
                                className="flex items-center justify-center gap-2 bg-[#8F3F5D] p-2 mt-1 w-[90%] rounded-2xl text-xl text-white/90 border border-[#8F3F5D] hover:bg-[#713149] transition-all duration-300"
                            >
                                Login
                                <FaArrowRight className="mt-1" />
                            </button>


                        {/* OR + GOOGLE + LOGIN */}
                        <div className="mt-4 w-[90%]">

                            {/* OR DIVIDER */}
                            <div className="flex items-center gap-3">

                                <div className="h-px flex-1 bg-zinc-700"></div>

                                <span className="text-xs text-zinc-400">
                                    OR
                                </span>

                                <div className="h-px flex-1 bg-zinc-700"></div>

                            </div>


                            {/* GOOGLE BUTTON */}
                            <button
                                type="button"
                                className="mt-3 flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-700 bg-zinc-950 py-2.5 text-sm font-medium text-zinc-700 transition-all duration-300 hover:bg-zinc-100"
                            >

                                <FcGoogle className="text-xl" />

                                Login with Google

                            </button>


                            {/* LOGIN */}
                            <p className="mt-3 text-center text-sm text-zinc-500">

                                Don't have an account?{" "}

                                <Link
                                    to="/signup"
                                    className="font-medium text-[#B65C7A] hover:text-[#8F3F5D] hover:underline"
                                >
                                    Sign Up
                                </Link>

                            </p>

                        </div>

                    </form>
                                                </div>
                            </div>
            </div>
        </>
    )
}