import { Navigate, useParams } from "react-router-dom"
import {Events} from './explore_events'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {FiClock, FiMapPin, FiUsers} from 'react-icons/fi'
import { GiLargeDress } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState } from "react";



export default function View_details(){
    const{id}=useParams()
    const isLoggedIn=localStorage.getItem('isLoggedIn')
    if(!isLoggedIn){
        return <Navigate to='/login' replace />
    }
    const event= Events.find((item) => item.id===Number(id))
    console.log(id);

    let[selectedDate,setSelectedDate]=useState('')
    let [couples,setCouples]=useState(1);
   
    
    return(
        <>
           {/* Hero Section */}
            <section className="relative w-full h-[70vh] overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/45"></div>

                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl mx-auto w-full  pb-12">
                        <p className="text-[#B65C7A]  text-lg font-medium mb-1">
                            {event.category}
                        </p>

                        <h1 className="text-4xl font-serif text-[#FAF8F6] max-w-3xl">
                            {event.title}
                        </h1>

                        <p className="text-zinc-400 mt-2 max-w-2xl">
                            {event.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* horizontal bar */}
            <section className="bg-[#0F0F0F] border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-1">
                    <div className=" grid grid-cols-4">

                        {/* Date */}
                        <div className="flex items-center gap-4 px-6 py-2 border-r border-white/10">

                            <div className="text-[#B65C7A] text-2xl ">
                                <FaRegCalendarAlt/>
                            </div>

                            <div className="">
                                <p className="text-base text-white/40">
                                    Date
                                </p>
                                <p className="text-[#FAF8F6] font-medium mt-1">
                                    {event.date}
                                    {event.month}
                                </p>
                            </div>
                        </div>

                        {/* Time */}
                        <div className="flex items-center gap-4 px-6 py-2 border-r border-white/10">
                            <div className="text-[#B65C7A] text-2xl">
                                <FiClock/>
                            </div>
                            <div className="">
                                <p className="text-base text-white/40">
                                    Time
                                </p>
                                <p className="text-[#FAF8F6] font-medium mt-1">
                                    {event.time}
                                </p>
                            </div>
                        </div>

                        {/* Location */}

                         <div className="flex items-center gap-4 px-6 py-2 border-r border-white/10">
                            <div className="text-[#B65C7A] text-2xl">
                                <FiMapPin />
                            </div>

                            <div>
                                <p className="text-base  text-white/40">
                                    Location
                                </p>
                                <p className="text-[#FAF8F6] font-medium mt-1">
                                    {event.location}
                                </p>
                            </div>
                        </div>

                        {/* Seats */}
                        <div className="flex items-center gap-4 px-6 py-2">
                            <div className="text-[#B65C7A] text-2xl">
                                <FiUsers />
                            </div>

                            <div>
                                <p className="text-base  text-white/40">
                                    Availability
                                </p>
                                <p className="text-[#FAF8F6] font-medium mt-1">
                                    Limited Seats
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="h-full w-full ">
                 <div className="bg-zinc-950 px-29 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">

                    {/* Left section */}
                     
                <div>
                    {/* About */}

                    <div >
                    <h1 className="text-white font-serif text-2xl"> <span class="text-[#E07BA8] text-center">✦</span> About The experience</h1>
                    <p className="pt-3 text-white/50 w-[590px] leading-7 tracking-wide text-sm">{event.about}</p>
                    <div className="border-b-2 border-b-zinc-800/80 mt-4"></div>
                    </div>

                    {/* Event Schedule */}

                    <div className="mt-7">
                    <h1 className="text-white font-serif text-2xl"> <span class="text-[#E07BA8] text-center">✦</span> Event Schedule</h1>

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start"> 
                        {
                            <div className="relative">
                                {event.schedule.map((item, index) => (
                                    <div
                                    key={index}
                                    className="grid grid-cols-[100px_40px_1fr] items-start min-h-[90px]"
                                    >
                                    
                                    {/* Time */}
                                    <div className="text-right pr-5 ">
                                        <span className="text-base text-[#E07BA8]">
                                        {item.time}
                                        </span>
                                    </div>

                                    {/* Dot + Line */}
                                    <div className="relative ml-7  pt-2 flex justify-center h-full">
                                        
                                        {/* Connecting Line */}
                                        {index !== event.schedule.length - 1 && (
                                        <div className="absolute top-3 h-[78px] bottom-[-45px] w-px bg-zinc-300" />
                                        )}

                                        {/* Dot */}
                                        <div className="relative z-10 w-3 h-3 rounded-full bg-[#B65C7A] ring-4 ring-[#F8F2F1]" />
                                    </div>

                                    {/* Title */}
                                    <div className="pl-12 pt-0">
                                        <h3 className="text-base font-medium text-white/70 tracking-wide">
                                        {item.title}
                                        </h3>
                                    </div>

                                    </div>
                                ))}
                            </div>

                        }

                        {/* Image */}

                        <div className="lg:sticky lg:top-24 ">
                            <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-xl" />
                        </div>
                    </div>

                    <div className="border-b-2 border-b-zinc-800/80 mt-4"></div>



                    </div>

                    {/* Dress and Venue */}
                   <div className="flex flex-col md:flex-row mt-8">

                                {/* Dress Code */}
                                <div className="flex-1 md:pr-10">
                                    <h1 className="text-white font-serif text-2xl">
                                        <span className="text-[#E07BA8] mr-2">✦</span>
                                        Dress Code
                                    </h1>

                                    <div className="flex items-center gap-4 mt-6">
                                        
                                        {/* Icon */}
                                        <div className="shrink-0 w-[68px] h-[68px] rounded-full border border-zinc-900/50 bg-zinc-900/50 flex items-center justify-center">
                                            <GiLargeDress className="text-3xl text-[#B65C7A]" />
                                        </div>

                                        {/* Dress Text */}
                                        <div>
                                            <p className="text-base tracking-wide text-white/60">
                                                {event.dressCode}
                                            </p>
                                        </div>

                                    </div>
                                </div>


                                {/* Divider */}
                                <div className="hidden md:block w-px bg-white/10 self-stretch"></div>


                                {/* Venue */}
                                <div className="flex-1 md:pl-10 mt-8 md:mt-0">
                                    <h1 className="text-white font-serif text-2xl">
                                        <span className="text-[#E07BA8] mr-2">✦</span>
                                        Venue
                                    </h1>

                                    <div className="flex items-center gap-4 mt-6">

                                        {/* Icon */}
                                        <div className="shrink-0 w-[68px] h-[68px] rounded-full border border-zinc-900/50 bg-zinc-900/50 flex items-center justify-center">
                                            <HiOutlineLocationMarker className="text-3xl text-[#B65C7A]" />
                                        </div>

                                        {/* Venue Text */}
                                        <div className="max-w-[280px]">
                                            <p className="text-base leading-relaxed tracking-wide text-white/60">
                                                {event.venue}
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </div>

                    <div className="border-b-2 border-b-zinc-800/80 mt-5"></div>


                    {/* Expect */}

                    <div className="mt-8">

                            <h2 className="text-white font-serif text-3xl">
                                <span className="text-[#E07BA8] mr-2">✦</span>
                                What to Expect
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-8">

                                {/* 01 */}
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-9 h-9 rounded-full border border-[#B65C7A]/40 bg-[#B65C7A]/10 flex items-center justify-center">
                                        <span className="text-[#B65C7A] text-xs">01</span>
                                    </div>

                                    <div>
                                        <h3 className="text-white/90 text-base font-medium mb-2">
                                            A Curated Experience
                                        </h3>
                                        <p className="text-sm leading-6 text-white/50">
                                            Enjoy a thoughtfully planned experience with activities and moments designed around the event.
                                        </p>
                                    </div>
                                </div>


                                {/* 02 */}
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-9 h-9 rounded-full border border-[#B65C7A]/40 bg-[#B65C7A]/10 flex items-center justify-center">
                                        <span className="text-[#B65C7A] text-xs">02</span>
                                    </div>

                                    <div>
                                        <h3 className="text-white/90 text-base font-medium mb-2">
                                            Engaging Moments
                                        </h3>
                                        <p className="text-sm leading-6 text-white/50">
                                            Discover engaging activities, experiences, and moments that keep the event interesting from start to finish.
                                        </p>
                                    </div>
                                </div>


                                {/* 03 */}
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-9 h-9 rounded-full border border-[#B65C7A]/40 bg-[#B65C7A]/10 flex items-center justify-center">
                                        <span className="text-[#B65C7A] text-xs">03</span>
                                    </div>

                                    <div>
                                        <h3 className="text-white/90 text-base font-medium mb-2">
                                            Connect & Explore
                                        </h3>
                                        <p className="text-sm leading-6 text-white/50">
                                            Meet new people, explore the surroundings, and enjoy the atmosphere created for a memorable experience.
                                        </p>
                                    </div>
                                </div>


                                {/* 04 */}
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-9 h-9 rounded-full border border-[#B65C7A]/40 bg-[#B65C7A]/10 flex items-center justify-center">
                                        <span className="text-[#B65C7A] text-xs">04</span>
                                    </div>

                                    <div>
                                        <h3 className="text-white/90 text-base font-medium mb-2">
                                            Memorable Takeaway
                                        </h3>
                                        <p className="text-sm leading-6 text-white/50">
                                            Leave with meaningful moments, new experiences, and memories to carry beyond the event.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* RIGHT SIDE - BOOKING CARD */}

<div className="lg:sticky lg:top-24">

    <div
        className="
            bg-zinc-950
            border border-[#B65C7A]/60
            rounded-2xl
            p-6
            shadow-[0_15px_50px_rgba(182,92,122,0.12)]
        "
    >

        {/* Heading */}
        <div className="pb-5 border-b border-white/10">

            <p className="text-[#E07BA8] text-xs uppercase tracking-[0.25em] mb-2">
                Reserve Your Experience
            </p>

            <h2 className="text-white font-serif text-3xl">
                Book Your Spot
            </h2>

        </div>


        {/* Price */}
        <div className="py-5 border-b border-white/10">

            <p className="text-white/40 text-sm">
                Price per couple
            </p>

            <div className="flex items-end gap-2 mt-1">

                <span className="text-white text-3xl font-medium">
                    ₹{event.price.toLocaleString()}
                </span>

                <span className="text-white/40 text-sm mb-1">
                    / couple
                </span>

            </div>

        </div>


        {/* Select Date */}
        {/* Select Date */}

<div className="mt-6">

    <label className="block text-sm text-white/70 mb-3">
        Select Date
    </label>

    <div className="
        bg-zinc-900
        border border-white/10
        rounded-xl
        p-4
    ">

        {/* Month */}
        <h3 className="
            text-center
            text-white
            font-medium
            mb-4
        ">
            September 2026
        </h3>


        {/* Week Days */}
        <div className="grid grid-cols-7 text-center mb-2">

            {["S", "M", "T", "W", "T", "F", "S"].map(
                (day, index) => (
                    <span
                        key={index}
                        className="text-xs text-white/30"
                    >
                        {day}
                    </span>
                )
            )}

        </div>


        {/* Dates */}
        <div className="grid grid-cols-7 gap-y-2 text-center">

            {/* September 1, 2026 = Tuesday */}
            <span></span>
            <span></span>

            {Array.from({ length: 30 }, (_, index) => {
                const date = index + 1;

                return (
                    <button
                        key={date}
                        type="button"
                        onClick={() => setSelectedDate(date)}
                        className={`
                            w-8 h-8
                            mx-auto
                            rounded-full
                            text-sm
                            transition

                            ${
                                selectedDate === date
                                    ? "bg-[#B65C7A] text-white"
                                    : "text-white/60 hover:bg-[#B65C7A]/20 hover:text-[#E07BA8]"
                            }
                        `}
                    >
                        {date}
                    </button>
                );
            })}

        </div>

    </div>


    {selectedDate && (
        <p className="text-xs text-[#E07BA8] mt-3">
            Selected: {selectedDate} September 2026
        </p>
    )}

</div>


        {/* Number of Couples */}
        <div className="mt-6">

            <label className="block text-sm text-white/70 mb-3">
                Number of Couples
            </label>

            <div className="
                flex items-center justify-between
                bg-zinc-900
                border border-white/10
                rounded-lg
                px-4 py-2
            ">

                <span className="text-white/50 text-sm">
                    Couples
                </span>

                <div className="flex items-center gap-4">

                    {/* Minus */}
                    <button
                        type="button"
                        onClick={() => {
                            if (couples > 1) {
                                setCouples(couples - 1);
                            }
                        }}
                        className="
                            w-8 h-8
                            rounded-full
                            border border-white/10
                            text-white/60
                            text-lg
                            flex items-center justify-center
                            hover:border-[#B65C7A]
                            hover:text-[#E07BA8]
                            transition
                        "
                    >
                        −
                    </button>


                    {/* Count */}
                    <span className="text-white min-w-[20px] text-center">
                        {couples}
                    </span>


                    {/* Plus */}
                    <button
                        type="button"
                        onClick={() => setCouples(couples + 1)}
                        className="
                            w-8 h-8
                            rounded-full
                            border border-white/10
                            text-white/60
                            text-lg
                            flex items-center justify-center
                            hover:border-[#B65C7A]
                            hover:text-[#E07BA8]
                            transition
                        "
                    >
                        +
                    </button>

                </div>

            </div>

        </div>


        {/* Price Summary */}
        <div className="
            mt-6
            pt-5
            border-t border-white/10
            space-y-3
        ">

            {/* Event Price */}
            <div className="flex justify-between text-sm">

                <span className="text-white/50">
                    {couples} × ₹{event.price.toLocaleString()}
                </span>

                <span className="text-white/70">
                    ₹{(event.price * couples).toLocaleString()}
                </span>

            </div>


            {/* Service Fee */}
            <div className="flex justify-between text-sm">

                <span className="text-white/50">
                    Service Fee
                </span>

                <span className="text-white/70">
                    ₹99
                </span>

            </div>


            {/* Total */}
            <div className="
                flex justify-between items-center
                pt-4 mt-2
                border-t border-white/10
            ">

                <span className="text-white font-medium">
                    Total Bill
                </span>

                <span className="text-[#E07BA8] text-xl font-medium">
                    ₹{(event.price * couples + 99).toLocaleString()}
                </span>

            </div>

        </div>


        {/* Buttons */}
        <div className="mt-6 space-y-3">

            {/* Book Now */}
            <button
                type="button"
                className="
                    w-full
                    py-3.5
                    rounded-lg
                    bg-[#B65C7A]
                    text-white
                    font-medium
                    tracking-wide
                    hover:bg-[#8F3F5D]
                    transition
                "
            >
                Book Now
            </button>


            {/* Wishlist */}
            <button
                type="button"
                className="
                    w-full
                    py-3
                    rounded-lg
                    border border-[#B65C7A]/50
                    text-[#E07BA8]
                    hover:bg-[#B65C7A]/10
                    transition
                "
            >
                ♡ Add to Wishlist
            </button>

        </div>


        {/* Secure Booking */}
        <div className="
            mt-5
            flex items-center justify-center gap-2
        ">

            <span className="text-[#E07BA8]">
                ✦
            </span>

            <span className="text-xs text-white/40 tracking-wide">
                Secure & Protected Booking
            </span>

        </div>


        {/* Cancellation */}
        <div className="
            mt-4
            pt-4
            border-t border-white/10
            text-center
        ">

            <p className="text-xs text-white/40 leading-5">
                Free cancellation up to{" "}

                <span className="text-white/70">
                    48 hours
                </span>{" "}

                before the event.
            </p>

        </div>

    </div>

</div>


                     </div>
                    

                </div>
            
            </section>
           


            
        </>
    )
}