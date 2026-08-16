import { Navigate, useParams } from "react-router-dom"
import {Events} from './explore_events'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {FiClock, FiMapPin, FiUsers} from 'react-icons/fi'

export default function View_details(){
    const{id}=useParams()
    const isLoggedIn=localStorage.getItem('isLoggedIn')
    if(!isLoggedIn){
        return <Navigate to='/login' replace />
    }
    const event= Events.find((item) => item.id===Number(id))
    console.log(id);
   
    
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


            
        </>
    )
}