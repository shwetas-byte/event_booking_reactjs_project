import { Navigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

export default function Wishlist() {

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        return <Navigate to='/login' replace />;
    }

    const [wishlistItems, setWishlistItems] = useState([]);

    // Component load hote hi localStorage se wishlist read karo
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlistItems(saved);
    }, []);

    // Kisi bhi event ko wishlist se remove karna
    const removeFromWishlist = (id) => {
        const updated = wishlistItems.filter((item) => item.id !== id);
        setWishlistItems(updated);
        localStorage.setItem("wishlist", JSON.stringify(updated));
    };

    return (
        <>
            <section className="bg-[#09090B] text-white px-6 md:px-10 lg:px-16 py-16 min-h-screen">

                <div className="max-w-7xl mx-auto">

                    {/* HEADING */}
                    <div className="mb-10">
                        <p className="text-[#E07BA8] text-sm tracking-widest uppercase">
                            Saved
                        </p>
                        <h2 className="text-3xl md:text-4xl font-serif mt-2">
                            Your Wishlist
                        </h2>
                    </div>

                    {/* ================= EMPTY STATE ================= */}
                    {wishlistItems.length === 0 && (
                        <div className="py-20 text-center border-t border-white/10">
                            <p className="text-zinc-500 text-sm">
                                You haven't added any events to your wishlist yet.
                            </p>

                            <NavLink
                                to="/explore"
                                className="mt-4 inline-block text-sm text-[#E07BA8] hover:text-white transition"
                            >
                                Explore events →
                            </NavLink>
                        </div>
                    )}

                    {/* ================= WISHLIST ITEMS ================= */}
                    <div>
                        {wishlistItems.map((event) => (
                            <div
                                key={event.id}
                                className="group border-t border-white/10 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#E07BA8]/50"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

                                    {/* CATEGORY */}
                                    <div className="md:col-span-2 relative border-r border-white/20 pr-6">
                                        <p className="text-[#E07BA8] text-center text-lg tracking-wide">
                                            {event.category}
                                        </p>
                                    </div>

                                    {/* EVENT CONTENT */}
                                    <div className="md:col-span-6 pl-16">
                                        <h3 className="font-serif text-2xl text-[#FAF8F6] group-hover:text-[#E07BA8] transition">
                                            {event.title}
                                        </h3>

                                        <div className="mt-3 text-sm text-zinc-500">
                                            <span>📍 {event.location}</span>

                                            <span className="flex items-center gap-2 mt-3">
                                                <IoMdTime className="text-[#E07BA8]" />
                                                {event.time}
                                            </span>
                                        </div>

                                        <div className="mt-4 flex items-center gap-6">
                                            <NavLink
                                                to={`/view/${event.id}`}
                                                className="text-sm text-zinc-400 group-hover:text-[#FAF8F6] transition"
                                            >
                                                View Details →
                                            </NavLink>

                                            <button
                                                onClick={() => removeFromWishlist(event.id)}
                                                className="flex items-center gap-2 text-sm text-[#E07BA8] hover:text-red-400 transition"
                                            >
                                                <FaHeart />
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    {/* EVENT IMAGE */}
                                    <div className="md:col-span-4">
                                        <div className="overflow-hidden rounded-xl">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </section>
        </>
    );
}