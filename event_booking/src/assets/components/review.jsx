import { useLocation, useNavigate } from "react-router-dom";
import { FiMapPin, FiCalendar, FiClock, FiUsers, FiInfo, FiShield, FiArrowRight, FiEdit2 } from "react-icons/fi";

export default function Review() {
    const location = useLocation();
    const navigate = useNavigate();

    const { event, selectedDate, persons, guestInfo } = location.state || {};

    // Safe values
    const price = Number(event?.price || 0);
    const guestCount = Number(persons || 0);
    const serviceFee = 500;

    const ticketPrice = price * guestCount;
    const subtotal = ticketPrice;
    const totalAmount = subtotal + serviceFee;

    const handleEdit = () => {
        navigate("/booking", {
            state: { event, selectedDate, persons, guestInfo }
        });
    };

    const handleContinue = () => {
        navigate("/payment", {
            state: { event, selectedDate, persons, guestInfo }
        });
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-[#FAF8F6]">

            <div className="max-w-7xl mx-auto px-8 pt-25">

                {/* ================= STEPS ================= */}

                <div className="flex items-center justify-center">

                    {/* Step 1 - completed */}
                    <div className="flex items-center">
                        <div className="w-9 h-9 rounded-full bg-[#B65C7A] text-white flex items-center justify-center text-sm font-medium">
                            ✓
                        </div>
                        <span className="ml-3 text-zinc-500">
                            Booking Details
                        </span>
                    </div>

                    <div className="w-24 h-px bg-[#B65C7A]/50 mx-5"></div>

                    {/* Step 2 - active */}
                    <div className="flex items-center">
                        <div className="w-9 h-9 rounded-full bg-[#B65C7A] text-white flex items-center justify-center text-sm font-medium">
                            2
                        </div>
                        <span className="ml-3 text-[#B65C7A] font-medium">
                            Review Booking
                        </span>
                    </div>

                    <div className="w-24 h-px bg-white/10 mx-5"></div>

                    {/* Step 3 */}
                    <div className="flex items-center">
                        <div className="w-9 h-9 rounded-full border border-white/20 text-zinc-500 flex items-center justify-center text-sm">
                            3
                        </div>
                        <span className="ml-3 text-zinc-500">
                            Payment
                        </span>
                    </div>

                    <div className="w-24 h-px bg-white/10 mx-5"></div>

                    {/* Step 4 */}
                    <div className="flex items-center">
                        <div className="w-9 h-9 rounded-full border border-white/20 text-zinc-500 flex items-center justify-center text-sm">
                            4
                        </div>
                        <span className="ml-3 text-zinc-500">
                            Confirmation
                        </span>
                    </div>

                </div>


                {/* ================= HEADING ================= */}

                <div className="mt-16 mb-10">
                    <h1 className="text-5xl font-serif text-[#FAF8F6]">
                        Review Your Booking
                    </h1>
                    <p className="mt-4 text-zinc-400">
                        Please confirm your details before proceeding to payment.
                    </p>
                </div>


                {/* ================= MAIN GRID ================= */}

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">


                    {/* ================= LEFT COLUMN ================= */}

                    <div className="flex flex-col gap-6">

                        {/* Guest Information */}
                        <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-7">

                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-serif text-[#B65C7A]">
                                    Guest Information
                                </h2>

                                <button
                                    onClick={handleEdit}
                                    className="flex items-center gap-1.5 text-xs text-[#B65C7A] border border-[#B65C7A]/30 hover:bg-[#B65C7A]/10 rounded-md px-3 py-1.5 transition"
                                >
                                    <FiEdit2 className="w-3 h-3" />
                                    Edit
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-5 text-sm">

                                <div>
                                    <p className="text-xs text-zinc-600 uppercase tracking-wider mb-1">
                                        Full Name
                                    </p>
                                    <p className="text-zinc-200">
                                        {guestInfo?.name || "Not provided"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-zinc-600 uppercase tracking-wider mb-1">
                                        Phone Number
                                    </p>
                                    <p className="text-zinc-200">
                                        {guestInfo?.phone || "Not provided"}
                                    </p>
                                </div>

                                <div className="col-span-2">
                                    <p className="text-xs text-zinc-600 uppercase tracking-wider mb-1">
                                        Email Address
                                    </p>
                                    <p className="text-zinc-200">
                                        {guestInfo?.email || "Not provided"}
                                    </p>
                                </div>

                                {guestInfo?.request && (
                                    <div className="col-span-2">
                                        <p className="text-xs text-zinc-600 uppercase tracking-wider mb-1">
                                            Special Request
                                        </p>
                                        <p className="text-zinc-300 leading-5">
                                            {guestInfo.request}
                                        </p>
                                    </div>
                                )}

                            </div>

                        </div>


                        {/* Event Details */}
                        <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-7">

                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-serif text-[#B65C7A]">
                                    Event Details
                                </h2>

                                <button
                                    onClick={handleEdit}
                                    className="flex items-center gap-1.5 text-xs text-[#B65C7A] border border-[#B65C7A]/30 hover:bg-[#B65C7A]/10 rounded-md px-3 py-1.5 transition"
                                >
                                    <FiEdit2 className="w-3 h-3" />
                                    Edit
                                </button>
                            </div>

                            <div className="flex gap-4">

                                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                                    {event?.image && (
                                        <img
                                            src={event.image}
                                            alt={event?.title || "Event"}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>

                                <div className="min-w-0">
                                    <h3 className="text-[#FAF8F6] font-serif text-lg leading-6">
                                        {event?.title || "Event"}
                                    </h3>

                                    <div className="mt-3 space-y-1.5">

                                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                                            <FiMapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                                            <span>{event?.location || "Location not available"}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                                            <FiCalendar className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                                            <span>
                                                {selectedDate?.date || "Date not available"}
                                                {selectedDate?.month && ` ${selectedDate.month}`}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                                            <FiClock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                                            <span>{event?.time || "Time not available"}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                                            <FiUsers className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                                            <span>{guestCount} {guestCount === 1 ? "Guest" : "Guests"}</span>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ================= RIGHT : PRICE SUMMARY ================= */}

                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-7 h-fit">

                        <h2 className="text-xl font-serif text-[#B65C7A] mb-6">
                            Price Details
                        </h2>

                        <div className="space-y-3">

                            <div className="flex justify-between text-sm">
                                <span className="text-zinc-500">Ticket Price (Per Person)</span>
                                <span className="text-zinc-300">₹{price.toLocaleString("en-IN")}</span>
                            </div>

                            <div className="flex justify-between text-sm">
                                <span className="text-zinc-500">Number of Guests</span>
                                <span className="text-zinc-300">{guestCount}</span>
                            </div>

                        </div>

                        <div className="border-t border-dashed border-white/15 my-4" />

                        <div className="space-y-3">

                            <div className="flex justify-between text-sm">
                                <span className="text-zinc-500">Subtotal</span>
                                <span className="text-zinc-300">₹{subtotal.toLocaleString("en-IN")}</span>
                            </div>

                            <div className="flex justify-between text-sm">
                                <span className="text-zinc-500 flex items-center gap-1.5">
                                    Service Fee
                                    <FiInfo className="w-3.5 h-3.5 text-zinc-600" />
                                </span>
                                <span className="text-zinc-300">₹{serviceFee.toLocaleString("en-IN")}</span>
                            </div>

                        </div>

                        <div className="border-t border-white/10 mt-5 pt-5 flex justify-between items-center">
                            <span className="text-[#FAF8F6] font-medium">Total Amount</span>
                            <span className="text-2xl font-semibold text-[#B65C7A]">
                                ₹{totalAmount.toLocaleString("en-IN")}
                            </span>
                        </div>

                        {/* Continue to Payment */}
                        <button
                            onClick={handleContinue}
                            className="w-full mt-7 py-3.5 rounded-xl bg-gradient-to-r from-[#B65C7A] to-[#8F3F5D] hover:opacity-90 text-white font-medium flex items-center justify-center gap-2 transition"
                        >
                            Continue to Payment
                            <FiArrowRight className="w-4 h-4" />
                        </button>

                        <div className="mt-5 flex items-start gap-3">
                            <FiShield className="w-5 h-5 text-[#B65C7A] shrink-0 mt-0.5" />
                            <p className="text-xs text-zinc-500 leading-5">
                                No hidden charges.<br />
                                100% secure &amp; hassle-free booking.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}