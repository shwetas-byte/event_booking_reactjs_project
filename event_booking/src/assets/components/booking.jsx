import { useLocation, useNavigate } from "react-router-dom";
import { FiMapPin, FiCalendar, FiClock, FiUsers, FiInfo, FiShield, FiArrowRight, FiLock} from "react-icons/fi";
import { useState } from "react";

export default function Booking() {

    const location = useLocation();
    const navigate = useNavigate();

    const { event, selectedDate, persons } = location.state || {};

    console.log("EVENT:", event);
    console.log("SELECTED DATE:", selectedDate);
    console.log("PERSONS:", persons);


    // ================= GUEST INFO =================

    const [guestInfo, setGuestInfo] = useState({
        name: location.state?.guestInfo?.name || "",
        email: location.state?.guestInfo?.email || "",
        phone: location.state?.guestInfo?.phone || "",
        request: location.state?.guestInfo?.request || "",
    });


    // ================= PRICE =================

    const price = Number(event?.price || 0);

    const guestCount = Number(persons || 0);

    const serviceFee = 500;

    const ticketPrice = price * guestCount;

    const subtotal = ticketPrice;

    const totalAmount = subtotal + serviceFee;


    return (
        <>
            {/* ================= BOOKING PAGE ================= */}

            <div className="min-h-screen bg-zinc-950 text-[#FAF8F6]">

                <div className="max-w-7xl mx-auto px-8 pt-25">


                    {/* ================= STEPS ================= */}

                    <div className="flex items-center justify-center">


                        {/* STEP 1 */}

                        <div className="flex items-center">

                            <div className="w-9 h-9 rounded-full bg-[#B65C7A] text-white flex items-center justify-center text-sm font-medium">
                                1
                            </div>

                            <span className="ml-3 text-[#B65C7A] font-medium">
                                Booking Details
                            </span>

                        </div>


                        <div className="w-24 h-px bg-[#B65C7A]/50 mx-5"></div>


                        {/* STEP 2 */}

                        <div className="flex items-center">

                            <div className="w-9 h-9 rounded-full border border-white/20 text-zinc-500 flex items-center justify-center text-sm">
                                2
                            </div>

                            <span className="ml-3 text-zinc-500">
                                Review Booking
                            </span>

                        </div>


                        <div className="w-24 h-px bg-white/10 mx-5"></div>


                        {/* STEP 3 */}

                        <div className="flex items-center">

                            <div className="w-9 h-9 rounded-full border border-white/20 text-zinc-500 flex items-center justify-center text-sm">
                                3
                            </div>

                            <span className="ml-3 text-zinc-500">
                                Confirmation
                            </span>

                        </div>

                    </div>


                    {/* ================= HEADING ================= */}

                    <div className="mt-16 mb-10">

                        <h1 className="text-5xl font-serif text-[#FAF8F6]">
                            Booking Details
                        </h1>

                        <p className="mt-4 text-zinc-400">
                            Please fill in your details to continue your booking.
                        </p>

                    </div>


                    {/* ================= MAIN GRID ================= */}

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">


                        {/* ================================================= */}
                        {/* LEFT SIDE */}
                        {/* ================================================= */}

                        <div className="flex flex-col gap-6">

                            {/* ================= FORM ================= */}

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();

                                    navigate("/review", {
                                        state: {
                                            event,
                                            selectedDate,
                                            persons,
                                            guestInfo
                                        }
                                    });
                                }}
                            >


                                {/* ================= GUEST INFORMATION ================= */}

                                <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-7">


                                    {/* Heading */}

                                    <div className="flex items-center justify-between mb-7">

                                        <div>

                                            <h2 className="text-2xl font-serif text-[#FAF8F6]">
                                                Guest Information
                                            </h2>

                                            <p className="text-sm text-zinc-500 mt-2">
                                                Tell us a little about yourself
                                            </p>

                                        </div>

                                        <span className="text-[#B65C7A] text-xl">
                                            ✦
                                        </span>

                                    </div>


                                    {/* ================= FULL NAME ================= */}

                                    <div className="mb-5">

                                        <label className="block text-sm text-zinc-300 mb-2">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            required
                                            value={guestInfo.name}
                                            onChange={(e) =>
                                                setGuestInfo({
                                                    ...guestInfo,
                                                    name: e.target.value
                                                })
                                            }
                                            placeholder="Enter your full name"
                                            className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-[#FAF8F6] placeholder:text-zinc-600 outline-none focus:border-[#B65C7A] transition"
                                        />

                                    </div>


                                    {/* ================= EMAIL ================= */}

                                    <div className="mb-5">

                                        <label className="block text-sm text-zinc-300 mb-2">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            required
                                            value={guestInfo.email}
                                            onChange={(e) =>
                                                setGuestInfo({
                                                    ...guestInfo,
                                                    email: e.target.value
                                                })
                                            }
                                            placeholder="you@example.com"
                                            className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-[#FAF8F6] placeholder:text-zinc-600 outline-none focus:border-[#B65C7A] transition"
                                        />

                                    </div>


                                    {/* ================= PHONE ================= */}

                                    <div className="mb-5">

                                        <label className="block text-sm text-zinc-300 mb-2">
                                            Phone Number
                                        </label>

                                        <input
                                            type="tel"
                                            required
                                            pattern="[0-9]{10}"
                                            maxLength="10"
                                            value={guestInfo.phone}
                                            onChange={(e) =>
                                                setGuestInfo({
                                                    ...guestInfo,
                                                    phone: e.target.value
                                                })
                                            }
                                            placeholder="Enter 10 digit phone number"
                                            className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-[#FAF8F6] placeholder:text-zinc-600 outline-none focus:border-[#B65C7A] transition"
                                        />

                                    </div>


                                    {/* ================= SPECIAL REQUEST ================= */}

                                    <div>

                                        <label className="block text-sm text-zinc-300 mb-2">

                                            Special Request

                                            <span className="text-zinc-600 ml-2">
                                                (Optional)
                                            </span>

                                        </label>

                                        <textarea
                                            rows="5"
                                            value={guestInfo.request}
                                            onChange={(e) =>
                                                setGuestInfo({
                                                    ...guestInfo,
                                                    request: e.target.value
                                                })
                                            }
                                            placeholder="Anything you'd like us to know?"
                                            className="w-full resize-none bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-[#FAF8F6] placeholder:text-zinc-600 outline-none focus:border-[#B65C7A] transition"
                                        />

                                    </div>


                                    {/* ================= INFO ================= */}

                                    <div className="mt-6 flex gap-3 bg-[#B65C7A]/20 rounded-lg p-4">

                                        <span className="text-[#B65C7A]">
                                            ⓘ
                                        </span>

                                        <p className="text-xs text-zinc-500 leading-5">
                                            Your information will only be used to manage your booking and keep you updated about this event.
                                        </p>

                                    </div>

                                </div>


                                {/* ================= CONTINUE BUTTON ================= */}

                                <button
                                    type="submit"
                                    className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-[#B65C7A] to-[#8F3F5D] hover:opacity-90 text-white font-medium flex items-center justify-center gap-2 transition"
                                >

                                    Continue to Review

                                    <FiArrowRight className="w-4 h-4" />

                                </button>


                                {/* ================= LOCK NOTE ================= */}

                                <p className="flex items-center justify-center gap-1.5 text-xs text-zinc-600 mt-4">

                                    <FiLock className="w-3 h-3" />

                                    You can review all details on the next step

                                </p>

                            </form>

                        </div>


                        {/* ================================================= */}
                        {/* RIGHT : BOOKING SUMMARY */}
                        {/* ================================================= */}

                        <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-7 h-fit">


                            {/* ================= HEADING ================= */}

                            <div>

                                <h2 className="text-2xl font-serif text-[#B65C7A]">
                                    Your Booking Summary
                                </h2>

                            </div>


                            {/* ================= EVENT ================= */}

                            <div className="mt-6 flex gap-4">


                                {/* Event Image */}

                                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">

                                    {event?.image && (

                                        <img
                                            src={event.image}
                                            alt={event?.title || "Event"}
                                            className="w-full h-full object-cover"
                                        />

                                    )}

                                </div>


                                {/* Event Info */}

                                <div className="min-w-0 flex-1">

                                    <h3 className="text-[#FAF8F6] font-serif text-lg leading-6">
                                        {event?.title || "Event"}
                                    </h3>


                                    <span className="inline-block mt-2 text-xs text-[#B65C7A] bg-[#B65C7A]/10 border border-[#B65C7A]/20 rounded-md px-2.5 py-1">

                                        {event?.category || "Event"}

                                    </span>


                                    <div className="mt-3 space-y-1.5">


                                        {/* Location */}

                                        <div className="flex items-center gap-2 text-sm text-zinc-400">

                                            <FiMapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />

                                            <span>
                                                {event?.location || "Location not available"}
                                            </span>

                                        </div>


                                        {/* Date */}

                                        <div className="flex items-center gap-2 text-sm text-zinc-400">

                                            <FiCalendar className="w-3.5 h-3.5 text-zinc-500 shrink-0" />

                                            <span>

                                                {selectedDate?.date || "Date not available"}

                                                {selectedDate?.month &&
                                                    ` ${selectedDate.month}`
                                                }

                                            </span>

                                        </div>


                                        {/* Time */}

                                        <div className="flex items-center gap-2 text-sm text-zinc-400">

                                            <FiClock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />

                                            <span>
                                                {event?.time || "Time not available"}
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================= EVENT DETAILS ================= */}

                            <div className="mt-6 border border-white/10 rounded-xl p-4 space-y-4">


                                {/* DATE */}

                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-2 text-sm text-zinc-400">

                                        <FiCalendar className="w-4 h-4 text-[#B65C7A]" />

                                        <span>
                                            Date
                                        </span>

                                    </div>

                                    <span className="text-sm text-zinc-200">

                                        {selectedDate?.day},{" "}
                                        {selectedDate?.date}{" "}
                                        {selectedDate?.month}{" "}
                                        {selectedDate?.year}

                                    </span>

                                </div>


                                {/* GUESTS */}

                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-2 text-sm text-zinc-400">

                                        <FiUsers className="w-4 h-4 text-[#B65C7A]" />

                                        <span>
                                            Guests
                                        </span>

                                    </div>

                                    <span className="text-sm text-zinc-200">

                                        {guestCount}{" "}

                                        {guestCount === 1
                                            ? "Guest"
                                            : "Guests"
                                        }

                                    </span>

                                </div>

                            </div>


                            {/* ================= PRICE BREAKDOWN ================= */}

                            <div className="mt-7">


                                <h4 className="text-[#B65C7A] font-medium mb-4">
                                    Price Details
                                </h4>


                                <div className="space-y-3">


                                    {/* PRICE PER PERSON */}

                                    <div className="flex justify-between text-sm">

                                        <span className="text-zinc-500">
                                            Ticket Price (Per Person)
                                        </span>

                                        <span className="text-zinc-300">

                                            ₹{price.toLocaleString("en-IN")}

                                        </span>

                                    </div>


                                    {/* NUMBER OF GUESTS */}

                                    <div className="flex justify-between text-sm">

                                        <span className="text-zinc-500">
                                            Number of Guests
                                        </span>

                                        <span className="text-zinc-300">
                                            {guestCount}
                                        </span>

                                    </div>

                                </div>


                                {/* SEPARATOR */}

                                <div className="border-t border-dashed border-white/15 my-4" />


                                <div className="space-y-3">


                                    {/* SUBTOTAL */}

                                    <div className="flex justify-between text-sm">

                                        <span className="text-zinc-500">
                                            Subtotal
                                        </span>

                                        <span className="text-zinc-300">

                                            ₹{subtotal.toLocaleString("en-IN")}

                                        </span>

                                    </div>


                                    {/* SERVICE FEE */}

                                    <div className="flex justify-between text-sm">

                                        <span className="text-zinc-500 flex items-center gap-1.5">

                                            Service Fee

                                            <FiInfo className="w-3.5 h-3.5 text-zinc-600" />

                                        </span>

                                        <span className="text-zinc-300">

                                            ₹{serviceFee.toLocaleString("en-IN")}

                                        </span>

                                    </div>

                                </div>


                                {/* TOTAL */}

                                <div className="border-t border-white/10 mt-5 pt-5 flex justify-between items-center">

                                    <span className="text-[#FAF8F6] font-medium">
                                        Total Amount
                                    </span>

                                    <span className="text-2xl font-semibold text-[#B65C7A]">

                                        ₹{totalAmount.toLocaleString("en-IN")}

                                    </span>

                                </div>

                            </div>


                            {/* ================= TRUST BADGE ================= */}

                            <div className="mt-6 flex items-start gap-3">

                                <FiShield className="w-5 h-5 text-[#B65C7A] shrink-0 mt-0.5" />

                                <p className="text-xs text-zinc-500 leading-5">

                                    No hidden charges.
                                    <br />
                                    100% secure &amp; hassle-free booking.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}