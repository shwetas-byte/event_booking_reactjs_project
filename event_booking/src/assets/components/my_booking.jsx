import { useState } from "react";
import {
    FiCalendar,
    FiClock,
    FiUsers,
    FiArrowRight,
    FiFileText
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function My_bookings() {

    const navigate = useNavigate();

    // ================= GET BOOKINGS =================

    const [bookings] = useState(() => {

        const savedBookings =
            JSON.parse(localStorage.getItem("myBookings")) || [];

        // ================= REMOVE DUPLICATES =================
        // bookingKey same hone par sirf first booking rakhenge

        const uniqueBookings = savedBookings.filter(
            (booking, index, self) =>
                index ===
                self.findIndex(
                    (item) =>
                        item.bookingKey &&
                        item.bookingKey === booking.bookingKey
                )
        );

        // Agar purani bookings me bookingKey nahi hai
        // to unhe bhi display karne denge
        const bookingsWithoutKey = savedBookings.filter(
            (booking) => !booking.bookingKey
        );

        return [...uniqueBookings, ...bookingsWithoutKey];
    });


    const [activeTab, setActiveTab] = useState("Upcoming");


    // ================= FILTER BOOKINGS =================

    const filteredBookings = bookings.filter((booking) => {

        if (activeTab === "Upcoming") {
            return booking.status === "Confirmed";
        }

        if (activeTab === "Completed") {
            return booking.status === "Completed";
        }

        if (activeTab === "Cancelled") {
            return booking.status === "Cancelled";
        }

        return true;
    });


    return (
        <div className="min-h-screen bg-zinc-950 text-[#FAF8F6]">


            {/* ================= HEADER ================= */}

            <section className="max-w-7xl mx-auto px-8 pt-16 pb-10">

                <div className="flex items-end justify-between">

                    <div>

                        <p className="text-[#B65C7A] text-sm tracking-[0.2em] uppercase mb-3">
                            Your Experiences
                        </p>

                        <h1 className="text-5xl font-serif text-[#FAF8F6]">
                            My Bookings
                        </h1>

                        <p className="text-zinc-500 mt-4 max-w-xl leading-6">
                            Keep track of your upcoming experiences, event
                            details, and booking information all in one place.
                        </p>

                    </div>


                    {/* Total bookings */}

                    <div className="hidden md:block text-right">

                        <p className="text-zinc-600 text-xs uppercase tracking-widest">
                            Total Bookings
                        </p>

                        <p className="text-3xl font-serif text-[#B65C7A] mt-1">
                            {bookings.length}
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= DIVIDER ================= */}

            <div className="max-w-7xl mx-auto px-8">

                <div className="border-b border-white/10"></div>

            </div>


            {/* ================= TABS ================= */}

            <section className="max-w-7xl mx-auto px-8 pt-8">

                <div className="flex items-center gap-8">

                    {["Upcoming", "Completed", "Cancelled"].map((tab) => (

                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                relative pb-3 text-sm transition
                                ${
                                    activeTab === tab
                                        ? "text-[#E07BA8]"
                                        : "text-zinc-500 hover:text-zinc-300"
                                }
                            `}
                        >

                            {tab}

                            {activeTab === tab && (

                                <span
                                    className="
                                        absolute
                                        left-0
                                        right-0
                                        bottom-0
                                        h-px
                                        bg-[#B65C7A]
                                    "
                                />

                            )}

                        </button>

                    ))}

                </div>

            </section>


            {/* ================= BOOKINGS ================= */}

            <section className="max-w-7xl mx-auto px-8 py-10">

                {filteredBookings.length > 0 ? (

                    <div className="space-y-6">

                        {filteredBookings.map((booking, index) => (

                            <div
                                key={booking.bookingKey || booking.bookingRef || index}
                                className="
                                    group
                                    bg-zinc-900/50
                                    border
                                    border-white/10
                                    rounded-2xl
                                    overflow-hidden
                                    hover:border-[#B65C7A]/30
                                    transition
                                "
                            >

                                <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr]">


                                    {/* ================= IMAGE ================= */}

                                    <div className="relative h-64 lg:h-full overflow-hidden">

                                        {booking.event?.image ? (

                                            <img
                                                src={booking.event.image}
                                                alt={booking.event?.title}
                                                className="
                                                    w-full
                                                    h-full
                                                    object-cover
                                                    group-hover:scale-105
                                                    transition
                                                    duration-500
                                                "
                                            />

                                        ) : (

                                            <div
                                                className="
                                                    w-full
                                                    h-full
                                                    bg-zinc-800
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                                            >

                                                <FiFileText className="text-zinc-600 text-4xl" />

                                            </div>

                                        )}


                                        {/* Image overlay */}

                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                bg-gradient-to-t
                                                from-black/70
                                                via-transparent
                                                to-transparent
                                            "
                                        />


                                        {/* Category */}

                                        <div className="absolute bottom-5 left-5">

                                            <span
                                                className="
                                                    text-xs
                                                    uppercase
                                                    tracking-widest
                                                    text-[#E07BA8]
                                                "
                                            >
                                                {booking.event?.category || "Event"}
                                            </span>

                                        </div>

                                    </div>


                                    {/* ================= CONTENT ================= */}

                                    <div className="p-7 lg:p-8">


                                        {/* ================= TITLE ================= */}

                                        <div
                                            className="
                                                flex
                                                flex-col
                                                md:flex-row
                                                md:items-start
                                                md:justify-between
                                                gap-4
                                            "
                                        >

                                            <div>

                                                <h2 className="text-2xl font-serif text-[#FAF8F6]">

                                                    {booking.event?.title || "Event"}

                                                </h2>

                                                <p className="text-sm text-zinc-500 mt-2">

                                                    {booking.event?.location ||
                                                        "Location unavailable"}

                                                </p>

                                            </div>


                                            {/* ================= STATUS ================= */}

                                            <span
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-2
                                                    self-start
                                                    px-3
                                                    py-1.5
                                                    rounded-full
                                                    bg-emerald-400/10
                                                    border
                                                    border-emerald-400/20
                                                    text-emerald-400
                                                    text-xs
                                                "
                                            >

                                                <span
                                                    className="
                                                        w-1.5
                                                        h-1.5
                                                        rounded-full
                                                        bg-emerald-400
                                                    "
                                                />

                                                {booking.status || "Confirmed"}

                                            </span>

                                        </div>


                                        {/* ================= EVENT INFO ================= */}

                                        <div
                                            className="
                                                grid
                                                grid-cols-2
                                                md:grid-cols-3
                                                gap-5
                                                mt-7
                                                pt-6
                                                border-t
                                                border-white/10
                                            "
                                        >


                                            {/* DATE */}

                                            <div className="flex items-start gap-3">

                                                <FiCalendar
                                                    className="
                                                        text-[#B65C7A]
                                                        mt-0.5
                                                        shrink-0
                                                    "
                                                />

                                                <div>

                                                    <p
                                                        className="
                                                            text-[11px]
                                                            uppercase
                                                            tracking-wider
                                                            text-zinc-600
                                                        "
                                                    >
                                                        Date
                                                    </p>

                                                    <p className="text-sm text-zinc-300 mt-1">

                                                        {booking.selectedDate?.date}{" "}
                                                        {booking.selectedDate?.month}

                                                    </p>

                                                </div>

                                            </div>


                                            {/* TIME */}

                                            <div className="flex items-start gap-3">

                                                <FiClock
                                                    className="
                                                        text-[#B65C7A]
                                                        mt-0.5
                                                        shrink-0
                                                    "
                                                />

                                                <div>

                                                    <p
                                                        className="
                                                            text-[11px]
                                                            uppercase
                                                            tracking-wider
                                                            text-zinc-600
                                                        "
                                                    >
                                                        Time
                                                    </p>

                                                    <p className="text-sm text-zinc-300 mt-1">

                                                        {booking.event?.time || "—"}

                                                    </p>

                                                </div>

                                            </div>


                                            {/* GUESTS */}

                                            <div className="flex items-start gap-3">

                                                <FiUsers
                                                    className="
                                                        text-[#B65C7A]
                                                        mt-0.5
                                                        shrink-0
                                                    "
                                                />

                                                <div>

                                                    <p
                                                        className="
                                                            text-[11px]
                                                            uppercase
                                                            tracking-wider
                                                            text-zinc-600
                                                        "
                                                    >
                                                        Guests
                                                    </p>

                                                    <p className="text-sm text-zinc-300 mt-1">

                                                        {booking.persons || 1}{" "}

                                                        {Number(booking.persons) === 1
                                                            ? "Guest"
                                                            : "Guests"}

                                                    </p>

                                                </div>

                                            </div>

                                        </div>


                                        {/* ================= BOTTOM ================= */}

                                        <div
                                            className="
                                                mt-7
                                                pt-6
                                                border-t
                                                border-white/10
                                                flex
                                                flex-col
                                                md:flex-row
                                                md:items-center
                                                md:justify-between
                                                gap-5
                                            "
                                        >


                                            {/* BOOKING REFERENCE */}

                                            <div>

                                                <p
                                                    className="
                                                        text-[11px]
                                                        uppercase
                                                        tracking-wider
                                                        text-zinc-600
                                                    "
                                                >
                                                    Booking Reference
                                                </p>

                                                <p
                                                    className="
                                                        text-sm
                                                        font-mono
                                                        tracking-widest
                                                        text-[#B65C7A]
                                                        mt-1
                                                    "
                                                >
                                                    {booking.bookingRef || "—"}
                                                </p>

                                            </div>


                                            {/* PRICE + BUTTON */}

                                            <div className="flex items-center gap-6">

                                                <div className="text-right">

                                                    <p
                                                        className="
                                                            text-[11px]
                                                            uppercase
                                                            tracking-wider
                                                            text-zinc-600
                                                        "
                                                    >
                                                        Total Amount
                                                    </p>

                                                    <p
                                                        className="
                                                            text-lg
                                                            font-serif
                                                            text-[#E07BA8]
                                                            mt-1
                                                        "
                                                    >
                                                        ₹{" "}

                                                        {Number(
                                                            booking.totalAmount || 0
                                                        ).toLocaleString("en-IN")}

                                                    </p>

                                                </div>


                                                {/* VIEW DETAILS */}

                                                <button
                                                    onClick={() =>
                                                        navigate(
                                                            "/booking-details",
                                                            {
                                                                state: {
                                                                    booking
                                                                }
                                                            }
                                                        )
                                                    }
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-2
                                                        px-5
                                                        py-3
                                                        rounded-lg
                                                        border
                                                        border-[#B65C7A]/40
                                                        text-[#E07BA8]
                                                        text-sm
                                                        hover:bg-[#B65C7A]/10
                                                        hover:border-[#B65C7A]
                                                        transition
                                                    "
                                                >

                                                    View Details

                                                    <FiArrowRight className="w-4 h-4" />

                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                ) : (

                    /* ================= EMPTY STATE ================= */

                    <div
                        className="
                            min-h-[400px]
                            flex
                            flex-col
                            items-center
                            justify-center
                            text-center
                            border
                            border-white/10
                            rounded-2xl
                            bg-zinc-900/30
                        "
                    >

                        <div
                            className="
                                w-16
                                h-16
                                rounded-full
                                border
                                border-[#B65C7A]/30
                                bg-[#B65C7A]/10
                                flex
                                items-center
                                justify-center
                            "
                        >

                            <FiCalendar className="text-[#B65C7A] text-2xl" />

                        </div>


                        <h2 className="text-2xl font-serif text-[#FAF8F6] mt-6">

                            No {activeTab.toLowerCase()} bookings

                        </h2>


                        <p className="text-zinc-500 mt-3 max-w-sm leading-6">

                            You haven't booked any experiences yet.
                            Discover something memorable and reserve your spot.

                        </p>


                        <button
                            onClick={() => navigate("/explore")}
                            className="
                                mt-7
                                px-6
                                py-3
                                rounded-lg
                                bg-[#B65C7A]
                                hover:bg-[#8F3F5D]
                                text-white
                                text-sm
                                font-medium
                                transition
                            "
                        >

                            Explore Events →

                        </button>

                    </div>

                )}

            </section>

        </div>
    );
}