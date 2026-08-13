import myimg from '../image/explore.png'

import workshop1 from '../image/workshop1.png'
import workshop2 from '../image/workshop2.png'
import workshop3 from '../image/workshop3.png'

import musicEvent1 from '../image/music1.png'
import musicEvent2 from '../image/music2.png'
import musicEvent3 from '../image/music3.png'
import musicEvent4 from '../image/music4.png'

import culture1 from '../image/culture1.png'
import culture2 from '../image/culture2.png'
import culture3 from '../image/culture3.png'

import artEvent1 from '../image/art1.png'
import artEvent2 from '../image/art2.png'
import artEvent3 from '../image/art3.png'

import foodEvent1 from '../image/food1.png'
import foodEvent2 from '../image/food2.png'
import foodEvent3 from '../image/food3.png'

import sports1 from '../image/sports1.png'
import sports2 from '../image/sports2.png'
import sports3 from '../image/sports3.png'

import adventure1 from '../image/ad1.png'
import adventure2 from '../image/ad2.png'
import adventure3 from '../image/ad3.png'

import nightlife1 from '../image/night1.png'
import nightlife2 from '../image/night2.png'

import { IoMdTime } from "react-icons/io";
import { useState } from 'react'


export function Explore_events() {

  const [selectedCategory, setSelectedCategory] = useState("All Events");


  let categories = [
    { name: "All Events" },
    { name: "Music" },
    { name: "Workshop" },
    { name: "Culture" },
    { name: "Food & Drinks" },
    { name: "Sports" },
    { name: "Art" },
    { name: "Nightlife" },
    { name: "Adventure" }
  ]


  const events = [
    {
      id: 1,
      date: "24",
      month: "May",
      day: "SAT",
      category: "Music",
      title: "Midnight Music Festival",
      location: "Bhopal",
      time: "7:00 PM",
      image: musicEvent1
    },
    {
      id: 2,
      date: "27",
      month: "May",
      day: "TUE",
      category: "Workshop",
      title: "Creative Art Workshop",
      location: "Indore",
      time: "11:00 AM",
      image: workshop1
    },
    {
      id: 3,
      date: "30",
      month: "May",
      day: "FRI",
      category: "Culture",
      title: "An Evening of Kathak",
      location: "Bhopal",
      time: "6:30 PM",
      image: culture1
    },
    {
      id: 4,
      date: "02",
      month: "JUN",
      day: "MON",
      category: "Food & Drinks",
      title: "The Culinary Experience",
      location: "Indore",
      time: "5:00 PM",
      image: foodEvent1
    },
    {
      id: 5,
      date: "05",
      month: "JUN",
      day: "SAT",
      category: "Art",
      title: "Contemporary Art Exhibition",
      location: "Bhopal",
      time: "4:00 PM",
      image: artEvent1
    },
    {
      id: 6,
      date: "08",
      month: "JUN",
      day: "TUE",
      category: "Adventure",
      title: "Weekend Escape",
      location: "Pachmarhi",
      time: "6:00 AM",
      image: adventure1
    },
    {
      id: 7,
      date: "11",
      month: "JUN",
      day: "FRI",
      category: "Music",
      title: "Acoustic Nights",
      location: "Indore",
      time: "8:00 PM",
      image: musicEvent2
    },
    {
      id: 8,
      date: "14",
      month: "JUN",
      day: "MON",
      category: "Sports",
      title: "City Marathon",
      location: "Bhopal",
      time: "6:00 AM",
      image: sports1
    },
    {
      id: 9,
      date: "17",
      month: "JUN",
      day: "FRI",
      category: "Nightlife",
      title: "After Dark Sessions",
      location: "Indore",
      time: "9:00 PM",
      image: nightlife1
    },
    {
      id: 10,
      date: "20",
      month: "JUN",
      day: "MON",
      category: "Workshop",
      title: "Photography Masterclass",
      location: "Bhopal",
      time: "10:00 AM",
      image: workshop2
    },
    {
      id: 11,
      date: "23",
      month: "JUN",
      day: "SAT",
      category: "Culture",
      title: "Stories of India",
      location: "Bhopal",
      time: "6:00 PM",
      image: culture2
    },
    {
      id: 12,
      date: "26",
      month: "JUN",
      day: "MON",
      category: "Art",
      title: "Modern Art Showcase",
      location: "Indore",
      time: "5:30 PM",
      image: artEvent2
    },
    {
      id: 13,
      date: "29",
      month: "JUN",
      day: "WED",
      category: "Music",
      title: "Sunset Live Sessions",
      location: "Bhopal",
      time: "6:30 PM",
      image: musicEvent3
    },
    {
      id: 14,
      date: "02",
      month: "JUL",
      day: "SUN",
      category: "Food & Drinks",
      title: "Taste of the City",
      location: "Indore",
      time: "7:00 PM",
      image: foodEvent2
    },
    {
      id: 15,
      date: "05",
      month: "JUL",
      day: "WED",
      category: "Adventure",
      title: "Into the Wild",
      location: "Pachmarhi",
      time: "5:30 AM",
      image: adventure2
    },
    {
      id: 16,
      date: "08",
      month: "JUL",
      day: "SAT",
      category: "Sports",
      title: "Urban Cycling Tour",
      location: "Bhopal",
      time: "7:00 AM",
      image: sports2
    },
    {
      id: 17,
      date: "11",
      month: "JUL",
      day: "FRI",
      category: "Nightlife",
      title: "The Midnight Social",
      location: "Indore",
      time: "9:30 PM",
      image: nightlife2
    },
    {
      id: 18,
      date: "14",
      month: "JUL",
      day: "MON",
      category: "Workshop",
      title: "Creative Writing Circle",
      location: "Bhopal",
      time: "4:00 PM",
      image: workshop3
    },
    {
      id: 19,
      date: "17",
      month: "JUL",
      day: "FRI",
      category: "Culture",
      title: "Classical Evening",
      location: "Bhopal",
      time: "7:00 PM",
      image: culture3
    },
    {
      id: 20,
      date: "20",
      month: "JUL",
      day: "TUE",
      category: "Art",
      title: "The Visual Stories",
      location: "Indore",
      time: "5:00 PM",
      image: artEvent3
    },
    {
      id: 21,
      date: "23",
      month: "JUL",
      day: "FRI",
      category: "Music",
      title: "Indie Music Evening",
      location: "Bhopal",
      time: "8:00 PM",
      image: musicEvent4
    },
    {
      id: 22,
      date: "26",
      month: "JUL",
      day: "MON",
      category: "Food & Drinks",
      title: "Weekend Food Festival",
      location: "Indore",
      time: "12:00 PM",
      image: foodEvent3
    },
    {
      id: 23,
      date: "29",
      month: "JUL",
      day: "FRI",
      category: "Sports",
      title: "Sunrise Yoga Session",
      location: "Bhopal",
      time: "6:30 AM",
      image: sports3
    },
    {
      id: 24,
      date: "01",
      month: "AUG",
      day: "MON",
      category: "Adventure",
      title: "Monsoon Trails",
      location: "Pachmarhi",
      time: "6:00 AM",
      image: adventure3
    }
  ];


  
  const filteredEvents =
    selectedCategory === "All Events"
      ? events
      : events.filter(
          (event) => event.category === selectedCategory
        );


  return (
    <>

      {/* Hero Section */}
      <section className='relative h-[490px] overflow-hidden pb-9 bg-[#0B030A]'>

        <img
          src={myimg}
          alt="Explore Events"
          className='absolute inset-0 w-full h-full object-cover'
        />

        <div className='relative z-10 py-30 px-20'>

          <div className='w-full'>

            <h1 className='font-serif text-8xl md:text-7xl text-[#FAF8F6] leading-tight'>
              Explore

              <span className='block text-[#dc2276] italic'>
                Experiences
              </span>
            </h1>

            <div className="flex items-center gap-3 my-2 max-w-xs">

              <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#db2777]"></div>

              <span className="text-[#db2777] text-xs">
                ✦
              </span>

              <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#db2777]"></div>

            </div>

          </div>


          <p className='text-white/60 pl-15 pt-1 tracking-wider scale-x-110 text-base'>
            Find something worth remembering.
          </p>


          <div className="mt-7 flex w-full max-w-lg border border-white/20 bg-black/30">

            <input
              type="text"
              placeholder="Search events, artists, places..."
              className="flex-1 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-zinc-500"
            />

            <button className="px-6 bg-[#db2777] text-4xl text-black">
              →
            </button>

          </div>

        </div>

      </section>


      {/* Category Section */}

      <div className='bg-zinc-950 pl-20 pt-3 flex flex-wrap justify-between items-center pr-15 pb-5'>

        {categories.map((e, index) => (

          <p
            key={index}
            onClick={() => setSelectedCategory(e.name)}
            className={`cursor-pointer transition duration-300 text-sm md:text-base
              ${
                selectedCategory === e.name
                  ? "text-[#E07BA8]"
                  : "text-zinc-400 hover:text-[#E07BA8]"
              }
            `}
          >
            {e.name}
          </p>

        ))}

        <div className='w-full mt-3 border-b border-white/50'></div>

      </div>


      {/* Events Section */}

      <section className="bg-[#09090B] text-white px-6 md:px-10 lg:px-16 py-16">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

            <div>

              <h2 className="text-3xl md:text-4xl font-serif mt-2">
                {selectedCategory === "All Events"
                  ? "24 Experiences"
                  : `${filteredEvents.length} Experiences`}
              </h2>

            </div>

          </div>


          <div>

            {filteredEvents.map((event) => (

              <div
                key={event.id}
                className="
                  group
                  border-t border-white/10
                  py-8
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#E07BA8]/50
                "
              >

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">


                  {/* Date */}

                  <div className="md:col-span-2 relative border-r border-white/20 pr-6">

                    <p className="text-[#E07BA8] text-center text-5xl">
                      {event.date}
                    </p>

                    <p className="text-white text-center text-sm pt-2">
                      {event.month}
                    </p>

                    <p className="text-[#E07BA8] text-center pt-2 text-sm">
                      {event.day}
                    </p>

                  </div>


                  {/* Event Content */}

                  <div className="md:col-span-6 pl-16">

                    <p className="text-[#E07BA8] text-lg mb-2">
                      {event.category}
                    </p>

                    <h3 className="font-serif text-2xl text-[#FAF8F6] group-hover:text-[#E07BA8] transition">
                      {event.title}
                    </h3>

                    <div className="mt-3 text-sm text-zinc-500">

                      <span>
                        📍 {event.location}
                      </span>

                      <span className='flex items-center gap-2 mt-3'>
                        <IoMdTime className='text-[#E07BA8]' />
                        {event.time}
                      </span>

                    </div>

                    <p className="text-sm text-zinc-400 mt-4 group-hover:text-[#FAF8F6] transition">
                      View Details →
                    </p>

                  </div>


                  {/* Event Image */}

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
  )
}