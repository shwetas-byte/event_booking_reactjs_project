import { IoLocationOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



export function About(){
    let core=[
        {
            number:'01',
            title:"Meaningful Experiences",
            description:'We believe in experiences that leave a lasting impact and create real connections.'
        },
        {
            number:'02',
            title:"Curated Quality",
            description:'Quality over quantity. We curated events that are worth your time and presence.'
        },
        {
            number:'03',
            title:"Moments That Matter",
            description:"The best memories aren't bought, they're lived. We celebrate moments that matter."
        }
    ]
    return(
        <>
           <section className="relative h-[480px] pt-10 pb-10 overflow-hidden bg-zinc-950">

                <div className="relative z-10 justify-center items-center py-25 ">
                    <div className="w-full">
                        <h1 className=' text-center  text-lg md:text-2xl text-[#dc2276] leading-tight'>About Evora</h1>
                        <h1 className="tracking-wider font-serif text-center text-5xl leading-tight text-white pt-4 ">More than just an event. <br /> A way to <span className="text-[#dc2276]">experience</span> <br /> something <span className="text-[#dc2276]"> meaningful.</span> </h1>
                        <div className="border-b-2  mx-auto pt-3  border-[#dc2276] w-40 "></div>

                        <p className="text-center text-white/40 pt-3 text-base tracking-wide"> Discover experiences that bring people together <br /> and create moments worth remembering.</p>
                    </div>
                    
                </div>
            
           </section> 

                {/* Misiion */}
           <div className="w-full bg-zinc-950 ">
                <h1 className="text-center text-3xl text-pink-400"> Our Mission</h1>
                <div className="border-b-2  mx-auto pt-3  border-b-pink-400 w-25"></div>

                <div className="grid grid-cols-2 pt-15  pr-15 pl-20">
                    <div>
                        <h1 className="font-serif tracking-wide text-5xl leading-tight text-white ">Connecting <span className="text-[#E07BA8]">People</span>  <br /> Though <br /> <span className="text-[#E07BA8]"> Extraordinary</span>  Events</h1>

                        <p className="text-white/50 pt-6 tracking-wide text-base leading-relaxed">We believe that the right event at the right time can change everything. <br /> Whether it's a concert that moves your soul, a workshop that sparks <br /> your creativity, or a conference that transforms your career, <br /> we're here to help you find those transformative moments.
                        <br /><br />
                        Our platform combines cutting-edge technology with human <br /> curation to  deliver a seamless, trustworthy, and inspiring event discovery experience.</p>
                    </div>
                    <div>
                        <div className="bg-zinc-900/80 border border-bs-zinc-700/50 rounded-2xl p-6">
                             <h1 className="text-[#E07BA8] pl-8 text-5xl font-semibold">10K+</h1>
                             <p className="text-white/50 text-base pt-3 pl-8 leading-tight">Premium Events Hosted</p>
                            <div className="border-b-2  mx-auto pt-5  border-b-zinc-800/50 w-[95%]"></div>

                            <h1 className="text-[#E07BA8] pl-8 pt-5 text-5xl font-semibold">50K+</h1>
                             <p className="text-white/50 text-base pt-3 pl-8 leading-tight">Happy Attendees </p>
                            <div className="border-b-2  mx-auto pt-5  border-b-zinc-800/50 w-[95%]"></div>

                            <h1 className="text-[#E07BA8] pl-8 pt-5 text-5xl font-semibold">500+</h1>
                             <p className="text-white/50 text-base pt-3 pl-8 leading-tight">Partner Venues </p>


                        </div>
                    </div>

                </div>
           </div>

           {/* Cour Values */}
           <div className="bg-zinc-950 w-full pt-20">

            <h1 className="text-center text-3xl text-pink-400"> Our Core Values</h1>
                <div className="border-b-2  mx-auto pt-3  border-b-pink-400 w-45"></div>


                <div  className="grid grid-cols-3 items-center justify-center gap-8 pt-15">
                    {
                        core.map((e)=>(
                            <div className=" text-center px-8 py-4 border-r border-white/10 last:border-r-0 ">
                                <div className=" h-14 w-14 mx-auto border rounded-full border-[#B65C7A] flex items-center justify-center mb-6 ">
                                    <span className="text-[#B65C7A] font-bold">{e.number}</span>
                                </div>

                                <h3 className="font-serif text-xl md:text-2xl mx-auto max-w-[150px] leading-9 text-[#FAF8F6]">{e.title}
                                </h3>

                                <div className="w-8 h-px bg-[#B65C7A] mx-auto my-4"></div>

                                <p className="text-zinc-400 text-sm leading-6 max-w-[220px] mx-auto">
                                    {e.description}
                                </p>

                            </div>

                        ))
                    }
                </div>


           </div>

           {/* Our Story */}
           <div className="bg-zinc-950 w-full pt-15">
                <h1 className="text-center text-3xl text-pink-400">Our Story</h1>
                <div className="border-b-2  mx-auto pt-3  border-b-pink-400 w-25"></div>

                <p className="text-zinc-400 text-center pt-10 text-sm tracking-wider leading-relaxed font-serif">
                    Eventora was founded in 2020 by a group of event enthusiasts who were frustrated with the fragmented <br /> and  overwhelming event discovery experience. We saw people missing out on incredible experiences simply <br />because they didn't know they existed.

                    <br /><br />

                    We set out to build something different—a platform that combines the best of technology and human <br /> curation. Every event on Eventora is carefully vetted to ensure it meets our standards for quality, authenticity, <br /> and value.

                    <br /><br />

                    Today, we're proud to serve thousands of event-goers and work with hundreds of premium venues and <br />organizers. But we're just getting started. Our vision is to become the world's most trusted platform for <br />discovering and attending life-changing events.

                    <br /><br />

                    Whether you're looking for your next concert, workshop, conference, or festival, we're here to help you find <br /> experiences that inspire, connect, and transform.
                </p>

           </div>

           {/* Glance */}
          <section className="bg-zinc-950 text-white py-14 px-6">

        <div className="max-w-5xl mx-auto">


            <h2 className="text-pink-400 text-3xl text-center ">  Évora at a Glance </h2>
                <div className="border-b-2  mx-auto pt-3  border-b-pink-400 w-55"></div>

            <div className="grid grid-cols-3 pt-15">

            <div className="text-center px-6 py-4 border-r border-white/10">
                    
                <h1 className="flex justify-center mb-4" ><IoCalendarOutline className=" text-[#E07BA8] text-4xl" /></h1>
                <h3 className="text-5xl font-serif text-[#FAF8F6]">
                50+
                </h3>

                <p className="text-zinc-500 text-sm mt-2">
                Events
                </p>
            </div>


            
            <div className="text-center px-6 py-4 border-r border-white/10">

                <h1 className="flex justify-center mb-4" ><IoLocationOutline className=" text-[#E07BA8] text-4xl" /></h1>
                
                <h3 className="text-4xl md:text-5xl font-serif text-[#FAF8F6]">
                20+
                </h3>

                <p className="text-zinc-500 text-sm mt-2">
                Cities
                </p>
            </div>


            <div className="text-center px-6 py-4">

                <h1 className="flex justify-center mb-4" ><FaRegStar className=" text-[#E07BA8] text-4xl" /></h1>

                <h3 className="text-4xl md:text-5xl font-serif text-[#FAF8F6]">
                10+
                </h3>

                <p className="text-zinc-500 text-sm mt-2">
                Categories
                </p>
            </div>

            </div>

        </div>

        </section>

        {/* cta */}
        <div className='bg-zinc-950 pb-20 w-full'>
        
                  <div className='relative p-8 max-w-5xl pb-13 mx-auto overflow-hidden rounded-3xl border transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#E07BA8]/70 hover:shadow-[0_12px_35px_rgba(224,123,168,0.15)] border-white/10 bg-[#111114]'>
                    <h1 className='text-6xl text-white text-center leading-tight'> Ready to Discover Your <br /> Next <span className='text-[#E07BA8]'>Experience?</span></h1>
                     <div class="flex items-center justify-center gap-3 my-2 ml-90 w-3xs">
                      <div class=" h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#db2777]"></div>
                      
                      <span class="text-[#db2777] text-xs">✦</span>
                      
                      <div class="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#db2777]"></div>
                    </div>
        
                    <p className='text-white/60  text-center text-lg leading-7 tracking-wider pt-2'> Join thousands of event enthusiasts who trust Eventora to find their next <br /> unforgettable moment.</p>

                    <div className="flex flex-row justify-center items-center gap-4 mt-8">

      <button className="px-6 py-3 bg-[#B65C7A] text-white rounded-md hover:bg-[#8F3F5D] transition duration-300">
        Explore Experiences
      </button>

      <button className="px-6 py-3 border border-white/20 text-[#FAF8F6] rounded-md hover:border-[#B65C7A] hover:text-[#B65C7A] transition duration-300">
        Get in Touch
      </button>

    </div>
                    
                  </div>
                </div>
        </>
    )
}