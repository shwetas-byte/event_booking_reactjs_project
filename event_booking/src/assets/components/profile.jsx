import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiEdit2,
  FiCalendar,
  FiHeart,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";


export default function Profile() {

  // ================= USER DATA =================

  const userdata =
    JSON.parse(localStorage.getItem("userdata")) || {};

  // ================= USER DETAILS =================

  const name = userdata.name || "User";

  const email = userdata.email || "Email not added";

  const phone = userdata.phone || "Not added";

  const location = userdata.location || "Not added";


  // ================= BOOKINGS =================

  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];


  // ================= WISHLIST =================

  const wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];


  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 md:px-12 py-10">

      {/* =====================================================
                          PAGE HEADER
      ===================================================== */}

      <div className="max-w-6xl mx-auto mb-10">

        <p className="text-xs uppercase tracking-[4px] text-[#B65C7A] mb-3">
          Account
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">
          My Profile
        </h1>

        <p className="text-gray-400 mt-3">
          Manage your personal information and account.
        </p>

      </div>


      {/* =====================================================
                          MAIN CONTENT
      ===================================================== */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-7">


        {/* =====================================================
                            LEFT PROFILE CARD
        ===================================================== */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

          <div className="flex flex-col items-center text-center">


            {/* PROFILE ICON */}

            <div className="w-28 h-28 rounded-full bg-[#F8F2F1] border border-[#B65C7A]/40 flex items-center justify-center text-[#B65C7A] text-5xl">

              <FiUser />

            </div>


            {/* USER NAME */}

            <h2 className="text-2xl font-semibold mt-5">
              {name}
            </h2>


            <p className="text-gray-500 mt-1">
              Event Explorer
            </p>


            {/* EDIT PROFILE */}

            <button className="mt-6 px-5 py-2.5 rounded-full border border-[#B65C7A] text-[#B65C7A] flex items-center gap-2 hover:bg-[#B65C7A] hover:text-white transition duration-300">

              <FiEdit2 size={16} />

              Edit Profile

            </button>

          </div>


          {/* =====================================================
                              PROFILE STATS
          ===================================================== */}

          <div className="border-t border-zinc-800 mt-8 pt-7 space-y-5">


            {/* EVENTS BOOKED */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <FiCalendar className="text-[#B65C7A]" />

                <span className="text-gray-400">
                  Events Booked
                </span>

              </div>

              <span className="font-semibold">
                {bookings.length}
              </span>

            </div>


            {/* WISHLIST */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <FiHeart className="text-[#B65C7A]" />

                <span className="text-gray-400">
                  Wishlist
                </span>

              </div>

              <span className="font-semibold">
                {wishlist.length}
              </span>

            </div>


            {/* MEMBER SINCE */}

            <div className="flex items-center justify-between">

              <span className="text-gray-400">
                Member Since
              </span>

              <span className="font-semibold">
                2026
              </span>

            </div>

          </div>

        </div>


        {/* =====================================================
                            RIGHT SECTION
        ===================================================== */}

        <div className="lg:col-span-2 space-y-7">


          {/* =====================================================
                         PERSONAL INFORMATION
          ===================================================== */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">


            {/* HEADING */}

            <div className="flex items-center justify-between mb-8">

              <div>

                <p className="text-xs uppercase tracking-[3px] text-[#B65C7A]">
                  Personal Details
                </p>

                <h2 className="text-2xl font-semibold mt-2">
                  Personal Information
                </h2>

              </div>


              {/* EDIT ICON */}

              <button className="w-10 h-10 rounded-full bg-zinc-800 text-[#B65C7A] flex items-center justify-center hover:bg-[#B65C7A] hover:text-white transition">

                <FiEdit2 size={17} />

              </button>

            </div>


            {/* DETAILS GRID */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">


              {/* ================= NAME ================= */}

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-xl bg-zinc-800 flex items-center justify-center text-[#B65C7A]">

                  <FiUser />

                </div>


                <div>

                  <p className="text-sm text-gray-500">
                    Full Name
                  </p>

                  <p className="font-medium mt-1">
                    {name}
                  </p>

                </div>

              </div>


              {/* ================= EMAIL ================= */}

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-xl bg-zinc-800 flex items-center justify-center text-[#B65C7A]">

                  <FiMail />

                </div>


                <div>

                  <p className="text-sm text-gray-500">
                    Email Address
                  </p>

                  <p className="font-medium mt-1 break-all">
                    {email}
                  </p>

                </div>

              </div>


              {/* ================= PHONE ================= */}

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-xl bg-zinc-800 flex items-center justify-center text-[#B65C7A]">

                  <FiPhone />

                </div>


                <div>

                  <p className="text-sm text-gray-500">
                    Phone Number
                  </p>

                  <p className="font-medium mt-1">
                    {phone}
                  </p>

                </div>

              </div>


              {/* ================= LOCATION ================= */}

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-xl bg-zinc-800 flex items-center justify-center text-[#B65C7A]">

                  <FiMapPin />

                </div>


                <div>

                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <p className="font-medium mt-1">
                    {location}
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
                              ACTIVITY
          ===================================================== */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">


            <p className="text-xs uppercase tracking-[3px] text-[#B65C7A]">
              Your Activity
            </p>


            <h2 className="text-2xl font-semibold mt-2 mb-6">
              Évora Overview
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


              {/* ================= BOOKINGS ================= */}

              <div className="bg-zinc-800/60 rounded-xl p-6 border border-zinc-800">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center text-[#B65C7A]">

                    <FiCalendar size={21} />

                  </div>


                  <div>

                    <p className="text-gray-500 text-sm">
                      Total Bookings
                    </p>

                    <p className="text-2xl font-semibold mt-1">
                      {bookings.length}
                    </p>

                  </div>

                </div>

              </div>


              {/* ================= WISHLIST ================= */}

              <div className="bg-zinc-800/60 rounded-xl p-6 border border-zinc-800">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center text-[#B65C7A]">

                    <FiHeart size={21} />

                  </div>


                  <div>

                    <p className="text-gray-500 text-sm">
                      Wishlist Items
                    </p>

                    <p className="text-2xl font-semibold mt-1">
                      {wishlist.length}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
                            EXPLORE SECTION
          ===================================================== */}

          <div className="bg-[#8F3F5D] text-white rounded-2xl p-8">

            <p className="text-xs text-center uppercase tracking-[3px] mb-2 text-pink-100">
              Discover More
            </p>


            <h2 className="text-2xl text-center font-semibold">
              Ready for your next experience?
            </h2>


            <p className="mt-2 text-center text-white/70">
              Discover events and experiences curated for you.
            </p>


            <button className="mt-6 px-6 py-3 text-center ml-85 bg-white text-[#8F3F5D] rounded-full font-medium hover:bg-[#F8F2F1] transition">

              <NavLink to={'/explore'}>Explore Events</NavLink>

            </button>

          </div>


        </div>

      </div>

    </div>
  );
}