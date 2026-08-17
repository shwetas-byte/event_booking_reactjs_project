import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom"
import {Events} from './explore_events'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {FiClock, FiMapPin, FiUsers} from 'react-icons/fi'
import { GiLargeDress } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";




export default function View_details(){
    const{id}=useParams()
    const isLoggedIn=localStorage.getItem('isLoggedIn')
    if(!isLoggedIn){
        return <Navigate to='/login' replace />
    }
    const event= Events.find((item) => item.id===Number(id))
    console.log(id);

    const MONTHS_SHORT = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
const MONTHS_FULL = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const firstAvailable = event.dates?.[0];
const initialMonthIndex = firstAvailable
  ? MONTHS_SHORT.indexOf(firstAvailable.month.substring(0, 3).toUpperCase())
  : 0;

const [calendarMonth, setCalendarMonth] = useState(
  new Date(2026, initialMonthIndex, 1)
);

const navigate = useNavigate();


let [selectedDate, setSelectedDate] = useState(null);
let [persons, setPersons] = useState(1);

const pricePerPerson = event.price;
const serviceFee = 500;
const totalAmount = pricePerPerson * persons + serviceFee;

const [isWishlisted, setIsWishlisted] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    return saved.some((item) => item.id === event.id);
});

const toggleWishlist = () => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isWishlisted) {
        const updated = saved.filter((item) => item.id !== event.id);
        localStorage.setItem("wishlist", JSON.stringify(updated));
        setIsWishlisted(false);
    } else {
        const updated = [...saved, event];
        localStorage.setItem("wishlist", JSON.stringify(updated));
        setIsWishlisted(true);
    }
};

   
    
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

                    {/* ================= RIGHT SIDE - BOOK YOUR SPOT ================= */}
