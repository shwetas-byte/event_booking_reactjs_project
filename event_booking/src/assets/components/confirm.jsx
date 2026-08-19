import { useLocation, useNavigate } from "react-router-dom";
import {
    FiMapPin,
    FiCalendar,
    FiClock,
    FiUsers,
    FiCheck,
    FiHome,
    FiMail
} from "react-icons/fi";
import { useMemo, useEffect } from "react";

export default function Confirma() {

    const location = useLocation();
    const navigate = useNavigate();

    const {
        event,
        selectedDate,
        persons,
        guestInfo
    } = location.state || {};

    const guestCount = Number(persons || 0);
    const price = Number(event?.price || 0);
    const serviceFee = 500;
    const totalAmount = price * guestCount + serviceFee;


    // ================= BOOKING REFERENCE =================

    const bookingRef = useMemo(() => {

        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

        let code = "";

        for (let i = 0; i < 6; i++) {

            code += chars[
                Math.floor(Math.random() * chars.length)
            ];

        }

        return `EVT-${code}`;

    }, []);


    // ================= UNIQUE BOOKING KEY =================

    const bookingKey = useMemo(() => {

        if (!event || !selectedDate || !guestInfo) {
            return null;
        }

        return `${event.id}-${selectedDate.date}-${selectedDate.month}-${selectedDate.year}-${guestCount}-${guestInfo.email}`;

    }, [
        event,
        selectedDate,
        guestCount,
        guestInfo
    ]);


    // ================= SAVE BOOKING =================

    useEffect(() => {

        if (
            !event ||
            !selectedDate ||
            !guestInfo ||
            !bookingKey
        ) {
            return;
        }


        // Existing bookings
        const existingBookings =
            JSON.parse(
                localStorage.getItem("myBookings")
            ) || [];


        // ================= CHECK DUPLICATE =================

        const alreadyExists = existingBookings.some(
            (booking) =>
                booking.bookingKey === bookingKey
        );


        // Agar same booking already save hai
        if (alreadyExists) {
            return;
        }


        // ================= NEW BOOKING =================

        const newBooking = {

            bookingKey: bookingKey,

            bookingRef: bookingRef,

            event: event,

            selectedDate: selectedDate,

            persons: guestCount,

            guestInfo: guestInfo,

            pricePerPerson: price,

            serviceFee: serviceFee,

            totalAmount: totalAmount,

            status: "Confirmed",

            bookedAt: new Date().toISOString()

        };


        // ================= SAVE =================

        localStorage.setItem(
            "myBookings",
            JSON.stringify([
                ...existingBookings,
                newBooking
            ])
        );


    }, [
        bookingKey,
        bookingRef,
        event,
        selectedDate,
        guestInfo,
        guestCount,
        price,
        serviceFee,
        totalAmount
    ]);


    return (

        <div className="min-h-screen bg-zinc-950 text-[#FAF8F6]">

            <div className="max-w-7xl mx-auto px-8 pt-25 pb-24">


                {/* ================= STEPS ================= */}

                <div className="flex items-center justify-center">


                    {/* STEP 1 */}

                    <div className="flex items-center">

                        <div className="
                            w-9 h-9
                            rounded-full
                            bg-[#B65C7A]
                            text-white
                            flex
                            items-center
                            justify-center
                            text-sm
                            font-medium
                        ">
                            <FiCheck className="w-4 h-4" />
                        </div>

                        <span className="ml-3 text-zinc-500">
                            Booking Details
                        </span>

                    </div>


                    <div className="w-24 h-px bg-[#B65C7A]/50 mx-5"></div>


                    {/* STEP 2 */}

                    <div className="flex items-center">

                        <div className="
                            w-9 h-9
                            rounded-full
                            bg-[#B65C7A]
                            text-white
                            flex
                            items-center
                            justify-center
                            text-sm
                            font-medium
                        ">
                            <FiCheck className="w-4 h-4" />
                        </div>

                        <span className="ml-3 text-zinc-500">
                            Review Booking
                        </span>

                    </div>


                    <div className="w-24 h-px bg-[#B65C7A]/50 mx-5"></div>


                    {/* STEP 3 */}

                    <div className="flex items-center">

                        <div className="
                            w-9 h-9
                            rounded-full
                            bg-[#B65C7A]
                            text-white
                            flex
                            items-center
                            justify-center
                            text-sm
                            font-medium
                        ">
                            3
                        </div>

                        <span className="ml-3 text-[#B65C7A] font-medium">
                            Confirmation
                        </span>

                    </div>

                </div>


                {/* ================= HEADING ================= */}

                <div className="mt-16 mb-14 text-center">

                    <div className="
                        mx-auto
                        w-16
                        h-16
                        rounded-full
                        bg-[#B65C7A]/15
                        border
                        border-[#B65C7A]/30
                        flex
                        items-center
                        justify-center
                    ">

                        <FiCheck className="w-7 h-7 text-[#B65C7A]" />

                    </div>


                    <h1 className="
                        mt-6
                        text-5xl
                        font-serif
                        text-[#FAF8F6]
                    ">
                        You're all set
                    </h1>


                    <p className="
                        mt-4
                        text-zinc-400
                        max-w-md
                        mx-auto
                    ">

                        Your spot is booked. A confirmation has been sent to{" "}

                        <span className="text-zinc-300">
                            {guestInfo?.email || "your inbox"}
                        </span>.

                    </p>

                </div>


                {/* ================= TICKET CARD ================= */}

                <div className="max-w-2xl mx-auto">

                    <div className="relative">


                        {/* ================= TOP PORTION ================= */}

                        <div className="
                            bg-zinc-900/60
                            border
                            border-white/10
                            border-b-0
                            rounded-t-2xl
                            p-8
                        ">


                            <div className="
                                flex
                                items-start
                                justify-between
                                gap-6
                            ">

                                <div className="min-w-0">

                                    <span className="
                                        inline-block
                                        text-xs
                                        text-[#B65C7A]
                                        bg-[#B65C7A]/10
                                        border
                                        border-[#B65C7A]/20
                                        rounded-md
                                        px-2.5
                                        py-1
                                    ">
                                        {event?.category || "Event"}
                                    </span>


                                    <h2 className="
                                        mt-3
                                        text-2xl
                                        font-serif
                                        text-[#FAF8F6]
                                        leading-7
                                    ">
                                        {event?.title || "Event"}
                                    </h2>

                                </div>


                                {event?.image && (

                                    <div className="
                                        w-20
                                        h-20
                                        rounded-xl
                                        overflow-hidden
                                        shrink-0
                                    ">

                                        <img
                                            src={event.image}
                                            alt={event?.title || "Event"}
                                            className="w-full h-full object-cover"
                                        />

                                    </div>

                                )}

                            </div>


                            {/* ================= EVENT DETAILS ================= */}

                            <div className="
                                mt-6
                                grid
                                grid-cols-2
                                gap-5
                            ">


                                {/* DATE */}

                                <div className="
                                    flex
                                    items-center
                                    gap-2
                                    text-sm
                                    text-zinc-400
                                ">

                                    <FiCalendar className="
                                        w-4
                                        h-4
                                        text-[#B65C7A]
                                        shrink-0
                                    " />

                                    <span>

                                        {selectedDate?.day
                                            ? `${selectedDate.day}, `
                                            : ""}

                                        {selectedDate?.date || "—"}{" "}

                                        {selectedDate?.month || ""}{" "}

                                        {selectedDate?.year || ""}

                                    </span>

                                </div>


                                {/* TIME */}

                                <div className="
                                    flex
                                    items-center
                                    gap-2
                                    text-sm
                                    text-zinc-400
                                ">

                                    <FiClock className="
                                        w-4
                                        h-4
                                        text-[#B65C7A]
                                        shrink-0
                                    " />

                                    <span>
                                        {event?.time || "Time not available"}
                                    </span>

                                </div>


                                {/* LOCATION */}

                                <div className="
                                    flex
                                    items-center
                                    gap-2
                                    text-sm
                                    text-zinc-400
                                ">

                                    <FiMapPin className="
                                        w-4
                                        h-4
                                        text-[#B65C7A]
                                        shrink-0
                                    " />

                                    <span className="truncate">
                                        {event?.location || "Location not available"}
                                    </span>

                                </div>


                                {/* GUESTS */}

                                <div className="
                                    flex
                                    items-center
                                    gap-2
                                    text-sm
                                    text-zinc-400
                                ">

                                    <FiUsers className="
                                        w-4
                                        h-4
                                        text-[#B65C7A]
                                        shrink-0
                                    " />

                                    <span>

                                        {guestCount}{" "}

                                        {guestCount === 1
                                            ? "Guest"
                                            : "Guests"}

                                    </span>

                                </div>

                            </div>


                            {/* ================= GUEST + PAYMENT ================= */}

                            <div className="
                                mt-7
                                pt-6
                                border-t
                                border-dashed
                                border-white/15
                                grid
                                grid-cols-2
                                gap-5
                                text-sm
                            ">


                                {/* BOOKED FOR */}

                                <div>

                                    <p className="
                                        text-xs
                                        text-zinc-600
                                        uppercase
                                        tracking-wider
                                        mb-1
                                    ">
                                        Booked For
                                    </p>

                                    <p className="text-zinc-200">
                                        {guestInfo?.name || "Guest"}
                                    </p>

                                </div>


                                {/* AMOUNT */}

                                <div>

                                    <p className="
                                        text-xs
                                        text-zinc-600
                                        uppercase
                                        tracking-wider
                                        mb-1
                                    ">
                                        Amount Paid
                                    </p>

                                    <p className="text-zinc-200">
                                        ₹{totalAmount.toLocaleString("en-IN")}
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* ================= PERFORATION ================= */}

                        <div className="relative h-0">

                            <div className="
                                absolute
                                -left-4
                                -top-4
                                w-8
                                h-8
                                rounded-full
                                bg-zinc-950
                            "></div>

                            <div className="
                                absolute
                                -right-4
                                -top-4
                                w-8
                                h-8
                                rounded-full
                                bg-zinc-950
                            "></div>

                            <div className="
                                absolute
                                left-4
                                right-4
                                top-0
                                border-t-2
                                border-dashed
                                border-white/15
                            "></div>

                        </div>


                        {/* ================= BOOKING REFERENCE ================= */}

                        <div className="
                            bg-zinc-900/60
                            border
                            border-white/10
                            border-t-0
                            rounded-b-2xl
                            px-8
                            py-6
                            flex
                            items-center
                            justify-between
                            gap-6
                        ">

                            <div>

                                <p className="
                                    text-xs
                                    text-zinc-600
                                    uppercase
                                    tracking-wider
                                    mb-1
                                ">
                                    Booking Reference
                                </p>

                                <p className="
                                    text-lg
                                    font-mono
                                    tracking-widest
                                    text-[#B65C7A]
                                ">
                                    {bookingRef}
                                </p>

                            </div>


                            <div className="text-right">

                                <p className="
                                    text-xs
                                    text-zinc-600
                                    uppercase
                                    tracking-wider
                                    mb-1
                                ">
                                    Status
                                </p>

                                <span className="
                                    inline-flex
                                    items-center
                                    gap-1.5
                                    text-sm
                                    text-emerald-400
                                ">

                                    <span className="
                                        w-1.5
                                        h-1.5
                                        rounded-full
                                        bg-emerald-400
                                    "></span>

                                    Confirmed

                                </span>

                            </div>

                        </div>

                    </div>


                    {/* ================= ACTIONS ================= */}

                    <div className="
                        mt-8
                        flex
                        flex-col
                        sm:flex-row
                        gap-3
                    ">

                        <button
                            onClick={() => navigate("/")}
                            className="
                                flex-1
                                py-3.5
                                rounded-xl
                                border
                                border-white/10
                                hover:bg-white/5
                                text-[#FAF8F6]
                                font-medium
                                flex
                                items-center
                                justify-center
                                gap-2
                                transition
                            "
                        >

                            <FiHome className="w-4 h-4" />

                            Back to Home

                        </button>

                    </div>


                    {/* ================= FOOTNOTE ================= */}

                    <p className="
                        mt-6
                        flex
                        items-center
                        justify-center
                        gap-1.5
                        text-xs
                        text-zinc-600
                    ">

                        <FiMail className="w-3 h-3" />

                        Keep this reference handy — you'll need it at entry

                    </p>

                </div>

            </div>

        </div>

    );

}