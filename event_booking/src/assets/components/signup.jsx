import sign_up from '../image/sign_up.png'
import myImg from '../image/evora.png'
import { RxPerson } from "react-icons/rx";
import { MdOutlineMail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';



export function Sign_up() {
   let[signdata,setsigndata]= useState({})
   

   function change(e){
    const{name,value}=e.target
        setsigndata({...signdata,[name]:value})


   }
  let navigate= useNavigate()

    function submit(e) {
    e.preventDefault();

    const { name, email, password, confirmPassword } = signdata;

    console.log("data:", signdata);

    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill all fields");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    localStorage.setItem("userdata", JSON.stringify(signdata));

    // console.log("Everything valid");
    // console.log("Navigating...");

    navigate("/book");
}

    return (
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


                {/* RIGHT SIGNUP FORM */}
                <div className="w-[75%] bg-zinc-950 px-10 py-10">

                    {/* LOGO */}
                    <div>
                        <img
                            className="w-[130px] ml-38"
                            src={myImg}
                            alt="Evora"
                        />
                    </div>


                    {/* HEADING */}
                    <div>
                        <h1 className="text-white tracking-wider text-center text-3xl font-serif">
                            Create your account
                        </h1>

                        <p className="text-gray-400 text-center pt-1 text-sm tracking-wide">
                            Start your journey to discover <br />
                            meaningful experiences.
                        </p>
                    </div>


                    {/* FORM */}
                    <form
                        className="mt-3 ml-10"
                        onSubmit={submit}
                    >

                        {/* FULL NAME */}
                        <label
                            className="text-white tracking-wider text-sm font-serif"
                            htmlFor="name"
                        >
                            Full Name
                        </label>

                        <div className="relative">

                            <RxPerson className="text-pink-400 text-lg absolute left-3 top-1/2 -translate-y-1/2" />

                            <input
                                id="name"
                                name="name"
                                className="bg-zinc-900 border rounded-[8px] placeholder:text-gray-400/50 text-white mb-3 border-[#B65C7A] pl-10 mt-1 w-[90%] p-2"
                                type="text"
                                onChange={change}
                                placeholder="Enter your full name"
                            />

                        </div>


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


                        {/* CONFIRM PASSWORD */}
                        <label
                            className="text-white tracking-wider text-sm font-serif"
                            htmlFor="confirmPassword"
                        >
                            Confirm Password
                        </label>

                        <div className="relative">

                            <MdLockOutline className="text-pink-400 text-lg absolute left-3 top-1/2 -translate-y-1/2" />

                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                className="bg-zinc-900 border rounded-[8px] placeholder:text-gray-400/50 text-white mb-3 border-[#B65C7A] pl-10 mt-1 w-[90%] p-2"
                                type="password"
                                onChange={change}
                                placeholder="Confirm your password"
                            />

                        </div>


                        {/* SIGN UP BUTTON */}
                        <div className="flex items-center justify-center gap-2 bg-[#8F3F5D] p-2 mt-1 w-[90%] rounded-2xl text-xl text-white/90 border border-[#8F3F5D] hover:bg-[#713149] transition-all duration-300">

                            <button type="submit">
                                Sign Up
                            </button>

                            <FaArrowRight className="mt-1" />

                        </div>


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

                                Continue with Google

                            </button>


                            {/* LOGIN */}
                            <p className="mt-3 text-center text-sm text-zinc-500">

                                Already have an account?{" "}

                                <Link
                                    to="/login"
                                    className="font-medium text-[#B65C7A] hover:text-[#8F3F5D] hover:underline"
                                >
                                    Login
                                </Link>

                            </p>

                        </div>

                    </form>

                </div>

            </div>
        </>
    );
}