<div className="lg:sticky lg:top-24 h-fit">

  <div className="bg-zinc-900/40 border border-[#E07BA8]/20 rounded-xl p-6">

    <h2 className="text-white font-serif text-2xl flex items-center gap-2">
      Book Your Spot
      <span className="text-[#E07BA8] text-lg">✦</span>
    </h2>

    {/* Price */}
    <p className="text-white/40 text-sm mt-5">Price Per Person</p>
    <p className="text-[#E07BA8] text-3xl font-serif mt-1">
      ₹ {event.price.toLocaleString("en-IN")}
    </p>

    {/* ================= CALENDAR ================= */}
    <p className="text-white/40 text-sm mt-6 mb-3">Select Date</p>

    <div className="border border-white/10 rounded-lg p-4">

      <div className="flex items-center justify-between mb-4">

        <button
          onClick={() =>
            setCalendarMonth(
              new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1)
            )
          }
          className="w-7 h-7 flex items-center justify-center text-zinc-400 hover:text-[#E07BA8] transition"
        >
          ←
        </button>

        <p className="text-white font-serif text-base">
          {MONTHS_FULL[calendarMonth.getMonth()]} {calendarMonth.getFullYear()}
        </p>

        <button
          onClick={() =>
            setCalendarMonth(
              new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1)
            )
          }
          className="w-7 h-7 flex items-center justify-center text-zinc-400 hover:text-[#E07BA8] transition"
        >
          →
        </button>

      </div>

      <div className="grid grid-cols-7 mb-1">
        {["SU", "MO", "TU", "WE", "TH", "FR", "SA"].map((d) => (
          <div key={d} className="text-center text-[11px] text-zinc-500 py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1">

        {Array.from({
          length: new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), 1).getDay()
        }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {Array.from({
          length: new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 0).getDate()
        }).map((_, i) => {

          const day = i + 1;
          const monthShort = MONTHS_SHORT[calendarMonth.getMonth()];
          const year = calendarMonth.getFullYear();

          const matchedDate = event.dates?.find(
            (d) =>
              Number(d.date) === day &&
              d.month.substring(0, 3).toUpperCase() === monthShort &&
              year === 2026
          );

          const isAvailable = Boolean(matchedDate);

          const isSelected =
            selectedDate &&
            Number(selectedDate.date) === day &&
            selectedDate.month === monthShort &&
            year === 2026;

          return (
            <button
              key={day}
              disabled={!isAvailable}
              onClick={() => {
                if (!isAvailable) return;
                setSelectedDate({ date: day, month: monthShort, day: matchedDate.day, year });
              }}
              className={`
                relative h-9 flex items-center justify-center text-sm rounded-full transition
                ${isAvailable
                  ? "text-white hover:bg-[#B65C7A]/20 hover:text-[#E07BA8] cursor-pointer"
                  : "text-zinc-700 cursor-not-allowed"}
                ${isSelected ? "bg-[#B65C7A] text-white" : ""}
              `}
            >
              {day}
              {isAvailable && !isSelected && (
                <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-[#E07BA8]"></span>
              )}
            </button>
          );
        })}

      </div>

    </div>

    {/* ================= PERSONS COUNTER ================= */}
    <p className="text-white/40 text-sm mt-6 mb-3">Select Number of Persons</p>

    <div className="flex items-center gap-4">
      <button
        onClick={() => setPersons((c) => Math.max(1, c - 1))}
        className="w-10 h-10 rounded-full bg-[#B65C7A] text-white text-lg flex items-center justify-center hover:bg-[#a34e6a] transition"
      >
        −
      </button>

      <span className="text-white text-lg w-6 text-center">{persons}</span>

      <button
        onClick={() => setPersons((c) => c + 1)}
        className="w-10 h-10 rounded-full bg-[#B65C7A] text-white text-lg flex items-center justify-center hover:bg-[#a34e6a] transition"
      >
        +
      </button>
    </div>

    {/* ================= PRICE BREAKDOWN ================= */}
    <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-sm">

      <div className="flex justify-between text-white/60">
        <span>Price ({persons} Person{persons > 1 ? "s" : ""})</span>
        <span>₹ {(event.price * persons).toLocaleString("en-IN")}</span>
      </div>

      <div className="flex justify-between text-white/60">
        <span>Service Fee</span>
        <span>₹ {serviceFee}</span>
      </div>

      <div className="flex justify-between text-white text-base pt-2 border-t border-white/10 mt-2">
        <span>Total Amount</span>
        <span className="text-[#E07BA8]">₹ {totalAmount.toLocaleString("en-IN")}</span>
      </div>

    </div>

    {/* ================= BOOK NOW BUTTON ================= */}
    {/* console.log("BEFORE NAVIGATE");
console.log("event =", event);
console.log("selectedDate =", selectedDate); */}
    <button
  disabled={!selectedDate}
  onClick={() => {
    console.log("BEFORE NAVIGATE");
    console.log("event =", event);
    console.log("selectedDate =", selectedDate);
    console.log("persons =", persons);

    if (!selectedDate) return;

    navigate("/booking", {
      state: {
        event,
        selectedDate,
        persons
      }
    });
  }}
  className={`
    w-full mt-6 py-3 rounded-lg font-medium
    flex items-center justify-center gap-2 transition
    ${
      selectedDate
        ? "bg-[#DB5C86] text-white hover:bg-[#c14e76]"
        : "bg-zinc-700 text-zinc-400 cursor-not-allowed"
    }
  `}
>
  Book Now →
</button>

    {/* ================= ADD TO WISHLIST BUTTON ================= */}
<button
  onClick={toggleWishlist}
  className={`
    w-full mt-3 py-3 rounded-lg font-medium flex items-center justify-center gap-2 border transition
    ${isWishlisted
      ? "border-[#E07BA8] text-[#E07BA8] bg-[#E07BA8]/10"
      : "border-white/20 text-white/70 hover:border-[#E07BA8]/50 hover:text-[#E07BA8]"}
  `}
>
  {isWishlisted ? <FaHeart /> : <FaRegHeart />}
  {isWishlisted ? "Added to Wishlist" : "Add to Wishlist"}
</button>

    <p className="text-center text-zinc-500 text-xs mt-3">🔒 Secure Booking</p>

    <div className="flex items-start gap-3 mt-4 bg-zinc-900/60 border border-white/10 rounded-lg p-3">
      <span className="text-[#E07BA8]">🛡️</span>
      <p className="text-xs text-zinc-500 leading-5">
        Free cancellation up to 48 hrs before the event.
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